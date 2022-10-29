import React, { Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'


const Cart = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQty = () => {
        const contador = document.querySelector('.count')
        const qty = contador.valueAsNumber+1;
        setQuantity(qty)
     }
  
     const decreaseQty = () => {
      const contador = document.querySelector('.count')
  
      const qty = contador.valueAsNumber-1;
      setQuantity(qty)
   }

    //Json de ejemplo
   let cartItems=[
        {
            "_id": "6355bca4577133b2d6468333",
            "nombre": "Multiestante",
            "precio": 25000,
            "imagen": "./images/Productos/Multiestane_300x300.jpg",
            "inventario": 22,
        },
        {
            "_id": "6355be3a577133b2d6468338",
            "nombre": "Cesta para Ropa con Tapa",
            "precio": 80000,
            "imagen": "./images/productos/Cesta_para_Ropa.jpg",
            "inventario": 100,
        },
        {
            "_id": "6355c2456c6c59db0344eebd",
            "nombre": "Escurridor de Platos",
            "precio": 100000,
            "imagen": "./images/productos/Escurridor_platos.jpg",
            "inventario": 70,
        },
        {
            "_id": "63513379109735e58d94ade6",
            "nombre": "Portavajilla Gigante",
            "precio": 150000,
            "imagen":  "./images/productos/Portavajillas.jpg",
            "inventario": 70,
        },
        {
            "_id": "6355c8716c6c59db0344eed6",
            "nombre": "Recipiente Plus 8L Decorado",
            "precio": 12000,
            "imagen":  "./images/productos/Recipiente_Plus_8L.jpg",
            "inventario": 40,
        } ,
        {
            "_id": "66355cad56c6c59db0344eee5",
            "nombre": "Recipiente 4 Divisiones con Tapa",
            "precio": 18000,
            "imagen":  "./images/productos/Recipiente_divisiones.jpg",
            "inventario": 40,
        },
        {
            "_id": "6355cbf26c6c59db0344eeef",
            "nombre": "Portacomida Cuadrado Plano",
            "precio": 28000,
            "imagen":  "./images/productos/Portacomidas_4.jpg",
            "inventario": 38,
        } ,
        {
            "_id": "6355cc7a6c6c59db0344eefa",
            "nombre": "Practimueble pequeño",
            "precio": 270000,
            "imagen":  "./images/productos/armario_pequeno.jpg",
            "inventario": 25,
        }
    ]

cartItems = Array.from(cartItems);

    return (
        <Fragment>
            <MetaData title={'Your Cart'} />
            

            {cartItems.length === 0 ? <h2 className="mt-5">Su carrito esta vacio</h2> : (
                <Fragment>
                    
                    <h2 className="mt-5">Su Carrito: <b>{cartItems.length} items</b></h2>

                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">

                        {cartItems && cartItems.map (item => (
                                <Fragment>
                                    <hr />

                                    <div className="cart-item" key={item.nombre}>
                                        <div className="row">
                                            <div className="col-4 col-lg-3">
                                                <img src={item.imagen} alt={item.nombre} height="90" width="115" />
                                            </div>

                                            <div className="col-5 col-lg-3">
                                                <Link to={`/producto/${item._id}`}>{item.nombre}</Link>
                                            </div>


                                            <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                <p id="card_item_price">${item.precio}</p>
                                            </div>

                                            <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                <div className="stockCounter d-inline">
                                                    <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                                    <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                                    <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                                </div>
                                            </div>

                                            <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                <i id="delete_cart_item" className="fa fa-trash btn btn-danger" ></i>
                                            </div>

                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            
                        ))}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Total de la Compra</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">$350.000</span></p>
                                <p>Est. total: <span className="order-summary-values">$380.000</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block">Comprar!</button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Cart