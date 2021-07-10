<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import $string from '@/types/string'

// interface HelloWorldProps {
//   heading: string,
//   subheading: string
// }

const props = defineProps({
  heading: $string,
  subheading: $string
})

const shortheading = computed(() => props.heading.substr(0, 15))
</script>

<template>
  <div class="hello">
    <h1>{{ shortheading }}</h1>
    <h2>{{ subheading }}</h2>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
