import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const[{basket, user}, dispatch] = useStateValue();
   
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmsxtXw-nT_qN4-zUnMVqyqfQc5WoJ5an6g&usqp=CAU" alt=""/>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title ={item.title}
                            image={item.image}
                            price ={item.price}
                            rating ={item.rating}
                        />
                    ))}
                    
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
                
            </div>
        </div>
    )
}

export default Checkout;
