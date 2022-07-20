import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Platform, StatusBar, TextInput } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel'
import DetailScreens from './DetailScreens';

function MapScreens(props) {
    const first = useRef()
    const [mapSelected, setMapSelected] = useState(1)
    const [hydrophoneSelected, sethydrophoneSelected] = useState(0)

    const styles = StyleSheet.create({
        arrowView:{
            width:"15%",
            justifyContent:"center",
            alignItems:"center"
        },
        container :{
            flex:1,
            backgroundColor:"red",
            width:"100%",
            justifyContent:"flex-end",
            borderTopLeftRadius:20,
            borderTopRightRadius: 20
        },
        dragHandler:{
            backgroundColor:"#fff"
        },
        hydrophoneiconView:{
            backgroundColor: hydrophoneSelected === 1 ? "#78E7FF" : "#00C8F4",
            width:"60%",
            height:"60%",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:20
        },
        mapcard:{
            justifyContent:"center",
            alignItems:"center",
            white:"#fff",
            height:"80%",
            width:"25%",
            borderRadius:10
        },
        mapiconView:{
            backgroundColor: mapSelected === 1 ? "#78E7FF" : "#00C8F4",
            width:"60%",
            height:"60%",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:20
        },
        menu:{
            backgroundColor:"#00C8F4",
            height:70,
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"center"
        },
        dragHandler : {
            height:"7%",
            backgroundColor:"#fff",
            flexDirection:"row",
            justifyContent:"space-between",
        },
        searchBarContainer :{
            width:"100%",
            height:80,
            position:"absolute",
            top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            alignItems:"center",
            justifyContent:"center"
        },
        searchField : {
            backgroundColor:"#fff",
            width:"75%",
            height:50,
            borderRadius:7,
            paddingLeft:10,
        }
    })
    
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <TextInput 
                placeholder='Search an area'
                style={styles.searchField} />
            </View>
           <View style={styles.menu}>
                <TouchableOpacity onPress={() => {
                    first.current.show()
                    setMapSelected(1)
                    sethydrophoneSelected(0)
                    }} style={styles.mapcard}>
                    <View style={styles.mapiconView} >                        
                        <Image source={require("../assets/Image/mapicon.png")} style={styles.map}/>
                    </View>     
                        <Text style={{color:"white"}}>Cartographie</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    first.current.show()
                    setMapSelected(0)
                    sethydrophoneSelected(1)
                    }} style={styles.mapcard}>
                    <View style={styles.hydrophoneiconView} >                        
                        <Image source={require("../assets/Image/hydrophone.png")} />
                    </View>  
                    <Text style={{color:"white"}}>Hydrophones</Text>
                </TouchableOpacity>
        </View>
           <SlidingUpPanel ref={first}>
          {dragHandler => (
            <View style={styles.container}>
              <View style={styles.dragHandler} {...dragHandler}>
                    <View style={styles.arrowView}>
                        <Image source={require("../assets/Image/arrow.png")}/>
                    </View>
                    <View style={{width:"30%", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                        <View>
                            <Image source={require("../assets/Image/Search.png")}/>
                        </View>
                        <View>
                            <Image source={require("../assets/Image/dots.png")}/>
                        </View>
                    </View>
              </View>
              <DetailScreens />
            </View>
          )}
        </SlidingUpPanel>

        </View>
    );
}

export default MapScreens;