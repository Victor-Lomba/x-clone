<template>
  <a :class="{ primary: primary, secondary: !primary }" href="">{{ text }}</a>
</template>

<script setup lang="ts">
const { text, primary } = defineProps({
  text: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 32px;
  width: 300px;

  font-size: 16px;
  font-weight: 700;
  text-decoration: none;

  &.primary {
    color: white;
    background-color: rgb(29, 155, 240);
    transition: 0.2s;

    &:hover {
      background-color: rgb(26, 140, 216);
    }
  }

  &.secondary {
    color: rgb(29, 155, 240);
    border: 1px solid rgb(83, 100, 113);
    transition: 0.2s;

    &:hover {
      background-color: rgba(29, 155, 240, 0.1);
    }
  }
}
</style>
