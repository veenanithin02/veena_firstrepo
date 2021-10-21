import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'

export default function ProfilePage({ route }) {


    let Image_Http_URL = { uri: route.params.data.profile_image };
    let end=route.params.data;

    let address=end.address.city+","+route.params.data.address.street+","+route.params.data.address.zipcode;

    console.log(route.params.data)


    StatusBar.setBackgroundColor("#0CCBE5")
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.imageOuter}>
                    <Image
                        resizeMode="cover"
                        style={styles.imageInner}
                        source={Image_Http_URL}></Image>
                </View>

                <Text style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "white",
                    marginTop: 11
                }}>{route.params.data.name}</Text>
            </View>

            <View style={styles.body}>
         
                <View style={styles.userBox}>

                    <View>
                        <Text style={{
                            fontSize: 15,
                            textAlign: "center"
                        }}>User ID</Text>


                        <Text style={{
                            fontSize: 15,
                            color: "#1A776C",
                            marginTop: 3,
                            textAlign: "center"
                        }}>{route.params.data.id}</Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 15,
                            textAlign: "center"
                        }}>Username</Text>


                        <Text style={{
                            fontSize: 15,
                            color: "#1A776C",
                            marginTop: 3,
                            textAlign: "center"
                        }}>{route.params.data.username}</Text>
                    </View>


                </View>

                <View style={styles.detailsontainer}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        width:"60%"
                    }}>
                        <Text>Name :</Text>
                        <Text style={{ marginLeft: 10 }}>{route.params.data.name}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop:15,
                        width:"60%"
                    }}>
                        <Text>User Name :</Text>
                        <Text style={{ marginLeft: 10 }}>{route.params.data.username}</Text>
                    </View>


                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop:15,
                        width:"60%"
                    }}>
                        <Text>Emailaddress:</Text>
                        <Text style={{ marginLeft: 10 }}>{route.params.data.email}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop:15,
                        width:"60%"
                    }}>
                        <Text>Address:</Text>
                        <Text style={{ marginLeft: 10 }}>{address}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop:15,
                        width:"60%"
                    }}>
                        <Text>Phone:</Text>
                        <Text style={{ marginLeft: 10 }}>{end.phone?end.phone:"(No contact number)"}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop:15,
                        width:"60%"
                    }}>
                        <Text>Website:</Text>
                        <Text style={{ marginLeft: 10 }}>{end.website?end.website:"(No website)"}</Text>
                    </View>


                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop:15,
                        width:"60%"
                    }}>
                        <Text>Company:</Text>
                        <Text style={{ marginLeft: 10 }}>{end.company?end.company.name:"(No Company details)"}</Text>
                    </View>

                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },

    header: {

        height: "40%",
        width: "100%",
        backgroundColor: "#0CCBE5",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    imageOuter: {
        borderRadius: 100,
        height: 100,
        width: 100,

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
        height: 95,
        width: 95,
        backgroundColor: "white",
        marginRight: 15,
        borderColor: "#dcdcdc",
        borderWidth: .8,
        margin: 0,
        marginLeft: 15

    },
    body: {

        flex: 1,
        backgroundColor: "white",
        width: "100%", flexDirection: "column",
        alignItems: "center"

    },
    userBox: {

        width: "80%",
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: -35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    detailsontainer: {

        width: "95%",
        flex: 1,
        marginBottom: 5,
        paddingTop: 15,
        paddingHorizontal: 10,
        flexDirection: "column",
        alignItems: "center"
    }
})
