import styled from "styled-components";
export const SecondWrapper = styled.div`
  width: 100%;
  padding: 70px 0;
  @media screen and (max-width: 600px){
    padding: 0;
  }
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: 600px) {
    width: 90%;
  }

`;
export const ShowInform = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 15px;
  padding: 100px 30px;
  @media screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;
export const TopWrapper = styled.div`
  width: 95%;
  margin: auto;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
   flex-direction: column;
    padding: 0;
  }
  .result {
    font-family: Roboto;
    font-size: 54px;
    font-weight: 900;
    line-height: 75px;
    text-align: left;
    text-transform: uppercase;
    @media screen and (max-width: 600px) {
      font-size: 25px;
      font-weight: 600;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0;
      //padding: 10px 0;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 500px) {
      font-size: 17px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
      //padding: 10px 0;
      margin-bottom: 20px;
    }
  }
  .sales {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    width: 292px;
    height: 66px;
    padding: 12px 0;
    box-shadow: 5px 0px 10px -1px #00000040 inset;
    border-radius: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    text-align: left;
    @media screen and (max-width: 600px) {
      width: 90%;
      height: fit-content;
      margin: 0px auto;
      font-size: 18px;
      font-weight: 500;
      text-align: center;
      letter-spacing: 0;
      border-radius: 15px;

    }
    .inner-text {
    }
  }
`;
export const AmongWrapper = styled.div`
  .inner-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size: 50px;
    font-weight: 900;
    line-height: 52px;
    letter-spacing: 0;
    margin-top: 30px;
    text-align: left;
    background: -webkit-linear-gradient(
    180deg,
    #e2c25d 0%,
    #f1eb91 19.27%,
    #d5b758 57.81%,
    #b89843 100%
      
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
    .sale-up {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 95%;
        height: 4px;
        top: 15px;
        left: 5px;
        background: linear-gradient(
          180deg,
          #e2c25d 0%,
          #f1eb91 19.27%,
          #d5b758 57.81%,
          #b89843 100%
        );
        @media screen and (max-width: 600px) {
          top: 2px;
          left: 0;
        }
      }
        
      }
    .spends {
      padding-left: 20px;
      @media screen and (max-width: 600px) {
        margin-top: 5px;
        font-size: 18px;
        padding-left: 5px;
      }
    }
    @media screen and (max-width: 600px) {
     font-size: 18px;
      line-height: 25px;
    }
    }
  
  
  
  .among-content{
    //background: red;
    margin-bottom: 30px;
    padding-left: 15px;
    @media screen and (max-width: 600px) {
      margin: 10px 0;
      padding-left: 5px;
    }
  }
    .sales-up{
  }
  
  
  
  
  .bottom-title {
    font-family: Roboto;
    font-size: 34px;
    font-weight: 600;
    line-height: 47px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 40px;
    margin-top: 37px;
    @media screen and (max-width: 600px) {
      font-size: 20px;
      text-align: center;
      font-weight: 500;
      padding: 0px 0;
      margin-top: 20px;
    }
    
  }
  .bottom-text {
    font-family: Roboto;
    font-size: 25px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    width: 90%;
    margin-left: 40px;
    color: #000000B2;
    padding-top: 15px;
    @media screen and (max-width: 600px) {
      font-size:16px;
      line-height: 24px;
      padding-top: 0;
      width: 80%;
      text-align: center;
      margin: auto;
      br{
        display: none;
      }
    }

  }

  @media screen and (max-width: 600px) {
    
  }
`;

