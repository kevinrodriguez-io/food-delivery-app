import styled from '@emotion/native'
import React from 'react'
import { HeartEmpty, HeartFull } from './Icons/Heart'

export const LikeButtonContainer = styled.TouchableOpacity({
  position: 'absolute',
  right: 19,
  top: 14,
  zIndex: 1,
})

export const CardLikeButton: React.FC<{ isLiked: boolean }> = ({ isLiked }) => {
  return (
    <LikeButtonContainer>
      {isLiked ? <HeartFull /> : <HeartEmpty />}
    </LikeButtonContainer>
  )
}
