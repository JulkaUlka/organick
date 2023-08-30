import { Footer } from "../../components/Footer/Footer";
import { TitleStyled } from "./SuccessPage.styled";
import { Banner } from "../../components/Banner/Banner";
import success from "../../img/success.png";

function SuccessPage() {
  return (
    <>
      <TitleStyled>Thank you for your order</TitleStyled>
      <Banner img={success}/>
      <Footer />
    </>
  );
}

export default SuccessPage;
