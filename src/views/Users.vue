<template>
  <div class="container mt-5 text-center">

    <a href="javascript:void(0)" class="btn btn-lg btn-primary"
       @click="logout"
    >Logout</a>

    <table class="table">
        <thead>
            <tr>
                
                <th>Name</th>
                <th>Email</th>
            </tr>

        </thead>
        <tbody>
            <tr 
                    v-for="user in userList"
                    v-bind:key="user.id">
                
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </tbody>
    </table>
    <paginate
    :page-range="3"
    :margin-pages="2"
    :click-handler="getData"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>
<script>
import axios from "axios";
import {useRouter} from "vue-router";
import Paginate from 'vuejs-paginate-next';
export default {
    name: "Users",
    setup() {
        const router = useRouter();
        const logout = async () => {
          await axios.post('auth/logout', {}, {withCredentials: true});

          axios.defaults.headers.common['Authorization'] = '';

          await router.push('/login');
        }
        return {
          logout
        }
    },
    components: {
      paginate: Paginate,
    },
    data(){
        return {
            userList: [],
            
        }
    },
    
    mounted(){
        try{
            this.getData();
        }
        catch (e) {
        useRouter().push('/login');
      }
        
        
        
    },
    methods: {
        getData(pageNum) {
            
            axios.get('authentic/userList?page='+ pageNum).then((response) => {
                this.userList = response.data.data.data;
                
            })
            .catch(e => {
              console.log(e);
              
            });
        }
    }

}
</script>