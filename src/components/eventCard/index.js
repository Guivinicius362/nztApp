import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

const CardComponent = props => {
  return (
    <View style={{ overflow: 'hidden', backgroundColor: '#3d3d3d' }}>
      <View>
        <Image
          source={{
            uri: props.url,
          }}
          resizeMode="contain"
          style={{ height: 400, width: null, flex: 1 }}
        />
      </View>

      <View
        style={{
          backgroundColor: '#333',
          borderRadius: 5,
          paddingTop: 20,
          paddingBottom: 20,
          paddingRight: 10,
          overflow: 'hidden',
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            fontFamily: 'OP',
            color: 'white',
            fontSize: 17,
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
