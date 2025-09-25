import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

// recria __dirname no ambiente ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);
  app.use('*all', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(
          __dirname,
          process.env.NODE_ENV === 'production'
            ? 'dist/client/index.html'
            : 'index.html',
        ),
        'utf-8',
      );

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client and
      //    also applies HTML transforms from plugins.
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry. ssrLoadModule is an exposed utility in Vite.
      //    It's responsible for loading modules in SSR mode.
      const { render } =
        process.env.NODE_ENV === 'production'
          ? import('./dist/server/entry-server.js')
          : await vite.ssrLoadModule('/src/entry-server.tsx');

      // 4. Render the app HTML.
      const appHtml = await render(url);

      // 5. Inject the rendered app HTML into the template.
      const html = template.replace(`<!--app-html-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // If an error is caught, let Vite fix the stacktrace so it maps back
      // to your actual source code.
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(5173, () => console.log('Server listening on port 5173'));
}

createServer();
