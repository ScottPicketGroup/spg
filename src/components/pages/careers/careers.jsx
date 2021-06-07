import React from "react";
import { useTheme } from "styled-components";
import { Container, SectionContainer } from "../../global/GlobalStyles";
import HomeImage from "../../../images/Screen Shot 2021-04-18 at 1.42.07 pm.png";
import Logo from "../../../images/logo.svg";
import {
  InnerContainer,
  RightContainer,
  LeftContainer,
  LogoImg,
  Button,
} from "./styled-components";
import { BC1, Header1, BC3, Header2, Header4 } from "../../global/fontStyles";

import Footer from "../../Common/Footer";
import Home from "../../Common/DesktopHome";
const Landing = ({ pageProps }) => {
  const theme = useTheme();

  return theme ? (
    <div>
      <Container theme={theme} style={{paddingBottom: `9rem`}}>
        <Home HomeImage={HomeImage} path={pageProps.path} />
        <SectionContainer>
          <InnerContainer>
            <LeftContainer>
             
            </LeftContainer>
            <RightContainer>
              <Header1 theme={theme}>Careers</Header1>
              <BC1 theme={theme}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur.
              </BC1>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>

        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header2 theme={theme}>Waitress - FOH All Rounder</Header2>
              <Header4 theme={theme}>Longrain melbourne</Header4>
              <Header4 theme={theme}>10th April 2021</Header4>
              <BC3 theme={theme}>
                <li> Casual, part-time & full-time positions available</li>
                <li> Must have experience in Hospitality </li>
                <li>
                  {" "}
                  Must be a passionate, friendly and reliable team player
                </li>
                <li>
                  {" "}
                  Must thrive in a busy environment - Immediate start necessary
                </li>
              </BC3>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          <InnerContainer>
            <LeftContainer></LeftContainer>
            <RightContainer>
              <Header2 theme={theme}>Sous Chef</Header2>
              <Header4 theme={theme}>Matilda melbourne</Header4>
              <Header4 theme={theme}>10th April 2021</Header4>
              <BC3 theme={theme}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                volutpat risus efficitur nulla aliquam suscipit. Nulla sed
                ullamcorper felis, a vulputate mi. Aenean enim leo, egestas
                vitae ultrices at, placerat ac lorem. Donec tortor augue,
                pulvinar et dictum vel, euismod id velit. Sed nec suscipit
                mauris. Ut sollicitudin rutrum eros at maximus. Duis vitae dui
                eu tellus dignissim commodo et in tortor. Praesent ac magna
                vulputate, fringilla odio et, vehicula lorem.
                <li> Casual, part-time & full-time positions available</li>
                <li> Must have experience in Hospitality </li>
                <li>
                  {" "}
                  Must be a passionate, friendly and reliable team player
                </li>
                <li>
                  {" "}
                  Must thrive in a busy environment - Immediate start necessary
                </li>
              </BC3>
              <Button>Apply</Button>
            </RightContainer>
          </InnerContainer>
        </SectionContainer>
      </Container>

      <Footer />
    </div>
  ) : (
    <div></div>
  );
};

export default Landing;
