<template>
  <div>
    <mt-index-list ref="mylist" >
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div  v-for="d in data.list" :key="d.cityId"  @click="handleClick(d.cityId)">
          <mt-cell :title="d.name" ></mt-cell>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>

</template>

<script>
    import axios from "axios";

    export default {
        name: "City",
        data:function(){
          return {
              datalist:[]
          }
        },
        mounted() {
            axios({
                url:'https://m.maizuo.com/gateway?k=1710896',
                headers:{
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584086486721554505773"}',
                    'X-Host': 'mall.film-ticket.city.list'
                }
            }).then(res=>{
                // console.log(res.data.data.cities,'定位');
               this.datalist=this.handleFilter(res.data.data.cities)
            });


            console.log(this.$refs.mylist.$el.style.height=document.documentElement.offsetHeight-150+'px');
        },
        methods:{
            handleFilter(data){
                var zmArr=[];
                for (var i=65;i<91;i++){
                    zmArr.push(String.fromCharCode(i))
                }

                var newList=[];
                for (let j=0;j<zmArr.length;j++){
                    var arr=data.filter(item=>item.pinyin.slice(0,1)===zmArr[j].toLowerCase());
                    if(arr.length>0){
                        newList.push({
                            index:zmArr[j],
                            list:arr
                        })
                    }
                }
                return newList;
            },
            handleClick(id){
                localStorage.setItem('cityId',id);
                this.$router.push('/cinema')
            }
        }
    }
</script>

<style scoped>

</style>