import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  NavigateList,
  NavItem,
  BurgerMenu,
} from "./Header.styled";
import { SearchInput } from "../SearchInput/SearchInput";
import { Cart } from "../Cart/Cart";

export const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);
  return (
    <>
      <header>
        <HeaderContainer>
          <BurgerMenu open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerMenu>
          <Logo />
          <nav>
            <NavigateList open={open}>
              <NavItem open={open} onClick={() => setOpen(!open)}>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem open={open} onClick={() => setOpen(!open)}>
                <NavLink to="about">About</NavLink>
              </NavItem>
              <NavItem open={open} onClick={() => setOpen(!open)}>
                <NavLink to="shop">Pages</NavLink>
              </NavItem>
              <NavItem open={open} onClick={() => setOpen(!open)}>
                <NavLink to="shop">Shop</NavLink>
              </NavItem>
              <NavItem open={open} onClick={() => setOpen(!open)}>
                <NavLink to="projects">Projects</NavLink>
              </NavItem>
              <NavItem open={open} onClick={() => setOpen(!open)}>
                <NavLink to="news">News</NavLink>
              </NavItem>
            </NavigateList>
          </nav>
          <SearchInput />
          <Cart onCloseMenu={() => setOpen(false)} />
        </HeaderContainer>
      </header>
      <Outlet />
    </>
  );
};
