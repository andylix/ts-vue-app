<template>
  <HelloWorld 
    :heading="heading()"
    :subheading="subheading()"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { numberOptional } from '@/types/v-prop-types'

export default defineComponent({
  name: 'App',
  props: {
    foo: numberOptional() 
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log('hello', this.foo)
  },
  methods: {
    heading(): string {
      return "Vue.js + TypeScript"
    },
    subheading(): string {
      return "It's great!"
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
