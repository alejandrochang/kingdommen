import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import PostPage from './pages/PostPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/devo/:devoId" Component={PostPage} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
