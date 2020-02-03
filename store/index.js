import axios from 'axios'
import Cookie from 'js-cookie'
export const state = () =>({
    postLoaded: [],
    token: null

})
export const mutations = {
    setPost(state, posts) {
      state.postLoaded = posts
    },
    addPost(state, post) {
        //console.log(post)
        state.postLoaded.push(post)
    },
    editPost(state, postEdit) {
        const postIndex = state.postLoaded.findIndex(post => post.id === postEdit.id)
        state.postLoaded[postIndex] = postEdit
    },
    setToken(state, token) {
        state.token = token
    },
    destroyToken(state) {
        state.token = null
    }
    
}

export const actions = {
    nuxtServerInit ({commit}, contex) {
        return axios.get('https://blog-nuxt-8e0b1.firebaseio.com/posts.json')
           .then(res => {
            //console.log(res)
            const postsArray = [];
            for (let key in res.data) {
                postsArray.push( {...res.data[key], id: key } )
            }
            // Res
            commit('setPost', postsArray)
           })
           .catch(e => console.log(e))
    },
    authUser ({commit}, authData) {
        const key = 'AIzaSyD5owBlJvwJSLJRU5KIs7M0P0CmjZjaw9I';
        return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then((res) => {
            let token = res.data.idToken
            commit('setToken', token)
            // to Local Storage
            localStorage.setItem('token', token)
            // to Cookie
            Cookie.set('jwt', token)
        })
        .catch((e=>console.log(e)))
    },
    initAuth({ commit }, req) {
        let token;
        if (req) {
            if (!req.headers.cookie) return false;
            const jwtCookie = req.headers.cookie
                .split(';')
                .find(t => t.trim().startsWith('jwt='))
            if (!jwtCookie) return false;
            token = jwtCookie.split('=')[1];
        } else {
            token = localStorage.getItem('token')
            if (!token) return false;
        }
        commit('setToken', token);
    },

    logoutUser({commit}){
        commit('destroyToken')
        localStorage.removeItem('token')
        Cookie.remove('jwt')

    },
    addPost ({commit}, post) {
        //console.log(post)
        return axios.post('https://blog-nuxt-8e0b1.firebaseio.com/posts.json', post)
            .then(res => {
            //console.log(res)
            commit('addPost', {...post, id: res.data.name})
        })
            .catch(e => console.log(e))
    },
    editPost ({commit, state}, post) {
        return axios.put(`https://blog-nuxt-8e0b1.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
          .then(res => {
            commit('editPost', post)
          })
          .catch(e => console.log(e))
    },
    addComent({commit}, comment){
        return axios.post('https://blog-nuxt-8e0b1.firebaseio.com/comments.json', comment)
        .catch(e => console.log(e))
    }
}

export const getters = {
    getPostLoaded (state) {
        return state.postLoaded
    },
    checkAuthUser(state) {
        return state.token != null
    }
}
