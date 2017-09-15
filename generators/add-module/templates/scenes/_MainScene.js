// @flow
import React from 'react'
import { inject, observer } from 'mobx-react'

import { <%= mainComponentName %> } from '../components'

@inject('<%= storeName %>')
@observer
export default class <%= mainSceneName %> extends React.Component<*> {
  render() {
    return (
      <div>
        <<%= mainComponentName %> />
      </div>
    )
  }
}