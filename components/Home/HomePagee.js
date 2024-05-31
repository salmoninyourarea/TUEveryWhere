import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const HomePagee = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
         source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/2f/ff/bf/2fffbf53-3c74-c828-f10f-44db548d68d5/761a6946-bc6d-4aed-8a8a-ae315f9968ab_Page5__U0028Custom_U0029.PNG/643x0w.jpg' }}
         style={styles.mapImage}
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Page3')}>
          <Feather name="menu" size={24} color="orange" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a service..."
        />
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Page1')}>
        <AntDesign name="search1" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="hearto" size={24} color="orange" />
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="notifications" size={24} color="orange" />
           
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page6')}>
            <FontAwesome name="user-circle-o" size={24} color="orange" />
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'convert',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 5,
    elevation: 5,
  },
  menuButton: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  categoryText: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    borderColor : "grey",
  },
});

export default HomePagee;
