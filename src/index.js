import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import RoutedUsers from "./routes/routedusers";
import RoutedUser from "./routes/routeduser";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="routedusers" element={<RoutedUsers />} >
          <Route path=":userID" element={<RoutedUser />} />
        </Route>
        <Route path="*" element={<main><p>There's nothing here!</p> </main>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
