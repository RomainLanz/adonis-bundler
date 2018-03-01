'use strict'

const glob = require('glob')
const Config = use('Config')
const Helpers = use('Helpers')
const { join } = require('path')
const Bundler = require('parcel-bundler')
const { Command } = require('@adonisjs/ace')

class Bundle extends Command {
  static get signature() {
    return `
      bundle
      { --production : Bundle assets for production }
      { --watch : Watch files to rebundle them on change }
    `
  }

  static get description() {
    return 'Bundle assets using Parcel'
  }

  static get defaultConfiguration() {
    return {
      outDir: Config.get('bundle.outDir'),
      minify: false,
      watch: false,
      logLevel: 3,
      sourceMaps: true,
    }
  }

  async handle(_, { production, watch }) {
    let files = []

    const config = Object.assign(Bundle.defaultConfiguration, {
      watch: watch ? true : false,
      minify: production ? true : false,
    })

    if (Config.get('bundle.autodiscover')) {
      const path = join(Config.get('bundle.discover.path'), Config.get('bundle.discover.pattern'))
      files.push(...await Helpers.promisify(glob)(path))
    }

    if (Config.get('bundle.customBundles').length > 0) {
      files.push(...Config.get('bundle.customBundles'))
    }

    if (files.length <= 0) {
     this.warning('No file has been found to be bundled.')
     this.warning('Please, verify your configuration.')
    }

    files.forEach(async (file) => {
      const filePath = file.split('/')
      const fileName = filePath[filePath.length - 1]

      const bundler = new Bundler(file, config)
      await bundler.bundle()
    })
  }
}

module.exports = Bundle
