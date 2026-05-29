import { createApp } from 'vinxi'
import { tanstackStart } from '@lovable.dev/vite-tanstack-config'

export default createApp({
  routers: {
    client: {
      type: 'client',
      plugins: () => [tanstackStart()],
      handler: './src/client.tsx',
      target: 'browser',
    },
    ssr: {
      type: 'http',
      plugins: () => [tanstackStart()],
      handler: './src/entry-server.tsx',
      target: 'server',
    }
  }
})