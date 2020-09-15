import React from 'react'
import { Image, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Home } from './Icons/Home'
import { Shop } from './Icons/Shop'

export const BottomBar: React.FC = () => {
  return (
    <View style={{ flexDirection: 'row',  }}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}></View>
    </View>
  )
}
