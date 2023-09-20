import React from "react";
import {
  SecondWrapper,
  Container,
  ShowInform,
  TopWrapper,
  AmongWrapper,
} from "./SecondPage.styles";

const SecondPage = () => {
  return (
    <SecondWrapper>
      <Container>
        <ShowInform>
          <TopWrapper>
            <div className="result">
              Natijaga yo`naltirilgan <br />
              17 yillik tajriba
            </div>
            <div className="sales">
              Sotuvlar = $3000 <br /> Marketing Harajati = $600
            </div>
          </TopWrapper>

          <AmongWrapper>
            <div className="inner-wrap">
              <div>ROAST =</div>
              <div>
                <div>
                  <div className={'sales-up'}>SOTUVLAR ($3000)</div>
                  <div className="sale-up"></div>
                </div>
                <div className="spends">HARJAT ($600)</div>
              </div>
              <div>= 5</div>
            </div>
            <div className="bottom-title">5x ROAS nima?</div>
            <div className="bottom-text">
              Masalan har bir sarflangan $1 uchun $5 gacha Sotuv olib kelinadi. <br />
              Ushbu jarayonda web-analitika, CRM va boshqa tegishli tizimlardan
              foydalaniladi.
            </div>
          </AmongWrapper>
        </ShowInform>
      </Container>
    </SecondWrapper>
  );
};

export default SecondPage;
