import styled from "styled-components";

export const CarouselWrapper = styled.div`
padding: 150px 0;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 100vh;
  @media screen and (max-width: 600px ){
    padding: 0;
    height: fit-content;
  }
`;
export  const  Container = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

export  const  TabWrapper = styled.div`
  background: #c0b7cb;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export  const  ContentWrapper = styled.div`
  width: 40%;
  height: 375px;
`;
export  const ChangeContent = styled.div`
    height: 400px;
  background: lavender;
    
`;
export  const  Content = styled.div`
  height: 500px;
`;
export  const ContentTabs = styled.div`
`;
export  const  Tab = styled.div`
   
`;
export const Title = styled.div`

`;
