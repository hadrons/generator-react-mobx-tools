const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    if (!this.config.get('root')) {
      throw "No source folder set! Run '$ yo react-mobx-tools' first"
    }
  }
  
  async getComponentName() {
    const answers = await this.prompt([{
      type: 'input',
      name: 'moduleName',
      message: 'What is the module name?',
      default: 'some-module'
    },{
      type: 'input',
      name: 'componentName',
      message: 'What is the component name?',
      default: 'SomeComponent'
    }])
    this.answers = answers
  }
  
  writing() {
    this.fs.copyTpl(
      this.templatePath('_Component.js'),
      this.destinationPath(`${this.config.get('root')}/${this.answers.moduleName}/components/${this.answers.componentName}.js`),
      { componentName: this.answers.componentName }
    )
  }
}