import { Seo } from '../../../components/seo';
import { CODE_SAMPLES } from '../../../consts';

const REPO_URL = 'https://github.com/albornozrodrigo/graphql-api-code-first';

export default function GraphQLApiCodeFirst() {
  return (
    <div className="bg-linear-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <Seo
        title="API GraphQL Code First com NestJS, Apollo e TypeORM"
        description="Code sample: API em NestJS com GraphQL Code-First, Apollo Server, TypeORM e Postgres, com DataLoaders e análise de AST contra N+1 e over-fetching, JWT com autorização por papéis e testes unitários."
        path={CODE_SAMPLES.GQL_API_CODE_FIRST}
      />

      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">
            API em NestJS com GraphQL (Code First), Apollo, TypeORM, Postgres,
            Dataloaders, AST, JWT e testes automatizados
          </h1>

          <p>
            <strong>Link do repositório no GitHub:</strong>{' '}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {REPO_URL}
            </a>
          </p>

          <h2 className="text-2xl font-bold">Visão Geral</h2>

          <p className="leading-relaxed">
            Esta é uma API escalável construída com <strong>NestJS</strong>,
            utilizando <strong>GraphQL</strong> na abordagem <em>Code-First</em>
            . O projeto serve como um exemplo prático de como estruturar uma
            aplicação moderna, com foco em performance, boas práticas e
            testabilidade. A API utiliza um banco de dados{' '}
            <strong>PostgreSQL</strong> gerenciado pela ORM{' '}
            <strong>TypeORM</strong>, com autenticação baseada em{' '}
            <strong>JWT (JSON Web Tokens)</strong>,{' '}
            <strong>autorização baseada em papéis</strong> e otimizações de
            consulta para resolver o problema N+1 usando{' '}
            <strong>DataLoaders</strong> e análise de{' '}
            <strong>AST (Abstract Syntax Tree)</strong>.
          </p>

          <div className="alert alert-info">
            <div>
              Este projeto é a contraparte <em>Code-First</em> da{' '}
              <a href={CODE_SAMPLES.GQL_API_SCHEMA_FIRST} className="underline">
                API Schema-First
              </a>
              : o mesmo domínio implementado com as duas abordagens do NestJS +
              Apollo, para comparar na prática os trade-offs de cada uma.
            </div>
          </div>

          <h2 className="mt-8 text-2xl font-bold">Tecnologias Principais</h2>

          <ul className="mb-8 list-inside list-disc">
            <li>
              <strong>Framework</strong>: NestJS
            </li>
            <li>
              <strong>API</strong>: GraphQL (Apollo Server, Code-First)
            </li>
            <li>
              <strong>Banco de Dados</strong>: PostgreSQL
            </li>
            <li>
              <strong>ORM</strong>: TypeORM
            </li>
            <li>
              <strong>Autenticação</strong>: JWT + Role-Based Authorization
            </li>
            <li>
              <strong>Testes</strong>: Jest para testes unitários
            </li>
            <li>
              <strong>Linguagem</strong>: TypeScript
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold">
            Arquitetura e Conceitos Chave
          </h2>

          <h3 className="mt-6 text-xl font-bold">1. NestJS</h3>

          <p className="leading-relaxed">
            O projeto é estruturado em módulos, resolvers e serviços, seguindo a
            arquitetura modular do NestJS. Isso promove uma clara separação de
            responsabilidades e facilita a manutenção e o crescimento da
            aplicação. A injeção de dependência é usada extensivamente para
            gerenciar os serviços e outras dependências, aproveitando o poder do
            TypeScript.
          </p>

          <h3 className="mt-6 text-xl font-bold">
            2. GraphQL (Code-First com Apollo)
          </h3>

          <p className="leading-relaxed">
            Na abordagem <em>Code-First</em>, o schema GraphQL é gerado
            automaticamente a partir de classes e decoradores TypeScript,
            tornando o código a fonte única de verdade para a definição da API.
            As vantagens incluem:
          </p>

          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Consistência de Código</strong>: o schema é derivado
              diretamente do TypeScript, garantindo que tipos e resolvers nunca
              saiam de sincronia.
            </li>
            <li>
              <strong>Desenvolvimento Ágil</strong>: não é preciso manter um
              arquivo <code>.graphql</code> separado em paralelo ao código.
            </li>
            <li>
              <strong>Tipagem Forte</strong>: input types, object types e
              argumentos são definidos com o próprio sistema de tipos da
              linguagem, reduzindo a superfície de erro.
            </li>
          </ul>

          <p className="leading-relaxed">
            Os resolvers são definidos com decoradores como <code>@Query</code>,{' '}
            <code>@Mutation</code> e <code>@ResolveField</code>, implementando a
            lógica de cada campo do schema gerado.
          </p>

          <h3 className="mt-6 text-xl font-bold">
            3. Otimização de Performance
          </h3>

          <p className="leading-relaxed">
            Para garantir que a API seja rápida e eficiente, duas técnicas
            principais de otimização foram implementadas:
          </p>

          <h4 className="mt-4 font-bold">a. DataLoader</h4>

          <p className="leading-relaxed">
            O padrão <strong>DataLoader</strong> é utilizado para resolver o
            clássico problema de consulta N+1 em GraphQL. Ele agrupa múltiplas
            requisições de dados que ocorreriam em um único ciclo de eventos em
            uma única consulta ao banco de dados.
          </p>

          <p className="leading-relaxed">
            No projeto, os <code>PostLoader</code> (por <code>tagId</code> e{' '}
            <code>userId</code>) são exemplos claros dessa implementação. Eles
            recebem uma lista de IDs, buscam todos os registros correspondentes
            de uma só vez e os distribuem de volta para os resolvers corretos.
          </p>

          <h4 className="mt-4 font-bold">
            b. Análise de AST (Abstract Syntax Tree)
          </h4>

          <p className="leading-relaxed">
            Para evitar a busca de dados desnecessários no banco de dados (
            <em>over-fetching</em>), a API analisa a árvore de sintaxe abstrata
            (AST) da consulta GraphQL.
          </p>

          <p className="leading-relaxed">
            A função utilitária <code>getAttributes</code> inspeciona o objeto{' '}
            <code>GraphQLResolveInfo</code> para determinar exatamente quais
            campos foram solicitados pelo cliente. Apenas esses campos são
            incluídos na consulta ao banco de dados feita pelo TypeORM,
            resultando em queries mais leves e eficientes.
          </p>

          <h3 className="mt-6 text-xl font-bold">
            4. Banco de Dados e ORM (Postgres &amp; TypeORM)
          </h3>

          <p className="leading-relaxed">
            O <strong>PostgreSQL</strong> foi escolhido como o banco de dados
            relacional, e o <strong>TypeORM</strong> atua como a camada de ORM
            (Object-Relational Mapping). O TypeORM facilita a definição de
            entidades, a execução de migrações e a interação com o banco de
            dados de forma segura e produtiva, usando objetos e métodos
            TypeScript em vez de SQL bruto.
          </p>

          <h3 className="mt-6 text-xl font-bold">
            5. Autenticação com JWT e Autorização Baseada em Papéis
          </h3>

          <p className="leading-relaxed">
            A segurança das rotas autenticadas é garantida por meio de JSON Web
            Tokens. Além disso, a API implementa{' '}
            <strong>Role-Based Authorization</strong> para controlar o acesso a
            recursos específicos. O fluxo geral é:
          </p>

          <ol className="mb-4 list-inside list-decimal">
            <li>O usuário faz login com suas credenciais.</li>
            <li>
              A API valida as credenciais e gera um token JWT assinado, contendo
              informações do usuário (como o <code>userId</code> e seus{' '}
              <code>roles</code>).
            </li>
            <li>
              O cliente armazena o token e o envia no cabeçalho{' '}
              <code>Authorization</code> de cada requisição subsequente.
            </li>
            <li>
              Um <code>Guard</code> do NestJS intercepta as requisições, valida
              o token e anexa os dados do usuário (payload) ao objeto da
              requisição.
            </li>
            <li>
              <code>Guards</code> e decorators personalizados verificam os{' '}
              <code>roles</code> do usuário para autorizar ou negar o acesso a
              resolvers ou campos específicos — por exemplo, checar se o usuário
              tem permissão para editar ou deletar um comentário.
            </li>
          </ol>

          <h3 className="mt-6 text-xl font-bold">6. Testes Unitários</h3>

          <p className="leading-relaxed">
            O projeto possui uma suíte de testes unitários desenvolvida com{' '}
            <strong>Jest</strong>. Os testes focam em isolar e validar a lógica
            de negócio nos serviços e a correta implementação dos{' '}
            <code>DataLoaders</code>, utilizando mocks para simular dependências
            como serviços e o banco de dados. Isso garante que novas alterações
            não quebrem a funcionalidade existente.
          </p>
        </div>
      </div>
    </div>
  );
}
