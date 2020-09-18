import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB406681182_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="01"
            title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Men's Smartwatch"
            price={22995.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
            rating={4}
            halfrating={0}
            norating={1}
            customer={5464}
          />
          <Product
            id="02"
            title="ASUS ROG Strix GeForce RTX 2080TI Overclocked 11G GDDR6 "
            price={147900.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91nZtx6U6jL._SL1500_.jpg"
            rating={3}
            halfrating={1}
            norating={1}
            customer={987}
          />
          <Product
            id="03"
            title="AMD RYZEN 9 3950X 3rd Generation Desktop Processor Upto 4.7 GHZ / 72 MB Cache"
            price={71000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/7122uH4-hfL._SL1121_.jpg"
            rating={5}
            halfrating={0}
            norating={0}
            customer={2321}
          />
        </div>

        <div className="home__row">
          <Product
            id="04"
            title="Echo Plus (2nd Gen) – built-in Smart Home hub (Black)"
            price={9999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZJvf5xWBL._SL1000_.jpg"
            rating={4}
            halfrating={1}
            norating={0}
            customer={789}
          />
          <Product
            id="05"
            title="Crucial BX500 480GB 3D NAND SATA 2.5-inch SSD"
            price={4540.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61dPLkN4poL._SL1050_.jpg"
            rating={4}
            halfrating={1}
            norating={0}
            customer={6455}
          />
          <Product
            id="06"
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
            price={54999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
            rating={4}
            halfrating={1}
            norating={0}
            customer={25648}
          />
          <Product
            id="07"
            title="Mi Notebook Horizon Edition 14 Intel Core i7-10510U"
            price={59999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg"
            rating={3}
            halfrating={0}
            norating={2}
            customer={874}
          />
        </div>

        <div className="home__row">
          <Product
            id="08"
            title="LG QHD (2560 x 1440) 32 Inch IPS Display 3 Side Borderless - HDR 10"
            price={28999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71lKil3VGCL._SL1252_.jpg"
            rating={3}
            halfrating={0}
            norating={2}
            customer={15654}
          />
          <Product
            id="09"
            title="Gigabyte GP-B700H 700W ATX12V SLI CrossFire 80 PLUS BRONZE"
            price={5750.0}
            image="https://images-na.ssl-images-amazon.com/images/I/6101On8CV0L._SL1000_.jpg"
            rating={4}
            halfrating={1}
            norating={0}
            customer={849}
          />
        </div>

        <div className="home__row">
          <Product
            id="10"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={140800.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
            rating={4}
            halfrating={1}
            norating={0}
            customer={456}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
