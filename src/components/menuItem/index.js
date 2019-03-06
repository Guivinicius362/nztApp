import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const MenuItem = props => {
  return (
    <TouchableHighlight
      onPress={() => props.callBack()}
      underlayColor="rgba(0,0,0,0.22)"
      style={{ marginTop: 10, width: '100%', height: '06%' }}
    >
      <View
        style={{
          marginLeft: 20,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 5,
          alignItems: 'center',
        }}
      >
        <Icon
          name={props.icon}
          size={23}
          color="white"
          style={{ marginRight: 30 }}
        />
        <Text
          style={{
            fontFamily: 'Fredoka',
            color: 'white',
            fontSize: 18,
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
export default MenuItem;
