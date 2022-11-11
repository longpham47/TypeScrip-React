import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./redux/configStore";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import HomeTemplate from './pages/tempalates/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Details/Detail';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>
          <Route path='detail' element={<Detail/>}>
            <Route path=':id' element={<Detail></Detail>} ></Route>
          </Route>
          <Route path='/home' element={<Home/>} />
          <Route path='*' element={<Navigate to=""/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);


// reportWebVitals();
