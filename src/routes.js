import React from 'react'
import CollectionsPage from './pages/CollectionsPage/CollectionsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import StrengthPage from './pages/StrengthPage/StrengthPage';
import HomePage from './pages/HomePage/HomePage';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage';
import AccountPage from './pages/AccountPage/AccountPage';
import DetailCartContainer from './containers/DetailCartContainer';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products',
        exact: true,
        main: () => <ProductsPage />
    },
    {
        path: '/products/:productId',
        exact: false,
        main: () => <DetailProductPage />
    },
    {
        path: '/collections',
        exact: true,
        main: () => <CollectionsPage />
    },
    {
        path: '/strength',
        exact: true,
        main: () => <StrengthPage />
    },
    {
        path: '/account/login',
        exact: true,
        main: () => <AccountPage status={1} />
    },
    {
        path: '/account/register',
        exact: true,
        main: () => <AccountPage status={2} />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <DetailCartContainer />
    }

];

export default routes;