import styled from "styled-components";
import { NumericFormat } from 'react-number-format';
export const PopUpWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(5px);
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
`;
export const AdviceWrapper = styled.div`
    height: 50%;
  width: 50%;
  background-color: #fff;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 20px 0;
  position: relative;
  .svg-one{
    position:absolute;
    top: 20px;
    right: 20px;
    height: 40px;
    width: 40px;
    fill: red;
    cursor: pointer;
    @media screen and (max-width: 700px){
      height: 25px;
      width: 25px;
    }
    
  }
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
  margin-top:20px;
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
  font-size: 32px;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
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
  margin: auto;
  margin-top: 20px;
  
  .num-for{
    color: grey;
    
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
  }
  
  @media screen and (max-width: 1700px){
    margin: auto;
    margin-top: 50px;
  }
@media screen and (max-width: 700px){
  width: 80%;
  margin: auto;
  margin-top: 30px;
}
    
  button{
    width: 100%;
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
    cursor: pointer;
    border: 0;
    &:hover {
      transition: 0.5s;
      background: linear-gradient(94.24deg,rgba(31,90,255,0.66) -32.1%, rgba(57, 46, 214, 0.61) 52.24%, #1a2032 136.58%);
    }
    @media screen and (max-width: 700px){
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
