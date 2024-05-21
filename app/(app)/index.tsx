import { Stack } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => <Logo />,
        }}
      />
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
    </>
  );
}

function Logo() {
  return (
    <View style={{ width: 50, height: 50, backgroundColor: "red" }}></View>
  );
}
