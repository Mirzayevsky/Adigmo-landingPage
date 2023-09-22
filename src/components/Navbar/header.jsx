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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import langs from "../../constants/lang"
import Text from "../../language/langManager";
import {switchLang, switchToRussian, switchToUzbek} from "../../redux/modules/lang/langAction";

const Header = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const lang = state.lang;
    const cart = state.cart;

    const { UZBEK, RUSSIAN } = langs;

  return (
    <HeaderWrapper>
      <Container>
        <HeaderTop>
          <Logo>
            <LogoSvg />
          </Logo>
          <LangButtonWrapper  >
            <LangButton onClick={() => dispatch(switchToUzbek())}>
                UZ
            </LangButton>
            <LangSecondBnt onClick={() => dispatch(switchToRussian())}>
                RU
            </LangSecondBnt>
          </LangButtonWrapper>
        </HeaderTop>

        <MainWrapper>
         <RightWrapper>
         <Title>
           <Text id="sotuvingiznibiz"/>
            <br />
             <Text id={"barobarga"}/>
             <br /> <Text id={"oshiring"}/>
          </Title>
          <HeaderButton>
            <HearderInner>
                <Text id={"bepulMaslaxat"}/>
            </HearderInner>
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
