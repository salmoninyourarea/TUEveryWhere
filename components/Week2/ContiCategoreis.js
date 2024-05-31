import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from 'react-native';
import { Dimensions } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ContiCategoreis(props) {
    
    const schoolhouse = [
        { "id": "1", "title": "Social Sciences Building Complex 3 or SC3", "uri": "https://www.buildernews.in.th/wp-content/uploads/2022/05/01-1-1024x576-1.jpg", "place": "Rangsit" },
        { "id": "2", "title": "Learning Center1(LC1)", "uri": "https://fastly.4sqi.net/img/general/600x600/96214113_XmnMgMEJvx1hDTEcO6ANwxVKKjyKQjzdmlrjEeVvgyM.jpg", "place": "Rangsit" },
        { "id": "3", "title": "Learning Center2(LC2)", "uri": "https://fastly.4sqi.net/img/general/600x600/96214113_XmnMgMEJvx1hDTEcO6ANwxVKKjyKQjzdmlrjEeVvgyM.jpg", "place": "Rangsit" },
        { "id": "4", "title": "Learning Center3(LC3)", "uri": "https://fastly.4sqi.net/img/general/600x600/96214113_XmnMgMEJvx1hDTEcO6ANwxVKKjyKQjzdmlrjEeVvgyM.jpg", "place": "Rangsit" },
        { "id": "5", "title": "Learning Center4(LC4)", "uri": "https://fastly.4sqi.net/img/general/600x600/96214113_XmnMgMEJvx1hDTEcO6ANwxVKKjyKQjzdmlrjEeVvgyM.jpg", "place": "Rangsit" }
    ];
    const canteen = [
        { "id": "1", "title": "Social Science Canteen 1", "uri": "https://www.shutterstock.com/image-photo/interior-picture-sc-2-food-260nw-2333769835.jpg", "place": "Rangsit" },
        { "id": "2", "title": "Social Science Canteen 2", "uri": "https://www.shutterstock.com/image-photo/interior-picture-sc-2-food-260nw-2333769835.jpg", "place": "Rangsit" },
        { "id": "3", "title": "Thewson Dome Canteen", "uri": "https://www.ทําเลขายของ.com/wp-content/uploads/2019/02/MK0010895T.jpg", "place": "Rangsit" },
        { "id": "4", "title": "Thammasart Green Canteen", "uri": "https://www.cpfworldwide.com/storage/news/9c903fba79bd49877730c7350f2bbdb6.jpg", "place": "Rangsit" },
    ];
    const dormitory = [
        { "id": "1", "title": "Student Dormitary", "uri": "https://i.ytimg.com/vi/pDwcWFpqpSQ/sddefault.jpg", "place": "Rangsit" },
        { "id": "2", "title": "Thammasart Staff Dormitary", "uri": "https://image.dek-d.com/27/0403/6122/128188878", "place": "Rangsit" },
        { "id": "3", "title": "Kudome-Kiengdome Dormitories", "uri": "https://crs.mahidol.ac.th/picture/2559/activity/activity_news_02-25-59/12.jpg", "place": "Rangsit" },
        { "id": "4", "title": "Hospital Personnel Dormitory", "uri": "https://storage-wp.thaipost.net/2023/09/TU-day1-250_0.jpg", "place": "Rangsit" },
    ];    
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, flexDirection: "column", justifyContent: "flex-start", marginTop: 10, textAlign: 'center' }}>

            <View style={{ marginHorizontal: 10, flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                <AntDesign name="left" size={30} color="black" />
                <Text style={{ fontSize: 25, textAlign: 'center' }}>Categoreis</Text>
                <View ></View>
            </View>
            <View>
                <View style={{ flexDirection: "column", marginHorizontal: 20, marginTop: 10}}>
                    <View style={{ flexDirection: "row", backgroundColor: 'white', borderColor: "grey", borderWidth: 1, padding: 10, borderRadius: 10 }}>
                        <FontAwesome name="search" size={24} color="orange" />
                        <TextInput style={{ fontSize: 20, marginLeft: 10 }} keyboardType="" placeholder="Search" />
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", marginTop: 18, marginLeft: 15, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome5 name="school" size={20} color="orange" /><Text style={{ fontSize: 18, marginLeft: 10 }}>Schoolhouse</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, marginRight: 20, color: "grey" }} >See All</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, marginBottom:20, borderTopWidth: 2, marginHorizontal: 3, borderColor: "orange" }}>
                        </View>
                        <View style={props.style}>
                            <FlatList
                                horizontal={true}
                                data={schoolhouse}
                                renderItem={
                                    ({ item, index }) => {
                                        console.log(item, index, item.uri);
                                        return (
                                            <TouchableOpacity onPress={() => navigation.navigate("Page2")}>
                                            <View style={{ flexDirection: "row" }}>
                                                <View style={{ marginRight: 10 }}>
                                                    <Image source={{ uri: item.uri }} style={{ width: Dimensions.get("screen").width / 1.5, height: 150, borderRadius: 10 }}  />
                                                    <View style={{ marginTop: -30, height: 70, width: Dimensions.get("screen").width / 1.5, justifyContent: "flex-start", alignItems: "center", backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingVertical: 10, borderBlockColor: "gray", borderWidth: 0.5 }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View style={{ flexDirection: 'column' }}>
                                                                <Text style={{ fontSize: 14, color: 'black' }}>{item.title}</Text>
                                                                <Text style={{ fontSize: 12, color: 'darkgray' }}>{item.place}</Text>
                                                            </View>
                                                            
                                                        </View>
                                                        
                                                    </View>
                                                </View>


                                            </View>

                                            </TouchableOpacity>
                                        );
                                    }
                                }
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View>
                            <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 20, justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome5 name="utensils" size={20} color="orange" /><Text style={{ fontSize: 18, marginLeft: 10 }}>Canteen</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, marginRight: 20, color: "grey" }}>See All</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 5, marginBottom:20, borderTopWidth: 2, marginHorizontal: 3, borderColor: "orange" }}>
                            </View>
                            <View style={props.style}>
                                <FlatList
                                    horizontal={true}
                                    data={canteen}
                                    renderItem={
                                        ({ item, index }) => {
                                            console.log(item, index, item.uri);
                                            return (
                                                <View style={{ flexDirection: "row" }}>
                                                    <View style={{ marginRight: 10 }}>
                                                        <Image source={{ uri: item.uri }} style={{ width: Dimensions.get("screen").width / 1.5, height: 150, borderRadius: 10 }} />
                                                        <View style={{ marginTop: -30, height: 70, width: Dimensions.get("screen").width / 1.5, justifyContent: "center", alignItems: "center", backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingVertical: 10, borderBlockColor: "gray", borderWidth: 0.5 }}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <View style={{ flexDirection: 'column' }}>
                                                                    <Text style={{ fontSize: 14, color: 'black' }}>{item.title}</Text>
                                                                    <Text style={{ fontSize: 12, color: 'darkgray' }}>{item.place}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>


                                                </View>


                                            );
                                        }
                                    }
                                    keyExtractor={item => item.id}
                                />
                            </View>

                        </View>
                        <View>
                            <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 20, justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome5 name="building" size={20} color="orange" /><Text style={{ fontSize: 18, marginLeft: 10 }}>Canteen</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, marginRight: 20, color: "grey" }}>See All</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 5, marginBottom:20, borderTopWidth: 2, marginHorizontal: 3, borderColor: "orange" }}>
                            </View>
                            <View style={props.style}>
                                <FlatList
                                    horizontal={true}
                                    data={dormitory}
                                    renderItem={
                                        ({ item, index }) => {
                                            console.log(item, index, item.uri);
                                            return (
                                                <View style={{ flexDirection: "row" }}>
                                                    <View style={{ marginRight: 10 }}>
                                                        <Image source={{ uri: item.uri }} style={{ width: Dimensions.get("screen").width / 1.5, height: 150, borderRadius: 10 }} />
                                                        <View style={{ marginTop: -30, height: 70, width: Dimensions.get("screen").width / 1.5, justifyContent: "flex-start", alignItems: "center", backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingVertical: 10, borderBlockColor: "gray", borderWidth: 0.5 }}>
                                                            <View style={{ flexDirection: 'row' }}>
                                                                <View style={{ flexDirection: 'column' }}>
                                                                    <Text style={{ fontSize: 14, color: 'black' }}>{item.title}</Text>
                                                                    <Text style={{ fontSize: 12, color: 'darkgray' }}>{item.place}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>


                                                </View>


                                            );
                                        }
                                    }
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>


    );
}
