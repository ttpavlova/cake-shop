import React from "react";
import "../css/Popular.css";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

function Popular(props) {

    var settings = {
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        cssEase: 'linear',
        draggable: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      };

    const popularItems = props.allData.filter(item => item.id === "cake2" || item.id === "cake3" || item.id === "pastry2" || item.id === "pastry3");

    const popularList = popularItems.map(item => (
        <ProductCard
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            img={item.img}
            onClick={() => props.onClick(item.id)}
            key={item.id}
        />
    ));

    return (
        <section className="popular" id="popular">
            <div className="popular__container">
                <Slider {...settings}>
                    {popularList}
                </Slider>
                <div className="popular__title">Популярные десерты</div>
            </div>
            
            {/* <div className="cards">
                
            </div> */}
        </section>
    );
}

export default Popular;