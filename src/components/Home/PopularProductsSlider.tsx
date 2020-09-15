import React from 'react'
import { Platform, View, Image, FlatList } from 'react-native'
import styled from '@emotion/native'
import { HeaderContainer, Title } from 'components/Sections'
import { BoxShadow } from 'components/AndroidShadow/BoxShadow'
import { ArrowRight } from 'components/Icons/ArrowRight'
import { CardLikeButton } from 'components/CardLikeButton'
import {
  PopularProductCardPrice,
  PopularProductCardSubTitle,
  PopularProductCardTitle,
} from 'components/Texts'

const Container = styled.View({
  marginTop: 35,
})

const ShadowContainerIOS = styled.View({
  backgroundColor: 'transparent',
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 15,
})

const ShadowContainerAndroid: React.FC = ({ children }) => (
  <BoxShadow
    settings={{
      width: 174,
      height: 214,
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

const CircletShadowIOS = styled.View({
  width: 90,
  height: 90,
  backgroundColor: 'white',
  shadowColor: '#209BD0',
  shadowOpacity: 0.4,
  shadowRadius: 20,
  borderRadius: 90,
})

const CircletShadowAndroid: React.FC = ({ children }) => (
  <BoxShadow
    settings={{
      width: 90,
      height: 90,
      color: '#209BD0',
      border: 20,
      opacity: 0.15,
      radius: 45,
      x: 0,
      y: 0,
    }}
  >
    {children}
  </BoxShadow>
)

const CircletShadow: React.FC = ({ children }) => {
  return Platform.OS === 'android' ? (
    <CircletShadowAndroid>{children}</CircletShadowAndroid>
  ) : (
    <CircletShadowIOS>{children}</CircletShadowIOS>
  )
}

const CardActionShadowIOS = styled.View({
  width: 30,
  height: 30,
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  borderRadius: 30,
})

const CardActionShadowAndroid: React.FC = ({ children }) => (
  <BoxShadow
    settings={{
      width: 30,
      height: 30,
      color: '#000',
      border: 10,
      opacity: 0.035,
      radius: 15,
      x: 0,
      y: 0,
    }}
  >
    {children}
  </BoxShadow>
)

const CardActionShadow: React.FC = ({ children }) => {
  return Platform.OS === 'android' ? (
    <CardActionShadowAndroid>{children}</CardActionShadowAndroid>
  ) : (
    <CardActionShadowIOS>{children}</CardActionShadowIOS>
  )
}

const PopularProductCardContainer = styled.TouchableOpacity({
  width: 174,
  height: 214,
  backgroundColor: 'white',
  borderRadius: 15,
})

const ProductCardImageContainer = styled.View({
  marginTop: 38,
  alignItems: 'center',
})

const ProductCardImageCircletContainer = styled.View({
  backgroundColor: 'white',
  flex: 1,
  borderRadius: 90,
  alignItems: 'center',
  justifyContent: 'center',
})

const PopularProductCardTextsContainer = styled.View({
  marginTop: 22,
  paddingHorizontal: 21,
})

const PopularProductCardActionContainer = styled.View({
  position: 'absolute',
  bottom: 12,
  right: 15,
})

const PopularProductCardActionContinueButton = styled.TouchableOpacity({
  width: 30,
  height: 30,
  borderRadius: 30,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
})

type PopularProductCardProps = {
  image: any
  title: string
  subTitle: string
  price: number
  isLiked: boolean
}

const PopularProductCard: React.FC<PopularProductCardProps> = ({
  image,
  isLiked,
  price,
  subTitle,
  title,
}) => {
  return (
    <ShadowContainer>
      <PopularProductCardContainer>
        <CardLikeButton isLiked={isLiked} />
        <ProductCardImageContainer>
          <CircletShadow>
            <ProductCardImageCircletContainer>
              <Image source={image} />
            </ProductCardImageCircletContainer>
          </CircletShadow>
        </ProductCardImageContainer>
        <PopularProductCardTextsContainer>
          <PopularProductCardTitle>{title}</PopularProductCardTitle>
          <PopularProductCardSubTitle>{subTitle}</PopularProductCardSubTitle>
          <PopularProductCardPrice>${price}</PopularProductCardPrice>
        </PopularProductCardTextsContainer>
        <PopularProductCardActionContainer>
          <CardActionShadow>
            <PopularProductCardActionContinueButton>
              <ArrowRight />
            </PopularProductCardActionContinueButton>
          </CardActionShadow>
        </PopularProductCardActionContainer>
      </PopularProductCardContainer>
    </ShadowContainer>
  )
}

const PopularProductsSliderHeaderContainer = styled(HeaderContainer)({
  marginBottom: 0,
})

const foods = [
  {
    image: require('assets/pizza.png'),
    title: 'Pizza Clásica',
    subTitle: 'Salsa clásica de la casa',
    price: 12.58,
    isLiked: false,
  },
  {
    image: require('assets/burger.png'),
    title: 'Hamburguesa mix',
    subTitle: 'Doble carne con queso',
    price: 15.21,
    isLiked: true,
  },
  {
    image: require('assets/pizza.png'),
    title: 'Pizza Thin Crust',
    subTitle: 'Borde delgado',
    price: 11.99,
    isLiked: true,
  },
]

export const PopularProductsSlider: React.FC = () => {
  return (
    <Container>
      <PopularProductsSliderHeaderContainer>
        <Title>Productos populares</Title>
      </PopularProductsSliderHeaderContainer>
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
          <PopularProductCard key={item.title} {...item} />
        )}
      />
    </Container>
  )
}
