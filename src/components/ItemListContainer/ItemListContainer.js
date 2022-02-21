import './ItemListContainer.css'
import {getProducts} from '../../asyncmock';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getProducts().then(item=>{
        setProducts(item)
      }).catch(err =>{
        console.log(err)
      }).finally(()=>{
        setLoading(false)
      })

     return(()=> {
       setProducts()
     })
    
  }, [])

  
      return (
          <div className='ItemListContainer'>
            {
              loading ? 
                <h1>Cargando...</h1>:
              products.length ? 
                <>
                  <h1>{greeting}</h1>
                  <ItemList products={products} />
                </>: 
                <h1>No se encontraron Productos</h1>
            } 
          </div>
              
      );
  }
  
  export default ItemListContainer;