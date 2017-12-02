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
    // có thể thay localhost = địa chỉ ip của máy
    return fetch('http://192.168.1.21:3005/IT')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson.data});
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
        <View >
          <TouchableOpacity >
            <Card style={styles.Card}>
              <CardItem >
                <Left>
                  <Text >{articleData.ten}</Text>
                </Left>
                <Body style={styles.nameBody}>
                  {/* fetch dữ liệu */}
                  <Text style={styles.txtBody}>{articleData.ho}</Text>
                </Body>
                <Right>
                  <Text >{articleData.ngaysinh}</Text>
                </Right>
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
