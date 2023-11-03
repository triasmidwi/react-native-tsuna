import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getToken } from '../../utils/handleToken'
import { router } from 'expo-router'

export default function Dashboard() {

  useEffect(() => {
    handleGetToken()
  }, [])

  const handleGetToken = async () => {
    const token = await getToken()
    console.log("Token:", token);
    if (token) {
      router.push("dashboard")
    } else {
      router.push("registrasi")
    }
  }

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}
