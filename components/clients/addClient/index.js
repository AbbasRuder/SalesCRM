import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Picker } from "@react-native-picker/picker";

export default function AddClient({ navigation, route }) {
    const [schoolName, setSchoolName] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [assignedTo, setAssignedTo] = useState("")
    const [users, setUsers] = useState(null)

    const { userId } = route.params

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };

        axios.post("https://salescrm.webnify.in/fetch_users.php", config)
            .then(response => {
                if (response.data.success) {
                    setUsers(response.data.users)
                }
            })
            .catch(error => {
                console.error('errorRequest', error.response)
            })
    }, [])

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("sc_name", schoolName);
            formData.append("address", address);
            formData.append("phone", phone);
            formData.append("email", email);
            formData.append("created_by", userId);
            users.map(item => {
                if (item.name === assignedTo) {
                    formData.append("assigned_to", item.id);
                }
            })

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            };

            const response = await axios.post("https://salescrm.webnify.in/insert_client.php", formData, config)
            if(response.data.success) {
                Alert.alert("Client successfully added")
                navigation.goBack()
            }
        } catch (error) {
            console.log("Error inserting data", error)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View className="h-full flex items-center justify-center bg-slate-50">
                <View className="w-full p-10 max-w-sm">
                    <Text className="mb-6 text-5xl font-bold underline">Add Client</Text>

                    <TextInput className="mb-4 px-4 h-12 w-full rounded-md bg-white border border-slate-200"
                        placeholder='Enter School Name'
                        value={schoolName}
                        onChangeText={(e) => { setSchoolName(e) }} />

                    <TextInput className="mb-6 px-4 h-12 w-full rounded-md bg-white border border-slate-200"
                        placeholder='Enter School Address'
                        value={address}
                        onChangeText={(e) => { setAddress(e) }} />

                    <TextInput className="mb-6 px-4 h-12 w-full rounded-md bg-white border border-slate-200"
                        placeholder='Enter Client Name'
                        value={name}
                        onChangeText={(e) => { setName(e) }} />

                    <TextInput className="mb-6 px-4 h-12 w-full rounded-md bg-white border border-slate-200"
                        placeholder='Enter Email address'
                        value={email}
                        onChangeText={(e) => { setEmail(e) }} />

                    <TextInput className="mb-6 px-4 h-12 w-full rounded-md bg-white border border-slate-200"
                        placeholder='Enter Phone Number'
                        value={phone}
                        onChangeText={(e) => { setPhone(e) }} />

                    <View className="mb-6 flex-row items-center">
                        <Text className="w-1/2 px-4 font-semibold text-slate-400">Assigned-to :</Text>
                        <View className='w-1/2 border rounded-lg border-slate-200'>
                            <Picker
                                selectedValue={assignedTo}
                                onValueChange={(e) => setAssignedTo(e)}
                                mode="dropdown"
                            >
                                {users && users.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.name} value={item.name} key={index} />
                                    )
                                })}
                            </Picker>
                        </View>
                    </View>

                    <TouchableOpacity className="w-full py-4 rounded-md bg-purple-500"
                        onPress={handleSubmit}>
                        <Text className="text-center text-lg font-medium text-white">Submit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>

    );
}

