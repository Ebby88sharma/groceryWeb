import React from 'react'
import "./Home.css";
import banner from "./banner.PNG";
import cook from "./cook.PNG";
import apple from "./apple.PNG";                    
import pan from "./pan.PNG";
import egg from "./egg.PNG";
import banana from "./banana.PNG";
import milk from "./milk.PNG";
import broccoli from "./broccoli.PNG";
import Item from "./Item";
import {Link} from "react-router-dom";
import almonds from "./almonds.PNG";




function Home() {
    return (
        <div classname="home">
            <Link to="/login">
            <img className="home__banner"
            src={banner} 
            alt=""/></Link>

            {/* Product id,title,price,rating,image */}
             <div className="home__row">
            <Item
             id="123" 
            title="Halloren Original Cookie Dough Half-Baked Brownie Chocolate Bar 10-Pack (10x 88 g)" 
            price={0.53} 
            rating={5} 
            image={cook}  
            />

           <Item
            id="234" 
            title="Fresho Farm Banana -Medium, Growth Hormone, anti-oxidant 12 pcs" 
            price={0.90} 
            rating={5} 
            image={banana}
            />
             <Item
             id="345" 
            title="Egg Pancakes, Organic, no added Presrvatives from Pannicannos-12/8/4 pcs" 
            price={1.50} 
            rating={5} 
            image={egg}
            />

          
             <Item
             id="456" 
            title="Danone Greek- Style yogurt/Dahi- Direct from Farms- 1/3/5 kg" 
            price={2.13} 
            rating={5} 
            image="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b27ab792-6b99-428e-9fa9-e6253ec8d7c4_425x425.jpg"
            />

           <Item
            id="567" 
            title="Fresho Farm Eggs - Table Tray, Medium,Antibiotic Residue-Free, Growth Hormone 8 pcs" 
            price={2.32} 
            rating={5} 
            image="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
            </div>
            <div className="home__row">
            <Item 
            id="678" 
            title="Weihenstephan milk 3.5 percent fett - 12x 1 liter/8x 1 litre" 
            price={3.52} 
            rating={5} 
            image={milk}
            />

           <Item
            id="789" 
            title="Tata iodine salt - 1kg" 
            price={0.75} 
            rating={5} 
            image="https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg"
            />
            <Item
             id="890" 
            title="India Gate Basmati Rice/Basmati Akki - Dubar, 1 kg Pouch" 
            price={3.03} 
            rating={5} 
            image="https://www.bigbasket.com/media/uploads/p/mm/283426_2-india-gate-basmati-rice-feast-rozzana.jpg"
            />
            </div>
            <div className="home__row">
            <Item 
            id="120" 
            title="MAGGI Masala 2 Minute Instant Noodles" 
            price={0.35} 
            rating={5} 
            image="https://www.bigbasket.com/media/uploads/p/s/266165_10-maggi-masala-2-minute-instant-noodles.jpg"
            />
             <Item 
            id="129" 
            title="Sicilian organic Orlando almonds - 500g - vegan" 
            price={1.22} 
            rating={5} 
            image={almonds}
            />
             <Item 
            id="130" 
            title="Broccoli Fresh 300 gm to 350/500 grams" 
            price={0.99} 
            rating={5} 
            image={broccoli}
            />
             
             <Item 
            id="131" 
            title="Apple - Red Delicious, Fresh 300 gm to 350/500 grams" 
            price={2.39} 
            rating={5} 
            image={apple}
            />
             <Item 
            id="132" 
            title="Jimmy Dean® Meat Lovers Breakfast Bowl, 7 oz" 
            price={0.99} 
            rating={5} 
            image={pan}
            />
            </div>
            {/* product */}
        </div>
    )
}

export default Home
