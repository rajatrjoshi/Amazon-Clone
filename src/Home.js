import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
                <Product 
                id={202101}
                title="The Monk Who Sold His Ferrari (Paperback)" 
                price={170} 
                image="https://www.cyberkart.in/wp-content/uploads/2019/11/The-Monk-Who-Sold-His-Ferrari.jpg" alt=""
                rating={5}
                />

                <Product
                id = {202102}
                title="The Alchemist (Paperback)"
                price={245}
                image="https://n1.sdlcdn.com/imgs/b/y/q/624303691271_1-ed95c.jpg" 
                rating={4}
                />

                     
            
            </div>
            <div className="home__row">
            <Product
                id = {202103}
                title="All Rights Reserved For You"
                price={120}
                image="https://kbimages1-a.akamaihd.net/a120bdfa-44c8-461f-b9a8-509ba4cdd2c5/353/569/90/False/all-rights-reserved-for-you.jpg" 
                rating={4}
                />

                <Product
                id= {202104}
                title="Philips Hair Dryer"
                price={750}
                image="https://rukminim1.flixcart.com/image/416/416/kamtsi80/hair-dryer/w/r/q/philips-h8144-06-original-imafs647u5hpzjg2.jpeg?q=70" 
                rating={4}
                />  

                <Product
                id={202105}
                title="Philips Trimmer"
                price={875}
                image="https://www.philips.co.in/c-dam/b2c/mg-q4-campaign/Male-grooming-cat-update/locales/en_MY/beard-trimmers/bt3221/philips-beard-trimmer.png" 
                rating={5}
                />      
                            </div>
            <div className="home__row">
                <Product
                id={202106}
                title="ASUS XG49VQ Gaming Monitor"
                price={26000}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUdhKXclzFiNrvfMKbgoTLWwk75e-GJ3bRA&usqp=CAU"
                rating={5}
                />
            </div>
        </div>
        </div>
    )
}

export default Home;
