import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/Yjc3NGZmOTkt/Yjc3NGZmOTkt-NzdiMzk2YjYt-w3000._CB406219147_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1234"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="1235"
            title="AmazonBasics Microwave, Small, 0.7 Cu. Ft, 700W, Works with Alexa"
            price={59.99}
            image="https://m.media-amazon.com/images/I/41egiew3LCL._AC_SY322_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1236"
            title="Bose Home Speaker 500 with Alexa Voice Control Built-in, Black"
            price={299.9}
            image="https://m.media-amazon.com/images/I/41DEXHM8zLL._AC_SY322_.jpg"
            rating={3}
          />
          <Product
            id="1237"
            title="Apple TV (32GB, 4th Generation)"
            price={149.0}
            image="https://m.media-amazon.com/images/I/31S0agwZcxL._AC_SY322_.jpg"
            rating={5}
          />
          <Product
            id="1238"
            title="New Apple Watch Series 6 (GPS, 44mm) - Gold Aluminum Case with Pink Sand Sport Band"
            price={529.99}
            image="https://m.media-amazon.com/images/I/811Pi5e-qIL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1239"
            title="Apple iPhone 11 back-case"
            price={35.96}
            image="https://m.media-amazon.com/images/I/41MTckeKCzL._AC_SY322_.jpg"
            rating={2}
          />
          <Product
            id="1249"
            title="Sony PlayStation 4 Pro 1TB Console - Black (PS4 Pro)
            "
            price={99.99}
            image="https://m.media-amazon.com/images/I/71jN27mYlhL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="1259"
            title="Sony X900H 75 Inch TV: 4K Ultra HD Smart LED TV with HD"
            price={299.99}
            image="https://m.media-amazon.com/images/I/612U-Yeox0L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="1299"
            title="The Girl Who Lived: A Thrilling Suspense Novel"
            price={9.99}
            image="https://m.media-amazon.com/images/I/91PRf2I5gDL._AC_SX960_SY720_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
