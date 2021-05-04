export const theme = {
  colors: {
    primary: '#5117AC',
    secondary: '#20D0C4',
    accent: '#F1395E',
    love: '#F02756',
    background: '#FFFFFF',
    text: '#153E73',
    textSecondary: '#707070',
    textAlternative: '#515F65',
    textMuted: '#CFCFCF',
    generalBorder: '#E2EDF2',
  },
  fonts: {
    poppins: {
      semiBold: 'Poppins_600SemiBold',
      medium: 'Poppins_500Medium',
      regular: 'Poppins_400Regular',
      light: 'Poppins_300Light',
    },
  },
} as const

export type AppTheme = typeof theme
