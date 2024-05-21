import type { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

export const headerHeight = 69;

type HeaderProps = NativeStackHeaderProps | BottomTabHeaderProps;

export function Header({ options }: HeaderProps) {
  // Log header title to see when it changes
  console.log("headerTitle", options.headerTitle);

  const HeaderTitle =
    typeof options.headerTitle === "function"
      ? options.headerTitle({ children: "" })
      : null;

  return (
    <View>
      {HeaderTitle && (
        <View
          style={{
            paddingTop: 8,
            flexDirection: "row",
            height: headerHeight,
            backgroundColor: "white",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ pointerEvents: "none", alignItems: "center", flex: 1 }}
          >
            {HeaderTitle}
          </View>
        </View>
      )}
    </View>
  );
}
