import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import DetailTabBar from '../components/DetailTabBar';
function DetailScreens(props) {
    
    
    const styles = StyleSheet.create({
        container :{
            flex:1,
            width:"100%",
            backgroundColor:"#fff",
            justifyContent:"flex-end"
        },
    })

    return (
        <View style={styles.container}>
            <DetailTabBar />
        </View>
    );
}

export default DetailScreens;