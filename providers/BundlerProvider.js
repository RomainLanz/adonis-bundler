'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class BundlerProvider extends ServiceProvider {
  /**
   * Register namespaces to the IoC container
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this.app.bind('Adonis/Commands/Bundle', (app) => require('../commands/Bundle'))
  }

  /**
   * Attach context getter when all providers have
   * been registered
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    const ace = require('@adonisjs/ace')
    ace.addCommand('Adonis/Commands/Bundle')
  }
}

module.exports = BundlerProvider
