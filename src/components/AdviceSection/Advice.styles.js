import styled from "styled-components";
import { NumericFormat } from 'react-number-format';
export const AdviceWrapper = styled.div`
    height: 502px;
  width: 80%;
  margin: auto;
  background-color: #fff;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin: 50px auto;
  padding: 20px 0;
  @media screen and (max-width: 1700px){
    height: fit-content;
    padding: 50px 0;
  }
@media screen and (max-width: 700px){
  width: 90%;
}

`;
export  const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top:50px;
  @media screen and (max-width: 1700px){
   flex-direction: column;
  }
  @media screen and (max-width: 700px){
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding-top: 15px;
    margin:0;
  }
  
`;
export const Title = styled.div`
  font-family: Roboto;
  font-size: 56px;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: 2px;
  text-align: left;
  text-transform: uppercase;
  @media screen and (max-width: 1700px){
    font-size: 50px;
    line-height: 70px;
    text-align:center;
    br{
      display: none;
    }
  }
  @media screen and (max-width: 700px){
    font-size: 28px;
    line-height: 40px;
    text-align:center;
  }
`;
export const Input = styled.input`
    color: #000;
    width: 438px;
    height: 72px;
    border-radius: 13px;
    border: 1px;
    border-color: #3338DF !important;
    border: 1px solid #3338DF;
    margin:10px 0;
    font-size:24px;
    font-family: Roboto;
    padding: 0 20px;
    font-weight: 500;
    @media screen and (max-width: 700px){
      font-size: 16px;
      width: 80%;
      height: 40px;
      border-radius: 7px;
      margin: 10px auto;
      &:nth-child(1){
        margin-top: 30px;
      }
    }
`;
export const AdviceForm = styled.form`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;

  .num-for {
    color: grey;

    width: 438px;
    height: 72px;
    border-radius: 13px;
    border: 1px;
    border-color: #3338DF !important;
    border: 1px solid #3338DF;
    margin: 10px 0;
    font-size: 24px;
    font-family: Roboto;
    padding: 0 20px;
    font-weight: 500;
    @media screen and (max-width: 700px) {
      font-size: 16px;
      width: 80%;
      height: 40px;
      border-radius: 7px;
      margin: 10px auto;
      &:nth-child(1) {
        margin-top: 30px;
      }
    }
  }

  @media screen and (max-width: 1700px) {
    margin: auto;
    margin-top: 50px;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
    margin: auto;
    margin-top: 30px;
  }

  button {
    width: 100%;
    height: 79px;
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
    cursor: pointer;
    border: 0;
    letter-spacing: 1px;
transition: 0.5s ease;
    &:hover {
      background: linear-gradient(93.12deg, rgba(31, 90, 255, 0.68) 1.37%, rgba(57, 46, 214, 0.69) 54.75%, #1A2032 119.16%);

    }

    @media screen and (max-width: 700px) {
      width: 93%;
      height: 60px;
      font-size: 20px;
      font-weight: 500;
      margin: auto;
      margin-top: 25px;
      outline: none;
    }
  }


`;
