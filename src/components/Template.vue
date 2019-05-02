<template>
  <div>
    <div class="greeting">Hello {{this.$parent.name}}{{str}}</div>
    <button @click="this.$parent.decrement">-</button>
    <button @click="this.$parent.increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["str"]
});
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>