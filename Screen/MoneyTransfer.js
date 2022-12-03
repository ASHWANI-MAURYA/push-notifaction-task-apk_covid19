import { View, Text, ScrollView, Pressable, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Dropdown from '../Component/Dropdown';
import { RadioButton } from 'react-native-paper';
import MyPopup from '../Component/popup';
const MoneyTransfer = ({ navigation }) => {
  const [MenuPopup, setMenuPopup] = useState(false)
  const [checked, setChecked] = useState('first');
  const [Categoryid, setCategoryid] = useState(null);
  const [Category, setCategory] = useState(function () {
    let api_data = [
      { label: 'Person 1', value: 'Person 1' },
      { label: 'Person 2', value: 'Person 2' },
      { label: 'Person 3', value: 'Person 3' },
    ];
    return api_data;
  });
  return (<View style={{ backgroundColor: '#D8D9CF', flex: 1 }}>
    <ScrollView>
      <View style={Styles.mainPage}>
        <View style={Styles.inputBox}>
          <View>
            <TextInput placeholder='Sender Mobile Number' style={{ fontSize: 16 }} />
          </View>
        </View>
        <View style={Styles.inputBox}>
          <View>
            <Dropdown bindChoosebeneficiary={Category} my_value={Categoryid} my_onChangeText={setCategoryid} />
          </View>
        </View>
        <View style={Styles.inputBox}>
          <View>
            <TextInput keyboardType='number-pad' placeholder='Amount' style={{ fontSize: 16 }} />
          </View>
        </View>
        <View style={{ marginVertical: 20, borderWidth: 0.9, borderColor: 'black', borderRadius: 4, }}>
          <View style={{ padding: 10 }}>
            <Text>Payment Methods ?</Text>
          </View>

          <View>
            <View style={{ flexDirection: 'row' }}>
              <RadioButton
                value="first"
                color='green'
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={{ marginTop: 8 }}>NEFT</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <RadioButton
                value="second"
                color='green'
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={{ marginTop: 8 }}>RTGS</Text>
            </View>

          </View>
        </View>
        <View style={{ alignItems: 'center', }}>
          <Pressable style={Styles.Pressable} onPress={() => setMenuPopup(true)}>
            <Text style={Styles.pressText}>Transfer</Text>
          </Pressable>
        </View>
        <MyPopup modalVisible={MenuPopup} setModalVisible={setMenuPopup}  >
          {/* <LoginOTP navigation={navigation}/> */}
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <View style={{ width: 50, height: 50, }}>
              <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/check.png')} />
            </View>
            <Text style={{ color: '#FFF', fontSize: 20 }}>Fund Transferred</Text>
            <Text style={{ color: '#FFF', fontSize: 20 }}>Successfuly</Text>
          </View>
        </MyPopup>
      </View>
    </ScrollView>
  </View>
  )
}

export default MoneyTransfer
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