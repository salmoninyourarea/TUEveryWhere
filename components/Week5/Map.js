import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const Map = () => {
    return (
        <ScrollView style={styles.container}>
            <AntDesign name="leftcircle" size={30} color="grey" />
            <View style={styles.mapContainer}>
                <Image
                    source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/f8/f5/8b/f8f58b14-a381-8005-68bd-3f207e59c605/6a18069e-9c18-4814-92d2-cfb92c7446a1_Page2__U0028Custom_U0029.PNG/643x0w.webp/' }}
                    style={styles.mapImage}
                />
            </View>
            
            <View style={styles.infoContainer}>
                <Text style={styles.headerText}>Sport Center 4 Station ✨</Text>

                <View style={styles.cardContainer}>
                    <View style={[styles.card, styles.cardYellow]}>
                        <Text style={styles.cardTitle}>Arrive in</Text>
                        <Text style={styles.cardSubtitle}>2 min</Text>
                        <Text style={styles.cardDetail}>EV 1B</Text>
                    </View>
                    <View style={[styles.card, styles.cardGreen]}>
                        <Text style={styles.cardTitle}>Arrive in</Text>
                        <Text style={styles.cardSubtitle}>3 min</Text>
                        <Text style={styles.cardDetail}>EV 2</Text>
                    </View>
                    <View style={[styles.card, styles.cardRed]}>
                        <Text style={styles.cardTitle}>Arrive in</Text>
                        <Text style={styles.cardSubtitle}>5 min</Text>
                        <Text style={styles.cardDetail}>EV 1A</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    mapContainer: {
        height: 1000,
    },
    mapImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'convert',
    },
    icon: {
        position: 'Left',
        top: 10,
        left: 10,
        width: 50,
        height: 50,
    },
    infoContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    card: {
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
        elevation: 3, // for shadow on Android
        shadowColor: '#000', // for shadow on iOS
        shadowOffset: { width: 0, height: 2 }, // for shadow on iOS
        shadowOpacity: 0.25, // for shadow on iOS
        shadowRadius: 3.84, // for shadow on iOS
    },
    cardYellow: {
        backgroundColor: '#f7C04A',
    },
    cardGreen: {
        backgroundColor: '#A1BD57',
    },
    cardRed: {
        backgroundColor: '#BA0900',
    },
    cardTitle: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    cardSubtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    cardDetail: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});

export default Map;

