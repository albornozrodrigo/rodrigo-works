Projetos pessoais, side projects e MVPs raramente nascem com orçamento. A realidade da maioria dos desenvolvedores independentes é clara: você tem uma ideia, tem habilidade técnica, mas não tem verba para pagar por cinco serviços ao mesmo tempo. Felizmente, hoje em dia temos acesso a uma quantidade generosa de planos gratuitos espalhados por dezenas de plataformas. E isso pode ser mais do que suficiente para construir algo resiliente.

Este artigo propõe e formaliza um padrão de arquitetura que combina encadeamento de fallbacks com aproveitamento estratégico de free tiers: o **Frugal Cascade**.

## O problema

Quando você depende de um único provedor externo, assume um risco silencioso. Se o serviço cair, sua funcionalidade cai junto. Se o limite gratuito for atingido, sua aplicação para. Em produção com orçamento, a solução é pagar por redundância. Em projetos com orçamento zero, a solução exige uma abordagem diferente.

O Frugal Cascade responde a essa restrição com uma premissa simples: **distribuir responsabilidade por múltiplos provedores gratuitos, em ordem de preferência, com degradação controlada até um estado mínimo aceitável**.

## Definição formal

> **Frugal Cascade** é um padrão de resiliência para arquiteturas com restrição de custo que estrutura o acesso a serviços externos em uma cadeia ordenada de provedores alternativos, onde cada nó representa um fallback acionado apenas na falha do anterior. A cadeia termina em um **last resort**, que é uma ação mínima garantida que preserva a integridade do sistema mesmo na ausência de todos os provedores disponíveis.

## O padrão é composto por três elementos:

- **Cadeia de provedores:** lista ordenada de provedores que oferecem a mesma capacidade funcional, priorizados por confiabilidade, latência ou preferência.
- **Condição de fallback:** critério que dispara a progressão para o próximo nó (timeout, erro HTTP, limite de quota atingido).
- **Last resort:** ação final executada quando todos os provedores falham. Essa ação pode ser um estado degradado, um dado em cache, uma flag para revisão humana ou simplesmente um erro controlado.

## Relação com padrões existentes

O Frugal Cascade não é um padrão completamente novo. Ele é uma especialização pragmática de conceitos já estabelecidos, adaptados para o contexto de restrição orçamentária:

| Padrão base                       | Contribuição ao Frugal Cascade                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| **Fallback Pattern**              | Estrutura central de encadeamento                                                    |
| **Graceful Degradation**          | Filosofia de preservação do estado mínimo                                            |
| **Chain of Responsibility** (GoF) | Modelo de implementação em código                                                    |
| **Circuit Breaker**               | Complemento recomendado para evitar tentativas repetidas em provedores indisponíveis |

A diferença que justifica um nome próprio está na **motivação e no contexto de aplicação**: enquanto os padrões acima são geralmente aplicados para garantir alta disponibilidade em sistemas críticos com múltiplos provedores pagos, o Frugal Cascade tem como premissa central o custo zero, e a redundância é obtida justamente pela diversificação entre planos gratuitos de plataformas distintas.

## Estrutura do padrão

```plaintext
Requisição
    │
    ▼
┌─────────────┐
│  Provedor 1 │ ──── sucesso ──▶ Resposta
└─────────────┘
       │ falha
       ▼
┌─────────────┐
│  Provedor 2 │ ──── sucesso ──▶ Resposta
└─────────────┘
       │ falha
       ▼
┌─────────────┐
│  Provedor N │ ──── sucesso ──▶ Resposta
└─────────────┘
       │ falha
       ▼
┌──────────────┐
│  Last Resort │ ──────────────▶ Estado mínimo garantido
└──────────────┘
```

A progressão ocorre de forma sequencial e sob demanda, o próximo nó só é acionado quando o anterior falha. Isso é diferente de um load balancer, que distribui carga entre provedores ativamente. No Frugal Cascade, a redundância é **passiva e ordenada**.

## Exemplos práticos

### 1. Moderação de conteúdo em upload de imagens

**Objetivo**: garantir que nenhuma imagem passe sem análise, sem pagar por um único serviço.

**Cadeia**:

1. SightEngine (análise primária)
2. PicPurify (fallback secundário)
3. Google Vision API (fallback terciário)
4. **Last resort**: imagem recebe flag `pending_manual_review` e entra em fila de auditoria humana

```typescript
async function moderateImage(imageUrl: string): Promise<ModerationResult> {
  const providers = [
    () => analyzWithSightEngine(imageUrl),
    () => analyzeWithPicPurify(imageUrl),
    () => analyzeWithGoogleVision(imageUrl),
  ];

  for (const provider of providers) {
    try {
      return await provider();
    } catch (error) {
      console.warn('Provider failed, trying next...', error);
    }
  }

  // Last resort: degradação controlada
  await flagForManualReview(imageUrl);
  return { status: 'pending_review', automated: false };
}
```

O last resort aqui é particularmente importante: a falha total dos provedores automatizados não resulta em conteúdo não moderado, resulta em revisão humana. O sistema preserva sua garantia de segurança mesmo sem nenhum serviço disponível.

---

### 2. Armazenamento de arquivos com distribuição aleatória entre free tiers

**Objetivo**: maximizar o uso combinado dos limites gratuitos do Supabase Storage e Firebase Storage.

**Variação do padrão**: neste caso, o primeiro nó não é escolhido por prioridade, mas por **seleção aleatória**. Isso distribui os uploads uniformemente ao longo do tempo, evitando que um único provedor atinja seu limite antes do outro.

```typescript
const storageProviders = [uploadToSupabase, uploadToFirebase];

async function uploadFile(file: File): Promise<string> {
  // Embaralha para distribuição uniforme de carga
  const [primary, fallback] = shuffle(storageProviders);

  try {
    return await primary(file);
  } catch {
    try {
      return await fallback(file);
    } catch {
      throw new Error('All storage providers unavailable');
    }
  }
}
```

**Nota**: este exemplo não tem last resort, um erro é o estado mínimo aceitável quando nenhum provedor de armazenamento está disponível. Nem toda implementação do Frugal Cascade precisa de um last resort funcional; às vezes, falhar de forma explícita e controlada é a decisão correta.

---

### 3. Dados de clima em tempo real

**Objetivo**: garantir disponibilidade de dados meteorológicos sem dependência de um único provedor.

**Cadeia**:

1. WeatherAPI
2. OpenWeatherMap
3. Open-Meteo (open source, sem chave de API, sem limite)

```typescript
async function getCurrentWeather(
  lat: number,
  lon: number,
): Promise<WeatherData> {
  const providers = [
    () => fetchFromWeatherAPI(lat, lon),
    () => fetchFromOpenWeatherMap(lat, lon),
    () => fetchFromOpenMeteo(lat, lon), // fallback confiável e irrestrito
  ];

  for (const provider of providers) {
    try {
      return await provider();
    } catch {
      continue;
    }
  }

  throw new Error('All weather providers unavailable');
}
```

**Observação de design**: o Open-Meteo, por ser open source e não ter limite de requisições, funciona como um âncora de confiabilidade no final da cadeia, um nó quase garantido. Quando disponível, esse tipo de provedor deve sempre ocupar a última posição antes do last resort.

---

### 4. Inferência com LLMs gratuitos via múltiplas plataformas

**Objetivo**: garantir respostas de modelos de linguagem sem custo, com fallback entre OpenRouter e Groq.

**Cadeia**:

_Grupo 1 - OpenRouter (modelos free):_

1. `meta-llama/llama-3.3-70b-instruct:free`
2. `openai/gpt-oss-120b:free`
3. `minimax/minimax-m2.5:free`

_Grupo 2 - Groq (fallback de plataforma, modelos também free):_ 4. `llama-3.3-70b-versatile` 5. `deepseek-r1-distill-llama-70b` 6. `openai/gpt-oss-120b`

```typescript
const LLM_CHAIN = [
  { platform: 'openrouter', model: 'meta-llama/llama-3.3-70b-instruct:free' },
  { platform: 'openrouter', model: 'openai/gpt-oss-120b:free' },
  { platform: 'openrouter', model: 'minimax/minimax-m2.5:free' },
  { platform: 'groq', model: 'llama-3.3-70b-versatile' },
  { platform: 'groq', model: 'deepseek-r1-distill-llama-70b' },
  { platform: 'groq', model: 'openai/gpt-oss-120b' },
];

async function chat(prompt: string): Promise<string> {
  for (const { platform, model } of LLM_CHAIN) {
    try {
      return await callLLM(platform, model, prompt);
    } catch {
      continue;
    }
  }

  throw new Error('All LLM providers exhausted');
}
```

Este exemplo introduz uma variante importante: **a cadeia é organizada em grupos por plataforma**. Isso é relevante porque erros dentro do mesmo grupo podem ter a mesma causa (rate limit da plataforma, autenticação inválida), e a progressão para o próximo grupo representa uma mudança de plataforma, não apenas de modelo.

---

## Quando aplicar o Frugal Cascade

O padrão é adequado quando:

- O projeto opera com orçamento zero ou muito restrito
- A funcionalidade tem **equivalentes funcionais disponíveis gratuitamente** em múltiplos provedores
- A falha total da funcionalidade é inaceitável, mas uma resposta degradada é tolerável
- O volume de uso é compatível com os limites dos planos gratuitos escolhidos

O padrão **não é adequado** quando:

- O sistema é crítico e exige SLA formal: neste caso, provedores pagos com garantias contratuais são necessários
- Há apenas um provedor com a capacidade necessária: o padrão depende de equivalência funcional entre provedores
- Os dados trafegados são sensíveis e cada provedor introduz um novo terceiro com acesso a eles: o custo de privacidade pode superar o benefício de custo

---

## Considerações de implementação

### Circuit Breaker como complemento

Em produção, mesmo em projetos pessoais, vale considerar o uso de um circuit breaker por provedor. Em vez de tentar um provedor que falhou repetidamente, o circuito "abre" temporariamente e o sistema pula diretamente para o próximo nó. Isso evita latência desnecessária em cascata.

```typescript
const breakers = new Map<string, CircuitBreaker>();

function getBreaker(providerId: string): CircuitBreaker {
  if (!breakers.has(providerId)) {
    breakers.set(providerId, new CircuitBreaker({ timeout: 60_000 }));
  }
  return breakers.get(providerId)!;
}
```

### Logging e observabilidade

Registre qual nó da cadeia foi utilizado em cada requisição. Sem isso, é impossível saber se um provedor está falhando sistematicamente ou se a distribuição entre provedores está equilibrada.

### Normalização de resposta

Provedores diferentes retornam formatos diferentes. Uma camada de adaptadores por provedor, que normaliza a saída para um contrato interno único, é fundamental para que a lógica de negócio não precise saber qual provedor respondeu.

---

## Conclusão

O Frugal Cascade não é apenas uma técnica de economia, é uma disciplina de design que força clareza sobre dependências externas, comportamento em falha e graus de degradação aceitáveis. Sistemas construídos com esse padrão são, por natureza, mais resilientes do que sistemas que assumem disponibilidade irrestrita de um único provedor.

A restrição orçamentária, neste caso, produz um efeito colateral positivo: ela obriga o desenvolvedor a pensar em redundância desde o início, algo que projetos com orçamento generoso frequentemente adiam até que seja tarde demais.

---

_Construído com base em experiência prática com projetos pessoais de orçamento zero. Feedbacks e variações do padrão são bem-vindos nos comentários._
