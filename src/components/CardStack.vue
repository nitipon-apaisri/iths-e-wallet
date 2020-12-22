<template>
  <div>
    <Card
      v-for="(card, index) in Cards"
      :key="index"
      :card="Cards[index]"
      @actived="actived(index)"
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
      this.$router.go(0);
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