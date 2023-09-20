import styled from "styled-components";
export const  CustomerWrapper = styled.div`
    padding: 120px 0;
`;
export const  MainCustomerWrapper = styled.div`
    width: 80%;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  height: auto;
  padding: 40px 0;
  border-radius: 21px;
`;
export const  Container = styled.div`
  width: 80%;
  margin: auto;
  .title{
    color: #000;
    font-family: Roboto;
    font-size: 64px;
    font-weight: 900;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;
    

  }
    .wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0;
    }
`;
export const  CompanyShowcaseWrapper = styled.div`
    margin: 30px 0;
  
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
  }
  .footer{
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .footer-wrapper{
      width: 23%;
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: left;
      
      .icon{
        img{
          height: 100%;
        }
      }
      .footer-text{
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        padding-left: 32px;
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
`;
export const  PersonCard = styled.div`
    padding: 40px 0;
`;
