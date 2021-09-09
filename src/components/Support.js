import React from 'react'
import { SupportSection, SectionTitleContainer, HorizontalLine, StyledText, StyledA } from './style'
// TEST STYLES
import { SmallCard } from './style'
import data from './support.json'


export const Support = () => {
  return (
    <SupportSection>

      <SectionTitleContainer>
        <HorizontalLine />
          <StyledText color='black'>Stöd Podden.</StyledText>
        <HorizontalLine />
      </SectionTitleContainer>

      {data.map( ( item ) => {
        if ( item.visible ) {
          return (
          <StyledA href={item.linkUrl} target="_blank" key={item.title}>
            <SmallCard bg={item.img}>
              <StyledText>{item.title}</StyledText>
            </SmallCard>
          </StyledA>
          )
        } else { return null }
      })}

    </SupportSection>
  )
}
