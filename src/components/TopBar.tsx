import React from 'react'
import {
  Platform,
  Dimensions,
  View,
  TextInput,
  TextInputProps,
  Text,
  TouchableOpacity,
} from 'react-native'
import styled from '@emotion/native'
import { BoxShadow } from './AndroidShadow/BoxShadow'
import { SearchIcon } from './Icons/SearchIcon'
import { useTheme } from '@emotion/react'
import { NotificationIcon } from './Icons/NotificationIcon'
import { DiscountIcon } from './Icons/DiscountIcon'

const IOSShadowContainer = styled.View({
  height: 130,
  padding: 20,
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 20,
})

const AndroidContainer = styled.View({
  flex: 1,
  backgroundColor: 'white',
  padding: 20,
})

const AndroidShadowContainer: React.FC = ({ children }) => {
  const androidShadowSettings = {
    width: Dimensions.get('window').width,
    height: 130,
    color: '#000',
    border: 20,
    opacity: 0.05,
    x: 0,
    y: 2,
  }
  return (
    <BoxShadow settings={androidShadowSettings}>
      <AndroidContainer>{children}</AndroidContainer>
    </BoxShadow>
  )
}

const ShadowContainer: React.FC = ({ children }) => {
  if (Platform.OS === 'android')
    return <AndroidShadowContainer>{children}</AndroidShadowContainer>
  return <IOSShadowContainer>{children}</IOSShadowContainer>
}

const TopBarSafeAreaView = styled.SafeAreaView({
  ...(Platform.OS === 'android'
    ? {
        paddingTop: 25,
      }
    : {}),
  flex: 1,
})

const TopBarSearchBoxElement = styled.TextInput({}, ({ theme: { fonts } }) => ({
  fontFamily: fonts.poppins.regular,
  fontSize: 16,
  flex: 1,
  alignSelf: 'stretch',
}))

const TopBarSearchBox: React.FC<TextInputProps> = ({ ...props }) => {
  const { colors } = useTheme()
  return (
    <TopBarSearchBoxElement
      placeholderTextColor={colors.generalBorder}
      {...props}
    />
  )
}

const SearchBoxContainer = styled.View(
  {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 33,
  },
  ({ theme: { colors } }) => ({
    borderColor: colors.generalBorder,
  }),
)

const SearchIconContainer = styled.View({
  paddingHorizontal: 11,
})

const TitleContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

const Title = styled.Text(
  {
    fontSize: 22,
  },
  ({ theme: { colors, fonts } }) => ({
    fontFamily: fonts.poppins.semiBold,
    color: colors.primary,
  }),
)

const IconsGap = styled.View({ marginRight: 15 })

const IconsContainer = styled.View({
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
})

const TopBarContainer = styled.View({
  flex: 1,
  paddingTop: 25,
  flexDirection: 'row',
  alignItems: 'center',
})

export const TopBar: React.FC = () => {
  return (
    <ShadowContainer>
      <TopBarSafeAreaView>
        <TopBarContainer>
          <SearchBoxContainer>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <TopBarSearchBox placeholder="Buscar" />
          </SearchBoxContainer>
          <TitleContainer>
            <Title>Inicio</Title>
          </TitleContainer>
          <IconsContainer>
            <TouchableOpacity>
              <NotificationIcon />
            </TouchableOpacity>
            <IconsGap />
            <TouchableOpacity>
              <DiscountIcon />
            </TouchableOpacity>
          </IconsContainer>
        </TopBarContainer>
      </TopBarSafeAreaView>
    </ShadowContainer>
  )
}
