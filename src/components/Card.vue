<template>
  <section
    class="card"
    :style="{ backgroundColor: card.bgColor }"
    @click="$emit('actived')"
  >
    <div class="top-card">
      <img src="../assets/chip-light.svg" alt="chip" class="chip-card" />
      <img
        v-bind:src="require('../assets/vendor-' + card.img + '.svg')"
        alt="logo"
        class="logo"
      />
    </div>
    <div class="middle-card">
      <h2 :style="{ color: card.textColor }">{{ reformNumber }}</h2>
    </div>
    <div class="bottom-card">
      <div class="cardholder-name">
        <label for="name" :style="{ color: card.textColor }"
          >Cardholder name</label
        >
        <h4 :style="{ color: card.textColor }">{{ card.holder }}</h4>
      </div>
      <div class="valid">
        <label for="valid" :style="{ color: card.textColor }">Valid</label>
        <div class="date">
          <h4 class="year" :style="{ color: card.textColor }">
            {{ card.validYear }}
          </h4>
          <h4 :style="{ color: card.textColor }">/</h4>
          <h4 class="month" :style="{ color: card.textColor }">
            {{ card.validMonth }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
  },
  computed: {
    reformNumber() {
      let reformNumber = "";
      if (this.card.number) {
        for (let i = 0; i < this.card.number.length; i++) {
          if (i % 4 === 0) {
            reformNumber = reformNumber + " " + this.card.number[i];
          } else {
            reformNumber += this.card.number[i];
          }
        }
      }
      return reformNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
section.card {
  border: 1px solid #ebebeb;
  cursor: pointer;
  padding: 18px;
  border-radius: 10px;
  margin: auto;
  overflow: overlay;
  max-width: 312px;
  height: 170px;
  background-color: rgb(216, 216, 216);
  .top-card {
    display: flex;
    justify-content: space-between;
    .chip-card {
      width: 42px;
      height: 62px;
    }
    .logo {
      width: 24px;
      height: 58px;
    }
  }
  .middle-card {
    text-align: center;
  }
  .bottom-card {
    display: flex;
    justify-content: space-between;
    label {
      font-size: 0.725rem;
    }
    .cardholder-name {
      text-transform: uppercase;
      text-align: left;
      h4 {
        margin: auto;
      }
    }
    .valid {
      text-align: right;
      text-transform: uppercase;
      .date {
        display: flex;
        h4 {
          margin: auto;
        }
      }
    }
  }
}
.card::-webkit-scrollbar {
  display: none;
}
</style>