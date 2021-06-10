import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 33%;
`;

export const Menu = styled.div`
  position: fixed;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3.84rem;
  color: ${(props) =>
    props.theme.name === "Desktop"
      ? props.theme.colors.text
      : props.theme.colors.body};
`;
export const MenuHeading = styled.div`
  width: 100%;

  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
  text-transform: uppercase;
`;

export const MenuDropDownContainer = styled.div`
  max-height: ${(props) => (props.open ? `500px` : `0px`)};
  overflow: hidden;
  transition: max-height 0.5s ease-in;
`;
export const MenuItem = styled.div`
  width: 100%;
  text-transform: capitalize;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
`;

export const LogoImg = styled.img`
  position: fixed;

  bottom: 36px;
  width: ${(props) => props.theme.name === "Mobile" && "16%"};
`;

export const BottomLogoContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 0.5rem 2rem;
  box-sizing: border-box;
`;
export const BottomLogo = styled.img`
  left: 3.84rem;
  bottom: 36px;
  width: 15%;
`;
