import React from "react";
import {
  Container,
  HeaderTop,
  HeaderWrapper,
  Logo,
  Title,
} from "./header.style";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderTop>
          <Logo>Edigmo</Logo>
        </HeaderTop>
        <Title>SOTUVINGIZNI BIZ BILAN 2-3 BAROBARGA OSHIRING!</Title>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
