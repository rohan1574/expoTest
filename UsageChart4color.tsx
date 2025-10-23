import { View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // expo ব্যবহার করলে
import { BarChart } from "react-native-chart-kit";
import { s as tw } from "react-native-wind";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const data = {
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      data: [2, 4, 3, 5],
    },
  ],
};

const chartConfig = {
  backgroundGradientFromOpacity: 0, // 👈 transparent gradient
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 1,
};

export default function ChartScreen() {
  return (
    <View style={tw`flex-1 justify-center bg-white pl-4`}>
      {/* Background gradient top → bottom */}
     <LinearGradient
  colors={[
    "#4CAF50",   // 🟢 1. উপরের গাঢ় সবুজ
    "#6EDAB6",   // 💚 2. হালকা সবুজ
    "#A2E8D5",   // 🩵 3. হালকা নীল-সবুজ
    "#FFFFFF",   // ⚪ 4. নিচের সাদা
  ]}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: screenHeight * 1, // চার্টের height এর সমান রাখো
    borderRadius: 10,
  }}
/>


      <BarChart
        data={data}
        width={screenWidth}
        height={250}
        fromZero
        chartConfig={chartConfig}
        yAxisLabel=""
        yAxisSuffix=""
        style={{
          borderRadius: 10,
        }}
      />
    </View>
  );
}
