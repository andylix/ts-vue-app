<template>
  <HelloWorld 
    :heading="heading()"
    :time="time"
    :obj="{ foo: 'obj' }"
  />

  <Counter
    v-on:clicked="counterClicked"
    :count="count"
  />
  <p>foo: {{ foo }}</p>
  <p>bar1: {{ bar1 }}</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter';

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
  components: {
    HelloWorld, Counter
  },
  props: {
    foo: {
      type: Number as PropType<number>,
      default: 1,
    }
  },
  setup() {
    const time = useCounting(100)
    const count = ref(101)
    return { time, count }
  },
  mounted() {
    console.log('App', 'mounted()')
  },
  methods: {
    heading() {
      return "Vue.js + TypeScript"
    },
    countAdded(count: number) {
      console.log('count added', count)
    },
    counterClicked(prev: number) {
      this.count += 1
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
