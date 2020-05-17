import LoginForm from './components/login';
import Dashboard from './components/dashboard';
import Users from './components/users';
import Search from './components/search';

const routes= [
    {
        path : '/',
        exact:true,
        component: LoginForm
    },
    {
        path : '/dashboard',
        exact:true,
        component: Dashboard
    },
    {
        path : '/users',
        exact:true,
        component: Users
    },
    {
        path : '/search',
        exact:true,
        component: Search
    }
];

export default routes;
