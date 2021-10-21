import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function EmployeeItem({data}) {

    let Image_Http_URL = { uri: data.profile_image };
    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={()=>{ navigation.navigate("Profile",{data:data})}} activeOpacity={.8} style={styles.container}>

            <View style={styles.imageOuter}>
                <Image
                    resizeMode="cover"
                    style={styles.imageInner}
                    source={Image_Http_URL}></Image>
            </View>
            <View style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                alignItems:"flex-start"
            }}>

                <Text style={{
                    fontSize:14.5,
                    fontWeight:"bold",
                    color:"black"
                }}>{data.name}</Text>


                <Text style={{
                    fontSize:12,
                    fontWeight:"normal",
                    marginTop:2
                   
                }}>{data.company?data.company.name:"(No company name)"}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        marginTop: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
       
        
    },
    imageOuter: {
        borderRadius: 100,
        height: 60,
        width: 60,
        backgroundColor: "white",
        marginRight: 15,
        borderColor: "#dcdcdc",
        borderWidth: .8,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    imageInner: {

        borderRadius: 100,
        height: 55,
        width: 55,
        backgroundColor: "white",
        marginRight: 15,
        borderColor: "#dcdcdc",
        borderWidth: .8,
        margin: 0,
        marginLeft:15

    }
})
