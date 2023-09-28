import React from "react";
import {Container, SubTitle, Title, Wrapper} from "./styles";
import Text from "../../language/langManager";
import MessageTik from "../../components/MessageTik";
const Success = () =>{
    return(
        <Wrapper>
            <Container>
                <MessageTik/>
               <div className={"main"}>
                   <Title>
                       <Text id={"successTitle"}/>
                   </Title>
                   <SubTitle >
                       <Text id={"successSubtitle"}/>
                   </SubTitle>
                   <SubTitle>
                       <Text id={"successSubtitleTwo"}/>  <br/>

                       <a className={"ancor"} href="tel:+998977531401">  <Text id={"footerPhone"}/>: +998 (97) 753 14 01</a>
                       </SubTitle>
               </div>

            </Container>
        </Wrapper>
    )
}
export default Success