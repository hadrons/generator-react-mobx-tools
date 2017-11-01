// @flow
import React from 'react'
import { observer, inject } from 'mobx-react'

import styles from './<%= componentName %>Styles.css'

@inject('<%= storeName %>')
@observer
export default class <%= componentName %> extends React.Component<*> {
  render() {
    return (
      <div className={styles.<%= componentName %>}><%= componentName %> Component</div>
    )
  }
}
