import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyHeader from './header';

const Layout = ({ children, header }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Fragment>
      {header && (
        <MyHeader
          title={header.title}
          rightButton={header.rightButton}
          leftButton={header.leftButton}
        />
      )}
      {children}
    </Fragment>
  );
};

export default Layout;
