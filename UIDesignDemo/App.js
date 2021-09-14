/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Segment from './src/commonComponent/Segment';
const App = () => {
  const [view, setView] = useState('A')
  let data = [{
    id: 1,
    price: 399,
    validity: 350,
    text: 'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days'
  },
  {
    id: 2,
    price: 399,
    validity: 350,
    text: 'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days'
  },
  {
    id: 3,
    price: 399,
    validity: 350,
    text: 'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days'
  }]
  const renderItem = ({ item }) => (
    <View style={styles.tileMainView}>
      <View style={styles.tilesubView}>
        <Text style={styles.tileTextStyle}>${item.price}</Text>
        <TouchableOpacity style={styles.selectBtnStyle}>
          <Text style={{ color: '#F1800D' }}>Select</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.validityText}>Validity: {item.validity} Days</Text>
      <Text style={styles.tileDescText}>{item.text}</Text>
      <View style={styles.tileBottomLine}></View>
    </View>
  )
  const renderItemB = ({ item }) => (
    <View style={styles.tileMainView}>
      <View style={styles.tilesubView}>
        <Text style={styles.tileTextStyle}>${item.price}</Text>
        <TouchableOpacity style={styles.selectBtnStyle}>
          <Text style={{ color: '#F1800D' }}>Select</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.validityText}>Validity: {item.validity} Days</Text>
        <Text style={styles.tileDataText}>Data: 1.5GB/Day</Text>
      </View>
      <Text style={styles.tileDescText}>{item.text}</Text>
      <View style={styles.tileBottomLine}></View>
    </View>
  )
  function viewComponent() {
    switch (view) {
      case 'A': {
        return (
          <FlatList
            data={data}
            renderItem={renderItem}
          />
        )
      }
      case 'B': {
        return (
          <FlatList
            data={data}
            renderItem={renderItemB}
          />
        )
      }
    }
  }
  return (
    <SafeAreaView >
      <View style={styles.mainView}>
        <Text style={styles.browseText}>Browse Plans</Text>
        <TouchableOpacity style={styles.crossBtn}>
          <Text style={styles.crossText}>X</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subText}>for Airtel Kolkata</Text>
      <View style={styles.searchBarView}>
        <TextInput
          placeholder='Search Plan Amount, Talktime'
        />
        <Icon name="search" size={16} color='#26323880' />
      </View>
      <View style={styles.headerBottomLine}>
      </View>
      <Segment onItemPress={(item) => setView(item)} />
      <View style={styles.segmentBottomLine}>
      </View>
      {viewComponent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  browseText: {
    color: '#F1800D',
    fontSize: 18,
    marginLeft: 37,
    fontWeight: 'bold',
    fontFamily: 'Montserrat'
  },
  crossBtn: {
    width: 26,
    height: 26,
    backgroundColor: 'black',
    marginRight: 38,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  crossText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16
  },
  selectBtnStyle: {
    width: 73,
    height: 23,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F1800D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 38
  },
  tileMainView: {
    marginTop: 19
  },
  tilesubView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tileTextStyle: {
    marginLeft: 37,
    fontWeight: 'bold'
  },
  validityText: {
    marginLeft: 37,
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Nunito Sans'
  },
  tileDescText: {
    marginLeft: 37,
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    marginRight: 38,
    color: 'rgba(38, 50, 56, 0.7)'
  },
  tileBottomLine: {
    height: 1,
    backgroundColor: 'rgba(151, 151, 151, 1)',
    marginLeft: 36,
    marginRight: 38,
    marginTop: 7.5
  },
  tileDataText: {
    marginLeft: 22,
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Nunito Sans'
  },
  headerBottomLine: {
    height: 1,
    backgroundColor: 'rgba(38, 50, 56, 0.1)',
    marginLeft: 37,
    marginRight: 38
  },
  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 41,
    marginTop: 24,
    marginRight: 51
  },
  subText: {
    color: '#263238',
    fontSize: 16,
    marginLeft: 37,
    marginTop: 5,
    fontWeight: '300'
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
    justifyContent: 'space-between'
  },
  segmentBottomLine: {
    height: 1,
    backgroundColor: 'rgba(151, 151, 151, 0.3)'
  }
});
export default App;
