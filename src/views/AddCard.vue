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
        <!-- <Form /> -->
        <form class="submit-card" @submit="send" ref="form">
          <label for="cardNumber">card number</label>
          <the-mask
            mask="#### #### #### ####"
            type="text"
            name="cardNumber"
            class="card-number"
            placeholder="XXXXXXXXXXXXXXXX"
          />
          <label for="cardholderName">cardholder name</label>
          <input
            type="text"
            name="cardholderName"
            class="cardholder-name"
            placeholder="FULL NAME"
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
                />
                <the-mask
                  mask="##"
                  type="text"
                  name="validYear"
                  class="valid"
                  placeholder="YY"
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
          <select name="vendor">
            <option value="bitcoin">Bitcoin</option>
            <option value="ninja">Ninja</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil</option>
          </select>
          <button>ADD CARD</button>
        </form>
        <button class="preview-btn" @click="test">PREVIEW CARD</button>
      </section>
      <router-link to="/">back</router-link>
    </main>
  </div>
</template>

<script>
import Top from "../components/Top";
import Card from "../components/Card";
// import Form from "../components/CardForm";
export default {
  components: {
    Card,
    Top,
    // Form,
  },
  props: {
    title: String,
    card: Object,
  },
  data() {
    return {
      FormTitle: "add a new bank card",
      DefaultCard: {
        id: "432984728397",
        holder: "firstname lastname",
        vendor: "bitcoin",
        number: "XXXX XXXX XXXX XXXX",
        validMonth: "MM",
        validYear: "YY",
        bgColor: "#D8D8D8",
        textColor: "#2c3e50",
        img: "bitcoin",
      },
    };
  },
  // beforeCreate() {
  //   let number = "XXXXXXXXXXXXXXXX";
  //   let split = number.match(/.{1,4}/g);
  //   this.str = split.join(" ");
  // },
  methods: {
    send() {
      console.log("Sent!");
    },
    test() {
      this.DefaultCard.number = this.$refs.form.cardNumber.value;
      this.DefaultCard.holder = this.$refs.form.cardholderName.value;
      this.DefaultCard.validMonth = this.$refs.form.validMonth.value;
      this.DefaultCard.validYear = this.$refs.form.validYear.value;
      if (this.$refs.form.vendor.value == "bitcoin") {
        this.DefaultCard.bgColor = "#F9B449";
        this.DefaultCard.textColor = "#2c3e50";
      }
      if (this.$refs.form.vendor.value == "evil") {
        this.DefaultCard.bgColor = "#DF2E4C";
      }
      if (this.$refs.form.vendor.value == "blockchain") {
        this.DefaultCard.bgColor = "#8050E5";
      }
      if (this.$refs.form.vendor.value == "ninja") {
        this.DefaultCard.bgColor = "#3F3F3F";
      }
      if (
        this.$refs.form.cardNumber.value.length == 0 ||
        this.$refs.form.cardholderName.value.length == 0 ||
        this.$refs.form.validYear.length == 0 ||
        this.$refs.form.validMonth.length == 0
      ) {
        alert("Please fill all input");
        this.DefaultCard.number = "XXXX XXXX XXXX XXXX";
        this.DefaultCard.holder = "firstname lastname";
        this.DefaultCard.vendor = "bitcoin";
        this.DefaultCard.bgColor = "#D8D8D8";
        this.DefaultCard.validMonth = "MM";
        this.DefaultCard.validYear = "YY";
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
            width: 49%;
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
            width: 49%;
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
    .preview-btn {
      width: 352px;
      background-color: #000;
      color: #fff;
      font-weight: bold;
      border-radius: 6px;
      margin-top: 20px;
      padding: 15px;
      border: 1px solid #000;
    }
    .preview-btn:hover {
      cursor: pointer;
      transition: 200ms;
      background-color: #fff;
      color: black;
      border: 1px solid #000;
    }
  }
}
</style>