const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
  }
  
  async getSourceFolder() {
    const root = this.config.get('root')
    if (!root) {
      const answers = await this.prompt({
        type: 'input',
        name: 'root',
        message: 'What is the source folder?',
        default: 'app'
      })
      this.config.set('root', answers.root)
    }
  }
}