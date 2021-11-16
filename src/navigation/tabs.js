import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../views/Home'
import Create from '../views/Create'
import Contact from '../views/Contact'
import Storage from '../views/Storage'

const Tab = createBottomTabNavigator()

const icons = {
    Home: {
      name: 'home'
    },
    Cadastrar:{
      name: 'account-plus'
    },
    Contato:{
      name: 'phone'
    },
    Sobre:{
        name: 'facebook'
    }
}

function Tabs({route}) {

    const {user} = route.params 

    return (
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                    tabBarIcon: ({ color, size }) => {
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
            <Tab.Screen name="Home" component={Home} initialParams={{user: user}}/>
            <Tab.Screen name="Cadastrar" component={Create} />
            <Tab.Screen name="Contato" component={Contact} />
            <Tab.Screen name="Sobre" component={Storage} />
        </Tab.Navigator>
    )
}

export default Tabs
