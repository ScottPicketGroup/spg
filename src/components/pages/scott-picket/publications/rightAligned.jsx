import React from "react"
import { useTheme } from "styled-components"

import { Grid, Item } from "./styled-components"
import { BC3, Header2} from "../../../global/fontStyles"
import { StaticImage } from "gatsby-plugin-image"

const LeftAligned = () => {
  const theme = useTheme()

  return theme ? (
    <Grid cols="2">
      <Item>
        <Header2 marginBottom="1rem" marginTop="-5rem" theme={theme}>
          Scott Pickett: A Cook’s Story
        </Header2>

        <BC3 light>
          A Cook’s Story tells of my life combining a passion for food with the
          art and craft of cooking. It’s an open account of my dramas in the
          kitchen, the roller-coaster of opening a restaurant, the demands of
          opening more, and the pleasures and challenges of competition and
          success
        </BC3>

        <BC3 light>Available for purchase in local bookstores.</BC3>
      </Item>
      <Item>
        <StaticImage
          src="../../../../images/publications/sp-book.jpg"
          alt="A cooks story"
        />
      </Item>
    </Grid>
  ) : (
    <div></div>
  )
}

export default LeftAligned
