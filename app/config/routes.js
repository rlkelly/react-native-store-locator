import React, { Component } from 'react';
import { Router, Actions, Scene } from 'react-native-router-flux'
import { StyleSheet } from 'react-native'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Stores from '../components/Stores'
import Details from '../components/Details'

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
      <Scene
        key="root"
        titleStyle={styles.title}
        navigationBarStyle={styles.nav}>
        <Scene key="home" title="Home" component={Home} initial={true} hideNavBar={true} />
        <Scene key="login" title="Login" component={Login} />
        <Scene key="signup" title="Signup" component={Signup} />
        <Scene key="stores" title="Stores Near You" component={Stores} />
        <Scene key="details" title="Details" component={Details} />
      </Scene>
     </Router>
  }
}

export default Routes