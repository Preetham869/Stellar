import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import axios from 'axios';

export default class SpaceCraftsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
      .then((response) => {
        this.setState({ aircrafts: response.data.results });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.contentCard}>
        <Image
          source={{ uri: item.agency.image_url }}
          style={styles.itemImage}></Image>
        <View style={{ padding: 20 }}>
      
        <Text style={{ fontWeight:'bold', fontSize:20, color:'purple' }}>
            {item.name}
        </Text>
      
        <Text style={{ color: '#696969', fontSize: 16 }}>
            {item.agency.name}
        </Text>
     
        <View style={{ marginTop: 10 }}>
      
        <Text style={{ color: '#A9A9A9', fontSize: 13 }}>
              {item.agency.description}
        </Text>
        
        </View>
        </View>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    if (Object.keys(this.state.aircrafts).length === 0) {
      return (
        <View
          style={{ 
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center' }}>
        <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
         
          <ImageBackground
            source={require('../assets/Space1.gif')}
            style={styles.backgroundImage}>
         
          <View
            style={{
            flex: 0.15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
          <Text style={styles.routeText}>🌟Spacecrafts⚡</Text>
          </View>
         
          <View style={{ flex: 0.85 }}>
         
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.aircrafts}
            renderItem={this.renderItem}
            initialNumToRender={10}
          />
          </View>
          </ImageBackground>
        </View>
      );
    }
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
    fontSize: 35,
    fontWeight: 'Bold',
    color: 'crimson',
    marginBottom: 480,
    paddingLeft: 5,
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
  contentCard: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 10,
    backgroundColor: 'black',
  },
});
