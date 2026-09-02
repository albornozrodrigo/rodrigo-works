Durante meus estudos sobre **micro-frontends**, especialmente o uso de **Module Federation** com **Next.js**, busquei maneiras de integrar essa tecnologia utilizando o novo bundler do framework, o **Turbopack**.

Encontrei diversas discussões no **GitHub** e em fóruns da comunidade que revelaram um debate interessante no ecossistema React/Next.js.

Neste texto, compartilho o que descobri: o que ocorreu, os principais pontos de atrito e a importância disso para quem trabalha com React e micro-frontends.

## Module Federation — o que é e por que importa

O Module Federation, criado por **Zack Jackson** (@ScriptedAlchemy), é um recurso do **Webpack 5** que permite dividir aplicações em módulos independentes, carregados em runtime. Isso possibilita uma arquitetura de micro-frontends flexível e escalável, permitindo que diferentes equipes atualizem partes da aplicação isoladamente, sem a necessidade de recompilar tudo, melhorando a agilidade e a performance em projetos grandes.

## Next.js e a filosofia da Vercel

O Next.js, mantido pela **Vercel**, é um dos frameworks **React** mais populares, conhecido pela simplicidade e performance, além de oferecer recursos como **SSG** e **SSR**. No entanto, sua filosofia se baseia no build-time, processando e empacotando grande parte do código antes do deploy, o que, embora melhore a performance, torna mais complexa a adoção de soluções que dependem de carregamento dinâmico em runtime, como o Module Federation.

## Build-Time vs Runtime: o conflito filosófico

O conflito entre Next.js e Module Federation é mais conceitual do que técnico. Enquanto a Vercel acredita que todo código deve estar disponível no build, o Module Federation defende o carregamento dinâmico de módulos em runtime, criando uma barreira natural para a integração entre as duas abordagens.

## O conflito com a Vercel

Zack tentou colaborar com o time do Next.js por anos para desenvolver uma integração oficial com o Module Federation, mas enfrentou resistência.

A resposta da Vercel foi: _“não está nos nossos planos”_.

Em julho de 2022, Zack declarou:

> _“Não haverá suporte oficial para o Module Federation pela Vercel. Eles acreditam que tudo deve estar disponível no build. Ele nunca será suportado pelo Next.js.”_

Diante disso, ele criou uma solução comercial (**@module-federation/nextjs-mf**) para financiar o desenvolvimento e, meses depois, abriu parcialmente o código como open source para pressionar a Vercel.

Em um podcast de novembro de 2024, Zack anunciou o fim do suporte ao Next.js:

> _“O plugin teve um ciclo de desenvolvimento muito doloroso… requer muitos recursos e não é desejado. O Turbopack está a caminho, e não sabemos se ele suportará o Module Federation; sua morte já estava escrita na parede.”_

> “_Não apoiaremos um framework que não o quer. Se a Vercel decidir apoiar o Module Federation como prioridade, eu dobraria os recursos para ajudá-los, mas não posso fazer isso sozinho sem apoio interno.”_

Curiosamente, após esse anúncio, a Vercel começou a demonstrar interesse em reconsiderar o suporte, mas até o momento não há nada oficial.

## Caminhos alternativos e o futuro

O Next.js oferece uma solução chamada **Multi-Zones**, que permite dividir a aplicação em áreas independentes, porém isso ocorre em build-time e exige recarregamento completo entre zonas, reduzindo a fluidez da experiência e limitando o conceito de micro-frontends. Enquanto isso, o Module Federation continua sendo o padrão de mercado para micro-frontends dinâmicos, amplamente adotado por grandes empresas. Outras ferramentas, como **Single-SPA** e **Rspack**, também estão ganhando destaque nas discussões sobre o futuro dessa arquitetura.

## Open Source ou Open Corporate?

Esse debate levanta a questão: até que ponto vale a pena depender de tecnologias controladas por empresas privadas? A Vercel tem seus méritos, mas o caso do Module Federation mostra como interesses comerciais podem limitar a inovação aberta. Em contraste, frameworks como **Nuxt.js**, mantidos pela comunidade, destacam o valor de ecossistemas verdadeiramente open source.

Recentemente, a **Meta** transferiu o React para a **Linux Foundation**, criando a **React Foundation**, um passo simbólico para dar mais autonomia à comunidade. No entanto, a maioria dos desenvolvedores principais do React ainda pertence à Meta e à Vercel, mantendo a influência corporativa.

## Conclusão

O embate entre Module Federation e Next.js reflete o atrito entre inovação aberta e estratégia empresarial. Zack e a equipe da Vercel possuem visões distintas sobre o futuro do frontend, e a comunidade está no meio desse impasse.

Independentemente de qual lado você possa achar que tem mais razão, entender essas tensões é crucial para fazer escolhas de arquitetura mais conscientes, escaláveis e alinhadas com o futuro do ecossistema React.
