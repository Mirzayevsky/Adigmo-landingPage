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

const PortfolioPage = () => {
  return (
    <PortfolioWrapper>
      <Container>
        <Title>Portfolio </Title>
        <FirstWrapper>
          <div className="img-wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <div>
              <span>Kompaniya:</span> Seamosstransformation.com seamoss gel
              qo'shimchalari bo'yicha yetakchi hisoblanadi.
            </div>
            <div>
              <span> Muammo:</span> Raqobat oshayotgan oziq-ovqat qo'shimchalari
              bozorida reklama investitsiyalaridan barqaror daromad olishga
              erishish.
            </div>

            <div>
              <span>Amalga oshirildi:</span> Google Ads matnli reklamasidan
              foydalanilgan holda maqsadli auditoriyani to’gri target qilindi va
              turli xil kreativlar va e’lonlar sinab ko'rildi.
            </div>
            <div>
              <span> Natija: </span>30 kunda 5X ROASga erishildi, reklamaga 88
              000 AQSh dollar sarflab, 449 000 dollarlik savdo qilindi. <br />
            </div>

            <div>
              {" "}
              <span>Xulosa:</span> To'g'ri strategiya va hamkorlik bilan
              barqaror va ajoyib natijalarga erishish mumkin.
            </div>
          </div>
        </FirstWrapper>

        <FirstWrapper>
          <div className="text text-2">
            Diamond Bedding companiyasi uchun 12x ROAS natija. Buyuk Britaniyada
            ko‘rpa va yostiqlar sotuvchi Diamond Bedding o‘zining onlayn
            savdosini oshirishga intilmoqda. Tajribamizdan foydalanib, biz 30
            kun ichida 5000 funt sterlinglik Google Ads sarfini 61 000 funt
            sterlingga aylantirdik va reklama qaytimi ROASni 11 baravar
            oshirishga erishdik.
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
            <div>Svetsiyaning “Ark of Sweden” kompaniyasi uchun 17X ROAS!</div>
            Ark of
            <div>
              Sweden, yangi avlod qo'shimchalari bo'yicha yetakchi, elektron
              tijorat orqali savdo hajmini oshirmoqchi edi.
            </div>
            <div>
              Bizoogle Ads orqali 7 090 kr Gona sarflab, atigi 90 kun ichida bu
              kompaniya uchun
            </div>
            126823 kronalik savdo hajmiga erishdik. <br /> Bu 17 barobar ROAS
            deganidir!
          </div>
        </FirstWrapper>
        <SecondWrapper>
          <div className="second-wrapper-text">
            <div> Buyuk Britaniyaning “RDX” kompaniyasi uchun 18X ROAS! </div>

            <div>
              "RDX" Kampaniyasi Bok va UFC va boshqa Sport kiyimlari sotadigan
              yetakchi onlayn do'kon hisoblanadi, elektron tijorat orqali savdo
              hajmini oshirmoqchi edi.
            </div>

            <div>
              Biz Facebook Ads orqali 3 oy ichida 9 barobar savdo hajmiga
              erishdik. Oxirgi 15 kun ichida bu ko'rsatkich 20 barbobarga oshdi!
            </div>
          </div>
          <div className="img-wrapper">
            <img src={img4} alt="" className="img-top" />
            <img src={img5} alt="" className="img-bottom" />
          </div>
        </SecondWrapper>
      </Container>
    </PortfolioWrapper>
  );
};

export default PortfolioPage;
