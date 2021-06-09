import React from 'react'
import { MainPage } from '../MainPage/MainPage';
import { PageOfVocab } from '../PageOfVocab/PageOfVocab';
import { AddPage } from '../AddPage/AddPage';
import { Header } from '../Header/Header';
import { useRoutes } from 'hookrouter';

export const FunctionContextComponent = () => {
    const routes = {
        '/': () => <MainPage />,
        '/vocab/:id': ({ id }) => <PageOfVocab id={id} />,
        '/addPage': () => <AddPage />
    };
    const routeResult = useRoutes(routes);

    return (
        <div>
            <Header />
            {routeResult || <p>Not found</p>}
        </div>
    );
}

// <InfoList />
