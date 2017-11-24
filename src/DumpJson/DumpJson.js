import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './StylesAsset.js';
import SearchBar from 'react-native-searchbar';

export default class DumpJson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      data: [],
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }

  getData(){
    return fetch('http://192.168.1.29:3000/IT')
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
        <View key={index}>
          <TouchableOpacity >
          <Card style={styles.Card}>
            <CardItem >
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

        
        </View>
      )
    })
    return(
      <Content>
        {articles}
      </Content>
    )
  }
}
