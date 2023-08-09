<template>
  <header class="header">
    <img class="header__logo" src="../assets/images/logo.svg" alt="логотип." />

    <nav class="header__menu">
      <ul class="header__menu-list">
        <li>
          <router-link class="header__link" to="/edit-user-info">
            Форма
          </router-link>
        </li>

        <li>
          <router-link class="header__link" to="/">Превью</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  padding: 22px 51px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
}

.header__logo {
  width: 175px;
  height: 32px;
  justify-self: start;
  object-fit: cover;
}

.header__menu {
  grid-column: 2/3;
}

.header__menu-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  list-style-type: none;
}

.header__link {
  color: rgba(17, 17, 17, 0.48);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  text-decoration: none;
}

.router-link-exact-active {
  color: #000;
}
</style>