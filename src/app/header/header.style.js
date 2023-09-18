import styled from "styled-components"
export  const HeaderWrapper = styled.div`
height: 100vh;
width: 100vw;
`
export const Container = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
  @media only screen and (max-width: 1250px) {
    width: 1000px;
    /* padding: 0 30px; */
  }
  @media only screen and (max-width: 1050px) {
    width: 750px;
    /* padding: 0 30px; */
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 30px;
  }
  @media only screen and (max-width: 350px) {
    padding: 0 10px;
  }
`;
export  const Logo = styled.div`
  color: black;
`
export const HeaderTop = styled.div `
height: 80px;
width: 100%;
padding-top:20px;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: gray;
`