import './index.css';
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom"
import Home from './pages/Home';
import Signin from './pages/Signin';
import Layout from './components/Layout';
import AddPatient from './pages/AddPatient';
import PrivateRoutes from './components/PrivateRoutes';
import Page404 from './pages/Page404';
import EditPatient from './pages/EditPatient';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        {/* <Route element={<PrivateRoutes />}> */}
        <Route path='admin' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='create-user' element={<AddPatient />} />
          <Route path='edit-user/:id' element={<EditPatient />} />
          
        </Route>
        {/* </Route> */}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
