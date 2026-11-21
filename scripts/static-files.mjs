import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = fileURLToPath(new URL('../dist/client', import.meta.url));

const server = await createServer({
  root,
  configFile: false,
  appType: 'custom',
  server: {middlewareMode: true},
  resolve: {
    alias: {
      '@': root,
      '@rumahl/ui': fileURLToPath(new URL('../vendor/rumahl-ui/src', import.meta.url)),
    },
  },
});

try {
  const mod = await server.ssrLoadModule('/scripts/static-files.ts');
  await mod.runStaticExport(outDir);
} finally {
  await server.close();
}
