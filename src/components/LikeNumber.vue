<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber", "testProps"],
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment: function() {
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>