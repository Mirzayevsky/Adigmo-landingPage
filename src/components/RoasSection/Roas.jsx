import React, { useState } from "react";
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
import ReactSlick from "../ReactSlick";



const Roas = () => {
    
  const [popUp, setPopUp] = useState(false);
  const popChange = () => {
    setPopUp(!popUp);
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
          <ReactSlick/>
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
