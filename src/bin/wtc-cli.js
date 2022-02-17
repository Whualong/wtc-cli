#!/usr/bin/env node
process.env.NODE_PATH = __dirname + '/../node_modules/'
const { resolve } = require('path')
const res = command => resolve(__dirname, '../commands/', command)
const Package = require('../../package.json')
const program = require('commander')

program.version( Package.version )

program.usage('<command>')

program.command('init')
  .option('-f, --foo', 'enable some foo')
  .description('Generate a new project')
  .alias('i')
  .action(() => {
    require(res('init'))
  })

if(!program.args.length){
  program.help()
}