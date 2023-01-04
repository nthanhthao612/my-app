import { View, Text, StyleSheet } from "react-native";

import { ScreenHeight, ScreenWidth } from "../../configs/screen-config";

const defaultValue = {
  value: 1668186000000,
  // 1672285432817
  // 1672197000535
  // 1668186000000
};

function hoursConverting(hour) {
  if(hour > 12){
    return `${hour - 12} PM`
  }else{
    return `${hour} AM`
  }
}

function orderOfDate(date) {
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function TimeTextCom({ value = defaultValue.value }) {
  let DateTime = new Date(value);
  let CurTime = new Date();
  let string = ""
  if (
    CurTime.getDate() === DateTime.getDate() &&
    CurTime.getMonth() === DateTime.getMonth() &&
    CurTime.getFullYear() === DateTime.getFullYear()
  ) {
    string = `Today at ${hoursConverting(DateTime.getHours())}`;
  } else if (CurTime.getFullYear() !== DateTime.getFullYear()) {
    string = `${DateTime.getMonth()} ${DateTime.getDate()} ${DateTime.getFullYear()}`;
  } else {
    string = `on ${
      monthNames[DateTime.getMonth()]
    } ${DateTime.getDate()}${orderOfDate(DateTime.getDate())}`;
  }
  return (
    <View style={style.container}>
      <Text style={style.text}>{string}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    margin: ScreenWidth*0.02,
  },
  text:{
    fontSize: "80%",
    fontStyle: "italic"
  }
});
