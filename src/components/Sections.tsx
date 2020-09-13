import styled from '@emotion/native'

export const HeaderContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  minHeight: 17,
  marginBottom: 19,
})

export const Title = styled.Text(
  {
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 17,
  },
  ({ theme: { colors, fonts } }) => ({
    fontFamily: fonts.poppins.semiBold,
    color: colors.text,
  }),
)
