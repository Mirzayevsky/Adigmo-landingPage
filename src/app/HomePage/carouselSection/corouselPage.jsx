import React,{useState} from "react";
import {
    CarouselWrapper,
    ChangeContent,
    Container,
    Content, ContentTabs,
    ContentWrapper, Tab,
    TabWrapper,
    Title
} from "./corouselPage.style";
import img1 from "../../../source/assets/carousel/1.png"

const collection = [
    { id:0,img: img1, caption: "Caption eleven" },
    { id:1, img: img1, caption: "Caption twelve" },
    { id:2, img: img1, caption: "Caption thirteen" }
];


const CarouselMain = () => {


return(
   <CarouselWrapper>
    <Title>5x  ROASdan Foydalanish</Title>
       <Container>
           <ContentWrapper>
               <TabWrapper>
                   {/*className={toggleTab === 1 ? "tabs-active-tabs" : "tabs"} onClick={()=> toggleTab(1)}*/}
                   <Tab >
                       <div>Reklama
                           Google & Yandex
                       </div>
                   </Tab>
               </TabWrapper>
               <ContentTabs className={"content-tabs"}>
                   {collection.map((id,img,caption)=>{
                       <Content key={id}>
                           <img src={img}/>
                           {caption}
                       </Content>

                   })}
               </ContentTabs>

           </ContentWrapper>
       </Container>

   </CarouselWrapper>
)
}
export default CarouselMain