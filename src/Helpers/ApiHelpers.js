
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios'
export const GET_DATA_FROM_LOCAL = async () => {

    const value = await AsyncStorage.getItem('EMPLOYEE_DATA');
    //console.log(value);

    if (value == null) {
      let res=await READ_DATA_FROM_WEB()
      await AsyncStorage.setItem("EMPLOYEE_DATA",res)
    }

    return await AsyncStorage.getItem('EMPLOYEE_DATA');

}


let READ_DATA_FROM_WEB = async () => {

    let url = "http://www.mocky.io/v2/5d565297300000680030a986"
    let method = "GET"

    let result=null

   await axios.get(url)
        .then(function (response) {
            //console.log(response.data);
            result=JSON.stringify(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

        return result

}