import axios from "axios";

export default{
    getAllData :async function (input){
        if(input){
            //console.log(`https://restcountries.com/v3.1/name/${input}`);
            return axios.get(`https://restcountries.com/v3.1/name/${input}`);
            
        }else{
          axios.get('https://restcountries.com/v3.1/name/india');
        }
        return axios.get('https://restcountries.com/v3.1/name/india?fullText=true')
    }   
};
