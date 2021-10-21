import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SearchIcon } from '../Assets/Icons/Icons'
import EmployeeItem from '../Components/EmployeeItem'
import { GET_DATA_FROM_LOCAL } from '../Helpers/ApiHelpers'

export default function HomeScreen() {


    let [userData, setUserData] = useState(null)
    let [inputValue,setInputValue]=useState("")

    console.log(inputValue);

    useEffect(() => {

        GET_DATA_FROM_LOCAL().then((res) => {
            //console.log(res);
            setUserData(JSON.parse(res))
        })

    }, [])


    let handleOnChange=(value)=>{

            setInputValue(value)

            GET_DATA_FROM_LOCAL().then((res) => {
                //console.log(res);
                setUserData(JSON.parse(res))

                if (inputValue.length==0) {
                    
                }
            })


    }


    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput value={inputValue} onChangeText={text => handleOnChange(text)} placeholder="Search employee" style={styles.textInput}></TextInput>
            </View>

            <ScrollView style={{
                width: '95%',
                marginTop: 0
            }}>

                {
                    userData !== null ?

                        userData.map((obj, key) => {
                           return( <EmployeeItem key={key} data={obj} />)
                        })
                        : null

                }

                



            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fdfdfd",
        flex: 1,
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    searchContainer: {
        width: "90%",
        backgroundColor: "white",
        marginTop: 15,
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderColor: "#dedede",
        borderWidth: .8
    },
    textInput: {
        borderRadius: 100,
        fontSize: 13,
        zIndex: 99,
        height: 40

    }
})
