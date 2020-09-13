import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      accent: string
      love: string
      text: string
      textSecondary: string
      textAlternative: string
      textMuted: string
      background: string
      generalBorder: string
    }
    fonts: {
      poppins: {
        semiBold: string
        medium: string
        regular: string
        light: string
      }
    }
  }
}
