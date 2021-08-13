import React from "react";
import { Link, useLocation } from "react-router-dom";

export const ProductComponent = ({ product }) => {
    const pathName = useLocation().pathname.slice(1);
  return (
    <div className="sectionBackground">

      <div className="productContainerFlex">
        <div className="productContainerDiv">
          <div className="cardIndividualProductTop">
            <p>{product.nombre}</p>
          </div>
          <div className="cardIndividualProductBottom">
            <div className="cardIndividualProductLeft">
                <p>
                    <div className="imgGrid"><img src={product.img} alt="Producto"></img></div>
                </p>
            </div>
            <div className="cardIndividualProductRight">
              <div className="cardIndividualRightFlex">
              <div className="cardPrice"><b>Precio: </b>{product.precio}</div>
                <div className="cardBrand"><b>Marca: </b> {product.marca}</div>
              </div>              
              <div className="cardMoreDetailsCenter"><Link to={`/product/${product.id}/${pathName}`}><p>Ver más detalles</p></Link></div>
              
            </div>
          </div>
        </div>

        <div className="productContainerDiv">
          <div className="cardIndividualProductTop">
            <p>{product.nombre}</p>
          </div>
          <div className="cardIndividualProductBottom">
            <div className="cardIndividualProductLeft">
                <p>
                    <div className="imgGrid"><img src={product.img} alt="Producto"></img></div>
                </p>
            </div>
            <div className="cardIndividualProductRight">
              <div className="cardIndividualRightFlex">
              <div className="cardPrice"><b>Precio: </b>{product.precio}</div>
                <div className="cardBrand"><b>Marca: </b> {product.marca}</div>
              </div>              
              <div className="cardMoreDetailsCenter"><Link to={`/product/${product.id}/${pathName}`}><p>Ver más detalles</p></Link></div>
              
            </div>
          </div>
        </div>
        </div>



        </div>

        
    
      
  );
};
// export const ProductComponent = ({ product }) => {
//     const pathName = useLocation().pathname.slice(1);
//     return (
//         <div className="productContainer">
//             <div className="ProductItem">
//                 <div className="productCard">
//                     <div className="productCardLeft">
//                         <div className="imgGrid">
//                             <img src={product.img} alt="Producto"></img>
//                         </div>
//                     </div>
//                     <div className="productCardRight">
//                         <div clasName="productHeader">
//                             <div className="productName" name="productName">{product.nombre}</div>
//                             <div className="productPrice" name="productPrice">{product.precio}</div>
//                             <div className="aditionalDetails" name="productBrand">{product.marca}</div>
//                         </div>
//                         <Link to={`/product/${product.id}/${pathName}`}>
//                             Ver más detalles
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ); 
// }