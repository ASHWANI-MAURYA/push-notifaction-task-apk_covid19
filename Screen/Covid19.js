import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function App() {
  const renderItem = ({ item }) => (
    <View style={{ width: 'auto' ,borderWidth:1,padding:10,marginBottom:5,borderRadius:10}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Active</Text>
        <Text style={styles.title}>{item.active}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Confirmed</Text>
        <Text style={styles.title}>{item.confirmed}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Deaths</Text>
        <Text style={styles.title}>{item.deaths}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Delta Confirmed</Text>
        <Text style={styles.title}>{item.deltaconfirmed}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Recovered</Text>
        <Text style={styles.title}>{item.recovered}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>State</Text>
        <Text style={styles.title}>{item.state}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>State Code</Text>
        <Text style={styles.title}>{item.statecode}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>Last Updated Time</Text>
        <Text style={styles.title}>{item.lastupdatedtime}</Text>
      </View>
    </View>
  );
  const [file, setfile] = useState();
  function getCovidData() {
    try {
      axios.get('https://data.covid19india.org/data.json')
        .then(Response => {
          result = Response.data.statewise;
          setfile(result)
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getCovidData()
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontWeight:'bold'}}>Covid 19 Report Live</Text>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={file}
          renderItem={renderItem}
        // keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 10,
  },
  title:{
    fontWeight:'bold'
  }
});
