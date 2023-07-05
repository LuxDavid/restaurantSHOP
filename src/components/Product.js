import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const Product= ({product}) =>{

const navigate=useNavigate()

const handleNavigate=()=>{
  navigate(`/products/${product.id}`);
}

return(

<Card  className='card'>
<Card.Img className='card-img-top' variant="top" src={product.image} />
     <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
        ${product.precio}
        </Card.Text>
        <Button className='agregar' style={{background:'#dc3545'}} onClick={handleNavigate}>Agregar al carrito</Button>
      </Card.Body>

   
</Card>
)

}

export default Product