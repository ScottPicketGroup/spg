import React from 'react'

export const VenuesOld = () => {
    return (
        <SectionContainer>
        <InnerContainer style={{ marginTop: `6rem` }}>
          <LeftContainer></LeftContainer>
          <RightContainer>
            <Grid cols={2}>
              <Item link={true}>
                <ItemImgLink href='http://www.chancerylane.com.au ' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
               placeholder="blurred"
                  src="../../../images/home-venues/CL.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>
                    Chancery Lane
                  </Header2>
                  <BC3 link={true}>Little Collins St, Melbourne</BC3>
                </ItemImgLink>
              </Item>
              <Item >
                <ItemImgLink href='http://www.theestelle.com.au' target="_blank" link={true}>
                  <FullImageContainer>
                  <StaticImage 
                  placeholder="blurred"
                  src="../../../images/home-venues/Estelle.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>Estelle</Header2>
                  <BC3 link={true}>High St, Northcote</BC3>
                </ItemImgLink>
               <BC3>More info -></BC3>
               <InfoContainer open={open.info}/>
              </Item>
              <Item link={true}>
                {" "}
                <ItemImgLink href='http://www.longrainmelbourne.com' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
                  placeholder="blurred"
                  src="../../../images/home-venues/LG.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>Longrain</Header2>
                  <BC3 link={true}>Little Bourke St, Melbourne </BC3>
                </ItemImgLink>
              </Item>
        
              <Item link={true}>
                {" "}
                <ItemImgLink href='https://matilda159.com/' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
                  placeholder="blurred"
                  src="../../../images/home-venues/Matilda.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>Matilda</Header2>
                  <BC3 link={true}>Domain Rd, South Yarra</BC3>
                </ItemImgLink>
              </Item>
              <Item link={true}>
                {" "}
                <ItemImgLink href='http://www.pastorerestaurant.com.au' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
                  placeholder="blurred"
                  src="../../../images/home-venues/Pastore.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>Pastore</Header2>
                  <BC3 link={true}>Dandenong Rd, Chadstone</BC3>
                </ItemImgLink>
              </Item>
              <Item link={true}>
                {" "}
                <ItemImgLink href='http://www.longsong.com.au' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
                  placeholder="blurred"
                  src="../../../images/home-venues/Longsong.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>Longsong</Header2>
                  <BC3 link={true}>UPSTAIRS, Little Bourke St, Melbourne</BC3>
                </ItemImgLink>
              </Item>
              <Item link={true}>
                {" "}
                <ItemImgLink href='http://www.leshoppe.com.au' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
                  aspectRatio={3 / 2}
                  placeholder="blurred"
                  src="../../../images/home-venues/LeShoppe.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>
                    Le Shoppe
                  </Header2>
                  <BC3 link={true}>‘Little Collins St, Melbourne</BC3>
                </ItemImgLink>
              </Item>
              <Item link={true}>
                {" "}
                <ItemImgLink href='http://' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
                  aspectRatio={3 / 2}
                  placeholder="blurred"
                  layout="fullWidth"
                  src="../../../images/home-venues/events.png" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>
                    SP Events
                  </Header2>
                  <BC3 link={true}>Victoria</BC3>
                </ItemImgLink>
              </Item>
              <Item link={true}>
                {" "}
                <ItemImgLink href='http://www.pickettsdeli.com' target="_blank">
                  <FullImageContainer>
                  <StaticImage 
                  aspectRatio={3 / 2}
                  placeholder="blurred"
                  layout="fullWidth"
                  src="../../../images/home-venues/deli.jpg" alt="Chancery Lane" />
                  </FullImageContainer>
                  <Header2 style={{ marginTop: `1.25rem` }}>
                  Pickett’s Deli & Rotisserie
                  </Header2>
                  <BC3 link={true}>Terminal 3, Melbourne Airport </BC3>
                </ItemImgLink>
              </Item>
            </Grid>
          </RightContainer>
        </InnerContainer>
        </SectionContainer>
        
    )
}
