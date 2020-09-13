import React from 'react'
import { View } from 'react-native'
import { TopBar } from 'components/TopBar'
import { useTheme } from '@emotion/react'
import styled from '@emotion/native'
import { CategoriesSlider } from 'components/Home/CategoriesSlider'
import { PopularProductsSlider } from 'components/Home/PopularProductsSlider'
import { RecommendationsSlider } from 'components/Home/RecommendationsSlider'
import { BottomBar } from 'components/BottomBar'

const FlexOneContainer = styled.View({
  flex: 1,
})

export const HomeScreen: React.FC = () => {
  return (
    <>
      <FlexOneContainer>
        <TopBar />
        <FlexOneContainer>
          <CategoriesSlider />
          <PopularProductsSlider />
          <RecommendationsSlider />
        </FlexOneContainer>
      </FlexOneContainer>
      <BottomBar />
    </>
  )
}
