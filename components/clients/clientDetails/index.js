import React from 'react'
import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";

export default function ClientDetails({navigation}) {
  const [response, setResponse] = useState('');
  const [remark, setRemark] = useState('');
  const [status, setStatus] = useState('');

  console.log(status);

  const handleSubmit = () => {
    navigation.goBack()
  }
  return (
    <View className="">
      <View className="p-4 flex-row justify-center items-center gap-4 bg-red-100">
        <FontAwesome5 name="school" size={24} color="black" />
        <Text className="text-xl font-bold">Evergreen English School</Text>
      </View>
      <View className="p-6">
        <View className="mb-2 flex-row justify-between items-center">
          <View>
            <Text className="text-slate-400 underline">Client</Text>
            <Text className="text-lg">Subul Bora</Text>
          </View>
          <View className="flex-col justify-end items-end">
            <Text className="text-slate-400 underline">Phono No</Text>
            <Text className="text-lg">2019382643</Text>
          </View>
        </View>
        <View className="mb-4 flex-row justify-between items-center">
          <View>
            <Text className="text-slate-400 underline">Email</Text>
            <Text className="text-lg">subul@gmail.com</Text>
          </View>
          <View className="flex-col justify-end items-end">
            <Text className="text-slate-400 underline">Address</Text>
            <Text className="text-lg">Borgang, Biswanath</Text>
          </View>
        </View>

        <Text className="mb-2 text-slate-400 underline">Status</Text>
        <View className='mb-2 border'>
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
          className="mb-2 p-2 border"
          placeholder='Type response'
          onChangeText={(e) => setResponse(e)}
          value={response}
        />

        <Text className="mb-2 text-slate-400 underline">Remark</Text>
        <TextInput
          className="p-2 border"
          placeholder='Type additional remarks '
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
}