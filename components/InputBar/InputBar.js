import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

class InputBar extends Component {
    render() {
        return (
            <View style={styles.inputFieldContainer}>
                <TextInput onChangeText={this.props.onInputChange} style={styles.inputField} placeholder="Enter Book Name" placeholderTextColor="grey">
                </TextInput>
                <TouchableOpacity onPress={this.props.confirm}>
                    <View style={styles.icon}>
                        <Ionicons name="ios-checkmark" color="white" size={40}>
                        </Ionicons>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.cancel}>
                    <View style={styles.icon}>
                        <Ionicons name="ios-checkmark" color="white" size={40}>
                        </Ionicons>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    inputFieldContainer: {
        hight: 50,
        flexDirection: "row"
    },
    inputField: {
        flex: 1,
        backgroundColor: "#ececec",
        paddingLeft: 5
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: "a5deba",
        justifyContent: "center",
        alignItems: "center"
    }

});

export default InputBar;