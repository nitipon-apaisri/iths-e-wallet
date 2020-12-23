<template>
  <div class="container">
    <header>
      <Top :title="FormTitle" />
    </header>
    <main>
      <section class="default-card">
        <Card :card="DefaultCard" />
      </section>
      <section class="add-card-form">
        <Form />
      </section>
      <router-link to="/">back</router-link>
    </main>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
import Form from "../components/CardForm";
export default {
  components: {
    Card,
    Top,
    Form,
  },
  props: {
    title: String,
    card: Object,
  },
  data() {
    return {
      str: "",
      FormTitle: "add a new bank card",
      DefaultCard: {
        id: "432984728397",
        holder: "firstname lastname",
        vendor: "bitcoin",
        number: this.str,
        validMonth: "MM",
        validYear: "YY",
        bgColor: "#D8D8D8",
        textColor: "#2c3e50",
        img: "bitcoin",
      },
    };
  },
  beforeCreate() {
    let number = "XXXXXXXXXXXXXXXX";
    let split = number.match(/.{1,4}/g);
    this.str = split.join(" ");
  },
};
</script>

<style lang="scss" scoped>
.container {
  header {
    max-width: 220px;
    margin: auto;
  }
  main {
    max-width: 375px;
    margin: auto;
  }
}
</style>öö