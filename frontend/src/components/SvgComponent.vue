<template>
    <component :is="icon"/>
  </template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

interface Props {
    name: string;
}

const props = defineProps<Props>();


const icon = computed(()=> 
{
  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1);
return defineAsyncComponent(() =>
  import(`../assets/${name}.svg`)
)
}
);

</script>
