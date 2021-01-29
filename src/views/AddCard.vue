<template>
  <div class="container">
    <router-link to="/" class="back"
      ><font-awesome-icon icon="arrow-circle-left"
    /></router-link>
    <header>
      <Top :title="FormTitle" />
    </header>
    <main>
      <section class="default-card">
        <Card :card="DefaultCard" />
      </section>
      <section class="add-card-form">
        <form class="submit-card" @submit.prevent="send">
          <label for="cardNumber">card number</label>
          <the-mask
            mask="#### #### #### ####"
            type="text"
            name="cardNumber"
            class="card-number"
            placeholder="XXXXXXXXXXXXXXXX"
            v-model="DefaultCard.number"
          />
          <label for="cardholderName">cardholder name</label>
          <input
            type="text"
            name="cardholderName"
            class="cardholder-name"
            placeholder="FULL NAME"
            v-model="DefaultCard.holder"
          />
          <div class="valid-cvc">
            <div class="valid-part">
              <label for="validMonth" class="valid-label">Valid</label>
              <div class="valid-input">
                <the-mask
                  mask="##"
                  type="text"
                  name="validMonth"
                  class="valid"
                  placeholder="MM"
                  v-model="DefaultCard.validMonth"
                />
                <the-mask
                  mask="##"
                  type="text"
                  name="validYear"
                  class="valid"
                  placeholder="YY"
                  v-model="DefaultCard.validYear"
                />
              </div>
            </div>
            <div class="cvc-part">
              <label for="cvc" class="cvc-label">cvc</label>
              <the-mask
                mask="###"
                type="text"
                name="cvc"
                class="valid"
                placeholder="XXX"
              />
            </div>
          </div>
          <select name="vendor" v-model="DefaultCard.img" @click="changeColor">
            <option value="bitcoin">Bitcoin</option>
            <option value="ninja">Ninja</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil</option>
          </select>
          <button>ADD CARD</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
export default {
  components: {
    Card,
    Top,
  },
  props: {
    title: String,
    card: Object,
  },
  data() {
    return {
      FormTitle: "add a new bank card",
      DefaultCard: {
        id: "",
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validYear: "",
        bgColor: "#D8D8D8",
        textColor: "#2c3e50",
        img: "bitcoin",
      },
    };
  },
  methods: {
    changeColor() {
      if (this.DefaultCard.img == "bitcoin") {
        this.DefaultCard.bgColor = "#F9B449";
        this.DefaultCard.textColor = "#2c3e50";
      }
      if (this.DefaultCard.img == "evil") {
        this.DefaultCard.bgColor = "#DF2E4C";
        this.DefaultCard.textColor = "#ECE6DF";
      }
      if (this.DefaultCard.img == "blockchain") {
        this.DefaultCard.bgColor = "#8050E5";
        this.DefaultCard.textColor = "#ECE6DF";
      }
      if (this.DefaultCard.img == "ninja") {
        this.DefaultCard.bgColor = "#3A3A3A";
        this.DefaultCard.textColor = "#ECE6DF";
      }
      console.log(this.DefaultCard.img);
    },
    send() {
      if (
        this.DefaultCard.number.length == 0 ||
        this.DefaultCard.holder.length == 0 ||
        this.DefaultCard.validYear.length == 0 ||
        this.DefaultCard.validMonth.length == 0
      ) {
        alert("Please fill all input");
      } else {
        this.DefaultCard.number;
        this.DefaultCard.holder;
        this.DefaultCard.validMonth;
        this.DefaultCard.validYear;
        this.DefaultCard.img;
        this.changeColor();
        this.$root.addCard(this.DefaultCard);
        this.$router.push("/");
      }
    },
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
    .add-card-form {
      form {
        max-width: 352px;
        margin: 50px auto 0 auto;
        display: flex;
        flex-direction: column;
        label {
          text-transform: uppercase;
          font-size: 0.7rem;
          text-align: left;
          margin: 4px 0;
        }
        input {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          border: 1px solid #000;
        }
        .for-valid-cvc {
          display: flex;
          justify-content: space-between;
        }

        .valid-cvc {
          @extend .for-valid-cvc;
          .valid-part {
            text-align: left;
            .valid-input {
              @extend .for-valid-cvc;
              input {
                width: 35%;
              }
            }
          }
          .cvc-part {
            text-align: left;
          }
        }
        select {
          border-radius: 4px;
          padding: 10px;
        }
        button {
          background-color: #000;
          color: #fff;
          font-weight: bold;
          border-radius: 6px;
          margin-top: 20px;
          padding: 15px;
          border: 1px solid #000;
        }
        button:hover {
          cursor: pointer;
          transition: 200ms;
          background-color: #fff;
          color: black;
          border: 1px solid #000;
        }
      }
    }
  }
  .back {
    float: left;
    font-size: 2rem;
    color: black;
  }
}
</style>