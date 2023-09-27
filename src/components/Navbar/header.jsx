import React, {useState} from "react";
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
    const [isRed, setIsRed] = useState(true);
    const [blue, setBlue] = useState(false);


    const state = useSelector((state) => state);
    const lang = state.lang;
    const { UZBEK, RUSSIAN } = langs;

    const  langFunc = () => {
        const handleTwo = () => {
            setIsRed(prevState => !prevState);
            setBlue(
                lang === UZBEK ? false : ""
            )
        };
        handleTwo()
        dispatch(switchToUzbek())
    }
    const  func = () => {
        const handleClick = () => {
            setBlue(prevState => !prevState);
            setIsRed(false)

        };

        handleClick()
        dispatch(switchToRussian())
    }

  return (
    <HeaderWrapper>
      <Container>
        <HeaderTop>
          <Logo>
            <LogoSvg />
          </Logo>
          <LangButtonWrapper  >
            <LangButton isRed={isRed} onClick={langFunc}>
                UZ
            </LangButton>
            <LangSecondBnt blue={blue} onClick={func} >
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
