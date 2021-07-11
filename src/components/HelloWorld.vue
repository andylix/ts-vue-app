<script lang="ts" setup>
import { defineProps, computed, withDefaults } from 'vue';
// import { stringRequired, stringOptional, arrayRequired } from '@/types/v-prop-types'

interface Props {
  heading?: string,
  time?: number,
  items?: number[],
  obj?: Record<string, unknown>,
}

const props = withDefaults(defineProps<Props>(), {
  heading: '',
  time: 0,
  items: () => [1,2,3,4],
  obj: () => ({ foo: 'x' })
})

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
    <p v-else>NO items</p>
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
