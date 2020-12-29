const app = new Vue({
    el: '#app',
    data: {
        "recipe": "何もない"
    },
    methods: {
        change: function (event, value) {
            this.recipe = "change";
        }
    }
})