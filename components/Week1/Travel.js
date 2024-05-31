import React from "react";
import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Octicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Travel() {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: 10,
            textAlign: 'center'
        },
        buttonContainer: {
            position: 'absolute',
            bottom: -400,
            left: 0,
            right: 0,
            marginBottom: 20,
            marginHorizontal: 20
        },
        button: {
            backgroundColor: 'orange',
            padding: 20,
            borderRadius: 5
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    });

    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 10, flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                <AntDesign name="left" size={30} color="black" />
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Where are you go ?</Text>
                <View ></View>
            </View>
            <View style={{ marginVertical: 20, marginHorizontal: 20, height: 80, justifyContent: "space-around", backgroundColor: 'white', borderColor: "grey", borderWidth: 1, padding: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 15, color: "orange" }}>Your Destination</Text>
                <TextInput style={{ fontSize: 15 }} keyboardType="numeric" placeholder="Current Location" />
            </View>
            <View style={{ marginVertical: 10, marginHorizontal: 20, height: 80, justifyContent: "space-around", backgroundColor: 'white', borderColor: "grey", borderWidth: 1, padding: 10, borderRadius: 10 }}>
                <Text style={{ fontSize: 15, color: "orange" }}>Destination</Text>
                <TextInput style={{ fontSize: 15 }} keyboardType="numeric" placeholder="" />
            </View>
            <View style={{ marginTop: 30, marginLeft: 20 }}>
                <Text style={{ fontSize: 18 }}>Recommendation Places</Text>
            </View>
            <View style={{ marginTop: 5, borderTopWidth: 2, marginHorizontal: 20, borderColor: "orange" }}></View>
            <View style={{ marginHorizontal: 20, flexDirection: "row", marginTop: 20 }}>
                <Octicons name="feed-star" size={24} color="orange" />
                <Text style={{ fontSize: 18, marginLeft: 8 }}>Schoolhouse</Text>
                <View ></View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Page4")}
                >
                    <Text style={styles.buttonText}>Direction</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


    
