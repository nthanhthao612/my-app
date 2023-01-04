import { StyleSheet, Image, TouchableOpacity, Text} from "react-native";

import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

const defaultValue = {
  image:
    "https://www.pixelstalk.net/wp-content/uploads/2016/08/Beautiful-High-Quality-Backgrounds-For-Desktop.jpg",
};

export default function PostingImage({ image = defaultValue.image }) {
  return (
    <TouchableOpacity style={style.container}>
      <Image
        source={{ uri: `${image}` }}
        style={{...style.image,height: '100%',width: "100%"} }
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    height: ScreenHeight*0.3
  },
  image: {
    resizeMode: "cover"
  },
});
