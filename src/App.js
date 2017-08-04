import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'routes';
import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routers />
    </MainLayout>
  </BrowserRouter>
);

export default App;