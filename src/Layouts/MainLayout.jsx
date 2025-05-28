import { Outlet } from 'react-router-dom';
import Navbar from '../Component/navbar';

import LoginPage from '../pages/AuthPage/loginPage';

function MainLayout() {

  var lastLoginDate = localStorage.getItem('LastLoginDate');
  if (lastLoginDate != new Date().getDay().toString()) localStorage.clear();
  var userinfo = localStorage.getItem('CurrentUser');
  if (userinfo != null && userinfo != "null") {
    return (
      <div className='MainContent'>
        <div className='TopBox'>
          <Navbar />
        </div>

        <div className="page">

          <Outlet />


        </div>
        <div className='footer'>
          <div className='footer-c1'>
            <a>CAFE SHOP</a>

          </div>
        </div>
      </div>
    );
  } else {
    
    return (<LoginPage />);
  }
}

export default MainLayout