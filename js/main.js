const app = new Vue({
    el: '#app',
    data: {
        "recipe": "何もない",
        "recipe_list": ["天丼","牛丼","親子丼"],
        "counter": 0,
    },
    methods: {
        change: function (event, value) {
            this.counter = (this.counter + 1) % this.recipe_list.length;
            this.recipe = this.recipe_list[this.counter];
        }
    }
})