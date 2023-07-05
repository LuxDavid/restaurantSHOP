import React, {useEffect,useState} from 'react';
import Layout from '../components/Layout';
import Apartado from '../components/Apartado';
import Product from '../components/Product';
import { Items } from '../mocks/items';
import Loading from '../components/Loading';

const Products= ()=>{

  const [products,setProducts]=useState([]);

  const crearProducts=()=>{

  
  new Promise((resolve) =>{ 
  
  return setTimeout(()=>resolve(Items),1000);
  })
  .then(data=>setProducts(data))
  }
  
  useEffect(()=>{
  
  crearProducts();
  
  
  },[products])

return(
  <Layout>

  <Apartado name={"Menu"}/>

<div id='container-products'>

     {products.length === 0 ? (
      <Loading/>
     ):(
      products.map(prod=><Product product={prod} key={prod.id}/>)
     )}

</div>  


</Layout>
)


}

export default Products