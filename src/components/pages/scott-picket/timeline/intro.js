import React from 'react'
import styled from 'styled-components'
import { useTheme } from "styled-components";
import {
    SectionContainer,
} from "../../../global/GlobalStyles";
import {
    InnerContainer,
    TimeLineContainer,
    RightContainer,
    LeftContainer,
} from "../styled-components";

import {
    BC1,
    Header1,
} from "../../../global/fontStyles";
const Intro = () => {
    const theme = useTheme();

    return theme ? (
<div>
        <SectionContainer>
            <TimeLineContainer>
                <InnerContainer>
                    <LeftContainer></LeftContainer>
                    <RightContainer>
                        <Header1 theme={theme}>Timeline</Header1>
                        <BC1 theme={theme} marginBottom="6rem">
                        It’s been one hell of a career so far, yet I feel like I’m only just getting started. Some of the highlights are below:
         </BC1>
                    </RightContainer>
                </InnerContainer>
            </TimeLineContainer>
        </SectionContainer>
       </div>
       ) : (
         <div></div>
       );
}

export default Intro