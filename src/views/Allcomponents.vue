<template>
    <div>
      <h1>All components</h1>
      <ColorPicker />
      <Temperature />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ColorPicker from '@/components/ColorPicker.vue';
  import Temperature from '@/components/Temperature.vue';
  
  export default defineComponent({
    name: 'Allcomponents',
    components: {
      ColorPicker,
      Temperature,
    },
  });
  </script>
  
  <style scoped>
  :root {
  --default-color: #bb86fc;
}
  h1 {
  color:var(--default-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
    text-align: center;
    
}
  </style>
  