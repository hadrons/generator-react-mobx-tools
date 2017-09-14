// @flow
import React from 'react'

import styles from './<%= mainComponentName %>Styles.css'

export default class <%= mainComponentName %> extends React.Component {
  render() {
    return (
      <div className={styles.default}>Your <%= mainComponentName %></div>
    )
  }
}