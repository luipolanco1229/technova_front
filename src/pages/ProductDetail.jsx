import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailComponent } from "../components/ProductDetailComponent";
import { ProductsComponent } from '../components/ProductsComponent';
import AXIOS from '../environment/AXIOS_CONFIG';
import { RESOURCE_URL } from '../environment/RESOURCE_URL';

export const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const { id, type } = useParams();
    console.log(type); 

    const getSmartphonesById = () => {
        AXIOS.get(RESOURCE_URL.getSmartphonesById(id)).then(res => setProduct(res.data));
    }

    
    const getComputersById = () => {
        AXIOS.get(RESOURCE_URL.getComputersById(id)).then(res => setProduct(res.data));
    }

    
    const getTvsById = () => {
        AXIOS.get(RESOURCE_URL.getTvsById(id)).then(res => setProduct(res.data));
    }

    
    const getGadgetsById = () => {
        AXIOS.get(RESOURCE_URL.getGadgetsById(id)).then(res => setProduct(res.data));
    }

    useEffect(() => {
        if(type === 'smartphones'){
            getSmartphonesById(); 
        }else if(type === 'computers'){
            getComputersById(); 
        }else if(type === 'gadgets'){
            getGadgetsById();
        }else{
            getTvsById(); 
        }
    }, []);

    return (
        <ProductDetailComponent product={product}/>
    );
}
