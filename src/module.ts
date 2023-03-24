import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'
import { join, resolve } from 'pathe'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-color-calculator',
    configKey: 'colorCalculator',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const runtimeDir = await resolver.resolve('./runtime')

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    // addImports({ name: 'getRandomColor', from: resolve(runtimeDir, 'random') })
    addImports({ name: 'getRandomColor', from: resolver.resolve('./runtime/random') })
  }
})
