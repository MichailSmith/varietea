/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import Tea from './components/Tea';
import TeaCardList from './components/TeaCardList';
import TeaServerActions from './actions/TeaServerActions';

const router = new Router(on => {

  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/contact', async () => <ContactPage />);

  on('/tea/:id', async (req) =>{
    const data = await http.get(`/api/tea/${req.params.id}`);
    return data && <Tea {...data} />;
  });
  on('/tea', async () =>{
    const data = await http.get(`/api/tea/`);

    TeaServerActions.receiveAll(data);

    return data && <TeaCardList />;
  });

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );

});

export default router;
