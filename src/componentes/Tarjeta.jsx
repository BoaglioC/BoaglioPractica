import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Tarjeta({nombre, imagen, rol}){
    return (
    <Card style={{ width: '15rem', margin:'1rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
        <Card.Title className='text-center'>{nombre}</Card.Title>
        <Card.Text className='text-center'> {rol} </Card.Text>
      </Card.Body>
    </Card>
    )

}

export default Tarjeta;