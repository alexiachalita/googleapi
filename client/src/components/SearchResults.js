import React from 'react';

import Book from './Book';

const SearchResults = ({ books=[], saveBook }) => {
    return (
    <div className="container">
        <h2>Results</h2>
        {books && books.length > 0 ? 
        (books.map((book, key)=> <Book key={key} book={book.volumeInfo} saveBook={saveBook}/>))
            :
        (<p>No Results</p>)}
    </div> 
    )
}


export default SearchResults;