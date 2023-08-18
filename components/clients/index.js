import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function Clients({ route, navigation }) {
  console.log(route.params)
  const { userDetails } = route.params

  const handlePress = () => {
    console.log('pressed')
  }
  return (
    <View className="h-full p-4">
      <View className="">
        <Text className="text-xl mb-4">Hello {userDetails}</Text>
        <Text>These are your Clients</Text>
      </View>

      <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
        <View className="mt-10 p-4 rounded-lg bg-[#1A5D1A]">
          <View className="flex flex-row gap-2 items-center justify-between">
            <Text className="text-lg font-medium text-white">Evergreen English School</Text>
            <View>
              <MaterialIcons name="add-call" size={28} color="#F1C93B" />
            </View>
          </View>
          <View className="mt-2">
            <View className="flex flex-row gap-2 items-center">
              <MaterialIcons name="person" size={24} color="#FAE392" />
              <Text className="text-base text-gray-100">Subul Bora</Text>
            </View>
          </View>
          <View>
            <View className="flex-row items-center justify-between">
              <View className="flex flex-row gap-2 items-center">
                <MaterialIcons name="location-pin" size={24} color="#FAE392" />
                <Text className="text-base text-gray-100">Borgang, Biswanath</Text>
              </View>
              <Text className="w-16 px-2.5 py-0.5 rounded bg-pink-100 text-gray-800 text-xs font-medium ">Pending</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}


// School Name
// Client
// Address            Status
// Call