import styled from "styled-components";
export const HeaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: 600px) {
    width: 90%;
    br{
      display: none;
    }
  }
`;
export const Logo = styled.div`
  color: black;
  @media screen and (max-width: 600px) {
    height: 70px;
    width: 200px;
    svg{
      width: 120px;
      height: 80px;
    }
  }
`;
export const HeaderTop = styled.div`
  height: 80px;
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 100px;
  @media screen and (max-width: 600px) {
    height: 80px;
    margin: auto;
    padding: 0;
    align-items: center;
    padding-top: 10px;
    
  }
`;
export const Title = styled.div`
  font-family: Roboto;
  font-size: 64px;
  font-weight: 900;
  line-height: 84px;
  text-align: left;
  letter-spacing: 1.5px;
  margin-top: 90px;
  color: #1a2032;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 29px;
    width: 90%;
    margin:  auto;
    padding: 30px 0;
    padding-top: 80px;
    br{
      display: none;
    }
  }
`;
export const HearderInner = styled.div`
  color: #fff;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    font-weight: 500;
    padding: 7px 20px;
    line-height: 28px;
  }
`;
export const HeaderButton = styled.div`
  width: 383px;
  height: 86px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  background: linear-gradient(
    93.47deg,
    #1f5aff 1.22%,
    #392ed6 46.71%,
    #1a2032 101.62%
  );
  @media screen and (max-width: 600px) {
    height: fit-content;
    width: fit-content;
    margin: 10px;
  }
  
`;
export const LangButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LangButton = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  width: fit-content;
  height: fit-content;
  padding: 3px 35px;
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  background: linear-gradient(
    94.24deg,
    #1f5aff -32.1%,
    #392ed6 52.24%,
    #1a2032 136.58%
  );
  @media screen and (max-width: 600px) {
    padding: 0px 15px;
    font-size: 17px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 5px;
  }
`;
export const LangSecondBnt = styled.div`
  font-size: 25px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  align-items: center;
  text-align: left;
  font-weight: 700;
  line-height: 42px;
  width: fit-content;
  height: fit-content;
  padding: 3px 35px;
  border-radius: 70px;
  border-radius: 70px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 50px;
  @media screen and (max-width: 600px) {
    padding: 0px 15px;
    font-size: 17px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 5px;
  }
  
`;

export const RightWrapper = styled.div`
`
export const LeftImgWrapper = styled.div`
//width: 439px;
//height: 718px;
  margin-right: 20px;
//img {
//  width: 90%;
//  height: 80%;
//}
  @media screen and (max-width: 600px) {
    //display:none;
    margin: 30px auto;
    padding-right: 30px;
    
    img{
      height: 280px;
      width: 220px;
    }
  }
`
export const MainWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 0 30px;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 0;
  }
`