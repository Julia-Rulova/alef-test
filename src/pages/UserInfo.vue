<template>
  <section class="user">
    <article class="user__container">
      <h2 class="user__title">Персональные данные</h2>

      <span class="user__text">
        {{ currentUser.name }}, {{ currentUser.age }}
        {{ getNoun(currentUser.age) }}
      </span>
    </article>

    <article class="user__container">
      <h2 class="user__title">Дети</h2>

      <ul class="user__children">
        <li
          class="user__child"
          v-for="child in currentUser.children"
          :key="child.id"
        >
          <span class="user__text">
            {{ child.name }}, {{ child.age }} {{ getNoun(child.age) }}
          </span>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    getNoun(number) {
      let n = Math.abs(number);
      n %= 100;
      if (n >= 5 && n <= 20) {
        return "лет";
      }
      n %= 10;
      if (n === 1) {
        return "год";
      }
      if (n >= 2 && n <= 4) {
        return "года";
      }
      return "лет";
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style scoped>
.user {
  max-width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 60px;
  margin: 0 auto;
}

.user__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
}

.user__title {
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

.user__text {
  color: #111;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

.user__children {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
}

.user__child {
  border-radius: 5px;
  background-color: #f1f1f1;
  padding: 10px 20px;
}

@media screen and (max-width: 600px) {
  .user {
    max-width: 100%;
  }
}
</style>