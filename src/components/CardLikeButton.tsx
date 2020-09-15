import styled from '@emotion/native'
import React from 'react'
import { HeartEmpty, HeartFull } from './Icons/Heart'

export const LikeButtonContainer = styled.TouchableOpacity({
  position: 'absolute',
  right: 19,
  top: 14,
  zIndex: 1,
})

export type CardLikeButtonProps = {
  isLiked: boolean
}

export const CardLikeButton: React.FC<CardLikeButtonProps> = ({ isLiked }) => {
  return (
    <LikeButtonContainer>
      {isLiked ? <HeartFull /> : <HeartEmpty />}
    </LikeButtonContainer>
  )
}
