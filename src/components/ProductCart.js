import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const ProductCart=({item,quantity})=> {

  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start list-group-item"
      >
     <span className='cantidad prod-nombre'>{item.nombre}</span>
     <span className='cantidad'>{`$${(item.precio*quantity)}`}</span>
      <Badge bg="primary" pill>{quantity}</Badge>
      <Badge bg="danger" pill>X</Badge>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default ProductCart