import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

export const ArrowRight: React.FC = () => {
  return (
    <Svg width={7.074} height={11.319} viewBox="0 0 7.074 11.319">
      <G fill="none" stroke="#153e73" strokeLinecap="round" strokeWidth={2}>
        <Path d="M1.414 1.414l4.245 4.245M5.659 5.659L1.414 9.904" />
      </G>
    </Svg>
  )
}
