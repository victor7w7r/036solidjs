import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: { sourcemap: true },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  plugins: [solid(), tsconfigPaths()]
})
