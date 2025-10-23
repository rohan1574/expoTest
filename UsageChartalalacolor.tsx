import React from "react";
import { View, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { s as tw } from "react-native-wind";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const data = {
  labels: [
    "Assumption was",
    "Actual usage\n(Last 7 Days Average)",
    "with ControlPlus",
    "ControlPlus\nWith Iron Will",
  ],
  datasets: [
    {
      data: [2.5, 4.5, 1.5, 1],
      colors: [
        (opacity = 1) => `rgba(99, 121, 183, ${opacity})`, // blue
        (opacity = 1) => `rgba(255, 151, 140, ${opacity})`, // red
        (opacity = 1) => `rgba(119, 207, 189, ${opacity})`, // green
        (opacity = 1) => `rgba(67, 169, 138, ${opacity})`, // dark green
      ],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "rgba(110, 218, 182, 1)", // এখন উপরে সবুজ হবে
  backgroundGradientTo: "#ffffff", // নিচে সাদা থাকবে
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 1.5,
};


export default function UsageBarChart() {
  return (
    <View style={tw`flex-1 justify-center bg-white pl-4`}>
      <Text style={tw`text-lg font-bold text-gray-800 mb-3 text-center`}>
        ControlPlus Usage Comparison
      </Text>

      <View style={tw``}>
        <BarChart
          data={data}
          width={screenWidth * 1}
          height={screenHeight * 0.3}
          fromZero
          withCustomBarColorFromData={true}
          flatColor={true}
          showValuesOnTopOfBars={true}
          chartConfig={chartConfig}
          yAxisLabel=""
          yAxisSuffix=""
          style={{
            marginLeft: -screenWidth * 0.05, // 👈 এটা style এর ভিতরে
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}
