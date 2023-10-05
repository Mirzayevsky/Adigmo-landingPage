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
import ceoImg from '../../source/assets/images/Mask group.png'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import langs from "../../constants/lang"
import Text from "../../language/langManager";
import {switchLang, switchToRussian, switchToUzbek} from "../../redux/modules/lang/langAction";
import PopUp from "../popUp";
import LogoMain  from "../../source/logo/1.1 adigmo logo.png"

const Header = () => {
    const dispatch = useDispatch();
    const [isRed, setIsRed] = useState(true);
    const [blue, setBlue] = useState(false);
    const [popUp, setPopUp]=useState(false)


    const state = useSelector((state) => state);
    const lang = state.lang;
    const { UZBEK, RUSSIAN } = langs;
    const popChange = () =>{
        setPopUp(!popUp)
    }

    const  langFunc = () => {
        const handleTwo = () => {
            setIsRed(true);
            setBlue(
                lang === UZBEK ? false : ""
            )
        };
        handleTwo()
        dispatch(switchToUzbek())
    }
    const  func = () => {
        const handleClick = () => {
            setBlue(true);
            setIsRed(false)

        };

        handleClick()
        dispatch(switchToRussian())
    }
  return (
    <HeaderWrapper>
        { popUp === true ? <PopUp popUp={popUp} setPopUp={setPopUp}/> :""
        }
      <Container>
        <HeaderTop>
          <Logo>
            <img src={LogoMain} alt="logo"/>
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
          <HeaderButton onClick={popChange}>
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
