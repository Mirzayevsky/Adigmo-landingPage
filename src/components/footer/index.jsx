import React from "react";
import {FooterBottom, FooterWrapper, Header, Wrapper} from "./style";
import {ReactComponent as SvgLogo} from "../../source/assets/footer/Cool job/huuhuh 1.svg";
import logo from "../../source/assets/footer/huuhuh 1.png";
import Text from "../../language/langManager";
const  Footer = ()=> {
    return(
        <FooterWrapper>
            <Wrapper>
                <Header>
                    <div className={"icon"}>
                        <img src={logo}/>
                    </div>
                    <div className={"location"}>
                        <Text id={"footerLocOne"}/> <br/>
                        <Text id={"footerLocTwo"}/>
                    </div>
                </Header>

                <Header>
                   <div className={"past-foot mini-text"}>
                       Digital Marketing Agency
                   </div>
                    <div  className={"past-foot mini-text-2"}>

                        <a href="tel:+998977531401"> <Text id={"footerPhone"}/>: +998 (97) 753 14 01</a>
                    </div>
                </Header>

            </Wrapper>

            <FooterBottom>
                © 2023. Все права защищены Adigmo.uz.
            </FooterBottom>
        </FooterWrapper>
    )
}
export default Footer