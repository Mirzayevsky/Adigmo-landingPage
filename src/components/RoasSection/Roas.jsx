import React, { useState } from "react";
import Slider from "react-slick";
import {
  Card,
  Content,
  RoasButton,
  RoasCarouselWrapper,
  RoasHeader,
  RoasWrapper,
  ShowWrapper,
} from "./Roas.styles";
import Text from "../../language/langManager";
import PopUp from "../popUp";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";



const Roas = () => {
    
  const [popUp, setPopUp] = useState(false);
  const popChange = () => {
    setPopUp(!popUp);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const data = [
    {
      id: 0,
      title: "titleRoasOne",
      text: "subtitleRoasOne",
    },
    {
      id: 1,
      title: "titleRoasTwo",
      text: "subtitleRoasTwo",
    },
    {
      id: 2,
      title: "titleRoasThird",
      text: "subtitleRoasThird",
    },
    {
      id: 3,
      title: "titleRoasFourth",
      text: "subtitleRoasFourth",
    },
    {
      id: 4,
      title: "titleRoasFifth",
      text: "subtitleRoasFifth",
    },
  ];

  return (
    <RoasWrapper>
      {popUp === true ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : ""}
      <Content>
        <RoasHeader>
          <p className={"title"}>
            <Text id={"roasTitle"} />
          </p>

          <ShowWrapper>
            <div className="up">
              <Text id={"customerOne"} />
            </div>

            <div className="down">
              <p className="pl-one">
                <Text id={"customertwo"} />
              </p>
              <p className="pl">
                <Text id={"priceThatspentToReklame"} />
              </p>
            </div>
          </ShowWrapper>
        </RoasHeader>
        <RoasCarouselWrapper>
          <Slider {...settings}>
            <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          </Slider>
        </RoasCarouselWrapper>
        <RoasButton onClick={popChange}>
          <Text id={"roasBtnOne"} />
          <br />
          <Text id={"roasBtnTwo"} />
        </RoasButton>
      </Content>
    </RoasWrapper>
  );
};
export default Roas;
