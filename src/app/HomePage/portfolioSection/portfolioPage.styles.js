import styled from "styled-components";
export const PortfolioWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: 600px) {
    text-align: left;
   
  }
`;
export const Container = styled.div`
  width: 83%;
  margin: auto;
  @media screen and (max-width: 600px) {
    width: 100%;
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
  font-family: Roboto;
  font-size: 64px;
  font-weight: 900;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  padding-bottom: 20px;
  margin-left: 50px;
  letter-spacing: 2px;
  padding-bottom: 20px;
  padding-top: 100px;
  @media screen and (max-width: 600px) {
    font-size:28px;
    font-weight: 700;
    line-height: 40px;
    width: fit-content;
    margin: auto;
    height: fit-content;
    padding: 45px 0;
    padding-bottom: 5px;
    
  }
`;
export const FirstWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
    margin: 0;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  .img-wrapper {
    width: 55%;  
    @media screen and (max-width: 600px) {
       width: 100%;
      margin: auto;
  }
    
    
    img {
      width: 100%;
      height: fit-content;;
      @media screen and (max-width: 600px) {
        width:100%;
        height: fit-content;
        margin: auto;
      }
    }
  }
  .text-2 {
    margin-left: 25px;
    padding-left: 30px;
    
    @media screen and (max-width: 992px) {
      margin: auto;
      width: 80%;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
      font-size: 14px;
      padding: 0;
    }
  }

  .text {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    width: 40%;
    margin-right: 10px;
    text-align: left !important;
    @media screen and (max-width: 992px) {
      width: 80%;
      margin: 40px auto;
      font-size: 16px;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
margin-top: 5px;
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
      padding-right: 4px;
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
  @media screen and (max-width: 992px) {
    width: 100%;
    margin: auto;
  }
  
  .second-wrapper-text {
    font-family: Roboto;
    font-size:18px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    width: 40%;
    margin-right: 10px;
    text-align: left;
    padding-left: 50px;
    @media screen and (max-width: 992px) {
      margin: auto;
      font-size: 16px;
      
    }
    @media screen and (max-width: 600px) {
      width: 90%;
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
      margin: auto;
      padding: 10px;
      margin: 0;
      br{
        display: none;
      }
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
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
    }
   
     
    
   
    .img-top {
        width: fit-content;
        height: 400px;
        border-radius: 18px;
      @media screen and (max-width: 600px) {
        width:100%;
        height: fit-content;
        
      }
    }
    .img-bottom {
        width: fit-content;
        height: 325px;
        border-radius: 18px;
      @media screen and (max-width: 992px) {
        margin:30px auto;
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        width: 340px;
        height: 200px;
        margin: auto;
        display: none;
      }
    }
  }
`;
