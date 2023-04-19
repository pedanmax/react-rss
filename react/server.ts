import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      console.log(url);
      template = await vite.transformIndexHtml(url, template);
      const parts = template.split('<!--name-->');
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const stream = render(url, {
        onShellReady() {
          res.write(parts[0]);
          stream.pipe(res);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: unknown) {
          console.error(err);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });
  app.listen(5173);
}

createServer();
