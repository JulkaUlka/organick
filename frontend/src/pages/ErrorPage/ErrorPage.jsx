import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from "../../components/Footer/Footer";
import { Arrow } from "../../components/Arrow/Arrow";
import { ButtonArrowStyled } from "../../components/Button/Button.styled";
import { ErrorBlock, ErrorContainer, TitleStyled } from "./ErrorPage.styled";
import { Text } from "../../components/ProductInfo/Productinfo.styled";

function ErrorPage() {
    const navigate = useNavigate();
  return (
    <>
      <ErrorContainer>
        <ErrorBlock>
          <h2>404</h2>
          <TitleStyled>Page not found</TitleStyled>
          <Text>
            The page you are looking for doesn't exist or has been moved
          </Text>
          <ButtonArrowStyled
            onClick={() => navigate('/')}
            >
            Go to Homepage
            <Arrow />
          </ButtonArrowStyled>
        </ErrorBlock>
      </ErrorContainer>
      <Footer />
    </>
  );
}

export default ErrorPage;
