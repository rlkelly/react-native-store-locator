import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'
import * as accountActions from '../actions/account'
import Button from 'react-native-button'


class Login extends Component {

    constructor () {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handlePress = () => {
        this.props.loginAndAuthUser(this.state)
            .then(() => Actions.home())
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder='Email'
                autoCapitalize='none'
                onChangeText={(email) => this.setState({ ...this.state, email })}
                value={this.state.email} />
                <TextInput
                style={styles.input}
                placeholder='Password'
                autoCapitalize='none'
                onChangeText={(password) => this.setState({...this.state, password})}
                value={this.state.password} />
                <Button containerStyle={styles.btn} style={styles.btnText} onPress={this.handlePress}>Submit</Button>
                <Text>{this.props.error}</Text>
            </View>
            )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f2f2"
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        margin: 10,
    },
    btnText: {
        textAlign: "center",
        color: "#f2f2f2",
        marginBottom: 5,
    },
    btn : {
        backgroundColor:"#333",
        paddingTop:6,
        paddingRight:50,
        paddingLeft:50,
        paddingBottom:2,
        marginTop:20,
        borderRadius:6,
        width:200
    },
    input: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 4,
        paddingRight: 10,
        paddingLeft:10
    }
});

export default connect(
    (state) => ({
        user: state.account.user,
        error: state.account.error
    }),
    (dispatch) => (bindActionCreators(accountActions, dispatch)),
)(Login)


