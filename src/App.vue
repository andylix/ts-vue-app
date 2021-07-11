<template>
  <HelloWorld 
    :heading="heading()"
    :time="time"
    :obj="{ foo: 'obj' }"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { numberOptional } from '@/types/v-prop-types'

function useCounting(start: number) {

  const time = ref(start)

  onMounted(() => {
    console.log('useCounting', 'onMounted()')
    setInterval(() => time.value += 1, 1000)
  })

  return time
}

export default defineComponent({
  name: 'App',
  props: {
    foo: numberOptional() 
  },
  setup() {
    const time = useCounting(100)
    return { time }
  },
  components: {
    HelloWorld
  },
  mounted() {
    console.log('App', 'mounted()')
  },
  methods: {
    heading(): string {
      return "Vue.js + TypeScript"
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
