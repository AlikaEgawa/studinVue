<template>
  <div>
    <LikeHeader v-slot="slotProps">
      <p>{{slotProps}}</p>
      <h2>みなさん</h2>
        <h2>
          こんにちは！
        </h2>
      <h3>初めまして</h3>
      <p>よろです</p>

    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default({
  data() {
    return {
      number: 14
    };
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value){
      this.number = value
    }
  },
})
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>