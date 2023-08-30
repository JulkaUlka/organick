import { BannerStyled } from "./Banner.styled";

export function Banner({ img, children }) {
  return (
    <>
      <BannerStyled backgroundImg={img}>{children}</BannerStyled>
    </>
  );
}
