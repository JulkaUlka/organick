import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import user from "../../../img/user.png";
import { Text } from "../../ProductInfo/Productinfo.styled";
import { Rating } from "../../Raiting/Raiting";
import { SlideContainer, SplideStyled } from "./Slider.styled";

export const Slider = () => {
  return (
    <>
      <SplideStyled
        options={{
          perPage: 1,
          arrows: false,
          pagination: true,
          drag: "free",
          rewind: true,
          width: 700,
          autoHeight: true,
          breakpoints: {
            674: { perPage: 1, width: 600 },
            420: { perPage: 1, width: 400 },
          },
        }}
      >
        <SplideSlide>
          <SlideContainer>
            <img src={user} alt="img4" />
            <Rating rating="5" />
            <Text aligning="center">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </Text>
            <p>Sara Taylor</p>
            <Text aligning="center">Consumer</Text>
          </SlideContainer>
        </SplideSlide>
        <SplideSlide>
          <SlideContainer>
            <img src={user} alt="img4" />
            <Rating rating="4.5" />
            <Text aligning="center">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </Text>
            <p>Megan Fox</p>
            <Text aligning="center">Consumer</Text>
          </SlideContainer>
        </SplideSlide>
        <SplideSlide>
          <SlideContainer>
            <img src={user} alt="img4" />
            <Rating rating="5" />
            <Text aligning="center">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </Text>
            <p>Sara Connor</p>
            <Text aligning="center">Consumer</Text>
          </SlideContainer>
        </SplideSlide>
      </SplideStyled>
    </>
  );
};
