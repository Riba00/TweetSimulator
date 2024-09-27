<template>
  <div class="alert alert-danger alert-dismissible fade show my-3" :class="{ 'd-none': !open}">
    <strong>Please fill all the fields!</strong> You should fill all the fields
    below.
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="closeAlert"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeAlert() {
      this.$emit('close');
    },
  },
};
</script>

<style></style>
