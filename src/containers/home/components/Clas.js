import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from '../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';

class Clas extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={{ uri: this.props.imageBackground }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '165%',
            height: '30%',
            marginTop: '50%',
          }}
        >
          <Icon
            name="arrow-left"
            color="white"
            size={50}
            onPress={() => this.props.changeSelected('left')}
          />
          <Icon
            name="arrow-right"
            color="white"
            size={50}
            onPress={() => this.props.changeSelected('right')}
          />
        </View>
        <View style={{ height: '8%', width: '50%', marginTop: 30 }}>
          <Button
            text="Escolher !"
            height={400}
            bgColor="#00edff"
            onPress={() => console.log('clã escolhido')}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default Clas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
