import React, { Component, useState } from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SavedResults from './components/SavedResults';
import "./App.css";

const apiURL = "https://www.googleapis.com/books/v1/volumes?q="

function App() {
  const [ books, setBooks ] = useState([]);
  const APISearch = (searchTerm) => {
    if (searchTerm !== '') {
      fetch(apiURL+searchTerm)
        .then(res => res.json())
        .then(data => setBooks(data.items));
    }
  }
  const saveBook = async (book) => {
    try {
      const result = await fetch('/api/books', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(book)
      })
      const savedBook = await result.json();
      return savedBook;
    } catch(err) {
      return { err };
    }

  }
  return (
    <div>
      <Router>
        <Header />  
        <Route path='/' exact>
          <SearchBar APISearch={APISearch}/>
          <SearchResults books={books} saveBook={saveBook}/>
        </Route>
        <Route path='/saved'>
          <SavedResults />
        </Route>
      </Router>
    </div>
  );
}


export default App;
