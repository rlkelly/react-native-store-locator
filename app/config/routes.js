import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import {
  Home,
  Login,
  Signup,
  StoreList,
  Store
} from '../components/'

export default function Routes () {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" title="Home" component={Home} initial={true} hideNavBar={true} />
        <Scene key="login" title="Login" component={Login} />
        <Scene key="signup" title="Signup" component={Signup} />
        <Scene key="stores" title="Stores Near Me" component={StoreList} />
        <Scene key="details" title="Details" component={Store} />
      </Scene>
    </Router>
  )
}