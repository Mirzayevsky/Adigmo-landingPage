import styled from "styled-components";
export const AdviceWrapper = styled.div`
    height: 502px;
  width: 80%;
  margin: auto;
  background-color: #fff;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 50px auto;
  padding: 20px 0;

`;
export  const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top:50px;
  
`;
export const Title = styled.div`
  font-family: Roboto;
  font-size: 64px;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: 2px;
  text-align: left;
  text-transform: uppercase;
`;
export const AdviceForm = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;
    input{
      width: 438px;
      height: 72px;
      border-radius: 13px;
      border: 1px;
      border-color: #3338DF !important;
      border: 1px solid #3338DF;
      margin:10px 0;
    }
  button{
    width: 438px;
    height: 85px;
    border-radius: 13px;
    background: linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%);
    box-shadow: 0px -2px 3px 0px #9F9D9D40 inset;
    box-shadow: 0px 15px 25px 0px #00000040;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    margin-top: 40px;



  }

`;
