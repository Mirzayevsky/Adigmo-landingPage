import styled from "styled-components";
export const ServiceWrapper = styled.div`
height: fit-content;
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
export const Wrapper = styled.div`

`;
export  const FirstCarouselWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
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
    background-color: blanchedalmond;
  }
  .number-slide1{
    background: #EFEFEF;
    text-align: center;
  }
  .svg-touch{
    height: 15px;
    width: fit-content;
    margin: auto 5px;
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
`;