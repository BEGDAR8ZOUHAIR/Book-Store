
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import React from "react";
import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailsScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "relative",
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 70,
                    ...styles.shadow,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                // top: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: focused ? "#3ED400" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                // top: 10,
                            }}
                        >
                          
                            <Text

                                style={{
                                    color: focused ? "#3ED400" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Details
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#3ED400",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Navigation;
