import React from 'react';

import { Card, Button } from 'react-bootstrap';

const SavedBook = ({ book, deleteBook }) => {
    let {  _id, title, authors, description, image, link } = book;
    description = description.length > 400 ? description.slice(0,400) + '...' : description;
    return (

        <Card className="p-2 my-3 book-result">
            <div className="d-flex justify-content-between">
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted font-weight-light">Written by: {authors && authors.join(', ')}</Card.Subtitle>
                </div>
                <div>
                    <Button onClick={()=> deleteBook(_id)}>Delete</Button>
                    <a classsName="btn" href={link} target="_blank">View</a>
                </div>
            </div>
            <Card.Body className="d-flex">
                {image ?
                (<img src={image} />)
                    : 
                (<img src="https://via.placeholder.com/300" />)
                }
                <Card.Text className="px-2">{description}</Card.Text>
            </Card.Body>
        </Card>
       
    );
}


export default SavedBook;