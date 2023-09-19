import styled from "styled-components";
export const PortfolioWrapper = styled.div`
  width: 100%;
  height: auto;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
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
  padding: 40px 0;
  padding-bottom: 20px;
  margin-left: 50px;
  letter-spacing: 2px;
`;
export const FirstWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .img-wrapper {
    img {
      width: 500px;
      height: 300px;
    }
  }
  .text-2 {
    margin-left: 25px;
  }

  .text {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    width: 35%;
    margin-right: 10px;
    div {
      text-align: center;
    }
    span {
      color: #000;
      font-weight: 600;
    }
  }
  .wrapper-2 {
    width: 600px !important;
    height: 250px !important;
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
  .second-wrapper-text {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    width: 35%;
    margin-right: 10px;
    div {
      text-align: center;
    }
    span {
      color: #000;
      font-weight: 600;
    }
  }
  .img-wrapper {
    width: 52%;
   
    .img-top {
        width: 540px;
        height: 300px;
        border-radius: 18px;
    }
    .img-bottom {
        width: 540px;
        height: 260px;
        border-radius: 18px;
    }
  }
`;
