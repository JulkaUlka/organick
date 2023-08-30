import React from "react";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import {
  FooterContainer,
  ContactBlock,
  BrandBlock,
  PagesBlock,
  Copyright,
  Icon,
  Link,
} from "./Footer.styled";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Text } from "../ProductInfo/Productinfo.styled";
export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <ContactBlock>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <p>Email</p>
              <a
                className="footer__contact-link"
                href="mailto:needhelp@Organia.com"
              >
                needhelp@Organia.com
              </a>
            </li>
            <li>
              <p>Phone</p>
              <a className="footer__contact-link" href="tel:666888888">
                666 888 888
              </a>
            </li>
            <li>
              <p>Address</p>
              <a
                className="footer__contact-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/i8tyyEYE8oVn27HK8"
              >
                88 road, borklyn street, USA
              </a>
            </li>
          </ul>
        </ContactBlock>
        <BrandBlock>
          <Logo />
          <Text aligning="center">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </Text>
          <ul>
            <li>
              <Link
                href="https://www.instagram.com/"
                class="footer__media-link"
                target="_blank"
                rel="noopener
                  noreferrer"
              >
                <Icon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/"
                class="footer__media-link"
                target="_blank"
                rel="noopener
                noreferrer"
              >
                <Icon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/?lang=uk"
                class="footer__media-link"
                target="_blank"
                rel="noopener
                noreferrer"
              >
                <Icon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.pinterest.com/"
                class="footer__media-link"
                target="_blank"
                rel="noopener
                  noreferrer"
              >
                <Icon icon={faPinterest} />
              </Link>
            </li>
          </ul>
        </BrandBlock>
        <PagesBlock>
          <h3>Utility Pages</h3>
          <ul>
            <li>
              <NavLink to="*">Style Guide</NavLink>
            </li>
            <li>
              <NavLink to="*">404 Not Found</NavLink>
            </li>
            <li>
              <NavLink to="*">Password Protected</NavLink>
            </li>
            <li>
              <NavLink to="*">Licences</NavLink>
            </li>
            <li>
              <NavLink to="*">Changelog</NavLink>
            </li>
          </ul>
        </PagesBlock>
      </FooterContainer>
      <Copyright>
        <Text>
          Copyright © <b>Organick</b> | Designed by
          <b> VictorFlow</b> Templates - Powered by <b>Webflow</b>
        </Text>
      </Copyright>
    </footer>
  );
};
