<template>
  <div>
    Nuxt module playground!

    <div
      v-for="item in res"
      :key="item"
      :style="{background: item, width: '50px', height: '50px'}"
    >
      hi
    </div>
  </div>
</template>

<script setup>
const test = getRandomColor()
console.log(test);

const res = calculate(test.hex)
console.log(res);
</script>
