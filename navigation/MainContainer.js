/* Här nedan har jag använt mig av react-native-screens som finns med på (https://reactnative.directory/?expo=true) när expo go är iklickad. (se fler bibliotek i andra filer)*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import RecipesScreen from './screens/RecipesScreen';
import SettingsScreen from './screens/SettingsScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import styles from './MainContainerStyles';

const homeName = 'Home';
const detailsName = 'Details';
const recipesName = 'Recipes';
const settingsName = 'Settings';
const exerciseName = 'Exercise';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === recipesName) {
              iconName = focused ? 'fast-food' : 'fast-food-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === exerciseName) {
              iconName = focused ? 'barbell' : 'barbell-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarActiveTintColor: '#467685',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={exerciseName} component={ExerciseScreen} />
        <Tab.Screen name={recipesName} component={RecipesScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
