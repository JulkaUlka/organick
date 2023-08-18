import { NavLink } from "react-router-dom";
import { LogoImg, LogoLink } from "./Logo.styled";

export const Logo = () => {
  return (
    <NavLink to="/">
      <LogoLink>
        <LogoImg src="/images/logo.svg" alt="Logo" height={54} width={36} />{" "}
        <p>Organick</p>
      </LogoLink>
    </NavLink>
  );
};
