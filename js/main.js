const app = new Vue({
    el: '#app',
    data: {
        "recipe_name": "何もない",
        "recipe_link": "javascript:void(0);",
        "recipe_list": [],
        "name_index": 0,
        "link_index": 3,
        "before_recipe_index": -1,
    },
    created: function (event, value) {
        const self = this;
        axios.get("https://storage.googleapis.com/pontaro_first_bucket/recipe/recipe_list.csv")
            .then(function(response){
                let tmp = response.data.trim().split("\n");
                let csv_list = [];
                for (let i=0; i<tmp.length; ++i) {
                    csv_list[i] = tmp[i].split(',');
                }
                console.log(csv_list);
                const header = csv_list.shift();
                self.name_idx = header.findIndex(item => item === 'name');
                self.link_index = header.findIndex(item => item === 'link');
                self.recipe_list = csv_list;
                console.log(self);
            })
            .catch(function(error){
                console.log(error);
            });
    },
    methods: {
        change: function (event, value) {
            const getRandomInt = function(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
            }
            let recipe_index = this.before_recipe_index;
            while(this.before_recipe_index === recipe_index){
                recipe_index = getRandomInt(0, this.recipe_list.length);
            }
            this.before_recipe_index = recipe_index;
            const recipe = this.recipe_list[recipe_index];
            this.recipe_name = recipe[this.name_index];
            this.recipe_link = recipe[this.link_index];
        }
    }
})