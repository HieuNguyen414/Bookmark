import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Icon, Body, Left, Right, Header, Title, Input} from 'native-base';
import styles from './styles.js';

const items = [
  "AndyMurray",
  "BlackBerry",
  "Chrome",
  "DavidBeckham",
  "Enter"
];

export default class SearchAsset extends Component {
  constructor(props){
    super(props);
    items
  }
  
  render() {
    return (
      <Container>
        <Header style = {{backgroundColor:'#2196f3'}}>
          <Left>
            <TouchableOpacity>
               <Icon name = "ios-arrow-back" style={{fontSize: 25, color: 'white'}} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>
              Search Asset
            </Title>
          </Body>
        </Header>

        <Content>
          <View style  = {styles.viewContent}>
            <Input 
              style = {styles.butSearchAsset}
              placeholder="Enter name or description" />
            <TouchableOpacity style = {styles.touchSearch}>
              <Image source = {require('./search.png')}/>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    )
  }
}