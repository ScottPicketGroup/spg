import React from "react";

import { useTheme } from "styled-components";
import {
  TextContainer,
  ImageContainer,
  SectionContainer,
  ImageView,
  ImageDiv,
} from "../../components/global/GlobalStyles";
import { Link } from "gatsby";
import styled from "styled-components";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.25rem 2.25rem;
  color: ${(props) =>
    props.theme.name === "Desktop"
      ? props.theme.colors.text
      : props.theme.colors.body};
`;
export const MenuHeading = styled.div`
  width: 100%;
  margin: 1.15rem 0;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
  text-transform: uppercase;
`;
export const MenuItem = styled.div`
  width: 100%;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
`;

const DesktopHome = ({ HomeImage, path }) => {
  const theme = useTheme();

  return theme ? (
    <SectionContainer>
      <TextContainer theme={theme}>
        <Menu theme={theme}>
          <MenuHeading theme={theme}>Menu</MenuHeading>

          <MenuItem theme={theme} bold={path && path === "/"}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
          </MenuItem>
          <MenuItem theme={theme} bold={path && path.includes("/scott-picket")}>
            <Link
              to="/scott-picket"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Scott Picket
            </Link>
          </MenuItem>

          <MenuItem theme={theme}>Book a table</MenuItem>

          <MenuItem theme={theme} bold={path && path.includes("/events")}>
            <Link
              to="/events"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Events
            </Link>
          </MenuItem>

          <MenuItem theme={theme} bold={path && path.includes("/whatson")}>
            <Link
              to="/whatson"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              What's On
            </Link>
          </MenuItem>
          <MenuItem theme={theme}>Gift Vouchers</MenuItem>
          <MenuItem theme={theme}>Provider</MenuItem>
          <MenuItem theme={theme}>Shop</MenuItem>
          <MenuItem theme={theme} bold={path && path.includes("/careers")}>
            <Link
              to="/careers"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Careers
            </Link>
          </MenuItem>
          <MenuItem theme={theme}>Contact</MenuItem>
        </Menu>
      </TextContainer>
      {/* <ImageContainer theme={theme} src={HomeImage} /> */}
      <ImageContainer>
        <ImageView>
          <ImageDiv src={HomeImage} />
        </ImageView>
      </ImageContainer>
    </SectionContainer>
  ) : (
    <div></div>
  );
};

export default DesktopHome;


//menu to be refactored