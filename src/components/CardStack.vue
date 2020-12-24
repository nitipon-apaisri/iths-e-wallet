<template>
  <div>
    <Card
      v-for="(card, index) in Cards"
      :key="index"
      :card="Cards[index]"
      @click="$emit('actived')"
    />
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  components: {
    Card,
  },
  methods: {
    actived(index) {
      localStorage.setItem("position", index);
    },
  },
  computed: {
    Cards() {
      return this.$root.Cards;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>