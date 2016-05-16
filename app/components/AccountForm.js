import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Button from 'react-native-button'


class AccountForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onFormSubmit = () => {
    this.props.onSubmit(this.state)
  }
    
  onInputChange = (field, value) => {
    this.setState({
      ...this.state,
      ...{[field]:value}
    })
  }

  render () {
    return (
      <View style={styles.container}>

        <TextInput style={styles.input}
          placeholder='Email'
          onChangeText={(value) => this.onInputChange('email', value)}
          value={this.state.email}
          autoCapitalize='none'
          />

        <TextInput style={styles.input}
          onChangeText={(value) => this.onInputChange('password', value)}
          secureTextEntry={true}
          value={this.state.password}
          placeholder='Password'
          autoCapitalize='none'
          />

        <Button style={styles.btnText}
          containerStyle={styles.btn}
          onPress={this.onFormSubmit}>Submit
        </Button>

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
    btnText: {
        color: "#f2f2f2"
    },
    btn: {
        backgroundColor:"#333",
        padding:8,
        borderRadius:6,
        width:200
    },
    input: {
        backgroundColor: "#fff",
        textAlign:"center",
        height: 40,
        marginBottom: 10,
        padding:10
    }
});

export default AccountForm