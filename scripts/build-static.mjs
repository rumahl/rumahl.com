import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const env = {
  ...process.env,
  RUMAHL_STATIC_EXPORT: '1',
  // A static build uses the committed local articles. Discourse is optional
  // and is not fetched during a release build.
  DISCOURSE_URL: '',
};

function run(script, args = []) {
  const result = spawnSync(process.execPath, [script, ...args], {
    cwd: root,
    env,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

run('scripts/run-framework.mjs', ['build']);
run('scripts/static-files.mjs');
console.log('Static export ready in dist/client');
