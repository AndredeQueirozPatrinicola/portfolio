import './App.css';
import ReactDOM from "react-dom/client";
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
  );
}