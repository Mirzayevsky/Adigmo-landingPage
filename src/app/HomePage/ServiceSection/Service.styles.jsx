import styled from "styled-components";
export const ServiceWrapper = styled.div`
height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  overflow-x: hidden !important;
  @media screen and (max-width: 1500px){
    max-width: 100vw;
    padding-bottom: 70px;
    //background-color: red;
  }

`;
export const Wrapper = styled.div`

`;
export  const FirstCarouselWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  @media screen and (max-width: 1500px) {
    .keen-slider {
      min-width: 2030px !important;
      margin-right: 40px !important;
    }
    .keen-slider_slide {
      min-width: 378px;
      height: 190px;
    }
  }
  @media screen and (max-width: 700px) {
    .keen-slider {
      //min-width: 1700px !important;
      //margin-right: 40px !important;
    }
    .keen-slider_slide {
      //min-width: 378px;
      //height: 230px;

    }
  }
  
    .keen-slider__slide {
      //background-color: #fff;
    display: flex;
    //align-items: center;
    flex-direction: row;
    justify-content: space-between;
    .child-mini{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 25px 50px ;
      font-size:17px;
      font-weight: 600;
      svg{
        height: 32px;
        margin: 0 12px;
      }
      @media screen  and (max-width:600px){
        //width: 300px !important;
        //min-width: 290px !important;
        min-height: 52px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        //z-index: 99999999999999999 !important;
       padding: 2px 15px;
        svg{
          height: 24px;
        }
       
      };
      
     
    }
    
    div{
      background-color: #fff;
      width: fit-content;
      padding: 12px;
      margin: auto 10px;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 600;
    }
    }
  .slide-2{
  }
  .number-slide1{
    background: #EFEFEF;
    text-align: center;
  }
    
`;

export  const ServiceTitle = styled.div`
  font-family: "Roboto";
  font-size: 56px;
  font-weight: 900;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  letter-spacing: 1px;
margin-right: auto;
  padding: 30px 0;
  padding-left: 210px;
  @media screen and (max-width:600px){
    font-size: 24px;
    font-weight: 600;
    width: fit-content;
    margin: auto;
    line-height: 38px;
    padding: 0;
    text-align: center;
    padding-bottom: 20px;
    br{
      display: none;
    }
  }
`;