import styled from "styled-components";

const Div = ({ backgroundImg,width,  ...props }) => <div {...props}></div>;

export const BannerStyled = styled(Div)`
  height: 28vw;
  width: ${(props) => props.width || "100%"};
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:3rem;
`;
