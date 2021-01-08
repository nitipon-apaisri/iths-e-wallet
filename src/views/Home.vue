<template>
  <div class="container">
    <header>
      <Top :title="title" />
    </header>
    <main>
      <article class="active-card">
        <h6>ACTIVE CARD</h6>
        <div class="the-card">
          <Card :card="Cards[this.position]" />
        </div>
      </article>
      <article class="card-stack">
        <Card
          v-for="(card, index) in Cards"
          :key="index"
          :card="Cards[index]"
          @actived="actived(index)"
        />
      </article>
      <div class="btn">
        <router-link to="AddCard" class="to-add-card-btn">
          add a new card
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
export default {
  data() {
    return {
      title: "e-wallet",
      position: 0,
    };
  },
  methods: {
    test() {
      console.log("test");
    },
    actived(index) {
      this.position = index;
      console.log(this.position);
    },
  },
  components: {
    Top,
    Card,
  },
  computed: {
    Cards() {
      return this.$root.Cards;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  main {
    max-width: 375px;
    margin: auto;
    .active-card {
      h6 {
        margin: 0 0 5px 0;
      }
    }
    .card-stack {
      margin-top: 200px;
      margin-bottom: 50px;
      /deep/ .card {
        margin-top: -160px;
      }
    }
    .btn {
      display: flex;
      width: 350px;
      margin: auto;
      border-radius: 5px;
      justify-content: center;
      text-transform: uppercase;
      border: 1px solid black;
      .to-add-card-btn {
        width: 100%;
        color: black;
        text-decoration: none;
        font-weight: bold;
        padding: 10px 20px;
      }
      .to-add-card-btn:hover {
        background-color: #000;
        border: none;
        color: aliceblue;
        transition: 200ms;
        cursor: pointer;
      }
    }
  }
}
</style>