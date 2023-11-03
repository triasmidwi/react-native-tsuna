import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Ionicons: require("./../assets/fonts/Ionicons.ttf"),
    ...Ionicons.font
    
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Font.loadAsync(fontsLoaded);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
}
