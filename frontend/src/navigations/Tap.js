import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityScreen from '../screens/community/CommunityScreen';
import FacilityScreen from '../screens/facility/FacilityScreen';
import MapScreen from '../screens/map/MapScreen';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {  PRIMARY, GRAY  } from "../colors";
import MyPageStackNavigation from './MyPageStack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#79bd9a',
      inactiveTintColor: '#a3a3a3'
    }}
    screenOptions={ {headerShown : false} }
    initialRouteName="startPage"
    >
      <Tab.Screen
        name="시설 정보"
        component={FacilityScreen}
        options={{
          tabBarIcon: ({ focused }) => 
          focused ? (<AntDesign name="bars" size={24} color= {PRIMARY.DEFAULT} /> ) :
          <AntDesign name="bars" size={24} color= {GRAY.DEFAULT} />
        }}
      />
      <Tab.Screen 
      name="지도" 
      component={MapScreen}
      options={{
        tabBarIcon: ({ focused }) => 
        focused ? (<Ionicons name="md-map-outline" size={24} color={PRIMARY.DEFAULT} /> ) :
        <Ionicons name="md-map-outline" size={24} color={GRAY.DEFAULT} />
      }}
       />
      <Tab.Screen 
      name="커뮤니티" 
      component={CommunityScreen}
      options={{
        tabBarIcon: ({ focused }) => 
        focused ? (<AntDesign name="solution1" size={24} color={PRIMARY.DEFAULT} /> ) :
        <AntDesign name="solution1" size={24} color={GRAY.DEFAULT} />
      }} />
      <Tab.Screen 
      name="마이페이지" 
      component={MyPageStackNavigation}
      options={{
        tabBarIcon: ({ focused }) => 
        focused ? (<AntDesign name="user" size={24} color={PRIMARY.DEFAULT} /> ) :
        <AntDesign name="user" size={24} color={GRAY.DEFAULT} />
      }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
