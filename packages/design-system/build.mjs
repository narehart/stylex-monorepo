import { spawn } from 'child_process';
import { watch } from 'fs';

const isWatch = process.argv.includes('--watch');

function runCommand(command, args, silent = false) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, {
      stdio: silent ? 'ignore' : 'inherit',
      shell: true,
    });

    proc.on('close', code => {
      if (code !== 0) {
        reject(new Error(`Command failed with code ${code}`));
        return;
      }
      resolve();
    });
  });
}

let isFixingImports = false;
let debounceTimer;

async function fixImports() {
  if (isFixingImports) return;

  try {
    isFixingImports = true;
    await runCommand('fix-esm-import-path', ['dist'], true);
  } finally {
    isFixingImports = false;
  }
}

function debounce(fn, delay = 500) {
  return (...args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedFixImports = debounce(async () => {
  try {
    await fixImports();
  } catch (error) {
    console.error('Error fixing imports:', error);
  }
});

async function build() {
  try {
    if (isWatch) {
      // Start tsc in watch mode
      spawn('tsc', ['--watch'], {
        stdio: 'inherit',
        shell: true,
      });

      // Watch the dist directory for changes
      watch('./dist', { recursive: true }, async (eventType, filename) => {
        if (filename && filename.endsWith('.js')) {
          debouncedFixImports();
        }
      });
    } else {
      // Run normal build
      await runCommand('tsc', []);
      await fixImports();
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
