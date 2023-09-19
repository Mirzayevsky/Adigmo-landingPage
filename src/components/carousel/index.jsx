import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import car1 from "../../source/assets/carousel/cr1.png"
import car2 from "../../source/assets/carousel/cr2.png"
import car3 from "../../source/assets/carousel/3.png"
import { CarouselTitle } from "./index.styles";

const CarouselNative = () => {
  return (
    <div>
        <Carousel axis="horizontal"  showThumbs={false}  autoPlay={true} infiniteLoop={true} emulateTouch={true}   verticalSwipe={"natural"} showStatus={false}>
                <div className="carousel-card">
                  <CarouselTitle>
                  Bizning Xizmatlar 
                  </CarouselTitle>
                  <img src={car1}  alt="profile"
                       objectFit="cover"
                       fill
                       className="w-full h-full top-0 left-0 object-cover rounded-2xl "/>

                </div>
                <div className="carousel-card">
                  <img src={car2} alt="" />
                </div>
                <div className="carousel-card">
                  <img src={car3} alt="" />
                </div>
            </Carousel>
    </div>
  )
}
export default CarouselNative 