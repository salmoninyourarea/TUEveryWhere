import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native';
import Cate from '../components/Week2/Cate';
import ContiCategoreis from '../components/Week2/ContiCategoreis';



// import Travel from '/components/Travel';

export default function Page3() {
    return (
        <ScrollView style={{backgroundColor: "white"}}>
        <View style={{ flex: 1, paddingTop: 20, backgroundColor: "white"}}>
            <ContiCategoreis style={{ margin:20  }}/>
        </View>
        </ScrollView>

    );
}
