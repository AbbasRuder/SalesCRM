import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClientList({ route, navigation }) {
  const [clientData, setClientData] = useState(null)
  const [userId, setUserId] = useState()
  const [userName, setUserName] = useState()

  const isFocused = useIsFocused()


  useEffect(() => {
    if (isFocused) {
      const getUserData = async () => {
        try {
          // -get id and name from device storage
          const id = await AsyncStorage.getItem('userId')
          const name = await AsyncStorage.getItem('userName')
          if (id && name) {
            setUserId(id)
            setUserName(name)
          }

          const formData = new FormData();
          formData.append("id", id);
          const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          };

          axios.post("https://salescrm.webnify.in/fetch_client_info.php", formData, config)
            .then(response => {
              if (response.data.success) {
                setClientData(response.data.client_details)
              }
            })
            .catch(error => {
              console.error('errorRequest', error.response)
            })
        } catch (error) {
          console.log("Error getting user data from Async Storage", error)
        }
      }
      getUserData()

    }
  }, [isFocused])

  const handleClickAddClient = () => {
    navigation.navigate("Add-Client", {
      userId: userId,
    })
  }

  const handleClickViewClient = (clientid) => {
    navigation.navigate("Client-Details", {
      userId: userId,
      clientId: clientid
    })
  }

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userId')
      await AsyncStorage.removeItem('userName')
      navigation.navigate('Login')
    } catch (error) {
      console.log("Error removing user data from device storage", error)
    }
  }

  return (
    <>
      <ScrollView>
        <View className="bg-[#fff]">
          <View className="p-4 flex-row justify-between items-center bg-[#FFF5E4]">
            <View className="flex-row items-center justify-center">
              <Ionicons name="person-circle" size={50} color="black" />
              <Text className="text-xl font-bold">Hello {userName}</Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity onPress={handleLogout}>
                <Ionicons name="arrow-back-circle-sharp" size={40} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="p-4 rounded-lg">
            <View className='mb-4 p-2 flex-row justify-between items-center'>
              <Text className="text-lg font-bold text-slate-400 underline">Leads</Text>
              <TouchableOpacity activeOpacity={0.6}
                onPress={handleClickAddClient}>
                <View className='p-2 flex-row items-center rounded-lg bg-slate-400'>
                  <Text className="mr-2 text-white font-bold">Add Client</Text>
                  <AntDesign name="addusergroup" size={22} color="#FF9494" />
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex gap-6">
              {clientData ? clientData.map((item, index) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} onPress={() => handleClickViewClient(item.id)} key={index}>
                    <View className="p-4 rounded-lg bg-[#FFE3E1]">
                      <View className="flex flex-row gap-2 items-center justify-between">
                        <Text className="w-2/3 text-lg font-medium text-[#FF9494">{item.sc_name}</Text>
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => Linking.openURL(`tel:+91${item.phone}`)}
                        >
                          <MaterialIcons name="add-call" size={28} color="#FF9494" className="" />
                        </TouchableOpacity>
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
                            <Text className="text-base">{item.address}</Text>
                          </View>
                          <Text className="w-18 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 text-xs font-medium capitalize">
                            {item.status}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              }) : (
                <View className="py-8">
                  <Text className="text-center text-lg font-semibold">No Leads are assigned to you</Text>
                </View>
              )}
            </View>

          </View>
        </View>
      </ScrollView>
    </>
  )
}
