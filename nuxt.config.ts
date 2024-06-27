// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sourcemap: {
    client: true,
    server: false
  },
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchedClass: 'prefetched-link'
      }
    },
    appManifest: false
  },
  builder: 'vite',
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: '_nuxt/chunk/[hash].js',
          entryFileNames: '_nuxt/entry/[hash].js',
          assetFileNames: '_nuxt/[ext]/[hash].[ext]'
        }
      }
    }
  },
  hooks: {
    'build:manifest': (manifest) => {
      for (const file of Object.values(manifest)) {
        file.dynamicImports = []

        // Remove all prefetch assets from the manifest
        if (file.assets) {
          file.assets = file.assets.filter(
            asset => ['gif', 'jpg', 'jpeg', 'png', 'svg', 'webp'].every(ext => !asset.endsWith(`.${ext}`))
          )
        }
        if (file.preload === true) {
          file.preload = false
        }
        if (file.prefetch === true) {
          file.prefetch = false
        }
        if (file.resourceType === 'script') {
          file.css = []
        }
      }
    }
  },
})
