import styled from "styled-components";

export const CarouselWrapper = styled.div`
padding: 150px 0;
display: flex;
  @media screen and (max-width: 600px ){
    padding: 0;
    height: fit-content;
  }
`;
export  const TabWrapper = styled.div`
 display: flex;
 width: 90%;
 margin: auto;
 justify-content: space-between;
 align-items: center;
 border-bottom: 1px solid #222;
 @media  screen and  (max-width: 700px){
  width: 100%;
  flex-direction: column;
 }
 
`;
export const Tab = styled.div`
 width: 30%;
 height: 50px;
 //height: fit-content;
 font-family: Roboto;
 font-size: 16px;
 font-weight: 500;
 line-height: 20px;
 letter-spacing: 0em;
 text-align: center;
 cursor: pointer;
 padding: 7px 0;
 display: flex;
 align-items: center;
 justify-content: center;
 // background-color: ${({ color }) => (color === true ? "#392ED6" : "#fff")};
 &:hover{
  transition: .5s;
  color:#fff;
  background: #392ED6;
 }
 @media  screen and  (max-width: 700px){
  width: 100%;
  flex-direction: column;
 }
`;


export  const  Container = styled.div`
  width: 80%;
  margin: auto;
 @media screen and (max-width: 700px){
  width: 90%;
 }
`;
export const Title = styled.div`
 color: #fff;
    font-size: 22px;
 width: 527px;
 margin: 120px auto;
 height: 106px;
 border-radius: 24px;
 background: linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%);
 font-family: Roboto;
 font-size: 36px;
 font-weight: 700;
 line-height: 42px;
 letter-spacing: 0em;
 text-align: left;
 display: flex;
 align-items: center;
justify-content: center;
 @media  screen and  (max-width: 700px){
  font-size:24px;
  width: 100%;
  width: 100%;
  height: 90px;
  margin: 70px auto;

 }
 

`;
export const Main = styled.div`
 display: flex;
 flex-direction: column;
 width: 50%;
 height: 100%;
 @media  screen and  (max-width: 700px){
  width: 100%;
 }
 

`;

export const OurService = styled.div`
 font-family: Roboto;
 font-size: 64px;
 font-weight: 900;
 line-height: 75px;
 letter-spacing: 0em;
 text-align: left;
 color: #000000;
 text-transform: uppercase;
 padding: 30px 5px;
 @media  screen and  (max-width: 700px){
  font-size: 24px;
  text-align: center;
  width: 100%;
  margin: auto;
  
 }

`;

export  const  Wrapper = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
 align-items: center;
  @media  screen and  (max-width: 700px){
   flex-direction: column;
  }
`;
export  const  ImageSide = styled.div`
  width: fit-content;
  height:100%;
  display: flex;
  align-content: center;
  justify-content: center;
 
`;
export  const  TabSide = styled.div`
 width: 100%;
 background: #fff;
 border-radius: 25px;
 
`;
export  const  TabContentWrapper = styled.div`
  width: 100%;
  height: 100%;
 padding: 10px 0;
 padding: 0px 0;
`;
export  const  Content = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
 @media  screen and  (max-width: 700px){
  flex-direction: column;
  width: 100%;
 }
`;
export const LeftSide = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
    
`;

export  const  ContentTitle = styled.div`
 font-family: Roboto;
 font-size: 28px;
 font-weight: 700;
 line-height: 33px;
 letter-spacing: 0em;
 text-align: left;
 width: 80%;
 @media  screen and  (max-width: 700px){
  text-align: center;
  font-size: 20px;
  width: 100%;
  line-height: 28px;
  margin: auto;
 }

`;
export  const  ContentSubTitle = styled.div`
 font-family: Roboto;
 font-size: 16px;
 font-weight: 400;
 line-height: 19px;
 letter-spacing: 0em;
 text-align: left;
 padding-top: 15px;
 width: 80%;
 @media  screen and  (max-width: 700px){
  text-align: center;
  font-size: 17px;
  padding: 15px 0;
  width: 90%;
  margin: auto;
 }

`;
export const RightSide = styled.div`
  height: 100%;
  width: 80%;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
 @media  screen and  (max-width: 700px){
  width: 90%;
  margin: auto;
 }
`;
 export const Button = styled.div`
     font-size: 16px;
      font-weight: 500;
   margin: 5px;
   padding: 10px 15px;
   border: 1px solid ;
   border-color: linear-gradient(91.8deg, #1F5AFF 0%, #392ED6 48.96%, #1A2032 100%);
cursor: pointer; 
   //border-image-slice: 1;
   border-radius: 52px !important;
  @media  screen and  (max-width: 700px){
   width: 90%;
  }
 `;
 export const InnerContainer = styled.div`
   width: fit-content;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   .flex-row{
     display: flex;
   }
 `;

export const TabContent = styled.div`
 
`;
