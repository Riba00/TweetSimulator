<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand"> Tweet Simulator </span>
      <button
        class="btn pl-4 pr-4"
        :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
        @click="openCloseForm"
      >
        {{ showForm ? "Close Tweet" : "New Tweet" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
  },
};
</script>

<style></style>
