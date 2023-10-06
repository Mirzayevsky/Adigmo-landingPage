import styled from "styled-components";
export const RoasWrapper = styled.div`
  padding: 100px 0;
  @media screen and (max-width: 700px) {
    padding: 0px 0;
    //overflow-x: hidden;
  }
`;
export const Content = styled.div`
  width: 75%;
  margin: 0 auto;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff;
  padding: 50px;
  fill: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 700px) {
    padding: 20px 1px;
    width: 90% !important;
    margin: auto;
    height: fit-content;
    overflow-x: hidden;
  }
`;
export const ShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 3px -1px 5px 1px #00000040 inset;
  width: 342px;
  height: 81px;
  padding: 5px 0px;
  padding-left: 20px;
  border-radius: 15px;
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: fit-content;
    padding: 5px ;
}
 
  .up {
    color: #303DE4;
    width: 100%;
    font-weight: 700;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      font-weight: 600;
    padding-left: 20px;

}
  }
  .down{
    display: flex;
    padding-left: 20px;

    .pl-one{
    color: #303DE4;
    font-weight: 700;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: 0em;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
      font-weight: 600;
}
    }
    .pl{
      color: #000000B2;
      padding-left: 10px;
      font-family: Roboto;
font-size: 20px;
font-weight: 300;
line-height: 23px;
letter-spacing: 0em;
text-align: right;
padding-top: 4px;
@media only screen and (max-width: 600px) {
      font-size: 16px;
      font-weight: 500;
      margin-left: auto;
      margin-right: 20px;

}

    }
  }
`;

export const RoasHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
  @media screen and (max-width: 1700px) {
    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 8px 0;
  }
  .title {
    font-family: Roboto;
    font-size: 64px;
    font-weight: 800;
    line-height: 75px;
    letter-spacing: 0s;
    text-align: left;
    @media screen and (max-width: 1700px) {
      font-size: 50px;
      br {
        display: none;
      }
    }

    @media screen and (max-width: 700px) {
      font-size: 22px;
      line-height: 30px;
      padding: 0px 0;
      padding-bottom: 0px;
      br {
        display: none;
      }
    }
    @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 20px;
      line-height: 26px;
      font-weight: 600;
      margin-bottom: 15px;
      
    }
  }

  .text {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 300;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: right;
    color: #000000b2;
    margin-top: auto;
    @media screen and (max-width: 700px) {
      width: fit-content;
      margin: auto;
    }
  }
`;
export const RoasCarouselWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: rebeccapurple;
  margin: 20px 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;
export const Card = styled.div`
height: 350px;
width: 270px;
background-color: #fff;
margin: 0 10px;
`;

export const RoasButton = styled.div`
  width: fit-content;
  padding: 10px 75px;
  border-radius: 26px;
  background: linear-gradient(
    93.12deg,
    #1f5aff 1.37%,
    #392ed6 54.75%,
    #1a2032 119.16%
  );
  box-shadow: 0px -2px 3px 0px #9f9d9d40 inset;
  font-family: Roboto;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  padding: 15px 100px;
  //margin-left: auto;
  //margin: auto;
  //margin-top:70px;
  margin-left: 35.5%;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background: linear-gradient(
      94.24deg,
      rgba(31, 90, 255, 0.66) -32.1%,
      rgba(57, 46, 214, 0.61) 52.24%,
      #1a2032 136.58%
    );
  }
  @media screen and (max-width: 1700px) {
    margin: 30px auto;
    font-size: 28px;
    padding: 10px 60px;
  }
  @media screen and (max-width: 700px) {
    width: fit-content;
    margin: 10px auto;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    padding: 14px 55px;
    border-radius: 14px;
  }
`;
