<template>
  <footer>
    <a href="/" v-for="link in links">{{ link }}</a>
    <span>© 2025 X Corp.</span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 12px 16px;
  a {
    color: rgb(113, 118, 123);
    padding-right: 16px;
    font-size: 13px;
    line-height: 16px;
    margin: 4px 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: rgb(113, 118, 123);
    padding-right: 16px;
    font-size: 13px;
    line-height: 16px;
    margin: 4px 0;
  }
}
</style>

<script lang="ts" setup>
const { links } = defineProps({
  links: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>
