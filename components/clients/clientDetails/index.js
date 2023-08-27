import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";

export default function ClientDetails({ navigation, route }) {
  const [clientData, setClientData] = useState(null)
  const [response, setResponse] = useState('');
  const [remark, setRemark] = useState('');
  const [status, setStatus] = useState('');

  console.log('route', route.params);
  const { clientId, userId } = route.params

  useEffect(() => {
    const formData = new FormData()
    formData.append("client_id", clientId)
    formData.append("assigned_to", userId)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    axios.post("https://salescrm.webnify.in/fetch_one_client_info.php", formData, config)
      .then(response => {
        if (response.data.success) {
          setClientData(response.data.client_details)
          // console.log(response.data.client_details)
        }
      })
      .catch(error => {
        console.error('errorRequest', error.response)
      })
  }, [])

  useEffect(() => {
    if (clientData && clientData.length > 0) {
      const item = clientData[0]; // Assuming you're only expecting one item
      setStatus(item.status);
      setResponse(item.response);
      setRemark(item.remark);
    }
  }, [clientData]);

  const handleSubmit = async () => {
    try {
      const formData = new FormData()
      formData.append('status', status)
      formData.append('response', response)
      formData.append('remark', remark)
      formData.append('client_id', clientId)
      formData.append('assigned_to', userId)
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      };

      const result = await axios.post("https://salescrm.webnify.in/update_sales_info.php", formData, config)
      if (result.data.success) {
        Alert.alert("Successfully Updated")
        navigation.goBack()
      }

    } catch (error) {
      console.log('Error updating', error)
    }
  }

  console.log(status);
  return (
    <>
      {clientData && clientData.map((item, index) => {
        return (
          <View className="" key={index}>
            <View className="p-4 flex-row justify-center items-center gap-4 bg-red-100">
              <FontAwesome5 name="school" size={24} color="black" />
              <Text className="text-xl font-bold">{item.sc_name}</Text>
            </View>
            <View className="p-6">
              <View className="mb-2 flex-row justify-between items-center">
                <View>
                  <Text className="text-slate-400 underline">Client</Text>
                  <Text className="text-lg">{item.name}</Text>
                </View>
                <View className="flex-col justify-end items-end">
                  <Text className="text-slate-400 underline">Phono No</Text>
                  <Text className="text-lg">{item.phone}</Text>
                </View>
              </View>

              <View className="mb-2">
                <Text className="text-slate-400 underline">Email</Text>
                <Text className="text-lg">{item.email}</Text>
              </View>
              <View className="mb-4">
                <Text className="text-slate-400 underline">Address</Text>
                <Text className="text-lg">{item.address}</Text>
              </View>

              <Text className="mb-2 text-slate-400 underline">Status</Text>
              <View className='mb-4 border'>
                <Picker

                  selectedValue={status}
                  onValueChange={(value) => setStatus(value)}
                  mode="dropdown"
                >
                  <Picker.Item label="Pending" value="pending" />
                  <Picker.Item label="Contacted" value="contacted" />
                  <Picker.Item label="Visited" value="visited" />
                  <Picker.Item label="Acquired" value="acquired" />
                  <Picker.Item label="Rejected" value="rejected" />
                </Picker>
              </View>

              <Text className="mb-2 text-slate-400 underline">Response</Text>
              <TextInput
                className="mb-4 p-2 border"
                placeholder='Type response'
                onChangeText={(e) => setResponse(e)}
                value={response}
              />

              <Text className="mb-2 text-slate-400 underline">Remark</Text>
              <TextInput
                className="p-2 border"
                placeholder='Type additional remarks'
                onChangeText={(e) => setRemark(e)}
                value={remark}
              />

              <TouchableOpacity className="mt-8 w-full py-4 bg-red-300 rounded-md"
                onPress={handleSubmit}>
                <Text className="text-center text-lg font-medium text-white">Submit</Text>
              </TouchableOpacity>

            </View>
          </View>
        )
      })}
    </>
  )
}