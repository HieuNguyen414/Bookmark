import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import SearchBar from 'react-native-searchbar';

// dữ liệu
// const items = [
//   1337,
//   'janeway',
//   {
//     lots: 'of',
//     different: {
//       types: 0,
//       data: false,
//       that: {
//         can: {
//           be: {
//             quite: {
//               complex: {
//                 hidden: [ 'gold!' ],
//               },
//             },
//           },
//         },
//       },
//     },
//   },
//   [ 4, 2, 'tree' ],
// ];

export default class SearchTB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // items,
      results: [],
      // data:[]
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 110 }}>
          {
            this.state.results.map((result, i) => {
              return (
                <Text key={i}>
                  {typeof result === 'object' && !(result instanceof Array) ? 'gold object!' : result.toString()}
                </Text>
              );
            })
          }
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Text>Hiện</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <Text>Ẩn</Text>
          </TouchableOpacity>
        </View>

        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
          placeholder = "Search Asset"
        />
      </View>
    );
  }
}