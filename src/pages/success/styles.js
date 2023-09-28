import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  color: #000;
`;
export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .main{
    width: fit-content;
    padding: 100px;
    @media screen and (max-width: 700px){
      width: 100%;
    }
  }
`;
export const Title = styled.div`
  color: #222;
  font-size: 56px;
  font-weight: 600;
  padding-bottom: 30px;
  @media screen and (max-width: 700px){
    font-size: 24px;
    font-weight: 600;
  }
  @media screen and (max-width: 500px){
    font-size: 20px;
    font-weight: 600;
  }
`;
export const SubTitle = styled.div`
 font-size: 20px;
  font-weight: 500;
  br{
    display: none;
  }
  @media screen and (max-width: 700px){
    font-size: 15px;
    font-weight: 500;
    padding: 5px 0;
    
    br{
      display: block;
    }
  }
  a{
    color:blue;
    text-decoration: none;
    margin-left: 40px;
    @media screen and (max-width: 700px){
      margin: 0;
      margin-top: 5px;
    }
  }
`;