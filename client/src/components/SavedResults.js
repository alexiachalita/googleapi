import React, { useState, useEffect } from 'react';

import SavedBook from './SavedBook';

const SavedResults = () => {
    const [ books, setBooks ] = useState([]);
    useEffect(()=>{
        console.log('fetching books');
        fetch('/api/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    },[])
    const deleteBook = (_id) => {
        fetch(`/api/books/${_id}`,{
            method: 'delete'
        }).then(book => {
             setBooks(books.filter(book => book._id!==_id))
        });
    }
    return (
    <div className="container">
        <h2>Results</h2>
        {books && books.length > 0 ? 
        (books.map((book, key)=> <SavedBook key={key} book={book} deleteBook={deleteBook}/>))
            :
        (<p>No Results</p>)}
    </div> 
    )
}


export default SavedResults;