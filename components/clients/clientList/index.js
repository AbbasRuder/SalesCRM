import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function ClientList({ route, navigation }) {
  console.log(route.params)
  const { userDetails } = route.params

  const handlePress = () => {
    navigation.navigate("Client-Details")
  }

  const data = [
    {
      'sc_name': 'Evergreen English School',
      'name': 'Subul Bora',
      'location': 'Borgang, Biswanath ',
      'status': 'Pending'
    },
    {
      'sc_name': 'Pearl Academy',
      'name': 'Rutun Goswami',
      'location': 'Kamrup Metro, Guwahati',
      'status': 'Visited'
    },
    {
      'sc_name': 'Evergreen English School',
      'name': 'Subul Bora',
      'location': 'Borgang, Biswanath',
      'status': 'Pending'
    },
    {
      'sc_name': 'Pearl Academy',
      'name': 'Rutun Goswami',
      'location': 'Kamrup Metro, Guwahati',
      'status': 'Visited'
    },
    {
      'sc_name': 'Evergreen English School',
      'name': 'Subul Bora',
      'location': 'Borgang, Biswanath',
      'status': 'Pending'
    },
    {
      'sc_name': 'Pearl Academy',
      'name': 'Rutun Goswami',
      'location': 'Kamrup Metro, Guwahati',
      'status': 'Visited'
    },
    {
      'sc_name': 'Evergreen English School',
      'name': 'Subul Bora',
      'location': 'Borgang, Biswanath Chariali and something long',
      'status': 'Pending'
    },
    {
      'sc_name': 'Pearl Academy very long school name',
      'name': 'Rutun Goswami',
      'location': 'Kamrup Metro, Guwahati',
      'status': 'Visited'
    },
  ]

  return (
    <>
      <ScrollView>
        <View className="h-full">
          <View className="p-4 flex-row gap-4 items-center justify-center bg-[#FFF5E4]">
            <Ionicons name="person-circle" size={50} color="black" />
            <Text className="text-xl">Hello Abbash Ali {userDetails}</Text>
          </View>

          <View className="p-4 bg-[#fff] rounded-lg">
            <View className='mb-4 p-2 flex-row justify-between items-center'>
              <Text className="text-lg font-bold text-slate-400 underline">Leads</Text>
              <TouchableOpacity activeOpacity={0.6}
                onPress={() => {navigation.navigate('Add-Client')}}>
                <View className='p-2 flex-row items-center rounded-lg bg-slate-400'>
                  <Text className="mr-2 text-white font-bold">Add Client</Text>
                  <AntDesign name="addusergroup" size={22} color="#FF9494" />
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex gap-6">
              {data.map((item, index) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} onPress={handlePress} key={index}>
                    <View className="p-4 rounded-lg bg-[#FFE3E1]">
                      <View className="flex flex-row gap-2 items-center justify-between">
                        <Text className="w-2/3 text-lg font-medium text-[#FF9494">{item.sc_name}</Text>
                        <MaterialIcons name="add-call" size={28} color="#FF9494" className="" />
                      </View>
                      <View className="mt-2">
                        <View className="flex flex-row gap-2 items-center">
                          <MaterialIcons name="person" size={24} color="#FF9494" />
                          <Text className="text-base">{item.name}</Text>
                        </View>
                      </View>
                      <View>
                        <View className="flex-row items-center justify-between">
                          <View className="w-2/3 flex flex-row gap-2 items-center">
                            <MaterialIcons name="location-pin" size={24} color="#FF9494" />
                            <Text className="text-base">{item.location}</Text>
                          </View>
                          <Text className="w-16 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 text-xs font-medium ">{item.status}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}
