<template>
  <div class="card">
    <custom-input
      :id="child.id + 'child-name'"
      :label="'Имя'"
      :name="child.id + 'childName'"
      :type="'text'"
      :value="child.name"
      v-model:value="child.name"
    ></custom-input>
    <custom-input
      :id="child.id + 'child-age'"
      :label="'Возраст'"
      :name="child.id + 'childAge'"
      :type="'number'"
      :value="child.age"
      v-model:value="child.age"
    ></custom-input>

    <button
      class="card__delete-btn"
      type="button"
      @click="$emit('deleteChild', child.id)"
    >
      Удалить
    </button>
  </div>
</template>

<script>
import CustomInput from "@/UI/CustomInput.vue";

export default {
  props: ["child"],
  components: { CustomInput },
};
</script>

<style scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
}

.card__delete-btn {
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #01a7fd;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

@media screen and (max-width: 840px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>