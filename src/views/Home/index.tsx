import React from 'react'
import { View } from 'react-native'
import { TopBar } from 'components/TopBar'
import { useTheme } from '@emotion/react'
import styled from '@emotion/native'
import { CategoriesSlider } from 'components/Home/CategoriesSlider'
import { PopularProductsSlider } from 'components/Home/PopularProductsSlider'
import { RecommendationsSlider } from 'components/Home/RecommendationsSlider'
import { BottomBar } from 'components/BottomBar'

export const HomeScreen: React.FC = () => {
  return (
    <>
      <FlexOneContainer>
        <TopBar />
        <TopContainer>
          <CategoriesSlider />
          <PopularProductsSlider />
          <RecommendationsSlider />
        </TopContainer>
      </FlexOneContainer>
      <BottomBar />
    </>
  )
}

const FlexOneContainer = styled.View({
  flex: 1,
})

const TopContainer = styled.ScrollView({})
