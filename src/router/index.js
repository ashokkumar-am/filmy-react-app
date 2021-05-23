import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Landing, Home } from '../pages';
import Cookies from 'js-cookie';

const _routes = [
  {
    path: '/',
    auth: false,
    component: Landing
  },
  {
    path: '/home',
    auth: true,
    component: Home
  }
];

const Auth = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Cookies.get('session_token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const router = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        {_routes.map((route, i) => {
          return route.auth ? (
            <Auth
              exact
              key={'routes' + i}
              path={route.path}
              component={route.component}
            />
          ) : (
            <Route
              exact
              key={'routes' + i}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default router;
