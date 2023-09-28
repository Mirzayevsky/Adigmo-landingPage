import styled from "styled-components";
export const  CustomerWrapper = styled.div`
    padding: 120px 0;
  @media screen and (max-width: 700px) {
    padding-bottom:40px;
  }
`;
export const  MainCustomerWrapper = styled.div`
  width: 80%;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  height: auto;
  padding: 40px 0;
  border-radius: 21px;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;
export const  Container = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
  .title{
    color: #000;
    font-family: Roboto;
    font-size: 64px;
    font-weight: 900;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
    @media screen and (max-width: 700px) {
      font-size: 32px;
      font-weight: 600;
      text-align: center;
    }
    

  }
    .wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0;
     
      .cl-1{
        background:rgb(48,71,129);
        padding: 2px 5px;
        margin-left: 100px;
        @media screen and (max-width: 700px){
          margin: 0;
        }
      }

      .svg-wrapper{
        @media screen and (max-width: 700px) {
          height: fit-content;
          width: 40%;
          margin: 15px auto;
          img{
            height: 100%;
            width: 100%;
          }
        }
      }
      @media screen and (max-width: 700px) {
        flex-wrap: wrap;
      }
    }
`;


export const  CompanyShowcaseWrapper = styled.div`
    margin: 30px 0;
  margin-top: 200px ;
  @media screen and (max-width: 700px){
    margin-top: 80px;
  }
`;
export const  MainTitle = styled.div`
  font-family: Roboto;
  font-size: 56px;
  font-weight: 900;
  line-height: 75px;
  letter-spacing: 0em;
  text-align: left;
  color: #1A2032;
  padding-left: 120px;
  @media screen and (max-width: 700px){
    padding: 0;
    font-size: 28px;
    text-align: center;
    width: 100%;
    line-height: 40px;
    br{
      display: none;
    }
  }
 


`;
export const  SubTitle = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
  margin-left: 120px;
  padding-top: 120px;
  @media screen and (max-width: 700px){
    flex-direction: column;
    padding: 15px 0;
    font-size: 18px;
    line-height: 27px;
    width: 100%;
    text-align: center;
  }
`;
export const  ShowcaseInfo = styled.div`
  width: 80%;
  height:fit-content;
  margin: auto;
  background-color: #fff;
  position: relative;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 30px 0;
  padding-bottom: 70px;
  @media screen and (max-width: 700px){
    margin: 20px auto;
    margin-top: 130px;
    width: 90%;
  }
    .container{
      width: 80%;
      margin: auto;
    }
  .img{
    width: 350px;
    height: 280px;
    border-radius: 33px;
    position: absolute;
    top: -150px;
    right: 3%;
    @media screen and (max-width: 700px){
      margin: auto;
      width: fit-content;
      height: 260px;
      right: 9%;
    }
    img{
      height: 100%;
      width: 100%;
    }
  }
  .text{
    width: 70%;
    font-family:Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    padding-top: 40px;
    @media screen and (max-width: 700px){
      width: 100%;
      font-size: 16px;
      line-height: 25px;
      margin:auto;
      margin-top: 100px;
      text-align: left;
    }
  }
  .footer{
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 700px){
      flex-direction: column;
      width: 100%;
      margin-top: 40px;
    }
    
    .footer-wrapper{
      width: 23%;
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: left;
      @media screen and (max-width: 700px){
        width: fit-content;
        width: 100%;
        margin: auto;
      }
      
      .icon{
        @media screen and (max-width: 700px){
          padding-right: 30px;
          width: 90%;
          height: 60px;
          display: flex;
          margin: auto;
          justify-content: flex-start;
          position: relative;
        }
        img{
          height: 50px;
          @media screen and (max-width: 700px){
            position: absolute;
            left: -20px;
            height:60px;
            top:20px
          }
        }
      }
      .footer-text{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        padding-left: 32px;
        @media screen and (max-width: 700px){
          line-height: 24px;
          padding: 0;
        }
      }
    }
  }
`;
export const  Header = styled.div`
  width: 80%;
  margin: auto;
    padding: 40px 0;
  display: flex;
  align-items: end;
  @media screen and (max-width: 700px){
    flex-direction: column;
    padding: 20px 0;
    
  }
`;
export const  PersonCard = styled.div`
    padding: 40px 0;
`;
