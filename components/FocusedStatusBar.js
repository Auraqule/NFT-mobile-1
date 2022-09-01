import { View, Text, StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = ({ background }) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} backgroundColor={background} />
  ) : null;
};
export default FocusedStatusBar;
