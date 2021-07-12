<template>
  <HelloWorld 
    :heading="heading()"
    :time="time"
    :obj="{ foo: 'obj' }"
  />
  <p>foo: {{ foo }}</p>
  <p>bar1: {{ bar1 }}</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

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
    foo: {
      type: Number as PropType<number>,
      default: 1,
    }
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
    heading() {
      return "Vue.js + TypeScript"
    }
  },
  computed: {
    bar1(): number {
      return this.foo * 100
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
