import {useEffect,useState}from "react";
import { useParams } from "react-router-dom";
import {Items} from '../mocks/items';
import ProductDetail from "./ProductDetail";
import Loading from './Loading';

const ContainerDetail=()=>{

const [item,setItem]=useState(null);
const {id}=useParams();


useEffect(()=>{

new Promise((resolve) => {

setTimeout(()=>{
    const productFiltered=Items.find(item=>item.id === id)
    resolve(productFiltered)
},1000);

}).then(data=>setItem(data))
  .catch(err=>console.log(err))

},[id]);

if (!item) {
    return (
        <div id='container-detail'>
            <Loading />
        </div>
    )
  }

return (
    <ProductDetail item={item}/>
    
)


}

export default ContainerDetail