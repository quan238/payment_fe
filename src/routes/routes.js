import LoginPage from 'pages/Login/LoginPage.jsx';
// import { store } from '../redux/store.js';

// export function handleLogout() {
//   store.dispatch(LoginAction.logoutUser());
// }

const routesAuth = [
  {
    path: '/login',
    exact: true,
    component: LoginPage
  }
];

export const routes = { routesAuth, };
