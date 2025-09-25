import { Divider } from '../../../components/divider';

export default function Loveg() {
  return (
    <div className="bg-gradient-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">
            Loveg - Front-End + API + APP Híbrido
          </h1>

          <h2 className="text-2xl font-bold">
            Loveg - Plataforma de Relacionamento para Vegetarianos e Veganos
          </h2>
          <p className="leading-relaxed">
            Loveg, foi desenvolvido como uma plataforma de namoro online
            inovadora, focada exclusivamente em conectar pessoas vegetarianas e
            veganas. O projeto abrange uma API robusta, um frontend web e um
            aplicativo mobile híbrido, visando criar uma comunidade engajada e
            oferecer um ambiente seguro e personalizado para usuários com
            estilos de vida e valores semelhantes.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">Contexto e Objetivo</h2>

          <p className="leading-relaxed">
            O Loveg nasceu da necessidade de um espaço dedicado para indivíduos
            que seguem estilos de vida veganos ou vegetarianos, onde a
            compatibilidade de estilo de vida é um pilar fundamental para o
            relacionamento. A plataforma foi desenvolvida para ser robusta,
            escalável e segura, suportando todas as funcionalidades essenciais
            de um aplicativo de namoro moderno, com um foco especial na
            experiência do usuário e na performance em múltiplas plataformas.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">Arquitetura Geral do Projeto</h2>

          <p className="leading-relaxed">
            O projeto adota uma arquitetura de microsserviços, dividindo as
            responsabilidades em componentes independentes para maior
            escalabilidade, manutenibilidade e resiliência. A plataforma é
            composta por três pilares principais: um Backend (API Principal), um
            Frontend Web e um Frontend Mobile (aplicativo híbrido), além de um
            serviço de Chat em Tempo Real dedicado.
          </p>

          <h3 className="mt-18 text-xl font-bold">
            1. Backend (API Principal)
          </h3>

          <p className="leading-relaxed">
            Desenvolvido com o framework <strong>Laravel 5.x</strong>, o backend
            segue um padrão de arquitetura em camadas (Layered Architecture) e
            utiliza o padrão Repository para desacoplar a lógica de negócios da
            camada de persistência de dados. É o coração da plataforma,
            fornecendo todos os dados e lógica de negócios para os clientes web
            e mobile.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Controllers:</strong> Ponto de entrada para as requisições
              HTTP, orquestrando as operações e retornando respostas
              padronizadas.
            </li>
            <li>
              <strong>Services:</strong> Encapsulam a lógica de negócios
              complexa, garantindo a coesão e reusabilidade do código.
            </li>
            <li>
              <strong>Repositories:</strong> Abstraem a interação com o banco de
              dados (MySQL), facilitando a troca de ORM ou de banco de dados no
              futuro caso necessário.
            </li>
            <li>
              <strong>Entities:</strong> Representam os modelos de dados do
              sistema, mapeando as tabelas do banco de dados.
            </li>
            <li>
              <strong>Transformers (League/Fractal):</strong> Essenciais para a
              construção de uma API RESTful consistente, transformam os dados
              dos modelos em uma estrutura otimizada para o consumo do frontend,
              garantindo flexibilidade e controle sobre a saída de dados.
            </li>
          </ul>

          <h3 className="mt-18 text-xl font-bold">2. Frontend Web</h3>

          <p className="leading-relaxed">
            O frontend web é construído com <strong>AngularJS 1.x</strong>, uma
            escolha robusta para Single Page Applications (SPAs) da época. Ele
            interage exclusivamente com a API do Laravel para todas as operações
            de dados. O processo de build e otimização de assets (CSS,
            JavaScript, imagens) é gerenciado pelo <strong>Gulp</strong>,
            garantindo um carregamento rápido e eficiente da aplicação.
          </p>

          <h3 className="mt-18 text-xl font-bold">
            3. Frontend Mobile (Aplicativo Híbrido)
          </h3>

          <p className="leading-relaxed">
            O aplicativo móvel é um <strong>aplicativo híbrido</strong>
            desenvolvido com <strong>Ionic v1.x</strong> e{' '}
            <strong>AngularJS (Angular 1.x)</strong>, empacotado via{' '}
            <strong>Apache Cordova</strong>. Esta abordagem permitiu o
            desenvolvimento multiplataforma (Android e iOS) a partir de uma
            única base de código web, acessando funcionalidades nativas do
            dispositivo quando necessário.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Ionic v1:</strong> Utilizado para a estruturação da
              interface de usuário (UI) e para fornecer componentes visuais
              otimizados para dispositivos móveis.
            </li>
            <li>
              <strong>AngularJS (Angular 1):</strong> Gerencia toda a lógica do
              lado do cliente, incluindo controllers, services, factories e
              directives.
            </li>
            <li>
              <strong>Apache Cordova:</strong> Empacota a aplicação web em um
              invólucro nativo, permitindo a distribuição em lojas de
              aplicativos e o acesso a APIs nativas do dispositivo.
            </li>
            <li>
              <strong>Sass:</strong> Utilizado para estilização, permitindo uma
              organização robusta do CSS.
            </li>
          </ul>

          <h3 className="mt-18 text-xl font-bold">
            4. Chat em Tempo Real (Serviço Independente)
          </h3>

          <p className="leading-relaxed">
            Para proporcionar uma experiência de chat fluida e em tempo real,
            foi implementado um serviço de chat independente, construído com{' '}
            <strong>Node.js</strong> e <strong>Socket.io</strong>. Este serviço
            é desacoplado da API principal, permitindo escalabilidade horizontal
            e otimização para lidar com um grande volume de conexões
            simultâneas. O <strong>Redis</strong> é utilizado como pub/sub
            garantindo a entrega eficiente de mensagens.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">Tecnologias Chave</h2>

          <h3 className="mt-18 text-xl font-bold">Backend (API Principal)</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Linguagem:</strong> PHP 7.x
            </li>
            <li>
              <strong>Framework:</strong> Laravel 5.x
            </li>
            <li>
              <strong>Banco de Dados:</strong> MySQL
            </li>
            <li>
              <strong>Cache/Mensageria:</strong> Redis
            </li>
            <li>
              <strong>Autenticação:</strong> OAuth2 (
              <code>oauth2-server-laravel</code>)
            </li>
            <li>
              <strong>API Transformation:</strong> League/Fractal
            </li>
            <li>
              <strong>Filas:</strong> Pheanstalk (IronMQ)
            </li>
            <li>
              <strong>Notificações Push:</strong>{' '}
              <code>laravel-push-notification</code>
            </li>
            <li>
              <strong>Armazenamento de Arquivos:</strong> AWS S3
            </li>
            <li>
              <strong>Processamento de Imagens:</strong> Intervention/Image
            </li>
            <li>
              <strong>WebSockets:</strong> Socket.io (server)
            </li>
          </ul>

          <h3 className="mt-18 text-xl font-bold">Frontend Web</h3>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Framework JavaScript:</strong> AngularJS 1.x
            </li>
            <li>
              <strong>Comunicação em Tempo Real:</strong> Socket.io (client)
            </li>
            <li>
              <strong>Gerenciamento de Pacotes:</strong> Bower
            </li>
            <li>
              <strong>Automação de Tarefas:</strong> Gulp
            </li>
          </ul>

          <h3 className="mt-18 text-xl font-bold">
            Frontend Mobile (Aplicativo Híbrido)
          </h3>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Framework Híbrido:</strong> Ionic v1
            </li>
            <li>
              <strong>Framework JavaScript:</strong> AngularJS 1.x
            </li>
            <li>
              <strong>Empacotamento Nativo:</strong> Apache Cordova
            </li>
            <li>
              <strong>Estilização:</strong> Sass
            </li>
            <li>
              <strong>Comunicação em Tempo Real:</strong> Socket.io (client)
            </li>
            <li>
              <strong>Gerenciamento de Pacotes:</strong> Bower
            </li>
            <li>
              <strong>Automação de Tarefas:</strong> Gulp
            </li>
          </ul>

          <h3 className="mt-18 text-xl font-bold">Servidor de Chat</h3>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Linguagem/Runtime:</strong> Node.js
            </li>
            <li>
              <strong>Framework Web:</strong> Express
            </li>
            <li>
              <strong>WebSockets:</strong> Socket.io (server)
            </li>
            <li>
              <strong>Banco de Dados/Cache:</strong> Redis
            </li>
          </ul>

          <Divider margin />

          <h2 className="text-2xl font-bold">Funcionalidades Implementadas</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Autenticação e Autorização:</strong> Sistema completo de
              registro, login (incluindo via Facebook), redefinição de senha e
              controle de acesso baseado em OAuth2, disponível tanto na web
              quanto no mobile.
            </li>
            <li>
              <strong>Gestão de Perfil de Usuário:</strong> Criação e edição
              detalhada de perfis, incluindo informações pessoais, preferências,
              fotos (com upload e otimização via AWS S3), acessível em ambas as
              plataformas.
            </li>
            <li>
              <strong>Mecanismo de Busca Avançada:</strong> Filtros complexos
              para encontrar usuários com base em diversas características
              (idade, localização, estilo de vida, etc.), otimizando a
              experiência de match na web e no mobile.
            </li>
            <li>
              <strong>Sistema de Match e Curtidas:</strong> Lógica para "curtir"
              e "rejeitar" perfis, com notificação em tempo real para "matches"
              mútuos, funcionando de forma síncrona entre web e mobile.
            </li>
            <li>
              <strong>Chat em Tempo Real:</strong> Comunicação instantânea entre
              usuários que deram "match", com notificações de novas mensagens,
              proporcionando uma experiência unificada entre web e mobile.
            </li>
            <li>
              <strong>Notificações em Tempo Real:</strong> Alertas para novas
              curtidas, matches, mensagens e visitas ao perfil, mantendo o
              usuário engajado em todas as plataformas.
            </li>
            <li>
              <strong>Administração e Moderação:</strong> Ferramentas para
              administradores gerenciarem usuários, denúncias e conteúdo,
              garantindo um ambiente seguro.
            </li>
            <li>
              <strong>Exportação de Dados:</strong> Funcionalidade para exportar
              dados para fins de relatórios e estatísticas.
            </li>
          </ul>

          <Divider margin />

          <h2 className="text-2xl font-bold">
            Diferenciais Técnicos e Desafios Superados
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Escalabilidade Multiplataforma:</strong> A arquitetura de
              microsserviços e o uso de tecnologias como Redis, AWS S3 e um
              servidor de chat Node.js/Socket.io foram cruciais para garantir
              que a plataforma pudesse escalar para um grande número de usuários
              e conexões simultâneas, tanto na web quanto no mobile.
            </li>
            <li>
              <strong>Performance Otimizada:</strong> Otimização de queries de
              banco de dados, uso de cache com Redis, processamento assíncrono
              de tarefas via filas (IronMQ) e otimização de imagens contribuíram
              para uma experiência de usuário rápida e responsiva em todas as
              interfaces.
            </li>
            <li>
              <strong>Segurança Abrangente:</strong> Implementação de OAuth2
              para autenticação, uso de reCAPTCHA e um sistema robusto de
              denúncias e moderação para proteger os dados dos usuários e a
              integridade da plataforma em todos os pontos de acesso.
            </li>
            <li>
              <strong>Experiência em Tempo Real Unificada:</strong> O
              desenvolvimento de um serviço de chat dedicado com Node.js e
              Socket.io, integrado com o backend PHP via Redis, demonstrou a
              capacidade de construir funcionalidades complexas em tempo real
              que funcionam perfeitamente entre a web e o aplicativo híbrido.
            </li>
            <li>
              <strong>API Design Consistente:</strong> A utilização de
              League/Fractal para transformar as respostas da API garantiu um
              design de API limpo, consistente e fácil de consumir por ambos os
              frontends (web e mobile).
            </li>
            <li>
              <strong>Manutenibilidade e Reusabilidade:</strong> A adoção de
              padrões de projeto (Repository, Services) e a modularização do
              código, juntamente com a estratégia de aplicativo híbrido para o
              mobile, contribuíram para um codebase mais organizado, fácil de
              manter, estender e reutilizar componentes entre as plataformas.
            </li>
            <li>
              <strong>Desenvolvimento Híbrido Eficiente:</strong> A escolha do
              Ionic v1 e AngularJS com Cordova permitiu um desenvolvimento ágil
              e a entrega de um aplicativo móvel funcional para múltiplas
              plataformas a partir de uma única base de código web, otimizando
              recursos e tempo de desenvolvimento.
            </li>
          </ul>

          <Divider margin />

          <h2 className="text-2xl font-bold">Fim (ou não) do projeto</h2>

          <p>
            O desenvolvimento da plataforma Loveg foi uma jornada emocionante e
            desafiadora, onde a arquitetura de microsserviços e a utilização de
            tecnologias como Redis, AWS S3 e um servidor de chat
            Node.js/Socket.io foram cruciais para garantir que a plataforma
            pudesse escalar para um grande número de usuários e conexões
            simultâneas, tanto na web quanto no mobile.
          </p>

          <p>
            Durante todo o desenvolvimento do projeto eu estive em um movimento
            de aprendizado constante de novas tecnologias e ferramentas para
            melhorar minha capacidade de trabalho e contribuir para o sucesso da
            plataforma. Foi uma experiência emocionante e desafiadora, onde eu
            aprendi e desenvolvi novas habilidades e melhores conhecimentos em
            desenvolvimento de software de qualidade.
          </p>

          <p>
            No meio de 2019 tomei a decisão de tirar o projeto do ar, foi uma
            decisão muito difícil, mas que por outro lado foi também uma decisão
            importante para o meu futuro, pois nesse momento escolhi dar
            prioridade para a minha carreira profissional e à minha vida fora da
            internet, além do fato que o dólar começou a ficar muito caro na
            época e isso acabou causando um aumento no valor dos serviços de
            cloud que eu utilizava para manter o projeto.
          </p>

          <p>
            Como saldo positivo do projeto eu carrego até hoje comigo todo o
            conhecimento técnico e os feedbacks que recebi de diversas pessoas
            que se conheceram pelo projeto. Algumas tiveram relacionamentos
            breves, outras tiveram relacionamentos mais longos, algumas delas
            estão juntas até hoje (2025) e algumas delas hoje tem filhos juntas
            e formaram uma família.
          </p>
        </div>
      </div>
    </div>
  );
}
