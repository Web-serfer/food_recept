import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../screens/Welcome";
import RecipeList from "../screens/RecipeList";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      >        
        {/* welcome */}
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ title: 'Welcome' }}
        />                
        {/* recipeList */}
        <Stack.Screen 
          name="RecipeList" 
          component={RecipeList} 
          options={{ title: 'RecipeList' }}
        />                
      </Stack.Navigator>
    </NavigationContainer>
  );
}
