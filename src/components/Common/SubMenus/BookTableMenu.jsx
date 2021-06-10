import React from "react";
import { useTheme } from "styled-components";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import { Menu, Menu3Item } from "../../global/fontStyles";
import fbIcon from "../../../images/fb.png";
import instaIcon from "../../../images/insta.png";

const FooterLogo = styled.img`
  margin-top: 3rem;
  margin-right: 1rem;
`;





export const CloseBtn = styled.div`
  font-size: 16px;
  padding-top: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.body};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
`;


const BookATable = ({ hideModal }) => {
  const theme = useTheme();
  const handleRedirect = (path) => {
    hideModal();
    setTimeout(() => navigate(path), 200);
  };
  return theme ? (
    <div>
      <Menu theme={theme} inModal={true}>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Chancery Lane
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Estelle{" "}
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Longrain{" "}
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Matilda{" "}
          </Link>
        </Menu3Item>
        <Menu3Item
          onClick={() => {
            handleRedirect("#");
          }}
          theme={theme}
        >
          <Link style={{ color: "inherit", textDecoration: "none" }}>
            Pastore{" "}
          </Link>
        </Menu3Item>
      </Menu>
      {theme.name === "Mobile" && <FooterLogo src={instaIcon} />}
      {theme.name === "Mobile" && <FooterLogo src={fbIcon} />}
    </div>
  ) : (
    <div></div>
  );
};

export default BookATable;
