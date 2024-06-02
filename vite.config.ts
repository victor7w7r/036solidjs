import devtools from 'solid-devtools/vite'
import AutoImport from 'unplugin-auto-import/vite'
import swc from 'unplugin-swc'
import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { qrcode } from 'vite-plugin-qrcode'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

import { imports, importTypes } from './auto-import'

export default defineConfig({
  build: { sourcemap: true },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  plugins: [
    AutoImport({
      dts: 'src/generated/auto-imports.d.ts',
      eslintrc: { enabled: true },
      imports: [
        '@solidjs/router',
        'solid-js',
        {
          'axios': [['default', 'axios']]
        },
        ...imports,
        ...importTypes
      ],
      include: [/\.[jt]sx?$/]
    }),
    analyzer(),
    qrcode(),
    solid({ hot: false }),
    tsconfigPaths(),
    swc.vite({ minify: true }),
    devtools({
      autoname: true,
      locator: {
        componentLocation: true,
        jsxLocation: true,
        targetIDE: 'vscode'
      }
    }),
    chunkSplitPlugin()
  ]
})
