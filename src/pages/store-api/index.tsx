import { SectionTitle } from '../../components/section-title';

export default function Store() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-neutral-950 to-indigo-950 pt-20">
      <SectionTitle title="Store Portal - Front-End + API" />

      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content space-y-6">
          <h2 className="text-2xl">Visão Geral do Projeto</h2>

          <p>
            A <strong>Store Portal API</strong> é uma robusta API RESTful
            desenvolvida como o pilar central para o gerenciamento de um
            complexo ecossistema de lojas de um grande e-commerce. Construída
            com <strong>NestJS</strong> e <strong>TypeScript</strong>, a solução
            foi projetada para ser altamente escalável, modular e resiliente,
            servindo como a fonte da verdade para todos os dados cadastrais e
            operacionais de milhares de lojas.
          </p>

          <p>
            O sistema gerencia uma vasta gama de tipos de "lojas", incluindo
            vendedores de marketplace (sellers), lojas físicas com operações
            *Online-to-Offline* (O2O), lockers para retirada de produtos,
            centros de distribuição e pontos de cross-docking.
          </p>

          <h2 className="text-2xl">Desafios Técnicos e Soluções</h2>

          <p>
            O principal desafio foi criar uma plataforma unificada que pudesse
            lidar com a heterogeneidade dos dados e regras de negócio de cada
            tipo de loja, garantindo consistência, performance e integração com
            dezenas de outros microsserviços.
          </p>

          <h3 className="text-1xl">Arquitetura e Tecnologias</h3>

          <p>
            A arquitetura foi baseada em um design modular e orientado a
            domínios, utilizando tecnologias modernas para garantir
            escalabilidade e manutenibilidade.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Framework:</strong> <strong>NestJS</strong>, escolhido por
              sua arquitetura modular, injeção de dependência e suporte nativo a
              TypeScript, o que permitiu um desenvolvimento estruturado e
              fortemente tipado.
            </li>
            <li>
              <strong>Linguagem:</strong> <strong>TypeScript</strong>, para
              garantir a segurança de tipos e facilitar a manutenção de uma
              codebase complexa.
            </li>
            <li>
              <strong>Banco de Dados:</strong> <strong>MongoDB</strong> com{' '}
              <strong>Mongoose</strong>, selecionado pela flexibilidade de seu
              schema, ideal para acomodar os diferentes atributos de cada tipo
              de loja (ex: dados de O2O, informações de frete, regras de
              comissionamento).
            </li>
            <li>
              <strong>Comunicação Assíncrona:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Apache Kafka:</strong> Utilizado como um barramento de
                  eventos de domínio. Qualquer alteração crítica nos dados de
                  uma loja (criação, atualização) dispara um evento, permitindo
                  que outros microsserviços (sistemas de frete, logística,
                  analytics) reajam de forma assíncrona e desacoplada.
                </li>
                <li>
                  <strong>Streams de Analytics:</strong> Integração com uma
                  plataforma de dados (semelhante ao Kinesis/PubSub) para enviar
                  um <em>snapshot</em> consolidado do estado da loja após cada
                  mudança, alimentando dashboards e modelos de machine learning.
                </li>
              </ul>
            </li>
            <li>
              <strong>Comunicação Síncrona:</strong>{' '}
              <strong>RESTful API</strong> com <code>axios</code> para
              integrações com outros serviços internos, como APIs de
              geolocalização, validação de CEP e consulta de regiões de
              atendimento.
            </li>
            <li>
              <strong>Containerização e Orquestração:</strong> A aplicação foi
              projetada para rodar em <strong>Docker</strong> e ser orquestrada
              por <strong>Kubernetes</strong>, com configurações de
              auto-scaling, health checks e gerenciamento de secrets para
              ambientes de produção.
            </li>
            <li>
              <strong>Monitoramento:</strong> Integração completa com{' '}
              <strong>DataDog</strong> para APM (Application Performance
              Monitoring), tracing distribuído e logging estruturado, fornecendo
              visibilidade total sobre a saúde e a performance da aplicação.
            </li>
          </ul>

          <h3 className="mt-8 mb-2 text-xl">Estrutura Modular por Domínio</h3>
          <p>
            A API foi dividida em módulos que representam diferentes contextos
            de negócio, como:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>
                <code>store</code>
              </strong>
              : O núcleo, responsável pelos dados cadastrais básicos de qualquer
              loja.
            </li>
            <li>
              <strong>
                <code>additional-information</code>
              </strong>
              : Um módulo flexível para armazenar dados complementares, como
              configurações de frete, embalagem e regras de comissionamento (
              <code>take-rate</code>).
            </li>
            <li>
              <strong>
                <code>o2o</code> (Online to Offline)
              </strong>
              : Gerencia funcionalidades específicas de lojas físicas, como{' '}
              <em>Ship From Store</em> (envio a partir da loja) e{' '}
              <em>Pick Up in Store</em> (retirada em loja).
            </li>
            <li>
              <strong>
                <code>capacity</code>
              </strong>
              : Controla a capacidade operacional da loja, permitindo o bloqueio
              de horários para expedição ou retirada, com as mudanças propagadas
              via Kafka.
            </li>
            <li>
              <strong>
                <code>auth</code>
              </strong>
              : Implementa um sistema de autenticação via API Keys com
              diferentes níveis de permissão (roles), protegendo endpoints de
              escrita e garantindo que apenas sistemas autorizados possam
              modificar os dados.
            </li>
          </ul>

          <h2 className="mt-10 mb-4 text-2xl">
            3. Fluxos de Dados e Funcionalidades Notáveis
          </h2>

          <h3 className="mb-2 text-xl">Criação e Atualização de Lojas</h3>
          <p>O fluxo de escrita demonstra a robustez do sistema:</p>
          <ol className="list-decimal space-y-1 pl-6">
            <li>
              <strong>Requisição e Validação:</strong> O controller recebe a
              requisição, e os DTOs (Data Transfer Objects) com{' '}
              <code>class-validator</code> garantem a integridade estrutural dos
              dados.
            </li>
            <li>
              <strong>Sanitização:</strong> Parâmetros de URL são sanitizados
              para prevenir ataques de XSS.
            </li>
            <li>
              <strong>Regras de Negócio:</strong> O service layer orquestra
              validações complexas, como:
              <ul className="list-disc pl-6">
                <li>
                  Verificar a existência da loja principal antes de adicionar
                  informações secundárias.
                </li>
                <li>
                  Consultar APIs externas para enriquecer os dados (ex: buscar
                  uma região de atendimento a partir de um CEP).
                </li>
                <li>
                  Garantir a consistência condicional (ex: se{' '}
                  <code>canShipFromStore</code> for <code>true</code>, a
                  estratégia de frete se torna obrigatória).
                </li>
              </ul>
            </li>
            <li>
              <strong>Persistência:</strong> Os dados são salvos no MongoDB.
            </li>
            <li>
              <strong>Eventos Assíncronos:</strong> Após a confirmação da
              escrita no banco, eventos são disparados para o Kafka e para a
              plataforma de analytics, notificando o restante do ecossistema
              sobre a mudança.
            </li>
          </ol>

          <h3 className="mt-8 mb-2 text-xl">
            Processamento Assíncrono de Arquivos em Massa
          </h3>
          <p>
            Uma funcionalidade de destaque é um endpoint que permite a
            atualização em massa de regras de comissionamento (
            <code>take-rate</code>) via upload de um arquivo CSV.
          </p>
          <ol className="list-decimal space-y-1 pl-6">
            <li>
              <strong>Upload e Resposta Imediata:</strong> A API recebe o
              arquivo, o salva temporariamente e retorna uma resposta de sucesso
              imediata ao cliente, informando que o processamento foi iniciado.
            </li>
            <li>
              <strong>Processamento em Background:</strong> Um processo
              assíncrono (sem <code>await</code> no controller) é disparado
              para:
              <ul className="list-disc pl-6">
                <li>Ler e parsear o CSV.</li>
                <li>
                  Otimizar as escritas no banco de dados usando operações em
                  lote (<code>bulkWrite</code>).
                </li>
                <li>Disparar eventos Kafka para cada registro alterado.</li>
                <li>
                  Gerar um relatório de processamento (sucessos e falhas).
                </li>
                <li>
                  Fazer o upload do relatório para um serviço de storage (como
                  S3).
                </li>
                <li>
                  Enviar um e-mail para o usuário com o link do relatório,
                  notificando-o sobre a conclusão da tarefa.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            Este fluxo assíncrono é crucial para lidar com grandes volumes de
            dados sem bloquear a API ou gerar timeouts para o cliente.
          </p>

          <h2 className="mt-10 mb-4 text-2xl">
            4. Arquitetura do Front-end (Portal)
          </h2>
          <p>
            Complementando a API, o portal de gerenciamento foi desenvolvido com{' '}
            <strong>Next.js</strong>, proporcionando uma experiência de usuário
            moderna, performática e reativa para os administradores e operadores
            do e-commerce. A arquitetura do front-end foi pensada para consumir
            de forma eficiente a <code>Store Portal API</code>.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Framework:</strong> <strong>Next.js</strong> (React),
              escolhido por seus recursos de renderização híbrida (SSR/SSG e
              CSR), otimização de imagens e roteamento baseado em arquivos,
              garantindo uma boa performance.
            </li>
            <li>
              <strong>Linguagem:</strong> <strong>TypeScript</strong>, para
              manter a consistência com o back-end e garantir a segurança de
              tipos em componentes, props e interações com a API.
            </li>
            <li>
              <strong>Gerenciamento de Estado:</strong>{' '}
              <strong>React Query (TanStack Query)</strong> para gerenciar o
              estado do servidor. Ele simplifica a busca de dados, o cache, a
              sincronização e a atualização de dados da API, lidando de forma
              mais performática e segura com estados de carregamento, erro e
              sucesso. Para o estado global da UI (ex: tema, estado do modal,
              informações do usuário logado), foi utilizado{' '}
              <strong>HookState</strong>.
            </li>
            <li>
              <strong>Componentização:</strong> A interface foi construída com
              base no <strong>MaterialUI</strong>, que é uma biblioteca de
              componentes reutilizáveis (ex: tabelas de dados, formulários,
              modais, inputs), garantindo consistência visual e agilidade no
              desenvolvimento de novas telas.
            </li>
            <li>
              <strong>Formulários:</strong> <strong>React Hook Form</strong>{' '}
              para gerenciamento de formulários complexos, integrado com{' '}
              <strong>Zod</strong> para validação de schema no lado do cliente,
              espelhando as regras de validação da API e fornecendo feedback
              instantâneo ao usuário.
            </li>
          </ul>

          <h3 className="mt-8 mb-2 text-xl">Funcionalidades do Portal</h3>
          <p>
            O front-end traduz as capacidades da API em uma interface de usuário
            intuitiva:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Dashboard de Lojas:</strong> Uma tela principal com uma
              tabela de dados paginada e com filtros, permitindo que os usuários
              busquem, visualizem e acessem rapidamente os detalhes de qualquer
              loja.
            </li>
            <li>
              <strong>Páginas de Detalhe da Loja:</strong> Rotas dinâmicas (ex:{' '}
              <code>/stores/[sellerId]/[sellerStoreId]</code>) que apresentam
              uma visão 360º da loja, com abas para separar informações básicas,
              dados de O2O, configurações de frete, etc.
            </li>
            <li>
              <strong>Formulários de CRUD:</strong> Interfaces para criar e
              editar lojas e suas informações associadas, com validações em
              tempo real e feedback claro sobre o resultado das operações.
            </li>
            <li>
              <strong>Upload de Arquivos:</strong> Um componente de upload para
              a funcionalidade de atualização em massa, com barra de progresso e
              feedback imediato ao usuário, alinhado ao comportamento assíncrono
              da API.
            </li>
            <li>
              <strong>Autenticação e Autorização:</strong> O front-end gerencia
              o login do usuário via Freight-Login e armazena o token de sessão
              de forma segura. Com base no perfil do usuário, a UI renderiza
              condicionalmente certas funcionalidades ou seções, implementando a
              autorização no lado do cliente.
            </li>
          </ul>

          <h2 className="mt-10 mb-4 text-2xl">4. Conclusão</h2>
          <p>
            A solução <strong>Store Portal</strong>, composta pela API em{' '}
            <strong>Nest.js</strong> e pelo portal em <strong>Next.js</strong>,
            representa uma plataforma full-stack completa para governança de
            dados em um ecossistema de e-commerce de larga escala.
          </p>
          <p>
            O projeto demonstra a arquitetura de sistemas distribuídos,
            comunicação síncrona/assíncrona e boas práticas de desenvolvimento
            tanto no back-end quanto no front-end, resultando em uma aplicação
            resiliente, escalável e com alta experiência de uso.
          </p>
          <hr className="my-8" />
          <p className="text-sm text-gray-400">
            <em>
              Este documento é uma representação técnica do projeto para fins de
              portfólio e omite intencionalmente detalhes confidenciais ou
              proprietários.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
