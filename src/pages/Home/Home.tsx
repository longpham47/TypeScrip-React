import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/configStore'
import { getProducAPI, ProductModel } from '../../redux/reducer/productReduce'

type Props = {}

//props : đói tượng props
export default function Home(props : Props) {

    const {arrProduct} =  useSelector((state:RootState) => state.productReducer)
   
    const dispatch: AppDispatch =  useDispatch()

    useEffect(() => { 
       let action = getProducAPI();
       dispatch(action);
     },[]);
    
   const renderProduct = (  ) => {
    return arrProduct.map((prod:ProductModel,index:number) => { 
        return <div className='col-4' key={prod.id}>
             <div className="card">
                <img src={prod.image} alt="" />
                <p>{prod.price}</p>
            </div>
        </div>
           
     })
   }
  return (
    <div className='container'>
        <h1 className='text-center'>Shoese shop</h1>
        <div className="row">
            {renderProduct()}
        </div>
    </div>
  )
}