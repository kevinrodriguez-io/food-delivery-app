import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'theme'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
} from '@expo-google-fonts/poppins'
import { HomeScreen } from 'views/Home'

export const App: React.FC = () => {
  const [didLoadFonts] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_300Light,
  })
  if (!didLoadFonts) return <AppLoading />
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </>
  )
}
