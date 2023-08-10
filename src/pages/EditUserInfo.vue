<template>
  <form class="form" @submit.prevent="handleSubmit">
    <article class="form__container">
      <h2 class="form__title">Персональные данные</h2>

      <custom-input
        :id="'user-name'"
        :label="'Имя'"
        :name="'userName'"
        :type="'text'"
        :value="userInfoFileds.name"
        v-model:value="userInfoFileds.name"
      ></custom-input>
      <custom-input
        :id="'user-age'"
        :label="'Возраст'"
        :name="'userAge'"
        :type="'number'"
        :value="userInfoFileds.age"
        v-model:value="userInfoFileds.age"
      ></custom-input>
    </article>

    <article class="form__container">
      <div class="form__top">
        <h2 class="form__title">Дети (макс. 5)</h2>

        <button
          class="form__add-btn"
          type="button"
          @click="handleAddChild"
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
          <children-container
            :child="child"
            @deleteChild="handleDeleteChild"
          ></children-container>
        </li>
      </ul>
    </article>

    <button class="form__submit-btn" type="submit" :disabled="!isBtnActive">
      Сохранить
    </button>
  </form>
</template>

<script>
import CustomInput from "@/UI/CustomInput.vue";
import { mapActions, mapGetters } from "vuex";
import ChildrenContainer from "@/components/ChildrenContainer.vue";

export default {
  components: { CustomInput, ChildrenContainer },
  methods: {
    ...mapActions(["deleteChild", "addChild"]),
    handleDeleteChild(id) {
      this.deleteChild(id);
    },
    handleAddChild() {
      this.addChild();
    },
    handleSubmit() {
      this.$store.commit("setUser", this.userInfoFileds);

      this.$router.push({ name: "Информация о пользователе" });
    },
  },
  computed: {
    ...mapGetters(["userInfoFileds", "currentUser", "isBtnActive"]),
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
  cursor: pointer;
}

.form__submit-btn:disabled {
  opacity: 0.5;
  cursor: default;
}

@media screen and (max-width: 840px) {
  .form__children {
    gap: 30px;
  }

  .form__add-btn {
    padding: 6px 10px;
    font-size: 14px;
    line-height: 14px;
  }

  .form__add-btn::before {
    width: 16px;
    height: 16px;
  }
}

@media screen and (max-width: 600px) {
  .form {
    max-width: 100%;
  }

  .form__title {
    font-size: 12px;
    line-height: 15px;
  }

  .form__add-btn {
    font-size: 11px;
  }

  .form__add-btn::before {
    width: 12px;
    height: 12px;
  }
}
</style>