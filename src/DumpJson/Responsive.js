import React, { Component } from 'react'
import { Text, View, Dimensions, Button, Alert, StyleSheet } from 'react-native'
const {height, width} = Dimensions.get('window')
const padding = width/2 -10
export default class Responsive extends Component {

  render() {
      console.log(Dimensions);
    return (
      <View>
        <View>
          <Text style = {styles.text1}>{width}pt x {height}pt</Text>
        </View>

        <View style = {{ flexDirection:height > width? "row":"column" , justifyContent:'center', alignItems:'center'}}>
          <Button
          title = "ABC"
          />
          <Button 
          title = "DEF"
          />
        </View>

        <View style = {{flexDirection:height > width? "column":"row", borderWidth:1, padding: 10, borderBottomColor:'black'}}>
          <View style = {{backgroundColor:'red', height: height/8, width: 80}}></View>
          <View style = {{backgroundColor:'yellow', height: height/8, width: 80}}></View>
          <View style = {{backgroundColor:'green', height: height/8, width: 80}}></View>
          <View style = {{backgroundColor:'blue', height: height/8, width: 80}}></View>
        </View>
        <View style = {{padding: 10, width: (width/2-padding) }}>
          <View style = {{backgroundColor:'yellow', height: height/8, width: 80}}></View>
          <View style = {{backgroundColor:'green', height: height/8, width: 80}}></View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  view1: {
    marginTop: 10
  },
  text1:{
    margin: 5,
    borderWidth:1, 
    borderColor:'black', 
    padding: 20, 
    textAlign:'center',
  }
})


