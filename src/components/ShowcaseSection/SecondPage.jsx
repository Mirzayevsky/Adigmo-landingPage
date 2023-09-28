import React from "react";
import {
  SecondWrapper,
  Container,
  ShowInform,
  TopWrapper,
  AmongWrapper,
} from "./SecondPage.styles";
import Text from "../../language/langManager";

const SecondPage = () => {
  return (
    <SecondWrapper>
      <Container>
        <ShowInform>
          <TopWrapper>
            <div className="result">
              <Text id={"natijagayonaltirilgan"}/> <br />
              <Text id={"tajriba"}/>
            </div>
            <div className="sales">
              <Text id={"spSales"}/> <br /> <Text id={"salesDown"}/>
            </div>
          </TopWrapper>

          <AmongWrapper>
            <div className="inner-wrap">
              <div>ROAS =</div>
              <div>

                <div className={"among-content"}>
                  <div className={'sales-up'}>
                    <Text id={"slUp"}/>
                  </div>
                  <div className="sale-up"></div>
                </div>

                <div className="spends">
                  <Text id={"outCome"}/>
                </div>
              </div>
              <div> = 5</div>
            </div>



            <div className="bottom-title">
              <Text id={"whatRoas"}/>
            </div>
            <div className="bottom-text">
              <Text id={"roasTextOne"}/> <br/>
              <Text id={"roasTextTwo"}/>
            </div>
          </AmongWrapper>

        </ShowInform>
      </Container>
    </SecondWrapper>
  );
};

export default SecondPage;
