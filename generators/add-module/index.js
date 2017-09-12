const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    if (!this.config.get('root')) {
      throw "No source folder set! Run '$ yo react-mobx-tools' first"
    }
  }
  
  async getModuleName() {
    const answers = await this.prompt([{
      type: 'input',
      name: 'moduleName',
      message: 'What is the module name?',
      default: 'some-module'
    }, {
      type: 'input',
      name: 'storeName',
      message: 'What is the store name?',
      default: 'SomeStore'
    }])
    this.answers = answers
  }
  
  writing() {
    this.fs.copyTpl(
      this.templatePath('components/_index.js'),
      this.destinationPath(`${this.config.get('root')}/${this.answers.moduleName}/components/index.js`),
    )
    this.fs.copyTpl(
      this.templatePath('_store.js'),
      this.destinationPath(`${this.config.get('root')}/${this.answers.moduleName}/store.js`),
      { storeName: this.answers.storeName }
    )
  }
}