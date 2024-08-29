<template>
  <p>/my</p>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    function () {
      return navigateTo("/my/account");
    },
  ],
});
</script>
