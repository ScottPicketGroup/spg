import styled from "styled-components";

export const Header1 = styled.h1`
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "2.84rem" : "1.75rem"};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const Header2 = styled.h2`
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "1.9rem" : "1.5rem"};
margin-top: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "1" : "1"};
  font-family: ${(props) => props.theme.fontFamily.Times};
 
  color: ${(props) => props.theme.colors.text};
`;
export const Header3 = styled.h3`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "1.2rem" : "1rem")};
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "1.2" : "1.25"};
margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  
  color: ${(props) => props.theme.colors.text};
`;
export const Header4 = styled.h4`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "1rem" : "1rem")};
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "1.2" : "1.25"};
 margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
`;

export const BC1 = styled.p`
  margin-top: ${(props) => props.marginTop ? props.marginTop :
    props.theme.name === "Desktop" ? "2.25rem" : "1.5rem" };
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "1.59rem" : "1.25rem"};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 1.22;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};
  transition: color .2s ease-out;
  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
  span {
    font-style: italic;
  }
`;

export const BC2 = styled.p`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "1.06rem" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
 font-size: ${(props) => (props.theme.name === "Desktop" ? "" : "20pt")};;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};
  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`;
export const BC3 = styled.p`
  margin-Top: ${(props) => (props.marginTop ? props.marginTop : `0`)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : `.5rem`)};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "1.2rem" : "1rem")};
  font-family: ${(props) => props.light ? props.theme.fontFamily.UntitledSansLight : props.theme.fontFamily.UntitledSansRegular};
  line-height: 1.22;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};
  transition: color 2s ease-out;
  li {
    list-style-type: none;
  }

  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
  a {
    &:hover {
    color: ${props => props.theme.colors.hoverText}
  }
`;

export const Quotation = styled.div`
width: 50%;
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "2.84rem" : "1.75rem"};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  line-height: 1;
  text-align: center;
`;

export const ItemImgCaption = styled.div`
  margin-top: ${(props) =>
    props.theme.name === "Desktop" ? "2.25rem" : "1.5rem"};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const ImageCaption = styled.p`
/* display: inline; */
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "1rem" : "12px"};
  line-height: ${(props) =>
    props.theme.name === "Desktop" ? "1.25rem" : "1rem"};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop: "0"};
`;

export const Menu = styled.div`
  display: flex;
  display: relative;
  z-index: 2;
  flex-direction: column;
  padding: ${(props) => props.theme.name === "Desktop" && `0 2.25rem`};
  color: ${(props) =>
    props.theme.name === "Desktop" && props.inModal !== true
      ? props.theme.colors.text
      : props.theme.colors.body};
`;
export const MenuHeading = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.name === "Mobile" && `24px`};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansMedium};
  text-transform: uppercase;
`;
export const MenuItem = styled.div`
  width: 100%;
  text-transform: capitalize;
  cursor: pointer;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  font-size: ${(props) => props.theme.name === "Mobile" && `24px`};
  margin-bottom: ${(props) => props.theme.name === "Mobile" && `1.5rem`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.2;
  background-image: ${(props) =>
    props.expandIcon && `url('${props.expandIcon}')`};
  background-position: right center;

  background-repeat: no-repeat;
`;


// export const MenuItem = styled.div`

//   width: 100%;
//   cursor: pointer;
//   font-weight: ${(props) => (props.bold ? "bold" : "normal")};
//   font-size: ${(props) => (props.theme.name === "Desktop" ? "28px" : "20px")};
//   line-height: ${(props) =>
//     props.theme.name === "Desktop" ? "1.2" : "1.2"};
//   text-transform: capitalize;
//   font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};

//   background-image: ${(props) =>
//     props.expandIcon && `url('${props.expandIcon}')`};
//   background-position: right center;

//   background-repeat: no-repeat;
// `;

export const Menu2Item = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: ${(props) => props.theme.name === "Mobile" && `1.5rem`};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) => (props.theme.name === "Desktop" ? "40px" : "20px")};
  line-height: ${(props) => (props.theme.name === "Desktop" ? "1.2" : "1.2")};
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  opacity: ${(props) => (props.theme.name === "Desktop" ? "0.5" : "1")};
  &:hover {
    opacity: 1;
  }
`;

export const Menu3Item = styled.div`
  width: 100%;
  cursor: pointer;
  margin-bottom: ${(props) =>
    props.theme.name === "Desktop" ? "2.25rem" : "1.5rem"};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-size: ${(props) =>
    props.theme.name === "Desktop" ? "2.48rem" : "20px"};
  line-height: ${(props) => (props.theme.name === "Desktop" ? "1.2" : "1.2")};
  text-transform: capitalize;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  opacity: ${(props) => (props.theme.name === "Desktop" ? "0.5" : "1")};
  &:hover {
    opacity: 1;
  }
`;
