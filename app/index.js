import { Redirect, router } from "expo-router"
import {View, Text} from "react-native"
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { getToken } from "../utils/handleToken";

SplashScreen.preventAutoHideAsync();

export default function Home() {
    const [appIsReady, setAppIsReady] = useState(false);
    
  useEffect(() => {
    async function prepare() {
      try {
       const token = await handleGetToken()
       if(token){
        router.push("/dashboard")
       }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

    const handleGetToken = async ()=>{
        const token = await getToken()
        return token
    }

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
          // This tells the splash screen to hide immediately! If we call this after
          // `setAppIsReady`, then we may see a blank screen while the app is
          // loading its initial state and rendering its first pixels. So instead,
          // we hide the splash screen once we know the root view has already
          // performed layout.
          await SplashScreen.hideAsync();
        }
      }, [appIsReady]);

    if(!appIsReady){
        return null
    }

        return (
        <View>
            <Text>Home</Text>
            <Redirect href= "/login" />
        </View>
    );
}
