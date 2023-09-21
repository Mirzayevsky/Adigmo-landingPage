import React,{useState} from "react";
import {
    CarouselWrapper,
    ChangeContent,
    Container,
    Content,
    ContentWrapper, Tab,
    TabWrapper,
    Title
} from "./corouselPage.style";


const CarouselMain = () => {
    const [active:string, setActive] = useState();

return(
   <CarouselWrapper>
    <Title>5x  ROASdan Foydalanish</Title>
       <Container>
        <ChangeContent>
            sdsd
        </ChangeContent>

           <ContentWrapper>
               <TabWrapper>
                   <Tab>
                       <div>Reklama
                           Google & Yandex </div>
                   </Tab>
                   <Tab>
                       <div>
                           Target Reklama
                           Meta Instagram & Facebook
                       </div>
                   </Tab>
                   <Tab>
                       <div>
                           Sotuvchi Sayt
                           (Landing Page)
                       </div>
                   </Tab>
               </TabWrapper>
               <Content>
               </Content>
           </ContentWrapper>
       </Container>

   </CarouselWrapper>
)
}
export default CarouselMain