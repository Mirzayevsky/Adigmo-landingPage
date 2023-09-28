import styled from "styled-components";
export const RoasWrapper =styled.div`
padding: 100px 0;
  @media screen and (max-width: 700px){
    padding: 0px 0;
    width: 100vw;
    //overflow-x: hidden;
  }
`;
export const Content =styled.div`
  width: 75%;
  margin: 0 auto;
  border-radius: 21px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #FFFFFF;
  padding: 50px;
  fill: #FFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 700px){
    padding: 20px 1px;
    width: 90% !important;
    margin: auto;
    height: fit-content;
    overflow-x: hidden;
  }
`;

export const RoasHeader =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
  @media screen and (max-width: 1700px){
    flex-direction: column;
  }
  @media screen and (max-width: 700px){
    flex-direction: column;
    padding: 20px 0;
  }
  .title{
    font-family: Roboto;
    font-size: 64px;
    font-weight: 800;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;
    @media screen and (max-width: 1700px){
      font-size: 50px;
      br{
        display: none;
      }
    }
        
    @media screen and (max-width: 700px){
     font-size: 24px;
      line-height: 30px;
      padding: 0px 0;
      padding-bottom: 40px;
      br{
        display: none;
      }
    }

  }
  
  .show {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 3px -1px 5px 1px #00000040 inset;
    height: fit-content;
    width: fit-content;
    padding: 22px 35px;
    border-radius: 13px;
    @media screen and (max-width: 1700px) {
      width: 40%;
      margin-top: 30px;

    }
    @media screen and (max-width: 700px){
      padding: 15px 20px;
      width: 80%;
      flex-direction: column;
    }
      .mini-title{
        font-family: Roboto;
        font-size: 25px;
        font-weight: 900;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #303DE4;
        @media screen and (max-width: 1700px){
          br{
            display: none;
          }
        }
        
        @media screen and (max-width: 700px){
          font-size: 18px;
          width: fit-content;
          margin: 2px auto;
        }
      }
    }
   
.text{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: right;
  color: #000000B2;
  margin-top: auto;
  @media screen and (max-width: 700px){
    width: fit-content;
    margin: auto;
  }
}
  
`;
export const RoasCarouselWrapper =styled.div`
  display: flex;
  margin: 50px 0;
  align-items: center;
  justify-content: center;
  width: 100% ;
  margin-bottom: 0;
    display: flex;
    justify-content: center;
  @media screen and (max-width: 700px){
    margin:0;
    padding: 20px 0;
  
  }
  .scene {
    width: 310px;
    height: 310px;
    perspective: 1000px;
    position: relative;
    @media screen and (max-width: 700px){
      //width: 260px;
      height: 260px;
    }
  }
  .scene .carousel.keen-slider {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: visible;
    transform: translateZ(-288px);
    transform-style: preserve-3d;
  }
  .carousel__cell {
    position: absolute;
    width: 360px;
    left: 10px;
    height: 260px;
    background-color: #fff;
    border-radius: 16px;
    //-webkit-box-shadow: 0px -1px 30px -10px rgba(32, 33, 34, 0.27);
    //-moz-box-shadow: 0px -1px 30px -10px rgba(32, 33, 34, 0.27);
    //box-shadow: 0px -1px 30px -10px rgba(32, 33, 34, 0.27);
    cursor: pointer;
    //&:hover {
    //  transition: 0.5s;
    //  background: linear-gradient(94.24deg,rgba(31,90,255,0.66) -32.1%, rgba(57, 46, 214, 0.61) 52.24%, #1a2032 136.58%);
    //}
    @media screen and (max-width: 700px){
      width: 310px;
      height:220px;
      left: 0;
    }
    .container{
      height: 100%;
      width: 80%;
      margin: auto;
      display: flex;
      align-items: center;
      
      .title{
        font-size: 24px;
        font-weight: 600;
        @media screen and (max-width: 400px){
         font-size: 22px;
        }
      }
      .text{
        font-size: 18px;
        font-weight: 500;
        padding: 15px 0;
        @media screen and (max-width: 400px){
          font-size: 16px;
        }
      }
    }
    
  }
  .number-slide1 {
    background: rgb(64, 175, 255);
    background: linear-gradient(
            128deg,
            rgba(64, 175, 255, 1) 0%,
            rgba(63, 97, 255, 1) 100%
    );
  }

  

 
 
`;

export const RoasButton = styled.div`
  width: fit-content;
  padding: 10px 75px;
  border-radius: 26px;
  background: linear-gradient(93.12deg, #1F5AFF 1.37%, #392ED6 54.75%, #1A2032 119.16%);
  box-shadow: 0px -2px 3px 0px #9F9D9D40 inset;
  font-family: Roboto;
  font-size:30px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  color: #FFFFFF;
  padding: 15px 100px;
  //margin-left: auto;
  //margin: auto;
  //margin-top:70px;
  margin-left: 35.5%;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background: linear-gradient(94.24deg,rgba(31,90,255,0.66) -32.1%, rgba(57, 46, 214, 0.61) 52.24%, #1a2032 136.58%);
  }
  @media screen and (max-width: 1700px){
    margin:30px auto;
    font-size: 28px;
    padding: 10px 60px;
  }
  @media screen and (max-width: 700px){
    width: 60%;
    margin: 20px auto;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    padding: 14px 55px;
  }


`;