import { Slot } from "expo-router";
import React from "react";

// If we remove this _layout.tsx file the issue is gone.

export default function AppLayout() {
  // logic here

  return <Slot />;
}
