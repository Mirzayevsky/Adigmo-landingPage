import styled from "styled-components";
export const RoasWrapper =styled.div`
padding: 100px 0;
  @media screen and (max-width: 700px){
    padding: 0px 0;
    width: 100vw;
    //overflow-x: hidden;
  }
`;
export const Content =styled.div`
  width: 75%;
  margin: 0 auto;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #FFFFFF;
  padding: 50px;
  fill: #FFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 700px){
    padding: 20px 1px;
    width: 90% !important;
    margin: auto;
    height: fit-content;
    overflow-x: hidden;
  }
`;

export const RoasHeader =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
  @media screen and (max-width: 1700px){
    flex-direction: column;
  }
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
    @media screen and (max-width: 1700px){
      font-size: 50px;
      br{
        display: none;
      }
    }
        
    @media screen and (max-width: 700px){
     font-size: 24px;
      line-height: 30px;
      padding: 0px 0;
      padding-bottom: 40px;
      br{
        display: none;
      }
    }

  }
  
  .show {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 3px -1px 5px 1px #00000040 inset;
    height: fit-content;
    width: fit-content;
    padding: 22px 35px;
    border-radius: 13px;
    @media screen and (max-width: 1700px) {
      width: 40%;
      margin-top: 30px;

    }
    @media screen and (max-width: 700px){
      padding: 15px 20px;
      width: 80%;
      flex-direction: column;
    }
      .mini-title{
        font-family: Roboto;
        font-size: 25px;
        font-weight: 900;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #303DE4;
        @media screen and (max-width: 1700px){
          br{
            display: none;
          }
        }
        
        @media screen and (max-width: 700px){
          font-size: 18px;
          width: fit-content;
          margin: 2px auto;
        }
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
  @media screen and (max-width: 700px){
    width: fit-content;
    margin: auto;
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
  padding: 20px 0;
   .keen-slider__slide{
    max-width: 348px !important;
    min-width: 348px !important;
    min-height:230px !important;
    max-height: 230px !important;
    margin: 10px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    //border-radius: 21px;
    border-radius: 21px !important;
     -webkit-box-shadow: -17px 8px 20px -4px rgba(34, 60, 80, 0.09) !important;
     -moz-box-shadow: -17px 8px 20px -4px rgba(34, 60, 80, 0.09) !important;
     box-shadow: -17px 8px 20px -4px rgba(34, 60, 80, 0.09) !important;
    .container{
      width: 308px !important;
      min-height:230px !important;
    }
  }

  @media screen and (max-width: 700px) {
    .keen-slider{
      min-width: 1200px !important;
    }
    .keen-slider__slide{
      min-width: 348px;
      height: 230px;
      
    }
    
  }
 
  
  
  
 
`;
export const  CardWrapper = styled.div`
  
`;
export const RoasCarouselCard =styled.div`
  
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
  @media screen and (max-width: 1700px){
    margin:30px auto;
    font-size: 28px;
    padding: 10px 60px;
  }
  @media screen and (max-width: 700px){
    width: 60%;
    margin: 20px auto;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    padding: 14px 55px;
  }


`;