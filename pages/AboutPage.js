import React from 'react'
import {StyleSheet, ScrollView, Text, View, Image, TouchableOpacity} from 'react-native'

const img = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4'

export default function AboutPage(){
  return (<ScrollView style={styles.container}>
        <Text style={styles.title}>HI! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>
        <View style={styles.mainContainer}>
            <Image style={styles.mainImage}source={{url:img}}/>
            <Text style={styles.text1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.text2}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text3}>여러분의 인스타 계정</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : 'darkblue',
        padding: 35,
    },
    title: {
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: '700',
    },

    mainContainer: {
        backgroundColor: 'white',
        marginTop: 50,
        width: '100%',
        height: 550,
        borderRadius: '20',
    },
    mainImage: {
        marginTop: 100,
        width: 150,
        height: 150,
        borderRadius: 30,
        alignSelf: 'center'
    },

    text1: {
        marginLeft: 30,
        marginRight: 30,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    text2: {
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
    },
    text3: {
        marginTop: 15,
        color: 'white',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '600',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'orange',
        alignSelf: 'center',
        width: 160,
        height: 50,
        borderRadius: 15,
    },
})