// @flow
import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'

import styles from '../../main/styles.css'
import { TransitionRoute } from '../../main/components'
import routes from '../routes'
import { MODULE_BASE_PATH, MAIN_PATH } from '../paths'

export default [
  {
    path: MODULE_BASE_PATH,
    exact: true,
    render: () => <Redirect to={MAIN_PATH} />
  },
  {
    path: MODULE_BASE_PATH,
    render: ({ location, history }: { location: Object, history: Object }) => (
      <div className={styles.vContainer}>
        {routes.map(route => <TransitionRoute key={route.key} path={route.path} component={route.component} location={location} history={history} />)}
      </div>
    )
  }
]
