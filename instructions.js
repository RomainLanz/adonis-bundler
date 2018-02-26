'use strict'

const { join } = require('path')

module.exports = async (cli) => {
  try {
    await cli.copy(join(__dirname, 'config/bundle.js'), path.join(cli.helpers.configPath(), 'bundle.js'))
    cli.command.completed('create', 'config/bundle.js')
  } catch (error) {
    console.log(error)
  }
}