import { View, StyleSheet} from "react-native";

import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";
import ButtonViaIcon from "../button/button-via-icon";
import SearchCom from "../input/search-com";

export default function MainHomeHeader(){
    return <View style={style.container}>
        <ButtonViaIcon/>
        <SearchCom />
    </View>
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#B3B3B3",
        flexDirection: "row",
        elevation: 1,
        width: ScreenWidth,
        height: ScreenHeight*0.06,
        borderBottomWidth: ScreenWidth*0.002,
        borderColor: "#BAC9D5",
        justifyContent: "space-around",
        alignItems: "center",
    }
})