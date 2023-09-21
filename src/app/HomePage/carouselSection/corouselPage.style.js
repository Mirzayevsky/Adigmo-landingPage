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

.carousel-card{
    height: 80%;
    width: 80%;
    margin: auto;
    position: relative;
    svg{
        height: 100%;
        width: 100%;
    }
}

`;
export const Title = styled.div`
width: 387px;
height: 66px;

border-radius: 24px;
padding: 40px 0;
margin: 40px 0;
font-family: Roboto;
font-size: 28px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
margin: 120px 0;
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
