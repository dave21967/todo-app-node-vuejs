<template>
  <div class="mb-3">
    <label class="form-label">Todo title</label>
    <input type="text" class="form-control" v-model="todoTitle" placeholder="Todo title"><br/>
    <button type="button" v-on:click="addTodo" class="btn btn-primary">Insert</button>
  </div>
</template>

<script>
import ApiClient from '../../apiClient';

export default {
  name: "todoForm",
  data: function() {
    return {
      todoTitle: '',
    };
  },
  methods: {
    addTodo: function() {
      if(this.todoTitle === '') {
        console.log("missing title field required!");
        return;
      }
      var self = this;
      ApiClient.insertTodo(this.todoTitle).then(function(res) {
        self.todoTitle = '';
        self.$emit("reload");
        console.log(res);
      }).catch(function(err) {
        console.log(err);
      });
    }
  },
}
</script>

<style>

</style>