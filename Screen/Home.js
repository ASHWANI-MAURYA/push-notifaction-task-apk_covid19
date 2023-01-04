import { View, Text, ScrollView, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={{backgroundColor:'#D8D9CF',flex:1}}>
            <ScrollView>
                <View style={Styles.mainPage}>
                    <View style={[Styles.pressBox, { marginTop: 50 }]}>
                        <Pressable style={Styles.Pressable} onPress={() => navigation.navigate('MoneyTransfer')}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/pay.png')} />
                            </View>
                            <Text style={Styles.pressText}>Money transfer</Text>
                        </Pressable>
                        <Pressable style={Styles.Pressable}onPress={() => navigation.navigate('Covid19')}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/air.png')} />
                            </View>
                            <Text style={Styles.pressText}>Covid19 Report</Text>
                        </Pressable>
                    </View>
                    <View style={Styles.pressBox}>
                        <Pressable style={Styles.Pressable} onPress={() => navigation.navigate('WebView')}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/rail.png')} />
                            </View>
                           <View style={Styles.pressText}>
                           <Text style={{color:'#FFF'}}>Book Rail</Text>
                            <Text style={{color:'#FFF'}}>Web View</Text>
                           </View>
                        </Pressable>
                        <Pressable style={Styles.Pressable}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/ATM.jpg')} />
                            </View>
                            <Text style={Styles.pressText}>Mini ATM</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home
const Styles = StyleSheet.create({
    pressText: {
        padding: 23,
        textAlign: 'center', color: '#FFF'
    },
    mainPage: {
        marginHorizontal: 20, marginVertical: 30,
        // backgroundColor: '#D8D9CF'
    },
    pressBox: {
        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30
    },
    Pressable: {
        backgroundColor: '#395144', borderRadius: 20, width: '48%', alignItems: 'center'
    },
    imageBox: {
        width: 50, height: 50, marginTop: 20
    }
})