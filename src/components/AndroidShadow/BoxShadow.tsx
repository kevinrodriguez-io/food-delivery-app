import React from 'react'
import { View, ViewStyle } from 'react-native'
import Svg, {
  Rect,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  Path,
} from 'react-native-svg'
import { ColorUtils } from '@kevinrodriguez-io/pigment-core'

export type BoxShadowProps = {
  settings: {
    width?: number
    height?: number
    color?: string
    border?: number
    radius?: number
    opacity?: number
    x?: number
    y?: number
    style?: ViewStyle
  }
}

export const BoxShadow: React.FC<BoxShadowProps> = ({ settings, children }) => {
  const {
    width = 0,
    height = 0,
    color = '#000',
    border = 0,
    radius = 0,
    opacity = 1,
    x = 0,
    y = 0,
    style = {},
  } = settings

  const lineWidth = border,
    rectWidth = width - radius * 2,
    rectHeight = height - radius * 2

  const { r, g, b } = ColorUtils.HEXtoRGB(color)

  const renderLinear = (key: string) => {
    return [
      <Stop
        offset="0"
        stopColor={color}
        stopOpacity={opacity}
        key={`${key}Linear0`}
      />,
      <Stop
        offset="1"
        stopColor={color}
        stopOpacity="0"
        key={`${key}Linear1`}
      />,
    ]
  }

  const renderRadial = (key: string) => {
    return [
      <Stop
        offset="0"
        stopColor={color}
        stopOpacity={opacity}
        key={`${key}Radial0`}
      />,
      <Stop
        offset={(radius / (lineWidth + radius)).toString()}
        stopColor={color}
        stopOpacity={opacity}
        key={`${key}Radial1`}
      />,
      <Stop
        offset="1"
        stopColor={color}
        stopOpacity="0"
        key={`${key}Radial2`}
      />,
    ]
  }

  const outerWidth = lineWidth + radius

  return (
    <View
      style={[
        {
          position: 'relative',
          width,
          height,
        },
        style,
      ]}
    >
      <Svg
        height={height + lineWidth * 2 + radius * 2}
        width={width + lineWidth * 2 + radius * 2}
        style={{
          position: 'absolute',
          top: y - lineWidth,
          left: x - lineWidth,
        }}
      >
        <Defs>
          <LinearGradient id="top" x1="0%" x2="0%" y1="100%" y2="0%">
            {renderLinear('BoxTop')}
          </LinearGradient>
          <LinearGradient id="bottom" x1="0%" x2="0%" y1="0%" y2="100%">
            {renderLinear('BoxBottom')}
          </LinearGradient>
          <LinearGradient id="left" x1="100%" y1="0%" x2="0%" y2="0%">
            {renderLinear('BoxLeft')}
          </LinearGradient>
          <LinearGradient id="right" x1="0%" y1="0%" x2="100%" y2="0%">
            {renderLinear('BoxRight')}
          </LinearGradient>

          <RadialGradient
            id="border-left-top"
            r="100%"
            cx="100%"
            cy="100%"
            fx="100%"
            fy="100%"
          >
            {renderRadial('BoxLeftTop')}
          </RadialGradient>
          <RadialGradient
            id="border-left-bottom"
            r="100%"
            cx="100%"
            cy="0%"
            fx="100%"
            fy="0%"
          >
            {renderRadial('BoxLeftBottom')}
          </RadialGradient>
          <RadialGradient
            id="border-right-top"
            r="100%"
            cx="0%"
            cy="100%"
            fx="0%"
            fy="100%"
          >
            {renderRadial('BoxRightTop')}
          </RadialGradient>
          <RadialGradient
            id="border-right-bottom"
            r="100%"
            cx="0%"
            cy="0%"
            fx="0%"
            fy="0%"
          >
            {renderRadial('BoxRightBottom')}
          </RadialGradient>
        </Defs>

        <Path
          d={`M 0 ${outerWidth},Q 0 0 ${outerWidth} 0,v ${lineWidth},q ${-radius} 0 ${-radius} ${radius},h ${-lineWidth},z`}
          fill="url(#border-left-top)"
        />
        <Path
          d={`M ${
            rectWidth + lineWidth + radius
          } 0,q ${outerWidth} 0 ${outerWidth} ${outerWidth},h ${-lineWidth},q 0 ${-radius} ${-radius} ${-radius},v ${-lineWidth},z`}
          fill="url(#border-right-top)"
        />
        <Path
          d={`M ${rectWidth + lineWidth + 2 * radius} ${
            rectHeight + lineWidth + radius
          },h ${lineWidth},q 0 ${outerWidth} -${outerWidth} ${outerWidth},v ${-lineWidth},q ${radius} 0 ${radius} ${-radius},z`}
          fill="url(#border-right-bottom)"
        />
        <Path
          d={`M 0 ${
            rectHeight + lineWidth + radius
          },q 0 ${outerWidth} ${outerWidth} ${outerWidth},v ${-lineWidth},q ${-radius} 0 ${-radius} ${-radius},h ${-lineWidth},z`}
          fill="url(#border-left-bottom)"
        />

        <Rect
          x={outerWidth}
          y="0"
          width={rectWidth}
          height={lineWidth}
          fill="url(#top)"
        />
        <Rect
          x="0"
          y={outerWidth}
          width={lineWidth}
          height={rectHeight}
          fill="url(#left)"
        />
        <Rect
          x={rectWidth + lineWidth + 2 * radius}
          y={outerWidth}
          width={lineWidth}
          height={rectHeight}
          fill="url(#right)"
        />
        <Rect
          x={outerWidth}
          y={rectHeight + lineWidth + 2 * radius}
          width={rectWidth}
          height={lineWidth}
          fill="url(#bottom)"
        />
        <Path
          d={`M ${outerWidth} ${lineWidth},h ${rectWidth},q ${radius} 0 ${radius} ${radius},v ${rectHeight},q 0 ${radius} -${radius} ${radius},h -${rectWidth},q -${radius} 0 -${radius} -${radius},v -${rectHeight},q 0 -${radius} ${radius} -${radius}`}
          fill={`rgba(${r},${g},${b},${opacity || 1})`}
        />
      </Svg>
      {children}
    </View>
  )
}
