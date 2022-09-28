<template>
    <div>
        <div class="back">
            <img src="../assets/back.svg" @click="goBack()"/>
        </div>
        <div class="userRepos">
            <div class="userImage">
                <div>
                    <img :src="userData.avatar_url !='' ? userData.avatar_url : './assets/rubber-duck 1.svg'" />
                    <div class="userName">{{ userData.login }}</div>
                </div>
            </div>
        </div>
            <div class="reposData" v-for="(item,id) in userRepos" :key="id">
                <ul>
                    <li class="reposName"><a :href="item.html_url">{{ item.name }}</a></li>
                    <!-- <li class="watcherCounts"><img src="../assets/watcher.svg" />{{ item.watchers_count }}</li>
                    <li class="starCounts"><img src="../assets/star.svg" />{{ item.stargazers_count }}</li> -->
                </ul>
                <div class="counts">
                    <div>
                    <span><img src="../assets/watcher.svg" >{{ item.watchers_count }}</span>
                </div>
                <div>
                    <span><img src="../assets/star.svg" />{{ item.stargazers_count }}</span>
                </div>
                </div>
            </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UserDetails',
    data() {
        return {
            username: '',
            userData: {},
            userRepos: []
        }
    },
    created() {
        this.username = this.$route.params.username
        this.getUserDetails()
    },
    methods: {
        async getUserDetails() {
            try {
                const res = await Promise.all([
                    axios.get(`https://api.github.com/users/${this.username}`),
                    axios.get(`https://api.github.com/users/${this.username}/repos`)
                ]);
                const data = res.map((res) => res.data);
                this.userData = data[0]
                this.userRepos = data[1]
            } catch (err) {
                throw Error("Promise failed");
            }
        },
        goBack() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.back {
    left: 8.39%;
    right: 8.3%;
    top: 13.33%;
    bottom: 8.35%;
    position: fixed;
    width: 5%;
    height: 5%;
}
.back img {
    cursor: pointer;
}
.reposData {
    margin-left: 15em;
    display: flex;
    align-items: center;
}
.userImage {
    width: 300px;
    height: 300px;
    left: 0px;
    top: 0px;
    background: #54A3FF;
    border-radius: 50%;
    display: inline-flex;
}

.userImage img {
    padding: 30px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
}

.userName {
    cursor: pointer;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
}

.userRepos {
    text-align: center;
}

ul {
    list-style-type: none;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 40%;
}
ul a {
    text-decoration: none;
}
.counts {
    display: flex;
    width: 8%;
}
.counts span img {
    width: 15px !important;
    height: 15px !important;
}
.counts div {
    width: 50%;
}
</style>