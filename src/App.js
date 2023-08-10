import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Hash from "./pages/Hash";
import Block from "./pages/Block";
import Blockchain from "./pages/Blockchain";
import Coinbase from "./pages/Coinbase";
import Distributed from "./pages/Distributed";
import Token from "./pages/Tokens";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import Tokens from './pages/Tokens';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} default />
      <Route path="/hash" element={<Hash />} />
      <Route path="/block" element={<Block />} />
      <Route path="/blockchain" element={<Blockchain />} />
      <Route path="/coinbase" element={<Coinbase />} />
      <Route path="/distributed" element={<Distributed />} />
      <Route path="/tokens" element={<Tokens />} />
    </Routes>
  );
}


export default App;
