import { createStackNavigator } from '@react-navigation/stack';
import FacilityScreen from '../screens/facility/FacilityScreen';
import FacilityDatailScreen from '../screens/facility/FacilityDetailScreen';

const FaciltyStack = createStackNavigator();

const FaciltyStackNavigation = () => {
  return (
    <FaciltyStack.Navigator
      /* screenOptions={{
        headerShown: false,
      }} */
      initialRouteName="시설"
    >
      <FaciltyStack.Screen
        name="시설 정보"
        component={FacilityDatailScreen}
      />
      <FaciltyStack.Screen
        options={{headerShown: false}}
        name="시설"
        component={FacilityScreen}
      />
    </FaciltyStack.Navigator>
  );
};

export default FaciltyStackNavigation;
