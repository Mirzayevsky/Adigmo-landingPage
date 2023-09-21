import styled from "styled-components";

export const CarouselWrapper = styled.div`
padding: 150px 0;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 100vh;
  @media screen and (max-width: 600px ){
    padding: 0;
    height: fit-content;
  }
`;
export  const  Container = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: blanchedalmond;
  width: 80%;
  margin: auto;
`;
export  const  TabWrapper = styled.div`
  background: #c0b7cb;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export  const  ContentWrapper = styled.div`
    background: rebeccapurple;
  width: 40%;
  height: 375px;
`;
export  const ChangeContent = styled.div`
    height: 400px;
  width: ;
  background: lavender;
    
`;
export  const  Content = styled.div`
  background: darkred;
  height: 500px;
`;
export  const  Tab = styled.div`
    height: 100%;
  width: 33%;
  background:#fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Title = styled.div`
width: 387px;
border-radius: 24px;
padding: 40px 0;
margin: 40px 0;
font-family: Roboto;
font-size: 28px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
color: #fff;
background: linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%);
 @media screen and (max-width: 600px){
   height: fit-content;
   width: fit-content;
   line-height: 30px;
   font-size: 20px;
   padding: 15px 20px;
 }
`;
