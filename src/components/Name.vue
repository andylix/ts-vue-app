<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

interface Name {
  first: string
  last?: string
}

const props = withDefaults(defineProps<Name>(), {
  last: 'X'
})
</script>

<template>
  <div>
    <p>{{ props.first }}</p>
    <p>{{ props.last }}</p>
  </div>
</template>


