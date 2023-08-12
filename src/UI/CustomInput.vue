<template>
  <div class="input">
    <label class="input__label" :for="id">{{ label }}</label>

    <input
      class="input__filed"
      :type="type"
      :name="name"
      :id="id"
      :value="value"
      @input="updateInput"
      required
    />

    <span class="input__error" v-if="errorText">{{ errorText }}</span>
  </div>
</template>

<script>
export default {
  props: ["label", "value", "id", "name", "type"],
  data() {
    return {
      errorText: "",
    };
  },
  methods: {
    updateInput(evt) {
      if (this.type === "number") {
        this.$emit("update:value", Number(evt.target.value));

        if (evt.target.value < 0) {
          this.errorText = "Введите корректный возраст!";

          this.$store.commit("setIsBtnActive", false);
        } else {
          this.errorText = "";

          this.$store.commit("setIsBtnActive", true);
        }
      } else {
        this.$emit("update:value", evt.target.value);
      }
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  min-width: 260px;
  height: 56px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #f1f1f1;
  padding: 8px 16px 6px;
}

.input__label {
  color: rgba(17, 17, 17, 0.48);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2px;
  cursor: pointer;
}

.input__filed {
  border: none;
  background-color: transparent;
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.input__filed:focus-visible {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input__error {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  color: red;
  margin-top: 10px;
}
</style>