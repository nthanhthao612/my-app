import { View, TextInput, StyleSheet } from "react-native";
import ButtonViaIcon from "../button/button-via-icon";
import Search from "../../img/buttons/search.png";

import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

export default function SearchCom() {
  return (
    <View style={style.container}>
      <TextInput style={style.input} placeholder={`Search for something ??`} />
      <ButtonViaIcon icon={Search} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    width: ScreenWidth * 0.6,
    height: ScreenHeight * 0.035,
    borderWidth: ScreenHeight * 0.001,
    borderRadius: ScreenHeight * 0.01,
    paddingHorizontal: ScreenHeight * 0.01,
    placeholderTextColor: "#949292",
    borderColor: "#949292",
  },
});
