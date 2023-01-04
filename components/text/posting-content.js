import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

const defaultValue = {
  content: "Hello World!!!",
};

export default function PostingContent({ content = defaultValue.content }) {
  return (
    <TouchableOpacity style={style.container}>
      <Text numberOfLines={3}>{content}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: (ScreenWidth * 5) / 100,
    marginVertical: (ScreenWidth * 1.5) / 100,
  },
});
