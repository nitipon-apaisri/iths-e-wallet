<template>
  <form class="submit-card" @submit.prevent="send" ref="form">
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
</template>

<script>
export default {
  data() {
    return {
      card: {
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validYear: "",
        bgColor: "",
        textColor: "#ECE6DF",
        img: "",
      },
    };
  },
  methods: {
    send() {
      this.card.number = this.$refs.form.cardNumber.value;
      this.card.holder = this.$refs.form.cardholderName.value;
      this.card.validMonth = this.$refs.form.validMonth.value;
      this.card.validYear = this.$refs.form.validYear.value;
      this.card.vendor = this.$refs.form.vendor.value;
      this.card.img = this.$refs.form.vendor.value;
      if (this.$refs.form.vendor.value == "bitcoin") {
        this.card.bgColor = "#F9B449";
        this.card.textColor = "#2c3e50";
      }
      if (this.$refs.form.vendor.value == "evil") {
        this.card.bgColor = "#DF2E4C";
      }
      if (this.$refs.form.vendor.value == "blockchain") {
        this.card.bgColor = "#8050E5";
      }
      if (this.$refs.form.vendor.value == "ninja") {
        this.card.bgColor = "#3F3F3F";
      }
      console.log(this.card);
    },
  },
};
</script>

<style lang="scss">
form {
  max-width: 352px;
  margin: 50px auto;
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
</style>