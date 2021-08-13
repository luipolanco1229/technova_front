import React from "react";

export const ProductDetailComponent = ({product}) => {
  console.log(product); 
  return (

    <div className="individualProductBackground">
      <div className="individualProductHeader">
        <div className="individualProductTitle">{product.nombre}</div>
      </div>
      <div className="individualProductCenter">
        <div className="individualProductImg">
          <center>
            <img src ={product.img}></img>
          </center>
        </div>
        <div className="individualProductFeactures">
          <div className="individualProductFeacturesTitle">Características</div>
          <div className="individualProductFeacturesTable">
            <b>Marca:</b> {product.marca}
            <hr></hr><b>Precio:</b>
             {product.precio}
             
            {/* 
            Agregar lógica para que se creen caracteristicas según los elementos de cada categoría<hr></hr>
            Caracteristica 3: Lorem
            <hr></hr>
            Caracteristica 4: Lorem
            <hr></hr>
            Caracteristica 5: Lorem
            <hr></hr>
            Caracteristica 6: Lorem
            <hr></hr> */}
          </div>
        </div>
      </div>
      <div className="individualProductShop">
        <div className="individualProductBuy"><p>Comprar</p></div>
        <div className="individualProductCar"><p>Añadir al carrito</p></div>
      </div>
    </div>


    // <div className="viewProductBackground">
    // <div className="sectionBorder">
    //     <div className="viewProductHeader">
    //       <div className="viewName">
    //         <span>{product.nombre}</span>
    //       </div>
    //       <div className="viewPrice">
    //         <span>{product.precio}</span>
    //       </div>
    //     </div>

    //     <div className="viewProductImg">
    //       <div className="viewContainerImg">
    //         <center className="centerImg">
    //           <img
    //             src="https://hogarymoda.com.co/wp-content/uploads/2020/09/CX50S1USM_1.png"
    //             alt="img_product"
    //           ></img>
    //         </center>
    //       </div>
    //     </div>

    //     <div className="viewProductBottom">
    //       <div className="viewFeactures">
    //           <div className="moreFeactures">
    //             <ul className="menuFeactures">
    //               <li>
    //                 <div className="centerFeactures"><p className="moreFeacturesText titleFeactures">Ver más ▼</p></div>
    //                  <ul>
    //                    <li>
    //                      <center>
    //                   <table className="feacturesTable">
    //                     <tr>
    //                       <td>Nombre</td> <td>A</td> 
    //                     </tr>
    //                     <tr>
    //                       <td>Marca</td> <td>B</td> 
    //                     </tr>
    //                     <tr>
    //                       <td>Tamaño</td> <td>C</td> 
    //                     </tr>
    //                     <tr>
    //                       <td>Modelo</td> <td>D</td> 
    //                     </tr>
    //                     <tr>
    //                       <td>SmartTV</td> <td>E</td> 
    //                     </tr>
    //                     <tr>
    //                       <td>Precio</td> <td>F</td> 
    //                     </tr>
    //                   </table>
    //                 </center>
    //                    </li>
    //                  </ul>
    //               </li>
    //             </ul>
    //           </div>
    //       </div>
    //       <div className="viewDivBuy">
    //         <div className="buyProduct">
    //           <div>Comprar</div>
    //         </div>
    //         <div className="addToCar">
    //           <div>Añadir al carrito</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

