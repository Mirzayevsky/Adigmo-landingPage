import styled from "styled-components";
export const SecondWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
export const Container = styled.div`
  width: 90%;
  margin: auto;

`;
export const ShowInform = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 15px;
  padding: 30px 30px;
  @media screen and (max-width: 600px) {
    padding:0;
  }
`;
export const TopWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
   flex-direction: column;
    padding: 0;
  }
  .result {
    font-family: Roboto;
    font-size: 54px;
    font-weight: 900;
    line-height: 75px;
    letter-spacing: 1.5px;
    text-align: left;
    @media screen and (max-width: 600px) {
      font-size: 25px;
      font-weight: 600;
      line-height: 32px;
      text-align: center;
      letter-spacing: 0;
      padding: 20px 0;
      
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
    margin-top: 70px;
    @media screen and (max-width: 600px) {
      width: 80%;
      height: fit-content;
      margin: 10px auto;
      font-size: 18px;
      font-weight: 500px;
      text-align: center;
      letter-spacing: 0;

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
    letter-spacing: 0em;
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
        width: 90%;
        height: 4px;
        top: 10px;
        left: 20px;
        background: linear-gradient(
          180deg,
          #e2c25d 0%,
          #f1eb91 19.27%,
          #d5b758 57.81%,
          #b89843 100%
        );
      }
        
      }
    }
    .sales-up{
      @media screen and (max-width: 600px) {
    }
    .spends {
      margin-top: 20px;
      margin-left: 20px;
      @media screen and (max-width: 600px) {
        margin-top: 5px;
      }
    }
    @media screen and (max-width: 600px) {
       font-size: 23px;
    }
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
      font-size: 23px;
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
    }

  }

  @media screen and (max-width: 600px) {
    
  }
`;

