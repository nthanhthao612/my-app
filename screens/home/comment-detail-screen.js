import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CommentScreenHeader from "../../components/header/comment-screen-header";

const defaultValue = {};

export default function CommentDetailScreen({ navigation}) {
  useEffect(() => {
  }, []);
  return (
    <View style={style.container}>
      <CommentScreenHeader navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
});
