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

  _handleResults(data) {
    this.setState({ data });
  }
  getData(){
    return fetch('http://192.168.1.29:3000/KD')
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
        <View>
        <View key={index}>
          <TouchableOpacity >
            <Card style={styles.Card}>
              <CardItem >
                <Body style={styles.nameBody}>
                  <Text style={styles.txtBody}>{articleData.name.$t}</Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </View>
        </View>
      )
    })
    return(
        
    <Content >
      <View >
        <TouchableOpacity onPress={() => this.searchBar.show()}>
          <Text>Hiện</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.searchBar.hide()}>
          <Text>Ẩn</Text>
        </TouchableOpacity>

        <SearchBar
          ref={(ref) => this.searchBar = ref}
          handleResults={this._handleResults}
          showOnLoad
          placeholder = "Search Asset"
        />
      
      </View>
      {articles}
    </Content>
    )
  }
}
