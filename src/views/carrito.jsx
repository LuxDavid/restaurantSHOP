import React,{useContext} from 'react'
import Layout from '../components/Layout'
import EmptyCart from '../components/EmptyCart';
import { ContextFunctions } from '../context/contextFunctions';

const Carrito=()=> {

const {carrito}=useContext(ContextFunctions)

  return (
    <Layout>
      
      {carrito.length ===0 ? <EmptyCart/>: <h1>Tus productos son:</h1> }
    </Layout>
  )
}

export default Carrito