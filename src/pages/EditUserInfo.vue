<template>
  <section class="form">
    <article class="form__container">
      <h2 class="form__title">Персональные данные</h2>

      <custom-input
        :id="'user-name'"
        :label="'Имя'"
        :name="'userName'"
        :type="'text'"
        :value="userInfoFileds.name"
      ></custom-input>
      <custom-input
        :id="'user-age'"
        :label="'Возраст'"
        :name="'userAge'"
        :type="'number'"
        :value="userInfoFileds.age"
      ></custom-input>
    </article>

    <article class="form__container">
      <div class="form__top">
        <h2 class="form__title">Дети (макс. 5)</h2>

        <button
          class="form__add-btn"
          type="button"
          v-if="userInfoFileds.children.length < 5"
        >
          Добавить ребенка
        </button>
      </div>

      <ul class="form__children">
        <li
          class="form__child"
          v-for="child in userInfoFileds.children"
          :key="child.id"
        >
          <children-container :child="child"></children-container>
        </li>
      </ul>
    </article>

    <button class="form__submit-btn" type="submit">Сохранить</button>
  </section>
</template>

<script>
import CustomInput from "@/UI/CustomInput.vue";
import { mapGetters } from "vuex";
import ChildrenContainer from "@/components/ChildrenContainer.vue";

export default {
  components: { CustomInput, ChildrenContainer },
  computed: {
    ...mapGetters(["userInfoFileds", "currentUser"]),
  },
  mounted() {
    this.$store.commit("setUserInfoFileds", this.currentUser);
  },
};
</script>

<style scoped>
.form {
  max-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 33px;
  margin: 0 auto;
}

.form__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
}

.form__title {
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 10px;
}

.form__top {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.form__add-btn {
  cursor: pointer;
  padding: 10px 20px;
  gap: 4px;
  border-radius: 100px;
  border: 2px solid #01a7fd;
  color: #01a7fd;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  background-color: transparent;
  margin-left: 30px;
  display: flex;
  align-items: center;
}

.form__add-btn::before {
  content: "";
  background-image: url("../assets/images/plus.svg");
  width: 24px;
  height: 24px;
  background-position: center;
  background-size: cover;
  display: block;
}

.form__children {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form__child {
  width: 100%;
}

.form__submit-btn {
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 100px;
  background: #01a7fd;
}
</style>