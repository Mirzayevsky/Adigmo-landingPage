import React from "react";
import {
  Container,
  FirstWrapper,
  PortfolioWrapper,
  SecondWrapper,
  Title,
} from "./portfolioPage.styles";
import img1 from "../../source/assets/images/a.png";
import img2 from "../../source/assets/images/a2.png";
import img3 from "../../source/assets/images/img3.png";
import img4 from "../../source/assets/images/img4.png";
import img5 from "../../source/assets/images/img5.png";
import Text from "../../language/langManager";

const PortfolioPage = () => {
  return (
    <PortfolioWrapper>
      <Container>
        <Title>
          <Text id={"portfolio"}/>
        </Title>
        <FirstWrapper>
          <div className="img-wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <span>
              <Text id={"company"}/> :
            </span>
            <Text id={"companyOne"}/> :<br/>
            <span><Text id={"problem"}/> :</span><Text id={"problemText"}/> <br/>
            <span><Text id={"carryOut"}/> :</span> <Text id={"carryOutText"}/><br/>
           <span> <Text id={"result"}/> :</span> <Text id={"resultText"}/> <br/>
             <span><Text id={"conclusion"}/>:</span><Text id={"conclusionText"}/> <br/>
          </div>
        </FirstWrapper>

        <FirstWrapper className={"second"}>
          <div className="text text-2">
            <Text id={"diamondRoas"}/>
          </div>
          <div className="img-wrapper">
            <img src={img2} alt="" />
          </div>
        </FirstWrapper>

        <FirstWrapper>
          <div className="img-wrapper ">
            <img src={img3} alt="" className="wrapper-2" />
          </div>
          <div className="text text-2 text-3">
            <Text id={"swedin"}/>
          </div>
        </FirstWrapper>

        <SecondWrapper>
          <div className="second-wrapper-text">
            <Text id={"gratBritain"}/>

          </div>
          <div className="img-wrapper">
            <img src={img5} alt="" className="img-top" />
            <img src={img4} alt="" className="img-bottom" />
          </div>
        </SecondWrapper>
      </Container>
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
