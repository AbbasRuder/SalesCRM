import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddClient({ navigation }) {
    const [schoolName, setSchoolName] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


      const handleSubmit = () => {
        navigation.goBack()
      }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className="h-full flex items-center justify-center bg-slate-50">
                <View className="w-full p-10 max-w-sm">
                    <Text className="text-5xl font-bold mb-6 underline">Add Client</Text>

                    <TextInput className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4"
                        placeholder='Enter School Name'
                        value={schoolName}
                        onChangeText={(e) => { setSchoolName(e) }} />

                    <TextInput className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-6"
                        placeholder='Enter School Address'
                        value={address}
                        onChangeText={(e) => { setAddress(e) }} />

                    <TextInput className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-6"
                        placeholder='Enter Client Name'
                        value={name}
                        onChangeText={(e) => { setName(e) }} />

                    <TextInput className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-6"
                        placeholder='Enter Email address'
                        value={email}
                        onChangeText={(e) => { setEmail(e) }} />

                    <TextInput className="w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-6"
                        placeholder='Enter Phone Number'
                        value={phone}
                        onChangeText={(e) => { setPhone(e) }} />


                    <TouchableOpacity className="w-full py-4 bg-purple-500 rounded-md"
                        onPress={handleSubmit}>
                        <Text className="text-center text-lg font-medium text-white">Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>

    );
}

