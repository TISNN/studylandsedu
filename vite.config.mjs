import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import JavaScriptObfuscator from 'javascript-obfuscator';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

function collectHtmlInputs() {
  return fs
    .readdirSync(rootDir)
    .filter((name) => name.endsWith('.html'))
    .reduce((inputs, name) => {
      const key = path.parse(name).name;
      inputs[key] = path.resolve(rootDir, name);
      return inputs;
    }, {});
}

function copyProjectStaticPlugin() {
  return {
    name: 'copy-project-static',
    closeBundle() {
      const outDir = path.resolve(rootDir, 'dist');
      const entriesToCopy = ['assets', 'partials', 'mail.php'];
      const scriptDir = path.resolve(outDir, 'assets/js');
      const ownScripts = new Set(['animation.js', 'contact.js', 'layout.js', 'script.js']);

      for (const entry of entriesToCopy) {
        const src = path.resolve(rootDir, entry);
        const dest = path.resolve(outDir, entry);

        if (!fs.existsSync(src)) {
          continue;
        }

        fs.cpSync(src, dest, {
          recursive: true,
          force: true
        });
      }

      if (!fs.existsSync(scriptDir)) {
        return;
      }

      for (const fileName of fs.readdirSync(scriptDir)) {
        if (!ownScripts.has(fileName) || !fileName.endsWith('.js')) {
          continue;
        }

        const filePath = path.resolve(scriptDir, fileName);
        const sourceCode = fs.readFileSync(filePath, 'utf8');
        const result = JavaScriptObfuscator.obfuscate(sourceCode, {
          compact: true,
          controlFlowFlattening: false,
          deadCodeInjection: false,
          identifierNamesGenerator: 'hexadecimal',
          renameGlobals: false,
          stringArray: true,
          stringArrayThreshold: 0.65,
          transformObjectKeys: true
        });

        fs.writeFileSync(filePath, result.getObfuscatedCode(), 'utf8');
      }
    }
  };
}

export default defineConfig({
  plugins: [copyProjectStaticPlugin()],
  build: {
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      input: collectHtmlInputs()
    }
  }
});
