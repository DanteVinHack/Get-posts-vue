import Vue from './vue.js'

console.log(Vue);

Vue.createApp({
    data: () => ({
        myTitle: '<h1>Vue 3 App</h1>',
        title: 'Я существую',
        person: {
            firstName: 'Dante',
            lastName: 'Rilikt',
            age: '16'
        }
    })
}).mount()
