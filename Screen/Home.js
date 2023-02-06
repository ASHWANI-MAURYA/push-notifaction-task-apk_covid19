import { View, Text, ScrollView, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const Home = ({ navigation }) => {
    const Color = {};
    const date = new Date()
    let time = date.getHours();
    let greet = '';
    if (time >= 1 && time < 12) {
        greet = ' Good Morning 🌄';
        Color.color = 'green'
        Color.fontSize = 20
    } else if (time >= 12 && time < 19) {
        greet = ' Good Afternoon 🌞'
        Color.color = 'orange'
        Color.fontSize = 20
    } else {
        greet = " Good Night 🌑"
        Color.color = 'black'
        Color.fontSize = 20
    }


    return (
        <View style={{ backgroundColor: '#D8D9CF', flex: 1 }}>
            <ScrollView>
                <View style={Styles.mainPage}>
                    <View style={{ padding: 20, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20 }}>Hello sir </Text>
                        <Text style={Color}>{greet}</Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>Time Is</Text>
                    <Text style={{ fontSize: 20 }}>{date.toTimeString()}</Text>
                    <View style={[Styles.pressBox, { marginTop: 50 }]}>
                        <TouchableOpacity style={Styles.Pressable} onPress={() => navigation.navigate('MoneyTransfer')}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/pay.png')} />
                            </View>
                            <Text style={Styles.pressText}>Money transfer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Pressable} onPress={() => navigation.navigate('Covid19')}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/air.png')} />
                            </View>
                            <Text style={Styles.pressText}>Covid19 Report</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.pressBox}>
                        <TouchableOpacity style={Styles.Pressable} onPress={() => navigation.navigate('WebView')}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/rail.png')} />
                            </View>
                            <View style={Styles.pressText}>
                                <Text style={{ color: '#FFF' }}>Book Rail</Text>
                                <Text style={{ color: '#FFF' }}>Web View</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.Pressable}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/ATM.jpg')} />
                            </View>
                            <Text style={Styles.pressText}>Mini ATM</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <TouchableOpacity style={Styles.Pressable} onPress={() => navigation.navigate('Calculator')}>
                            <View style={Styles.imageBox}>
                                <Image style={{ width: '100%', height: '100%', borderRadius:0 }} source={require('../assets/475497.png')} />
                            </View>
                            <Text style={Styles.pressText}>Calculator</Text>
                        </TouchableOpacity>
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