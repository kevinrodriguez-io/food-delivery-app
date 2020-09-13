import React from 'react'
import styled from '@emotion/native'
import { BoxShadow } from 'components/AndroidShadowContainer/BoxShadow'
import { FlatList, Platform, View, Text } from 'react-native'
import { HeaderContainer, Title } from '../Sections'
import { CardLikeButton } from 'components/CardLikeButton'
import {
  CategoryText,
  PopularProductCardPrice,
  PopularProductCardSubTitle,
  PopularProductCardTitle,
  RecommendationTitle,
} from 'components/Texts'

const ShadowContainerIOS = styled.View({
  backgroundColor: 'transparent',
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 15,
})

const ShadowContainerAndroid: React.FC = ({ children }) => (
  <BoxShadow
    settings={{
      width: 240,
      height: 104,
      color: '#000',
      border: 15,
      opacity: 0.025,
      x: 0,
      y: 0,
    }}
  >
    {children}
  </BoxShadow>
)

const ShadowContainer: React.FC = ({ children }) => {
  return Platform.OS === 'android' ? (
    <ShadowContainerAndroid>{children}</ShadowContainerAndroid>
  ) : (
    <ShadowContainerIOS>{children}</ShadowContainerIOS>
  )
}

const CardContainer = styled.TouchableOpacity({
  width: 240,
  height: 104,
  backgroundColor: 'white',
  borderRadius: 15,
})

const RecommendationImage = styled.Image({
  position: 'absolute',
})

const RecommendationCategoryText = styled(CategoryText)({
  marginBottom: 12,
})

type RecommendationCardProps = {
  image: any
  category: string
  title: string
  subTitle: string
  price: number
  isLiked: boolean
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  image,
  isLiked,
  title,
  subTitle,
  price,
  category,
}) => {
  return (
    <ShadowContainer>
      <CardContainer>
        <CardLikeButton isLiked={isLiked} />
        <View
          style={{
            position: 'absolute',
            left: 112,
            top: 16,
          }}
        >
          <RecommendationCategoryText>{category}</RecommendationCategoryText>
          <RecommendationTitle>{title}</RecommendationTitle>
          <PopularProductCardSubTitle>{subTitle}</PopularProductCardSubTitle>
          <PopularProductCardPrice>${price}</PopularProductCardPrice>
        </View>
        <RecommendationImage source={image} />
      </CardContainer>
    </ShadowContainer>
  )
}

const RecommendationSliderHeader = styled(HeaderContainer)({
  marginBottom: 0,
})

const foods = [
  {
    category: 'Natural',
    image: require('assets/tropicalDrinks.png'),
    title: 'Malteadas tropicales',
    subTitle: 'Elaborado con jugos naturales',
    price: 8.36,
    isLiked: true,
  },
  {
    category: 'Natural',
    image: require('assets/naturalDrinks.png'),
    title: 'Malteadas de Verano',
    subTitle: 'Elaborado con jugos caseros',
    price: 7.22,
    isLiked: true,
  },
]

export const RecommendationsSlider: React.FC = () => {
  return (
    <View>
      <RecommendationSliderHeader>
        <Title>Recomendados</Title>
      </RecommendationSliderHeader>
      <FlatList
        data={foods}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 40,
          zIndex: 10,
        }}
        horizontal
        keyExtractor={e => e.title}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item }) => (
          <RecommendationCard key={item.title} {...item} />
        )}
      />
    </View>
  )
}
