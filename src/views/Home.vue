<template>
    <div> 
        <Menubar class="fixedli"/>
        <div class="container">
            <div class="row">  
                <Loader class="loading" v-if="loading"/>
                <ul class="allposts">
                    <li v-for="shoe in shoes" :key="shoe.id" :value="shoe.id">
                        <router-link :key="shoe.id" :to="{ name: 'Add', params: { id: shoe.id }, }" class="shoes-side">
                            <div class="shoes">
                                <figure class="image">
                                    <img :src="shoe.image" alt="">
                                </figure>
                                <a class="post-cost">
                                    <p>{{ shoe.name }}</p>
                                </a>
                                <div class="posts">
                                    <h5>{{ shoe.cost }}$</h5>
                                </div>   
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>   
    </div>
</template>
<script>
import Loader from '../components/Loaders'
import Menubar from '../components/menuBar'

export default {
    metaInfo: {
    title: `Home`
    },
    data: () => ({
        shoes: [],
        loading: true
    }),
    async mounted() {
        this.shoes = await this.$store.dispatch('fetchShoes')
        this.loading = false

    },
    computed: {
        
    },
    components: {
        Loader, Menubar
    }
    
}
</script>
<style scoped>
    .fixedli {
        position: fixed;
        width: 100%;
        top: 55px;
    }
    .allposts {
        padding-left: 0px;
        margin-top: 120px;
    }
    .allposts li {
        display: inline;
    }
    .image img {
        width: 300px;
        height: 340px;
    }
    .shoes-side {
        display: inline-flex;
        margin-top: 20px;
    }
    .shoes {
        margin-left: 55px;
    }
    .shoes a {
        display: flex;
    }
    .post-cost h5 {
        margin-left: 80px;
        position:relative;
        right: 0;
    }
    .post-cost {
        text-decoration: none;
        display: inline-flex;
        color: black;
    }
    .posts {
        margin-top: -42px;
        float: right;
    }
    .loading {
       margin-left: 46%;
       margin-top: 330px;
       margin-bottom: 300px;
    }
    @media screen and (min-width: 370px) and (max-width: 1200px) {
        .shoes {
            margin-left: 40px;
        }
    }
    
    
    
</style>