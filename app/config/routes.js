import React, { Component } from 'react';
import { Router, Actions, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import {
  Home,
  Login,
  Signup,
  StoreList,
  Store
} from '../components'

var styles = StyleSheet.create({
	nav: {
		backgroundColor: "#fff"
	},
	title: {
		color: "#333"
	}
})

class Routes extends Component {
  render() {
    return <Router>
        <Scene key="root" titleStyle={styles.title} navigationBarStyle={styles.nav}>
          <Scene key="home" title="Home" component={Home} initial={true} hideNavBar={true} />
          <Scene key="login" title="Login" component={Login} />
          <Scene key="signup" title="Signup" component={Signup} />
          <Scene key="stores" title="Stores Near You" component={StoreList} />
          <Scene key="details" title="Store Details" component={Store} />
        </Scene>
      </Router>
  }
}

export default Routes