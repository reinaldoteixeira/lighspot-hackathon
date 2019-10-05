/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './colors';

import {mapping, light as lightTheme} from '@eva-design/eva';
import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';
import Home from './pages/Home';
import Chat from './pages/Chat';

export default function App() {
  const [index, changeIndex] = useState(0);
  function goBack() {
    changeIndex(0);
  }

  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      {index === 0 ? <Home /> : <Chat goBack={goBack} />}
      <BottomNavigation
        indicatorStyle={{backgroundColor: colors.yellow}}
        selectedIndex={index}
        onSelect={changeIndex}>
        <BottomNavigationTab titleStyle={{color: colors.black}} title="Home" />
        <BottomNavigationTab titleStyle={{color: colors.black}} title="Chat" />
      </BottomNavigation>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
