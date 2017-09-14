// @flow
import { MAIN_PATH } from './paths'
import { <%= mainSceneName %> } from './scenes'

export default [
  {
    key: '<%= moduleName %>',
    path: MAIN_PATH,
    component: <%= mainSceneName %>
  }
]