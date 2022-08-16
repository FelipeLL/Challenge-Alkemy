import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Management from './routes/Management';
import Home from './components/Home';
import Income from './components/Income';
import Expense from './components/Expense';
import Login from './routes/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>
          <Route index element={<Login />} />
          <Route path="/management" element={<Management />} >
            <Route index element={<Home />} />
            <Route path='/management/income' element={<Income />} />
            <Route path='/management/expense' element={<Expense />} />
          </Route>
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


