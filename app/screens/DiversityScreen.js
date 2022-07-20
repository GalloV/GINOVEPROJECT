import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function DiversityScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Diversity</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default DiversityScreen;