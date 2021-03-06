import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  AppRegistry,
} from 'react-native';
import Header from './components/assignment_1/Header';
import Playground from './components/playground';
import Playground_2 from './components/playground_2';
import Rainbow from './components/assignment_1/rainbow';
import Flex from './components/assignment_1/flex';
import Nested from './components/assignment_1/nested_blocks';
import MyFavList from './components/assignment_1/myFavList';
import NewsArticle from './components/assignment_2/newsArticle';
import GoogleLogo from './components/assignment_1/googleLogo';
import SnapchatLogin from './components/assignment_2/snapchatLogin';
import Venmo from './components/assignment_1/venmoTransfer';
import ScoreKeeper from './components/main/scoreKeeper';
import TouchableButton from './components/assignment_2/touchableButton';
import HomeLogin from './components/assignment_2/homeLogin';
import TextInputC from './components/assignment_2/textInput';
import TextInputApp from './components/assignment_2/TextInputApp';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello Sensehack!</Text> */}
      {/* <Header title="Assignment 1" /> */}
      {/* <Playground />
      <Playground_2 /> */}
      {/* <Rainbow /> */}
      {/* <Flex /> */}
      {/* <Nested /> */}
      {/* <MyFavList /> */}
      {/* <NewsArticle /> */}
      {/* <GoogleLogo /> */}
      {/* <SnapchatLogin /> */}
      {/* <Venmo /> */}
      {/* <ScoreKeeper /> */}
      {/* <TouchableButton /> */}
      {/* <HomeLogin /> */}
      {/* <TextInputC /> */}
      <TextInputApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60,
  },
});

export default App;
