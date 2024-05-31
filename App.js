import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import Page2 from './screens/Page2';
import Page5 from './screens/Page5';
import Page1 from './screens/Page1';
import Page6 from './screens/Page6';

export default function App() {
  return (
    <NavigationContainer>
    {/* Wrap each navigator in a Screen container */}
    <HomeStack/>
  </NavigationContainer>
    
    //<Page2 />
    //<Page5/>

  );
};






