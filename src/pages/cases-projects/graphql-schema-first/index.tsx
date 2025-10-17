export default function GraphQLApiSchemaFirst() {
  return (
    <div className="bg-gradient-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">
            API em NestJS com GraphQL (Schema First), Apollo, Sequelize,
            Postgres, Dataloaders, AST, JWT e testes automatizados
          </h1>

          <p>
            <strong>Link do repositório no GitHub:</strong>{' '}
            <a
              href="https://github.com/albornozrodrigo/graphql-api-schema-first"
              target="_blank"
              rel="noreferrer noopenner"
              className="underline"
            >
              https://github.com/albornozrodrigo/graphql-api-schema-first
            </a>
          </p>

          <h2 className="text-2xl font-bold">Visão Geral</h2>

          <p className="leading-relaxed">
            Esta é uma API escalável construída com <strong>NestJS</strong>,
            utilizando <strong>GraphQL</strong> na abordagem{' '}
            <em>Schema-First</em>. O projeto serve como um exemplo prático de
            como estruturar uma aplicação moderna, com foco em performance, boas
            práticas e testabilidade. A API utiliza um banco de dados{' '}
            <strong>PostgreSQL</strong> gerenciado pela ORM{' '}
            <strong>Sequelize</strong>, com autenticação baseada em{' '}
            <strong>JWT (JSON Web Tokens)</strong> e otimizações de consulta
            para resolver o problema N+1 usando <strong>DataLoaders</strong> e
            análise de
            <strong>AST (Abstract Syntax Tree)</strong>.
          </p>

          <h2 className="mt-8 text-2xl font-bold">Tecnologias Principais</h2>

          <ul className="mb-8 list-inside list-disc">
            <li>
              <strong>Framework</strong>: NestJS
            </li>
            <li>
              <strong>API</strong>: GraphQL (Apollo Server, Schema-First)
            </li>
            <li>
              <strong>Banco de Dados</strong>: PostgreSQL
            </li>
            <li>
              <strong>ORM</strong>: Sequelize
            </li>
            <li>
              <strong>Autenticação</strong>: JWT (JSON Web Tokens)
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
            O projeto é estruturado em módulos, controladores (resolvers) e
            serviços, seguindo a arquitetura modular do NestJS. Isso promove uma
            clara separação de responsabilidades e facilita a manutenção e o
            crescimento da aplicação. A injeção de dependência é usada
            extensivamente para gerenciar os serviços e outras dependências.
          </p>

          <h3 className="mt-6 text-xl font-bold">2. GraphQL (Schema-First)</h3>

          <p className="leading-relaxed">
            A abordagem <em>Schema-First</em> foi adotada, o que significa que o
            contrato da API é definido em um arquivo de schema GraphQL (
            <code>.graphql</code>). As vantagens incluem:
          </p>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>Fonte Única de Verdade</strong>: O schema é a documentação
              definitiva da API.
            </li>
            <li>
              <strong>Desenvolvimento Paralelo</strong>: As equipes de frontend
              e backend podem trabalhar em paralelo, usando o schema como
              contrato.
            </li>
            <li>
              <strong>Geração de Tipos</strong>: Os tipos do TypeScript podem
              ser gerados a partir do schema, garantindo consistência entre o
              schema e os resolvers.
            </li>
          </ul>

          <p className="leading-relaxed">
            Os resolvers do NestJS implementam a lógica para cada campo definido
            no schema.
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
            No projeto, os <code>CommentLoader</code> (por <code>postId</code> e{' '}
            <code>userId</code>) são exemplos claros dessa implementação. Eles
            recebem uma lista de IDs, buscam todos os comentários
            correspondentes de uma só vez e os distribuem de volta para os
            resolvers corretos.
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
            incluídos na consulta ao banco de dados feita pelo Sequelize,
            resultando em queries mais leves e eficientes.
          </p>

          <h3 className="mt-6 text-xl font-bold">
            4. Banco de Dados e ORM (Postgres &amp; Sequelize)
          </h3>

          <p className="leading-relaxed">
            O <strong>PostgreSQL</strong> foi escolhido como o banco de dados
            relacional, e o <strong>Sequelize</strong> atua como a camada de ORM
            (Object-Relational Mapping). O Sequelize facilita a definição de
            modelos, a execução de migrações e a interação com o banco de dados
            de forma segura e produtiva, usando objetos e métodos TypeScript em
            vez de SQL bruto.
          </p>

          <h3 className="mt-6 text-xl font-bold">5. Autenticação com JWT</h3>

          <p className="leading-relaxed">
            A segurança das rotas que exigem autenticação é garantida por meio
            de JSON Web Tokens. O fluxo geral é:
          </p>

          <ol className="mb-4 list-inside list-decimal">
            <li>O usuário faz login com suas credenciais.</li>
            <li>
              A API valida as credenciais e gera um token JWT assinado, contendo
              informações do usuário (como o <code>userId</code>).
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
              Os resolvers e serviços usam o <code>userId</code> da requisição
              para autorizar ações (ex: verificar se o usuário pode editar ou
              deletar um comentário).
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
