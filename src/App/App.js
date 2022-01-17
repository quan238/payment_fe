import './App.scss';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
// styled
// import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import LoginTemplate from 'template/loginTemplate';
import { routes } from 'routes/routes';

export const history = createBrowserHistory();

const Components = [
  {
    Component: LoginTemplate,
    routes: routes.routesAuth
  },
];


const renderRoute = (Component, routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <Component
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}></Component>
      );
    });
  }
};

function App() {
  return (
    <Router history={history}>
      {/* public Route */}
      <Switch>
        {Components.map((item) => {
          return renderRoute(item.Component, item.routes);
        })}
      </Switch>
    </Router>
  );
}

export default App;
