LogBox.ignoreAllLogs(true)

import React from 'react'
import { LogBox } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import List from './src/views/List'
import Register from './src/views/Register'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './src/redux/reducers'

const Tab = createBottomTabNavigator(); 
const store = createStore(Reducers);

const icons = {
  List: {
    name: 'view-list'
  },
  Register:{
    name: 'account-plus'
  }
}

function App() {
  return(
	<Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={ ({route}) => ({
              tabBarIcon: ({color, size}) => {
                const { name } = icons[route.name];
                return <Icon name={name} color={color} size={size}/>
              }
            })
          }
          tabBarOptions={{
            style:{
              backgroundColor: '#FFF'
            },
            activeTintColor: '#FFF',
            inactiveTintColor: '#6E5494',
            activeBackgroundColor: '#6E5494'
          }}
        >
          <Tab.Screen name="Register" component={Register} />
          <Tab.Screen name="List" component={List} />   
        </Tab.Navigator>
      </NavigationContainer>
	</Provider>
  )
}

export default App;
