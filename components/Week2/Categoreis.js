import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Categoreis() {
    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start", marginTop: 10, textAlign: 'center' }}>

            <View style={{ marginHorizontal: 10, flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                <AntDesign name="left" size={30} color="black" />
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Categoreis</Text>
                <View ></View>
            </View>
            <View>
                <View style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 10, backgroundColor: 'white', borderColor: "grey", borderWidth: 1, padding: 10, borderRadius: 10 }}>
                    <FontAwesome name="search" size={24} color="orange" />
                    <TextInput style={{ fontSize: 20, marginLeft: 10 }} keyboardType="" placeholder="Search" />
                </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20, }}>
                <FontAwesome5 name="school" size={20} color="orange" />
                <Text style={{ fontSize: 18, marginLeft: 10  }}>Schoolhouse</Text>
            </View>
            <View style={{ marginTop: 5, borderTopWidth: 2, marginHorizontal: 20, borderColor: "orange" }}>
            </View>
        </View>
    );
}