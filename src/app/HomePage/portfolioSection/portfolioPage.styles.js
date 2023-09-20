import styled from "styled-components";
export const PortfolioWrapper = styled.div`
  width: 100%;
  height: auto;
  @media screen and (max-width: 600px) {
    text-align: left;
    br{
      display: none !important;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  margin: auto;
  @media screen and (max-width: 600px) {
    
  }
  .second{
    @media screen and (max-width: 992px) {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
export const Title = styled.div`
  width: 435px;
  height: 88px;
  font-family: Roboto;
  font-size: 56px;
  font-weight: 900;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  padding-bottom: 20px;
  margin-left: 50px;
  letter-spacing: 2px;
  @media screen and (max-width: 600px) {
    font-size: 32px;
    width: fit-content;
    margin: auto;
  }
`;
export const FirstWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  .img-wrapper {
    img {
      width: 500px;
      height: 300px;
      @media screen and (max-width: 600px) {
        width: 340px;
        height: 200px;
        margin: auto;
      }
    }
  }
  .text-2 {
    margin-left: 25px;
    @media screen and (max-width: 992px) {
      margin: auto;
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  .text {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    width: 35%;
    margin-right: 10px;
    @media screen and (max-width: 992px) {
      width: 80%;
      margin: 40px auto;
      font-size: 16px;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }
    div {
      text-align: center;
      @media screen and (max-width: 600px) {
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
      }
    }
    span {
      color: #000;
      font-weight: 600;
    }
  }
  .wrapper-2 {
    width: 600px ;
    height: 250px ;
    @media screen and (max-width: 600px) {
      width: 340px;
      height: 200px;
      margin: auto;
    }
  }
  .text-3 {
    text-align: center;
  }
`;

export const SecondWrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    width:fit-content;
    margin: auto;
  }
  
  .second-wrapper-text {
    font-family: Roboto;
    font-size:18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    width: 35%;
    margin-right: 10px;
    @media screen and (max-width: 992px) {
      width: 80%;
      margin: auto;
      font-size: 16px;
      
      
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      margin: auto;
    }

    div {
      text-align: center;
      @media screen and (max-width: 600px) {
        width: 90%;
        margin: auto;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
      }
    }
    span {
      color: #000;
      font-weight: 600;
    }
  }
  .img-wrapper {
    width: 52%;
    @media screen and (max-width: 992px) {
      margin: auto;
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      margin: auto;
    }
     
    
   
    .img-top {
        width: 540px;
        height: 300px;
        border-radius: 18px;
      @media screen and (max-width: 600px) {
        width: 340px;
        height: 200px;
        margin: auto;
      }
    }
    .img-bottom {
        width: 540px;
        height: 260px;
        border-radius: 18px;
      @media screen and (max-width: 992px) {
        margin:30px auto;
      }
      @media screen and (max-width: 600px) {
        width: 340px;
        height: 200px;
        margin: auto;
      }
    }
  }
`;
