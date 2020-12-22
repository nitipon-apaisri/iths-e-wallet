<template>
  <form class="submit-card">
    <label for="card-number">card number</label>
    <the-mask
      mask="#### #### #### ####"
      type="text"
      name="card-number"
      class="card-number"
      placeholder="XXXXXXXXXXXXXXXX"
    />
    <label for="cardholder-name">cardholder name</label>
    <input
      type="text"
      name="cardholder-name"
      class="cardholder-name"
      placeholder="FULL NAME"
    />
    <div class="valid-cvc">
      <div class="valid-part">
        <label for="valid" class="valid-label">Valid</label>
        <the-mask
          mask="##/##"
          type="text"
          name="valid"
          class="valid"
          placeholder="MM/YY"
        />
      </div>
      <div class="cvc-part">
        <label for="cvc" class="cvc-label">cvc</label>
        <the-mask
          mask="###"
          type="text"
          name="valid"
          class="valid"
          placeholder="XXX"
        />
      </div>
    </div>
    <select>
      <option value="0">Bitcoin</option>
      <option value="1">Ninja</option>
      <option value="2">Blockchain</option>
      <option value="3">Evil</option>
    </select>
    <button>ADD CARD</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
    text-align: justify;
    justify-content: space-between;
  }

  .valid-cvc {
    @extend .for-valid-cvc;
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
    border: none;
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