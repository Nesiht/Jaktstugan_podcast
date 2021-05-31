import React from 'react'
import { AuthorSection, RegularText, HorizontalLine, StyledText, AuthorCard, AuthorImg, AuthorBio } from './style'
// import R_img from '../img/RT_Profil_transparent.png'
// import J_img from '../img/JT_Profil_transparent.png'
import data from './author.json'


export const Author = () => {
  return (
    <AuthorSection>
      <div>
        <HorizontalLine />
          <StyledText color='black'>Vilka är vi.</StyledText>
        <HorizontalLine />
      </div>

      {data.map( (item) => {
        return (
          <AuthorCard>
          <AuthorImg src={item.img} />
          <AuthorBio>
            <RegularText>
              {item.bio}
            </RegularText>
          </AuthorBio>
          <RegularText>{item.name}</RegularText>
        </AuthorCard>
        )
      })}

     </AuthorSection>
  )
}