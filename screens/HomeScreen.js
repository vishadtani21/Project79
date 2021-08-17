import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../stars.gif')}
          style={styles.bgImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/main-icon.png')}
              style={{ width: 150, height: 150 }}></Image>
            <Text style={styles.titleText}>Stellar</Text>
            <Text style={styles.titleText}>App</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
            <Text style={styles.routeText}>Spacecrafts</Text>
            <Image
              source={require('../space_crafts.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../star_map.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image
              source={require('../daily_pictures.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },

  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  routeCard: {
    flex: 0.12,
    justifyContent: 'center',
    marginTop: 35,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 100,
    backgroundColor: 'white',
  },

  routeImage: {
    position: 'absolute',
    top: -20,
    right: -15,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
