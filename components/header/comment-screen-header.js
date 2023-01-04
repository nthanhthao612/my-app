import { View, StyleSheet } from "react-native";
import { useEffect } from "react";

const defaultValue = {};

export default function CommentScreenHeader({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: "find" });
  }, []);
  return <View style={style.container}></View>;
}

const style = StyleSheet.create({
  container: {},
});
