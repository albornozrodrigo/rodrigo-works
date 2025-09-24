import { Divider } from '../../../components/divider';

export default function FreightLogin() {
  return (
    <div className="bg-gradient-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">
            Freight Login - Front-End + API
          </h1>

          <h2 className="text-2xl font-bold">Descrição</h2>

          <p className="leading-relaxed">
            A <strong>Freight Login API</strong> é uma API RESTful para
            gerenciamento de acesso dos usuários de diversas equipes aos
            múltiplos projetos da equipe do Frete. A plataforma centraliza a
            autenticação e o controle de usuários e aplicações, oferecendo um
            sistema de login unificado e facilitando a administração de
            permissões. A API foi projetada para ser flexível e escalável,
            suportando diferentes métodos de autenticação, como credenciais
            locais, LDAP/Active Directory e Atlassian Crowd.
          </p>

          <Divider margin />

          <h2 className="text-2xl font-bold">Arquitetura e Tecnologias</h2>

          <p className="leading-relaxed">
            O projeto foi desenvolvido com <strong>NestJS</strong>, um framework
            Node.js que utiliza <strong>TypeScript</strong> e promove uma
            arquitetura modular e escalável. A estrutura do projeto segue os
            princípios de SOLID e Clean Architecture, com separação de
            responsabilidades entre os módulos.
          </p>

          <h3 className="mt-18 text-xl font-bold">Backend</h3>

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
              schema, ideal para acomodar dados variados e complexos.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Autenticação:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong>JWT (JSON Web Tokens)</strong> para autenticação
                  baseada em token.
                </li>
                <li>
                  <strong>Passport.js</strong> com estratégias para:
                  <ul className="list-disc pl-6">
                    <li>
                      <strong>Local:</strong> Autenticação com usuário e senha.
                    </li>
                    <li>
                      <strong>LDAP:</strong> Integração com servidores
                      LDAP/Active Directory.
                    </li>
                    <li>
                      <strong>Atlassian Crowd:</strong> Integração com o sistema
                      de gerenciamento de identidades da Atlassian.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Documentação da API:</strong> Swagger (OpenAPI) para
              documentação interativa dos endpoints e suas funcionalidades.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Monitoramento:</strong> Integração com Datadog para
              tracing e monitoramento de performance.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>CI/CD:</strong> Pipeline de integração e entrega contínua
              com GitLab CI e conteinerização com Docker.
            </p>
          </div>

          <h3 className="mt-18 text-xl font-bold">Frontend</h3>

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
              <strong>Linguagem:</strong> <strong>TypeScript</strong>, para
              garantir a segurança de tipos e facilitar a manutenção de uma
              codebase complexa.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Design System:</strong> Framework de componentes como
              Material-UI, para uma interface moderna e responsiva.
            </p>
          </div>
          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Gerenciamento de Estado:</strong> Hookstate para gerenciar
              o estado da aplicação, como informações do usuário autenticado.
            </p>
          </div>

          <h4 className="mt-18 text-lg font-bold">
            Funcionalidades do Frontend
          </h4>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Tela de Login:</strong> Formulário de login que interage
              com o endpoint <code>/auth</code> da API para autenticar o usuário
              e obter um JWT.
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Dashboard de Gerenciamento:</strong>
              <ul className="list-disc pl-6">
                <li>
                  <strong>Gerenciamento de Usuários:</strong> Uma interface para
                  listar, criar, editar e excluir usuários.
                </li>
                <li>
                  <strong>Gerenciamento de Aplicações:</strong> Uma interface
                  para gerenciar as aplicações que utilizam a API para
                  autenticação.
                </li>
                <li>
                  <strong>Controle de Acesso:</strong> O frontend implementaria
                  rotas protegidas que só podem ser acessadas por usuários
                  autenticados, utilizando o JWT para autorização.
                </li>
              </ul>
            </p>
          </div>

          <div role="alert" className="alert alert-info">
            <p className="leading-relaxed">
              <strong>Perfil do Usuário:</strong> Página onde o usuário pode ver
              e editar suas próprias informações.
            </p>
          </div>

          <Divider margin />

          <h2 className="text-2xl font-bold">Estrutura do Projeto</h2>
          <p className="leading-relaxed">
            A API é organizada em módulos, cada um com sua própria
            responsabilidade:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>
                <code>AppModule</code>:
              </strong>{' '}
              O módulo raiz que une todos os outros módulos.
            </li>
            <li>
              <strong>
                <code>AuthModule</code>:
              </strong>{' '}
              Responsável por toda a lógica de autenticação, incluindo a geração
              de tokens JWT e a implementação das diferentes estratégias de
              autenticação.
            </li>
            <li>
              <strong>
                <code>UserModule</code>:
              </strong>{' '}
              Gerencia todas as operações relacionadas a usuários (CRUD).
            </li>
            <li>
              <strong>
                <code>ApplicationModule</code>:
              </strong>{' '}
              Gerencia as aplicações que podem se autenticar na API.
            </li>
          </ul>
          <p className="leading-relaxed">Cada módulo é estruturado com:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>
                <code>*.controller.ts</code>:
              </strong>{' '}
              Define os endpoints da API e lida com as requisições HTTP.
            </li>
            <li>
              <strong>
                <code>*.service.ts</code>:
              </strong>{' '}
              Contém a lógica de negócios.
            </li>
            <li>
              <strong>
                <code>*.repository.ts</code>:
              </strong>{' '}
              Abstrai a comunicação com o banco de dados.
            </li>
            <li>
              <strong>
                <code>*.schema.ts</code>:
              </strong>{' '}
              Define o schema do banco de dados para o Mongoose.
            </li>
          </ul>

          <Divider margin />

          <h2 className="mt-10 text-2xl font-bold">Conclusão</h2>

          <p className="leading-relaxed">
            A <strong>Freight Login API</strong> é uma solução completa para
            gerenciamento de identidade e acesso, construída com tecnologias
            modernas e seguindo as melhores práticas de desenvolvimento de
            software. A arquitetura modular e flexível a torna uma base sólida
            para qualquer sistema que necessite de um controle de acesso seguro
            e centralizado.
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
