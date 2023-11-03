import AsyncStorage from "@react-native-async-storage/async-storage"

export const getToken = async ()=>{
    const dataToken = await AsyncStorage.getItem("AccessToken")
    return dataToken
}

export const setToken = async (token) => {
    await AsyncStorage.setItem("AccessToken", token)
}