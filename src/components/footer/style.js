import styled from "styled-components";
import img from "../../source/assets/footer/main.png"
import img2 from "../../source/assets/footer/Vector 3.png"
import img3 from "../../source/assets/footer/cr.png"
import img4 from "../../source/assets/footer/Vector 1.png"
import imgMain from "../../source/assets/footer/sd.png"




export const FooterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 300px;
  background: linear-gradient(180deg, #7FFFF2 2.29%, rgba(239, 239, 239, 0.33) 38.3%, rgba(150, 175, 246, 0.84) 59.69%, rgba(31, 90, 255, 0.78) 91.98%, #392ED6 100%);
   background:url("${img}"),url("${img2}"),url("${img3}"),url("${img3}");
  background: url("${imgMain}");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  //position: relative;
  
  @media screen and (max-width: 1700px){
    height: fit-content;
   background-size: contain;
    background-position: bottom;
  }
@media screen and (max-width: 700px){
  background-size: 150%;
  height: fit-content;
  background-position: bottom;
  margin-top: 150px;
}

`;
export const Logo = styled.div`
`;
export const Wrapper = styled.div`
 width: 80%;
  margin: auto;
  padding-top: 380px;
  @media screen and (max-width: 700px){
    padding:50px 0;
    width: 90%;
  }
`;
export const Header = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 700px){
    position: relative;
    height: fit-content;
    
  }
  
  .location{
    font-family: Roboto;
    font-size: 32px;
    font-weight: 500;
    line-height: 88px;
    letter-spacing: 0em;
    text-align: right;
    color: #FFFFFF;
    padding-top: 50px;
    @media screen and (max-width: 700px){
      font-size: 12px;
      line-height: 25px;
      margin-top: 50px;
      text-align: left;
    }
  }
  .icon{
    @media screen and (max-width: 700px){
      height:60px;
      width: fit-content;
      margin-top: 90px;
      
      img{
        height: 100%;
      }
    }
  }
 
  .past-foot{
    color: #fff;
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 50px;
    @media screen and (max-width: 700px){
      font-size: 12px;
      line-height: 28px;
      padding-top: 0px
    }

  }
  .mini-text {
    @media screen and (max-width: 700px) {
      top: -50px;
      left: 10px;
      position: absolute;

    }
  }
    .mini-text-2{
      @media screen and (max-width: 700px){
        top: -50px;
        right: 0px;
        position: absolute;

      }
    }
  
`;
export const FooterBottom = styled.div`
  color: #fff;
  margin: auto;
  font-family: Roboto;
  font-size: 28px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  padding-top: initial;
  width: fit-content;
  padding-top: 250px;
  @media screen and (max-width: 1700px){
    padding: 50px 0;
  }
  @media screen and (max-width: 700px){
    font-size: 14px;
    font-weight: 500;
    margin:0 auto;
    padding: 24px 0;
  }

  
  
 
`;