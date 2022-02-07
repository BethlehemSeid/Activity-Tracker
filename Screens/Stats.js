// import React from "react";
// import { StyleSheet, Text, View} from 'react-native';
// import {MaterialIcons} from '@expo/vector-icons';

// export default function Stats({navigation}) {
//     return (
//         <View style={styles.container}></View>
//         // <View style={styles.header}>
//         //     <MaterialIcons name='menu' size={26} onPress={navigation.openDrawer} style={{paddingRight: 10, paddingTop: 2}} />
//         //     <Text style={styles.headerText}>
//         //         Stats
//         //     </Text>
//         // </View>
//     );
// }

// const styles = StyleSheet.create({
//     header: {
//       backgroundColor: '#E2E2E2',
//       paddingTop: 20,
//       paddingHorizontal:30,
//       paddingBottom: 20,
//       flexDirection: 'row',
//       alignItems: 'center',
//     //   justifyContent: 'space-between', 
//     },
//     headerText: {
//       paddingLeft: 120,
//     },
// })



import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  export default function Stats() {
    return(
        <View>
            <LineChart
                data={{
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                    {
                    data: [
                        1 * 10,
                        0.5 * 10,
                        .4 * 10,
                        .1 * 10,
                        .9 * 10,
                        .2 * 10,
                        .4 * 10,
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#ddd",
                // backgroundGradientFrom: "#fb8c00",
                // backgroundGradientTo: "#ffa726",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ddd"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
        </View>
    )
}