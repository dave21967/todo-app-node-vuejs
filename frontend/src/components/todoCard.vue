<template>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button v-if="done" v-on:click="showBody" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <del>{{title}} - {{id}}</del> 
        </button>
        <button v-else v-on:click="showBody" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {{title}} - {{id}}
        </button>
      </h2>
      <div id="collapseOne" class='accordion-collapse collapse show' aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div v-if="show" class="accordion-body">
          <div class="form-check">
            <input v-on:click="complete" type="checkbox" :checked="done" class="form-check-input" />
            <label class="form-check-label">Done</label>
          </div>
          <button class="btn btn-danger" v-on:click="deleteTodo">
            Delete
          </button>
        </div>
      </div>
    </div>
    <br/>
  </div>
</template>

<script>
import ApiClient from '../../apiClient';

export default {
  name: "todoCard",
  props: {
    title: String,
    done: Boolean,
    id: Number,
  },
  data: function() {
    return {
      show: false,
    };
  },
  methods: {
    showBody: function() {
      this.show = !this.show;
    },
    complete: function() {
      console.log(this.$props.id);
      if(this.$props.done) {
        ApiClient.uncompleteTodo(this.$props.id).then(function(res) {
          console.log(res);
        }).catch(function(err) {
          console.log(err);
        });
      }
      else {
        ApiClient.completeTodo(this.$props.id).then(function(res) {
          console.log(res);
        }).catch(function(err) {
          console.log(err);
        });
      }
    },
    deleteTodo: function() {
      var self = this;
      ApiClient.deleteTodo(this.$props.id).then(function(res) {
        console.log(res);
        self.$emit("reload");
      }).catch(function(err) {
        console.log(err);
      });
    }
  },
}
</script>

<style>

</style>