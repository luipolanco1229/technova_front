import React from "react";
import { ProductComponent } from "./ProductComponent";

export const ProductsComponent = ({ products, title }) => {
    return (
        <div className="sectionBackground">
            <div className="sectionHeader">
                <p className="sectionTitle">{title}</p>
            </div>
            {!products? 
            <i className='fas fa-sync fa-10x fa-spin'></i> :
             products?.map(product => <ProductComponent product={product} key={product?.id} />)}
            <div className="moreProducts">Next =&gt;</div>
        </div>
    );

}