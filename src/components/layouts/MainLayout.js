import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';


const MainLayout = ({ children }) => (
  <div className='container'>
    <Logo />
    <GoBackButton />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Logo = () => (
  <div className='header'>
    <div>
      <Link to='/'>Blog</Link>
    </div>
  </div>
);

const Footer = () => (
  <div className='footer'>
    2017 React blog
  </div>
);

const GoBackButton = withRouter(({ history }) => (
  <div className='go-back'>
    {
      history.location.pathname == '/'
        ? <button className='btn btn-basic disabled'>Назад</button>
        : <button className='btn btn-info' onClick={history.goBack}>
          Назад
        </button>
    }
  </div>
));

export default MainLayout;