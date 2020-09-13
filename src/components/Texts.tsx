import styled from '@emotion/native'

export const PopularProductCardTitle = styled.Text(
  { fontSize: 12, lineHeight: 17 },
  ({ theme: { colors, fonts } }) => ({
    color: colors.textAlternative,
    fontFamily: fonts.poppins.regular,
  }),
)

export const PopularProductCardSubTitle = styled.Text(
  {
    fontSize: 7,
    lineHeight: 9,
  },
  ({ theme: { colors, fonts } }) => ({
    color: colors.textAlternative,
    fontFamily: fonts.poppins.light,
  }),
)

export const PopularProductCardPrice = styled.Text(
  {
    fontSize: 14,
    lineHeight: 20,
  },
  ({ theme: { colors, fonts } }) => ({
    color: colors.text,
    fontFamily: fonts.poppins.semiBold,
  }),
)

export const RecommendationTitle = styled(PopularProductCardTitle)(
    {
      fontSize: 10,
    },
    ({ theme: { colors } }) => ({
      color: colors.text,
    }),
  )

export const CategoryText = styled.Text(
  {
    fontSize: 10,
    lineHeight: 15,
  },
  ({ theme: { colors, fonts } }) => ({
    color: colors.textMuted,
    fontFamily: fonts.poppins.light,
  }),
)
