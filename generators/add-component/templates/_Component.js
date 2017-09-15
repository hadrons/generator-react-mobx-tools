// @flow
import React from 'react'
import { observer, inject } from 'mobx-react'

import styles from './<%= componentName %>Styles.css'

@inject('')
@observer
export default class <%= componentName %> extends React.Component<*> {
  render() {
    return (
      <div className={styles.wrapper}><%= componentName %></div>
    )
  }
}
