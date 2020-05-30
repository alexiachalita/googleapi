import React from 'react';

import { Card, Button } from 'react-bootstrap';

const Book = ({ book, saveBook }) => {
    let {  title, subtitle, authors, description, imageLinks, infoLink } = book;
    description = description.length > 400 ? description.slice(0,400) + '...' : description;
    return (

        <Card className="p-2 my-3 book-result">
            <div className="d-flex justify-content-between">
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 font-weight-light">{subtitle}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted font-weight-light">Written by: {authors && authors.join(', ')}</Card.Subtitle>
                </div>
                <div>
                    <Button onClick={()=>saveBook({title, authors, description, image:imageLinks.smallThumbnail, link: infoLink})}>Save</Button>
                    <a classsName="btn" href={infoLink} target="_blank">View</a>
                </div>
            </div>
            <Card.Body className="d-flex">
                {imageLinks && imageLinks.smallThumbnail ?
                (<img src={imageLinks.smallThumbnail} />)
                    : 
                (<img src="https://via.placeholder.com/300" />)
                }
                <Card.Text className="px-2">{description}</Card.Text>
            </Card.Body>
        </Card>
       
    );
}


export default Book;