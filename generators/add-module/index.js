const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
    if (!this.config.get('root')) {
      throw "No source folder set! Run '$ yo react-mobx-tools' first"
    }
  }
  
  async getModuleName() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'moduleName',
        message: 'What is the module name?',
        default: 'some-module'
      }, {
        type: 'input',
        name: 'storeName',
        message: 'What is the store name?',
        default: 'SomeStore'
      }, {
        type: 'input',
        name: 'basePath',
        message: 'What is the base path?',
        default: 'path'
      }, {
        type: 'input',
        name: 'mainSceneName',
        message: 'What is the main scene name?',
        default: 'MainScene'
      }, {
        type: 'input',
        name: 'mainScenePath',
        message: 'What is the main scene path?',
        default: 'main'
      }, {
        type: 'input',
        name: 'mainComponentName',
        message: 'What is the main component name?',
        default: 'SomeComponent'
      }
    ])
    this.answers = answers
  }

  _getModulePath() {
    return `${this.config.get('root')}/${this.answers.moduleName}`
  }
  
  writing() {
    // Components
    this.fs.copyTpl(
      this.templatePath('components/_index.js'),
      this.destinationPath(`${this._getModulePath()}/components/index.js`),
      this.answers
    )
    this.fs.copyTpl(
      this.templatePath('components/_Component.js'),
      this.destinationPath(`${this._getModulePath()}/components/${this.answers.mainComponentName}.js`),
      this.answers
    )
    this.fs.copyTpl(
      this.templatePath('components/_ComponentStyles.css'),
      this.destinationPath(`${this._getModulePath()}/components/${this.answers.mainComponentName}Styles.css`),
      this.answers
    )

    // Scenes
    this.fs.copyTpl(
      this.templatePath('scenes/_index.js'),
      this.destinationPath(`${this._getModulePath()}/scenes/index.js`),
      this.answers
    )
    this.fs.copyTpl(
      this.templatePath('scenes/_main.js'),
      this.destinationPath(`${this._getModulePath()}/scenes/main.js`),
      this.answers
    )
    this.fs.copyTpl(
      this.templatePath('scenes/_MainScene.js'),
      this.destinationPath(`${this._getModulePath()}/scenes/${this.answers.mainSceneName}.js`),
      this.answers
    )

    // Paths
    this.fs.copyTpl(
      this.templatePath('_paths.js'),
      this.destinationPath(`${this._getModulePath()}/paths.js`),
      this.answers
    )
    
    // Routes
    this.fs.copyTpl(
      this.templatePath('_routes.js'),
      this.destinationPath(`${this._getModulePath()}/routes.js`),
      this.answers
    )

    // Store
    this.fs.copyTpl(
      this.templatePath('_store.js'),
      this.destinationPath(`${this._getModulePath()}/store.js`),
      this.answers
    )
  }
}