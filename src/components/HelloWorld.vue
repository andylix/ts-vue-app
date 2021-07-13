<script lang="ts" setup>
import { computed, ref } from 'vue';
import Name from './Name.vue'

interface Props {
  heading: string
  time?: number
  items?: number[]
}

const props = withDefaults(defineProps<Props>(), {
  time: 0,
  items: () => [1,2,3,4],
})

const emit = defineEmits<{
  (event: 'count-added', count: number): void
}>()

const count = ref(0)

function addCount() {
  count.value += 1
  emit('count-added', count.value)
}

// const props = Object.assign({}, _props, { items: [1,2,3] })

// const props = defineProps({
//   heading: stringOptional('My App'),
//   subheading: stringRequired(),
//   items: arrayRequired()
// })

const shortheading = computed(() => props.heading.substr(0, 15))
</script>

<template>
  <div class="hello">
    <h1>{{ shortheading }}</h1>
    <h2>{{ time }}</h2>
    <ul v-if="items !== undefined">
      <li v-for="(item, i) in items" :key="i">{{ item }}</li>
    </ul>
    <Name first="Andy" last="Li" />
    <p>count: {{ count }}</p>
    <p><button @click="addCount">Add</button></p>
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
