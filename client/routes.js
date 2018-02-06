import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}


if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  // eslint-disable-next-line global-require
  require('./modules/Kanban/Kanban');
}

export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Kanban/Kanban').default);
        });
      }}
    />
  </Route>
);
