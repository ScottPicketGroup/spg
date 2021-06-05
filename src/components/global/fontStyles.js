import styled from 'styled-components'

export const Header1 = styled.h1`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "2.84rem" : "1.065rem")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const Header2 = styled.h2`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "1.59rem" : ".88rem")};
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
export const Header3 = styled.h3`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "20px" : "18px")};
  margin-bottom: 1rem;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;
export const Header4 = styled.h4`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "20px" : "18px")};
  margin-bottom: 1.75rem;
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
`;

export const BC1 = styled.p`
  margin-top: 3.5rem;
  margin-bottom: 6rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "1.59rem" : ".88rem")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 2.15rem;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};

  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`;
export const BC3 = styled.p`
  margin-top: 0.75rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? ".88rem" : ".88rem")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  line-height: 2.15rem;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.link ? "pointer" : "text")};

  &:hover {
    color: ${(props) =>
      props.link ? props.theme.colors.hoverText : props.theme.colors.text};
  }
`;

export const Quotation = styled.div`
  font-size: ${(props) => (props.theme.name === "Desktop" ? "2.84rem" : "1.065rem")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  line-height: 3.5rem;
  text-align: center;
`;

export const ItemImgCaption = styled.div`
  margin-top: 2.25rem;
  font-size: ${(props) => (props.theme.name === "Desktop" ? "36px" : "20px")};
  font-family: ${(props) => props.theme.fontFamily.Times};
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const ImageCaption = styled.p`
  
  font-size: ${(props) => (props.theme.name === "Desktop" ? "7.71rem" : ".59rem")};
  font-family: ${(props) => props.theme.fontFamily.UntitledSansLight};
  
  color: ${(props) => props.theme.colors.text};
`;