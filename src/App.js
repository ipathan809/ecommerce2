//import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

//import { Navigation } from '@mui/icons-material';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
