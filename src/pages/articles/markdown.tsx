import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Renderiza o corpo do artigo mantendo a tipografia do resto do site.
 *
 * Os componentes são mapeados na mão em vez de usar o plugin de typography do
 * Tailwind: o projeto já tem um vocabulário visual próprio nas páginas de case,
 * e assim os artigos ficam idênticos a elas.
 */
export const ArticleBody = ({ children }: { children: string }) => (
  <Markdown
    remarkPlugins={[remarkGfm]}
    components={{
      h1: props => <h2 className="mt-10 text-2xl font-bold" {...props} />,
      h2: props => <h2 className="mt-10 text-2xl font-bold" {...props} />,
      h3: props => <h3 className="mt-8 text-xl font-bold" {...props} />,
      h4: props => <h4 className="mt-6 font-bold" {...props} />,
      p: props => <p className="leading-relaxed" {...props} />,
      ul: props => <ul className="list-disc space-y-2 pl-6" {...props} />,
      ol: props => <ol className="list-decimal space-y-2 pl-6" {...props} />,
      a: ({ href, ...props }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline underline-offset-4"
          {...props}
        />
      ),
      blockquote: props => (
        <blockquote
          className="border-primary/60 text-base-content/80 border-l-4 pl-4 italic"
          {...props}
        />
      ),
      code: ({ className, children, ...props }) => {
        // Blocos com linguagem viram <pre><code>; inline fica com badge.
        const isBlock = /language-/.test(className ?? '');
        return isBlock ? (
          <code className={className} {...props}>
            {children}
          </code>
        ) : (
          <code
            className="bg-base-300 text-secondary rounded px-1.5 py-0.5 text-sm"
            {...props}
          >
            {children}
          </code>
        );
      },
      pre: props => (
        <pre
          className="bg-base-300 overflow-x-auto rounded-lg p-4 text-sm"
          {...props}
        />
      ),
      // Tabelas largas precisam rolar sozinhas, sem estourar a página.
      table: props => (
        <div className="overflow-x-auto">
          <table className="table-zebra table" {...props} />
        </div>
      ),
      hr: () => (
        <hr className="h-px border-none bg-linear-to-r from-transparent via-purple-900/80 to-transparent" />
      ),
      img: ({ alt, ...props }) => (
        <img
          alt={alt ?? ''}
          loading="lazy"
          decoding="async"
          className="rounded-lg"
          {...props}
        />
      ),
    }}
  >
    {children}
  </Markdown>
);
