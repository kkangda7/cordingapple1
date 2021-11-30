import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state () {
        return {
            name : 'kang',
            age : 30,
            likes : 30,
            likeok : false,
            more : {},
        }
    },
    mutations:{
        이름변경(state){
            state.name = 'hoon';
        },
        나이먹기(state,paylod){
            state.age += paylod;
        },
        좋아요(state){
            if(state.likeok == false){
                state.likes++;
                state.likeok = true;
            }else {
                state.likes--;
                state.likeok = false;
            }
        },
        setMore(state,data){
            state.more = data;
        }
    },
    actions:{
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json').then((res)=>{
                console.log(res.data);
                context.commit('setMore', res.data)
            })
        }
    }
})

export default store;