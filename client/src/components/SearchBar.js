import React, {  useState } from 'react';
import { Button, Form } from 'react-bootstrap';
const SearchBar = (props) => {
    const [ search, setSearch ] = useState('');
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (search !== '') {
            props.APISearch(search);
        }
    }
    return (
        <div className="container">
            <h2>Book Search</h2>
            <Form onSubmit={(e)=>handleSearchSubmit(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Book</Form.Label>
                    <Form.Control type="text" placeholder="Enter a search term" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" className='float-right'>
                    Search
                </Button>
            </Form>
        </div>
    )
}


export default SearchBar;