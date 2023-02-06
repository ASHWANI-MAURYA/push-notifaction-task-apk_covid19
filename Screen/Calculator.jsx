import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
const Calculator = ({ navigation }) => {
    const [Num1, setNum1] = useState()
    const [Num2, setNum2] = useState()
    const [Result, setResult] = useState()
    const [Operator, setOperator] = useState('')
    const [Focus, setFocus] = useState(false)
    function one1() {
        let one = 1
        setNum1(one)
        if (Num1 == 1) {
            let mm = one + 1
            setNum1(mm)
        }
    
    }
    function tow2() {
        // let one = 1
        setNum1(2)
    }
    function three3() {
        // let one = 1
        setNum1(3)
    }
    function four4() {
        // let one = 1
        setNum1(4)
    }
    function five5() {
        // let one = 1
        setNum1(5)
    }
    function six6() {
        // let one = 1
        setNum1(6)
    }
    function seven7() {
        // let one = 1
        setNum1(7)
    }
    function eight8() {
        // let one = 1
        setNum1(8)
    }
    function nine9() {
        // let one = 1
        setNum1(9)
    }
    function zero() {
        // let one = 1
        setNum1(0)
    }
    function add() {
        setFocus(true)
        if (!Num1) {
            Alert.alert('Alert', 'Input 1 is empty')
        } else if (!Num2) {
            Alert.alert('Alert', 'Input 2 is empty')
        }

        setOperator("+")
        let sum = Number(Num1) + Number(Num2);
        setResult(sum)
        console.log(Result)
    }
    function sub() {
        if (!Num1) {
            Alert.alert('Alert', 'Input 1 is empty')
        } else if (!Num2) {
            Alert.alert('Alert', 'Input 2 is empty')
        }
        setOperator("-")
        let sum = Number(Num1) - Number(Num2);
        setResult(sum)
    }
    function mult() {
        if (!Num1) {
            Alert.alert('Alert', 'Input 1 is empty')
        } else if (!Num2) {
            Alert.alert('Alert', 'Input 2 is empty')
        }
        setOperator("*")
        let sum = Number(Num1) * Number(Num2);
        setResult(sum)
    }
    function dev() {
        if (!Num1) {
            Alert.alert('Alert', 'Input 1 is empty')
        } else if (!Num2) {
            Alert.alert('Alert', 'Input 2 is empty')
        }
        setOperator("/")
        let sum = Number(Num1) / Number(Num2);
        setResult(sum)
    }
    return (<View style={{ backgroundColor: '#D8D9CF', flex: 1 }}>
        <ScrollView>
            <View style={Styles.mainPage}>
                <View style={Styles.inputBox}>
                    {/* <TextInput autoFocus={true} keyboardType='number-pad' value={Num1} onChangeText={setNum1} placeholder='Number 1' style={{ fontSize: 16 }} /> */}
                    <Text>{Num1}</Text>
                </View>
                <View style={{ marginTop: 10, marginBottom: -20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16 }}>{Operator}</Text>
                    <TouchableOpacity style={{ width: '31%', borderWidth: 1, borderRadius: 10 }}>
                        <Text style={{ fontSize: 35, textAlign: 'center' }}>⬇</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.inputBox}>
                    <TextInput keyboardType='number-pad' autoFocus={Focus} value={Num2} onChangeText={setNum2} placeholder='Number 2' style={{ fontSize: 16 }} />
                </View>
                <View style={Styles.inputBox}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15 }}>Result is</Text>
                        <Text style={{ fontSize: 15 }}>{Result}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 20, borderWidth: 0, borderColor: 'black', borderRadius: 4, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <TouchableOpacity onPress={one1} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={tow2} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={three3} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <TouchableOpacity onPress={four4} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={five5} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={six6} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <TouchableOpacity onPress={seven7} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={eight8} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={nine9} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <TouchableOpacity style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={zero} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={add} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <TouchableOpacity onPress={sub} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={mult} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>*</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={dev} style={{ width: '31%', borderWidth: 1, padding: 5, borderRadius: 10 }}>
                            <Text style={{ fontSize: 25, textAlign: 'center' }}>/</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ alignItems: 'center', }}>
                    <Pressable style={Styles.Pressable} onPress={() => setMenuPopup(true)}>
                        <Text style={Styles.pressText}>Transfer</Text>
                    </Pressable>
                </View> */}
            </View>
        </ScrollView>
    </View>
    )
}

export default Calculator
const Styles = StyleSheet.create({
    pressText: {
        padding: 20,
        textAlign: 'center', color: '#FFF',
        fontWeight: '500', fontSize: 16
    },
    mainPage: {
        marginHorizontal: 20, marginVertical: 30,
    },

    Pressable: {
        backgroundColor: 'green', borderRadius: 8, width: '48%'
    },
    inputBox: {
        borderWidth: 0.9, borderColor: 'black', borderRadius: 4, padding: 5, marginTop: 30
    }
})