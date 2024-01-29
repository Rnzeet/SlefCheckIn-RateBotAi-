// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import * as React from 'react';
import "react-native-gesture-handler"
import AuthNavigator from './src/AuthNavigator/authNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {DefaultTheme,Provider as PaperProvider } from 'react-native-paper';



const lightColors = {
  primary: 'rgb(34, 95, 166)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(213, 227, 255)',
  onPrimaryContainer: 'rgb(0, 28, 59)',
  secondary: 'rgb(44, 93, 167)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(215, 226, 255)',
  onSecondaryContainer: 'rgb(0, 27, 63)',
  tertiary: 'rgb(52, 92, 168)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(217, 226, 255)',
  onTertiaryContainer: 'rgb(0, 26, 67)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(253, 251, 255)',
  onBackground: 'rgb(26, 28, 30)',
  surface: 'rgb(253, 251, 255)',
  onSurface: 'rgb(26, 28, 30)',
  surfaceVariant: 'rgb(224, 226, 236)',
  onSurfaceVariant: 'rgb(67, 71, 78)',
  outline: 'rgb(116, 119, 127)',
  outlineVariant: 'rgb(196, 198, 207)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(47, 48, 51)',
  inverseOnSurface: 'rgb(241, 240, 244)',
  inversePrimary: 'rgb(167, 200, 255)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(242, 243, 251)',
    level2: 'rgb(236, 239, 248)',
    level3: 'rgb(229, 234, 245)',
    level4: 'rgb(227, 232, 244)',
    level5: 'rgb(222, 229, 243)',
  },
  surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
  onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
  backdrop: 'rgba(45, 48, 56, 0.4)',
  // Add the rest of your light mode colors here...
};

const darkColors = {
  primary: 'rgb(167, 200, 255)',
  onPrimary: 'rgb(0, 48, 96)',
  primaryContainer: 'rgb(0, 71, 136)',
  onPrimaryContainer: 'rgb(213, 227, 255)',
  secondary: 'rgb(171, 199, 255)',
  onSecondary: 'rgb(0, 47, 102)',
  secondaryContainer: 'rgb(4, 69, 142)',
  onSecondaryContainer: 'rgb(215, 226, 255)',
  tertiary: 'rgb(175, 198, 255)',
  onTertiary: 'rgb(0, 45, 108)',
  tertiaryContainer: 'rgb(21, 68, 143)',
  onTertiaryContainer: 'rgb(217, 226, 255)',
  error: 'rgb(255, 180, 171)',
  onError: 'rgb(105, 0, 5)',
  errorContainer: 'rgb(147, 0, 10)',
  onErrorContainer: 'rgb(255, 180, 171)',
  background: 'rgb(26, 28, 30)',
  onBackground: 'rgb(227, 226, 230)',
  surface: 'rgb(26, 28, 30)',
  onSurface: 'rgb(227, 226, 230)',
  surfaceVariant: 'rgb(67, 71, 78)',
  onSurfaceVariant: 'rgb(196, 198, 207)',
  outline: 'rgb(142, 145, 153)',
  outlineVariant: 'rgb(67, 71, 78)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(227, 226, 230)',
  inverseOnSurface: 'rgb(47, 48, 51)',
  inversePrimary: 'rgb(34, 95, 166)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(33, 37, 41)',
    level2: 'rgb(37, 42, 48)',
    level3: 'rgb(42, 47, 55)',
    level4: 'rgb(43, 49, 57)',
    level5: 'rgb(46, 52, 62)',
  },
  surfaceDisabled: 'rgba(227, 226, 230, 0.12)',
  onSurfaceDisabled: 'rgba(227, 226, 230, 0.38)',
  backdrop: 'rgba(45, 48, 56, 0.4)',
  // Add the rest of your dark mode colors here...
};

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...lightColors,
  },
};

const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...darkColors,
  },
};


export default function App() {


  return (

    <NavigationContainer>
      <PaperProvider theme={lightTheme}>
        <AuthNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

