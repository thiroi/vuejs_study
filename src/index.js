Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!!!!!!',
			  test: 'TEST BOOK'
    }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript', phone: '090-3999-3333' },
      { text: 'Learn Vue', phone: '090-3999-2222' },
      { text: 'Build something awesome', phone: '070-3999-3333' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    addBook: function () {
      this.message = "BOOK" + this.message
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({ el: '#components-demo' })

// Vue.component('test', {
//   data: function(){
//     return{
//       name : "BOOK"
//     }
//   },
//   template: '<div>{{ name }}</div>'
// })

// new Vue({el: '#test_id'})

Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

new Vue({el: '#test_id'})

var app = new Vue({
  el: "#counter",
  data: {
    count: 1
  },
  methods: {
    countup: function() {
      this.count = this.count + 1
    },
    countdown: function() {
      this.count = this.count - 1 
    }
  }
})