import { Link } from 'react-router-dom';
import { Divider } from '../../components/divider';
import { CASES } from '../../consts';

export default function Store() {
  const HelpFromTeam = () => {
    return (
      <p className="mt-2">
        <em className="text-xs">
          Parte deste processo foi desenvolvido em colaboração com outras
          pessoas da equipe, como desenvolvedores back-end e devops.
        </em>
      </p>
    );
  };

  return (
    <div className="bg-gradient-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">
            Store Portal - Front-End + API
          </h1>

          <h2 className="text-2xl font-bold">Visão Geral do Projeto</h2>

          <p className="leading-relaxed">
            A <strong>Store Portal API</strong> é uma API RESTful desenvolvida
            como o pilar central para o gerenciamento de um complexo ecossistema
            de lojas de um grande e-commerce. Construída com{' '}
            <strong>NestJS</strong> e <strong>TypeScript</strong>, a solução foi
            projetada para ser altamente escalável, modular e resiliente,
            servindo como a fonte da verdade para todos os dados cadastrais e
            operacionais de milhares de lojas.
          </p>

          <p className="leading-relaxed">
            O sistema gerencia uma vasta gama de tipos de vendedores de
            marketplace (sellers), lojas físicas com operações
            <strong>Online-to-Offline (O2O)</strong>, lockers para retirada de
            produtos, centros de distribuição e pontos de cross-docking.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">Desafios Técnicos e Soluções</h2>

          <p className="leading-relaxed">
            O principal desafio foi criar uma plataforma unificada que pudesse
            lidar com uma grande quantidade de dados e regras de negócio de cada
            tipo de loja, garantindo consistência, performance e integração com
            dezenas de outros microsserviços.
          </p>

          <h3 className="mt-18 text-xl font-bold">Arquitetura e Tecnologias</h3>

          <p className="leading-relaxed">
            A arquitetura foi baseada em um design modular e orientado a
            domínios, utilizando tecnologias modernas para garantir
            escalabilidade e manutenibilidade.
          </p>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Framework:</strong> <strong>NestJS</strong>, escolhido por
              sua arquitetura modular, injeção de dependência e suporte nativo a
              TypeScript, o que permitiu um desenvolvimento estruturado e
              fortemente tipado.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Linguagem:</strong> <strong>TypeScript</strong>, para
              garantir a segurança de tipos e facilitar a manutenção de uma
              codebase complexa.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Banco de Dados:</strong> <strong>MongoDB</strong> com{' '}
              <strong>Mongoose</strong>, selecionado pela flexibilidade de seu
              schema, ideal para acomodar os diferentes atributos de cada tipo
              de loja (ex: dados de O2O, informações de frete, regras de
              comissionamento).
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Comunicação síncrona em RESTful API</strong> com{' '}
              <strong>Axios</strong> para integrações com outros serviços
              internos, como APIs de geolocalização, validação de CEP e consulta
              de regiões de atendimento.
            </p>
          </div>

          <div role="alert" className="alert alert-warning">
            <div>
              <p className="leading-relaxed">
                <strong>Comunicação Assíncrona com Apache Kafka:</strong>{' '}
                Utilizado como um barramento de eventos de domínio. Qualquer
                alteração crítica nos dados de uma loja (criação, atualização)
                dispara um evento, permitindo que outros microsserviços
                (sistemas de frete, logística, analytics) reajam de forma
                assíncrona e desacoplada.
              </p>
              <HelpFromTeam />
            </div>
          </div>

          <div role="alert" className="alert alert-warning">
            <div>
              <p className="leading-relaxed">
                <strong>Containerização e Orquestração:</strong> A aplicação foi
                projetada para rodar em <strong>Docker</strong> e ser
                orquestrada por <strong>Kubernetes</strong>, com configurações
                de auto-scaling, health checks e gerenciamento de secrets para
                ambientes de produção.
              </p>
              <HelpFromTeam />
            </div>
          </div>

          <div role="alert" className="alert alert-warning">
            <div>
              <p className="leading-relaxed">
                <strong>Monitoramento:</strong> Integração completa com{' '}
                <strong>DataDog</strong> para APM (Application Performance
                Monitoring), tracing distribuído e logging estruturado,
                fornecendo visibilidade total sobre a saúde e a performance da
                aplicação.
              </p>
              <HelpFromTeam />
            </div>
          </div>

          <h3 className="mt-18 text-xl font-bold">
            Estrutura Modular por Domínio
          </h3>

          <p className="leading-relaxed">
            A API foi dividida em módulos que representam diferentes contextos
            de negócio, como:
          </p>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Store:</strong> O núcleo, responsável pelos dados
              cadastrais básicos de qualquer loja.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Additional Information:</strong> Um módulo flexível para
              armazenar dados complementares, como configurações de frete,
              embalagem e regras de comissionamento.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>O2O (Online to Offline):</strong> Gerencia funcionalidades
              específicas de lojas físicas, como <em>Ship From Store</em> (envio
              a partir da loja) e <em>Pick Up in Store</em> (retirada em loja).
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Capacity:</strong> Controla a capacidade operacional da
              loja, permitindo o bloqueio de horários para expedição ou
              retirada, com as mudanças propagadas via Kafka.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Auth:</strong> Implementa um sistema de autenticação via
              API Keys com diferentes níveis de permissão (roles), protegendo
              endpoints de escrita e garantindo que apenas sistemas autorizados
              possam modificar os dados.
            </p>
          </div>

          <Divider margin />

          <h2 className="text-2xl font-bold">
            Fluxos de Dados e Funcionalidades
          </h2>

          <h3 className="mt-18 text-xl font-bold">
            Criação e Atualização de Lojas
          </h3>

          <p className="leading-relaxed">O fluxo de escrita do sistema:</p>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Requisição e Validação:</strong> O controller recebe a
              requisição, e os <strong>DTOs (Data Transfer Objects)</strong> com{' '}
              <code>class-validator</code> garantem a integridade estrutural dos
              dados.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Sanitização:</strong> Parâmetros de URL são sanitizados
              para prevenir ataques de XSS.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
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
              </ul>
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Persistência:</strong> Os dados são salvos no MongoDB.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Eventos Assíncronos:</strong> Após a confirmação da
              escrita no banco, eventos são disparados para o Kafka e para a
              plataforma de analytics, notificando o restante do ecossistema
              sobre a mudança.
            </p>
          </div>

          <h3 className="mt-18 text-xl font-bold">
            Processamento Assíncrono de Arquivos em Massa
          </h3>

          <p className="leading-relaxed">
            Uma funcionalidade muito utilizada é um endpoint que permite a
            atualização em massa de regras de comissionamento via upload de um
            arquivo CSV.
          </p>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Upload e Resposta Imediata:</strong> A API recebe o
              arquivo, o salva temporariamente e retorna uma resposta de sucesso
              imediata ao cliente, informando que o processamento foi iniciado.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Processamento em Background:</strong> Um processo
              assíncrono (sem <code>await</code>) é disparado para:
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
                  Fazer o upload do relatório para o S3 (serviço de storage).
                </li>
                <li>
                  Enviar um e-mail para o usuário com o link do relatório,
                  notificando-o sobre a conclusão da tarefa.
                </li>
              </ul>
            </p>
          </div>

          <p className="leading-relaxed">
            Este fluxo assíncrono é crucial para lidar com grandes volumes de
            dados sem bloquear a API ou gerar timeouts para o cliente.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">
            Arquitetura do Front-End (Portal)
          </h2>

          <p className="leading-relaxed">
            Complementando a API, o portal de gerenciamento foi desenvolvido com{' '}
            <strong>Next.js</strong>, proporcionando uma experiência de usuário
            moderna, performática e reativa para os administradores e operadores
            do sistema. A arquitetura do front-end foi pensada para consumir de
            forma eficiente a <code>Store Portal API</code>.
          </p>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Framework:</strong> <strong>Next.js</strong> (React),
              escolhido por seus recursos de renderização híbrida (SSR/SSG e
              CSR), otimização de imagens e roteamento baseado em arquivos,
              garantindo uma boa performance.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Gerenciamento de Estado:</strong>{' '}
              <strong>React Query</strong> para gerenciar o estado do servidor.
              Ele simplifica a busca de dados, o cache, a sincronização e a
              atualização de dados da API, lidando de forma mais performática e
              segura com estados de carregamento, erro e sucesso. Para o estado
              global da UI (ex: tema, estado do modal, informações do usuário
              logado), foi utilizado <strong>HookState</strong>.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Componentização:</strong> A interface foi construída com
              base no <strong>MaterialUI</strong>, que é uma biblioteca de
              componentes reutilizáveis (ex: tabelas de dados, formulários,
              modais, inputs), garantindo consistência visual e agilidade no
              desenvolvimento de novas telas.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Formulários:</strong> <strong>React Hook Form</strong>{' '}
              para gerenciamento de formulários complexos, integrado com{' '}
              <strong>Zod</strong> para validação de schema no lado do cliente,
              espelhando as regras de validação da API e fornecendo feedback
              instantâneo ao usuário.
            </p>
          </div>

          <h3 className="mt-18 text-xl font-bold">Funcionalidades do Portal</h3>

          <p className="leading-relaxed">
            O front-end traduz as capacidades da API em uma interface de
            usuário:
          </p>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Dashboard dos Sellers:</strong> Uma tela principal com uma
              tabela de dados paginada e com filtros, permitindo que os usuários
              busquem, visualizem e acessem rapidamente os detalhes de qualquer
              seller.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Páginas de Detalhe do Seller:</strong> Rotas dinâmicas que
              apresentam uma visão 360º do seller, com separação de informações
              básicas, dados de O2O, configurações de frete, etc.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Formulários de CRUD:</strong> Interfaces para criar e
              editar lojas e suas informações associadas, com validações em
              tempo real e feedback sobre o resultado das operações.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Upload de Arquivos:</strong> Um componente de upload para
              a funcionalidade de atualização em massa e feedback imediato ao
              usuário, alinhado ao comportamento assíncrono da API.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Autenticação e Autorização:</strong> O front-end gerencia
              o login do usuário via{' '}
              <Link className="underline" to={CASES.FREIGHT_LOGIN}>
                Freight Login
              </Link>{' '}
              e armazena o token de sessão de forma segura. Com base no perfil
              do usuário, a UI renderiza condicionalmente certas funcionalidades
              ou seções, implementando a autorização no lado do cliente.
            </p>
          </div>

          <Divider margin />

          <h2 className="mt-10 mb-4 text-2xl">Conclusão</h2>

          <p className="leading-relaxed">
            A solução <strong>Store Portal</strong>, composta pela API em{' '}
            <strong>Nest.js</strong> e pelo portal em <strong>Next.js</strong>,
            representa uma plataforma full-stack completa para governança de
            dados em um ecossistema de e-commerce de larga escala.
          </p>

          <p className="leading-relaxed">
            O projeto demonstra a arquitetura de sistemas distribuídos,
            comunicação síncrona/assíncrona e boas práticas de desenvolvimento
            tanto no back-end quanto no front-end, resultando em uma aplicação
            resiliente, escalável e com alta experiência de uso.
          </p>

          <Divider margin />

          <p className="text-sm leading-relaxed text-gray-400">
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
