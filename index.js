Vue.component('movie-card', {
    props:['image','title'],
    template:`
        <div>
            <img width="100" :src="image":alt="title"/>
            <h2>{{title}}</h2>
            </div>
    `
})

new Vue({
    el:'#app',
    data:{
        movies:[
            {title:'lorem 01',image:'http://lorempixel.com/100/100'},
            {title:'lorem 02',image:'http://lorempixel.com/100/100'},
            {title:'lorem 03',image:'http://lorempixel.com/100/100'}
        ]
    }
})