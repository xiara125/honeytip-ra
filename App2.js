import React from 'react';
import {StyleSheet, Text, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import data from './data.json'

const bottleImg = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c'

const pizzaImg = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'

export default function App() { 
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image source={{uri:bottleImg}} resizeMode={'cover'} style={styles.bigImage}/>
      <ScrollView horizontal={true} style={styles.scrollContainer}>
        <TouchableOpacity style={styles.btnYellow}><Text style={styles.btnText}>생활</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnOrange}><Text style={styles.btnText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnGreen}><Text style={styles.btnText}>반려견</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btnViolet}><Text style={styles.btnText}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.pizzaContainer}>
        <Image source={{uri:pizzaImg}}resizeMode={'cover'} style={styles.smallImage}/>
        <TouchableOpacity style={styles.pizzaTextContainer}>
          <View style={styles.cardText}>
            <Text style={styles.pizzaTitle}>먹다 남은 피자를 촉촉하게!</Text>
            <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
            <Text style={styles.littleText}>2020.09.09</Text>
          </View>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: "white",
    },
  title: {
    fontSize: 30,
    paddingBottom: 0,
    fontWeight: "900",
    marginTop: 20,
    marginBottom: 20,
  },
  bigImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },

  scrollContainer: {
    marginBottom: 20,
  },
  btnYellow: {
    width: 100,
    height: 50,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fdc453',
  },
  btnOrange: {
    width: 100,
    height: 50,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fe8d6f'
  },
  btnGreen: {
    width: 100,
    height: 50,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#9adbc5'
  },
  btnViolet: {
    width: 100,
    height: 50,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f886a8'
  },
  btnText: {
    fontSize: 20,
    color: "white"
  },

  pizzaContainer: {
    flexDirection: "row",
    paddingRight: 10,
    marginBottom: 30,
  },
  pizzaTextContainer: {
    flex: 2,
    flexDirection: "row",
    margin: 10,
  },
  smallImage: {
    flex:1,
    width:'100%',
    height:'100%',
    borderRadius: 10,
    justifyContent: "flex-start",
  },
  pizzaTitle: {
    fontSize: 17,
    fontWeight: "900",
  },
  text:{
    fontSize:13,
  },
  littleText: {
    fontSize: 10,
    fontWeight: "100"
  },
});