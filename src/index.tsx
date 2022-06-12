import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReadMe from './pages/read_me/Read_me';
import Choice_chat from './pages/choice_chat/Choice_chat'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
   <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/read_me" element={<ReadMe/>}/>
        <Route path="/choice_chat" element={<Choice_chat/>}/>
      </Routes>
     </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
);
