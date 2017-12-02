/* @Duy */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body, Left, Right} from 'native-base';

export default class AssetBusiness extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  getData(){
    return fetch('http://192.168.1.21:3000/IT')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson.feed.entry});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    let articles = this.state.data.map(function(articleData, index){
      return (
        <TouchableOpacity key={index}>
          <Card style={styles.Card}>
            <CardItem>
              <Left>
                <Icon name="list" size={25} style={styles.iconLeft}/>
              </Left>
              <Body style={styles.nameBody}>
                <Text style={styles.txtBody}>{articleData.name.$t}</Text>
              </Body>
              <Right>
                <Text style={styles.txtDate}>{articleData.Date.$t}</Text>
              </Right>
              <Right>
                <Icon name="chevron-small-right" size={25} style={styles.iconRight}/>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )
    })
    return(
      <Content>
        {articles}
      </Content>
    )
  }
}
