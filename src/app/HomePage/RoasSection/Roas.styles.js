import styled from "styled-components";
export const RoasWrapper =styled.div`
padding: 100px 0;
`;
export const Content =styled.div`
  width: 74.4%;
  margin: 0 auto;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #FFFFFF;
  padding: 50px;



`;

export const RoasHeader =styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
  .title{
    font-family: Roboto;
    font-size: 56px;
    font-weight: 800;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;

  }
  .show{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 3px -1px 5px 1px #00000040 inset;
    height: fit-content;
    width: fit-content;
    padding: 9px 20px;
    border-radius: 13px;


    .mini-title{
     font-family: Roboto;
     font-size: 20px;
     font-weight: 900;
     line-height: 24px;
     letter-spacing: 0em;
     text-align: left;
     color: #303DE4;
   }
.text{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: right;
  color: #000000B2;
  margin-top: auto;


}
  }
`;
export const RoasCarouselWrapper =styled.div`
    display: flex;
  margin: 30px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100% ;
  .animation-one{
    
    
  }
`;
export const  CardWrapper = styled.div`
    
`;
export const RoasCarouselCard =styled.div`
  width: 328px;
  height: 190px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 21px;
  box-shadow: 2px 1px 22px -4px rgba(0, 0, 0, 0.19);
  //box-shadow: 0px 8px 34px -3px #00000040;
  .container {
    width: 80%;
    margin: auto;
  }

  .title {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;


  }

  .text {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

  }

`;

export const RoasButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px 75px;
  border-radius: 26px;
  background: linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%);
  box-shadow: 0px -2px 3px 0px #9F9D9D40 inset;
  font-family: Roboto;
  font-size:25px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
  
  margin-top: 70px;
  margin-left: auto;
  margin-right: 120px;


`;