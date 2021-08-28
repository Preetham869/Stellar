import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>

      <ImageBackground
        source={require('../assets/stars.gif')}
        style={styles.backgroundImage}>
   
      <Image
        source={require('../assets/main-icon.png')}
        style={{ width: 120, height: 120, right: -100 }}></Image>

      <View style={styles.titleBar}>
     
      <Text style={styles.titleText}>🌟Stellar App!⚡</Text>
  
      </View>

      <TouchableOpacity
        style={styles.routeCard}
        onPress={() => this.props.navigation.navigate('SpaceCrafts')}>
      
      <Text style={styles.routeText}>Space Crafts</Text>

      <Image
        source={require('../assets/space_crafts.png')}
        style={styles.iconImage}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.routeCard}
        onPress={() => this.props.navigation.navigate('StarMap')}>
      <Text style={styles.routeText}>Star Map</Text>
  
      <Image
        source={require('../assets/star_map.png')}
        style={styles.iconImage}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.routeCard}
        onPress={() => this.props.navigation.navigate('DailyPic')}>
      <Text style={styles.routeText}>Daily Pic</Text>
            
      <Image
        source={require('../assets/daily_pictures.png')}
        style={styles.iconImage}></Image>
      </TouchableOpacity>
 
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 38,
    fontWeight: 'Bold',
    color: 'orange',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  routeCard: {
    flex: 0.3,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 32,
    borderRadius: 50,
    backgroundColor: 'orchid',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'Bold',
    color: 'crimson',
    marginTop: 20,
    paddingLeft: 53,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  iconImage: {
    position: 'absolute',
    height: 75,
    width: 70,
    resizeMode: 'contain',
    right: -20,
    top: -20,
  },
});
