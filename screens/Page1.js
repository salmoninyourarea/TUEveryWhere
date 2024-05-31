import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native';
import Travel from '../components/Week1/Travel';
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Page1 = () => {
  return (
    <ScrollView>
      <Travel /> 
      </ScrollView>
  );
};

export default Page1;