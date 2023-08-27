
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SiteFooter from './components/Common/SiteFooter';
import SiteNav from './components/Common/SiteNav';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import Contacts from './components/contacts/Contacts';
import awsExports from './aws-exports';
import {Amplify} from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator login-Mechanisms={['email']} > 
    {({signOut,user}) => (
    <div>  
    
        <SiteNav/>
        <Routes>
          <Route path='*' element={<HomePage/>}/>
          <Route path='/'  exact={true} element={<HomePage/>}/> 
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <SiteFooter/>
        
     
    </div>
    ) }
    </Authenticator>

  );
}

export default App;
