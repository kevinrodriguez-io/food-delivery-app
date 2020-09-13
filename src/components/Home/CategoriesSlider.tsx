import React from 'react'
import { TouchableOpacity, View, Text, Image, FlatList } from 'react-native'
import { TopBar } from 'components/TopBar'
import { useTheme } from '@emotion/react'
import styled from '@emotion/native'
import { Category, CategoryName } from 'types/Category'
import { categories } from 'lib/categories'
import { Taco } from 'components/Icons/Taco'
import { Cold } from 'components/Icons/Cold'
import { Burger } from 'components/Icons/Burger'
import { Pizza } from 'components/Icons/Pizza'
import { Burrito } from 'components/Icons/Burrito'
import { HeaderContainer, Title } from 'components/Sections'

const Container = styled.View({
  marginTop: 35,
})

const CTAText = styled.Text(
  {
    fontSize: 12,
    lineHeight: 17,
  },
  ({ theme: { colors, fonts } }) => ({
    fontFamily: fonts.poppins.light,
    color: colors.textMuted,
  }),
)

type CategoryBoxContainerProps = {
  color: string
}

const CategoryBoxContainer = styled.View<CategoryBoxContainerProps>(
  {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  ({ color }) => ({
    backgroundColor: color,
  }),
)

type CategoryBoxProps = {
  category: Category
}

type CategoryIconProps = {
  name: CategoryName
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ name }) => {
  switch (name) {
    case CategoryName.Taco:
      return <Taco />
    case CategoryName.Cold:
      return <Cold />
    case CategoryName.Burger:
      return <Burger />
    case CategoryName.Pizza:
      return <Pizza />
    case CategoryName.Burrito:
      return <Burrito />
    default:
      throw new Error('Invalid input for category')
  }
}

const CategoryBoxTouchable = styled.TouchableOpacity({
  width: 64,
  paddingBottom: 17,
})

const CategoryText = styled.Text(
  {
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 5,
    height: 17,
  },
  ({ theme: { fonts, colors } }) => ({
    fontFamily: fonts.poppins.medium,

    color: colors.text,
  }),
)

const CategoryBox: React.FC<CategoryBoxProps> = ({ category }) => {
  return (
    <CategoryBoxTouchable>
      <CategoryBoxContainer color={category.color}>
        <CategoryIcon name={category.name} />
      </CategoryBoxContainer>
      <CategoryText>{category.name}</CategoryText>
    </CategoryBoxTouchable>
  )
}

const CategoriesSliderCTAText = styled(CTAText)({
  marginRight: 20,
})

export const CategoriesSlider = () => {
  return (
    <Container>
      <HeaderContainer>
        <Title>Explorar categorias</Title>
        <TouchableOpacity>
          <CategoriesSliderCTAText>Ver todos</CategoriesSliderCTAText>
        </TouchableOpacity>
      </HeaderContainer>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={e => e.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        ItemSeparatorComponent={() => <View style={{ width: 25 }} />}
        renderItem={({ item }) => (
          <CategoryBox key={item.name} category={item} />
        )}
      />
    </Container>
  )
}
