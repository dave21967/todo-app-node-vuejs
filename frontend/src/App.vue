<template>
  <div class="container" id="app">
    <h1 style="text-align: center;">Todo-App</h1>
    <todoForm v-on:reload="loadTodos"/>
    <template v-for="i in items">
      <todoCard v-on:reload="loadTodos" :done="i.done" :title="i.title" :id="i.id" v-bind:key="i.id" />
    </template>
  </div>
</template>

<script>
import todoCard from './components/todoCard.vue';
import todoForm from './components/todoForm.vue';
import ApiClient from '../apiClient';

export default {
  name: 'App',
  data: function() {
    return {
      items: [],
    };
  },
  methods: {
    loadTodos: function() {
      var self = this;
      this.items = [];
      ApiClient.getTodos().then(function(res) {
        console.log(res);
        self.items = res;
      }).catch(function(err) {
        console.log(err);
      });
    },
  },
  components: {
    todoCard,
    todoForm,
  },
  mounted: function() {
    this.loadTodos();
  }
}
</script>

<style>
@import "./assets/bootstrap.min.css";
</style>
