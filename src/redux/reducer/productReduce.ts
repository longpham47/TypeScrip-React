import { URL_API } from './../../util/setting';
import { AppDispatch } from './../configStore';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
// toạ interFACE producmodeel
export interface ProductModel {

    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;

}

// state MAẸT ĐỊNH
const initialState:any = {
    arrProduct: []
}


// KHAI BÁO REDUCER
export const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductListAction: (state, action: PayloadAction<ProductModel[]>)=>  {
            state.arrProduct = action.payload;
        }

    }
});
export const { getProductListAction } = productReducer.actions

export default productReducer.reducer

//action api
export const getProducAPI = () => {
    //AppDispatch kiểu dữ liệu của hàm dispatch(dispatch2 của reduxthunk)
    return (dispatch: AppDispatch) => {
        axios({
            method: "get",
            url: `${URL_API}/Product`
        }).then((result) => {
            let arrProduct: ProductModel[] = result.data.content;
            const action = getProductListAction(arrProduct)
            dispatch(action)

        }).catch((error) => {
            console.log(error)
        })

    }
}