import styled from "styled-components";
export const RoasWrapper =styled.div`
padding: 100px 0;
  @media screen and (max-width: 700px){
    padding: 40px 0;
    width: 100vw;
    overflow-x: hidden;
    
    
  }
`;
export const Content =styled.div`
  width: 75%;
  height: 70vh;
  margin: 0 auto;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #FFFFFF;
  padding: 50px;
  fill: #FFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 700px){
    padding: 20px 0;
    width: 90% !important;
    margin: auto;
    height: fit-content;
    //overflow-x: hidden;
    
  }

`;

export const RoasHeader =styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
  @media screen and (max-width: 700px){
    flex-direction: column;
    padding: 20px 0;
  }
  .title{
    font-family: Roboto;
    font-size: 64px;
    font-weight: 800;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;
        
    @media screen and (max-width: 700px){
     font-size: 24px;
      line-height: 30px;
      padding: 20px 0;
      br{
        display: none;
      }
    }

  }
  .show{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 3px -1px 5px 1px #00000040 inset;
    height: fit-content;
    width: fit-content;
    padding: 22px 35px;
    border-radius: 13px;
   


    .mini-title{
     font-family: Roboto;
     font-size: 25px;
     font-weight: 900;
     line-height: 29px;
     letter-spacing: 0em;
     text-align: left;
     color: #303DE4;
      @media screen and (max-width: 700px){
          font-size: 18px;
      }
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
  margin: 60px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100% ;
  @media screen and (max-width: 700px) {
    .keen-slider{
      min-width: 1200px !important;
    }
    .keen-slider_slide{
     min-width: 348px;
      height: 230px;
      
    }
    
  }
 
  
  
  
 
`;
export const  CardWrapper = styled.div`
  
`;
export const RoasCarouselCard =styled.div`
  width: 348px;
  height: 230px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 21px;
  border-radius: 21px;
  background: #FFF;
  box-shadow: 0px 8px 34px -3px rgba(0, 0, 0, 0.38);
  //box-shadow: 0px 8px 34px -3px #00000040;
  .container {
    width: 80%;
    margin: auto;
  }

  .title {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    padding: 5px 0;

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
  padding: 10px 75px;
  border-radius: 26px;
  background: linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%);
  box-shadow: 0px -2px 3px 0px #9F9D9D40 inset;
  font-family: Roboto;
  font-size:30px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
  padding: 15px 120px;
  margin-left: auto;
  margin-top: 160px;
  margin-right: 120px;
  @media screen and (max-width: 700px){
    margin: 20px auto;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    padding: 13px 40px;
  }


`;