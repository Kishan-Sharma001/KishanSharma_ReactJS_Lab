
import React from 'react';
import './App.css';
import ShowList from './components/ShowList';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ExpenseTracker from './components/ExpenseTracker';


export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route
            path="/add"
            element={<ExpenseTracker onTrue={undefined} onClose={undefined} />}
          />
          <Route path="/" element={<ShowList/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
