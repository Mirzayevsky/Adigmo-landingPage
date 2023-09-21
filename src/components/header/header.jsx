import React from "react";
import {
  Container,
  HeaderButton,
  HeaderTop,
  HeaderWrapper,
  HearderInner,
  LangButton,
  LangButtonWrapper,
  LangSecondBnt,
  LeftImgWrapper,
  Logo,
  MainWrapper,
  RightWrapper,
  Title,
} from "./header.style";
import { ReactComponent as LogoSvg } from "../../source/logo/ALogo.svg";
import ceoImg from '../../source/assets/images/qqq.png'


const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderTop>
          <Logo>
            <LogoSvg />
          </Logo>
          <LangButtonWrapper>
            <LangButton>UZ</LangButton>
            <LangSecondBnt>RU</LangSecondBnt>
          </LangButtonWrapper>
        </HeaderTop>

        <MainWrapper>
         <RightWrapper>
         <Title>
            SOTUVINGIZNI BIZ
            <br /> BILAN 2-3 BAROBARGA <br /> OSHIRING!
          </Title>
          <HeaderButton>
            <HearderInner>Bepul Maslaxat!</HearderInner>
          </HeaderButton>
         </RightWrapper>
          <LeftImgWrapper>
           <img alt="ceoimg" src={ceoImg}/>
          </LeftImgWrapper>
        </MainWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
