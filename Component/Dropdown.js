import React, { useState,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropdownComponent = (props) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      data={props.bindChoosebeneficiary}
      labelField="label"
      valueField="value"
      placeholder="Choose beneficiary"
      value={props.my_value}
      onChange={props.my_onChangeText}
      renderRightIcon={() => (
        <AntDesign style={styles.icon} color="gray" name="down" size={16} />
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    padding: 1,
  },
  icon: {
    marginRight: 20,
  },
  placeholderStyle: {
    fontSize: 15,
    color:'gray',marginLeft:6
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'gray'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 10,
    fontSize: 16,
  },
});