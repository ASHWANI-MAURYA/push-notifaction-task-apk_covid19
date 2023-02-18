import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
export default function App() {
    const [state, setstate] = useState({
        pickupcode: {
            latitude: 19.158897,
            longitude: 73.248075,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        Dropcode: {
            latitude: 26.0638044,
            longitude: 81.9233884,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })
    const { pickupcode, Dropcode } = state


    return (
        <View style={styles.container}>
            <MapView initialRegion={pickupcode} style={styles.map} >
                {/* <Marker
                    // key={index}
                    coordinate={{ latitude: 19.158897, longitude:  73.248075}}  
                    title={"Ashwani"}  
                    description={"loaction"}  
                    // title={marker.title}
                    // description={marker.description}
                /> */}
                <MapViewDirections
                    origin={pickupcode}
                    destination={Dropcode}
                    apikey={'AIzaSyCTCDNDtYPCpAD0FaKgHgdzCjMN1QUHnt4'}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});