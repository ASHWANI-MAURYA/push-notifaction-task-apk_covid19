import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const App = ({ modalVisible, setModalVisible,children,showCloseButton=true}) => {
    //const [modalVisible, setModalVisible] = useState(false);
    return (
        <>{modalVisible && <View>            
            <Modal
            
                collapsable={true}             
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {                   
                    setModalVisible(!modalVisible);
                }}
            >
                {showCloseButton && <Pressable   style={styles.centeredViewinner}>
                    <View style={styles.modalView}>
                        {children}
                    </View>
                        <Pressable style={{position:'absolute',marginTop:-10,zIndex:99999,alignSelf:'flex-end',padding:20,}} onPress={() => setModalVisible(!modalVisible)} >
                            <Icon  name="closecircle" size={30} color="#FFFFFF" />
                        </Pressable>
                </Pressable>}
                {!showCloseButton && <View style={styles.centeredViewinner}>{children}</View>}
            </Modal>    
        </View>}</>
    );
};

const styles = StyleSheet.create({
    centeredViewinner: {
        flex: 1,
        backgroundColor: "#00000080",
    },
    modalView: {
        padding: 1,
        borderWidth:1,
        borderRadius:5,
        alignItems: 'center',
        alignSelf: "center",
        marginVertical:50,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        // flex: 1,
        backgroundColor:'green',
        width:250,height:200,
        overflow:'hidden'
    },
});

export default App;