<template>
    <div class="m-3">
        <p class="h3 text-bold text-success text-center">Rest Country Datas</p>
        <div class="card col-8 m-10">
            <div class="card-body">
                <div class="card-title text-bold text-success h2 text-center">search here</div>
                <div class="input-group mb-3">
                    <input type='text' 
                    class="form-control col-3"
                    v-model="searchInput" 
                    @keyup.enter="search"
                    placeholder="Search your Country"
                    aria-label="Search your Country"/>
                    <button 
                    @click="search"
                    class="input-group-append btn btn-outline-secondary 
                    col-2 bg-success text-light sm-10"
                    >SEARCH</button>
                </div>
                <img 
                v-if="searchInput.length<0"
                src="http://pa1.narvii.com/7685/ecc3cbe5a8f3ef7c513c4abc69474e2c1a9da8cer1-200-200_00.gif" alt=""/>
                <div class="card" style="width:25rem;">
                    <img :src="countriesData.flags.png" alt="">
                    <div class="card-body d-flex justify-content-around">
                        <p class="card-title text-bold text-danger ">Capital :{{countriesData.capital[0]}}</p>
                        <p class="text-bold text-success">Population :{{countriesData.population}}</p>
                    </div>
                    <div class="card-body d-flex justify-content-sm-around" 
                        v-for="(lan,index) in countriesData.languages" :key="index"
                    >
                        <span>{{lan}}</span>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GetApi from '../Api/index';
export default {
    name:'Weather',
    data:function(){
        return{
            countriesData: [],
            searchInput:"",
        }
    },
    // computed:{
    //    async search(){
    //     if(this.searchInput){
    //         console.log(this.searchInput);
    //     }
    //     this.searchInput= "";
    //    } 
    // },
    methods:{
        async search(){
            if(this.searchInput){
                const {data}=await GetApi.getAllData(this.searchInput)
                this.countriesData=data[0]
            }
        }
    },
    created:async function(){
        try {
            const {data}= await GetApi.getAllData();
            console.log(data[0]);
            this.countriesData=(data[0]);
            
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style>

</style>