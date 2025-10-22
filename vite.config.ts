import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library'
  
  if (isLibrary) {
    // 库模式配置
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true,
          include: ['src/**/*'],
          exclude: ['src/**/*.test.*', 'src/**/*.stories.*']
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'TiptapRichEditor',
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        },
        sourcemap: true,
        minify: false
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src')
        }
      }
    }
  }
  
  // 开发模式配置
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist-demo',
      sourcemap: true
    }
  }
})
