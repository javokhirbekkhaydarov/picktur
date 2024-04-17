<template>
  <form class="form_body flex justify-between">
    <div class="overlay_bg" v-if="showFromCard" @click="handleInputFocus(false)"></div>
    <div class="flex flex-col relative">
      <div class="form_input_parent" ref="from">
        <img src="/assets/icons/form/location.svg" alt="" />
        <input
          v-model="form.from"
          type="text"
          class="form_input"
          placeholder="Откуда"
          @focus="handleInputFocus(true)"
        />
      </div>
      <p v-show="errors.from" class="err_msg">
        {{ errors.from }}
      </p>
      <transition name="slide-fade">

      <FormCard
        :countries="countries"
        v-if="showFromCard"
        @citySelected="citySelected"
        @countrySelected="countrySelected"
      />
      </transition>
    </div>
    <div class="flex flex-col relative">
      <div class="form_input_parent" ref="to">
        <img src="/assets/icons/form/earth.svg" alt="" />
        <input
          v-model="form.to"
          type="text"
          class="form_input"
          placeholder="Куда"
        />
      </div>
      <p v-show="errors.to" class="err_msg">
        {{ errors.to }}
      </p>
    </div>
    <div class="flex flex-col relative">
      <div class="form_input_parent" ref="date">
        <img src="/assets/icons/form/calendar.svg" alt="" />
        <input
          v-model="form.date"
          type="text"
          class="form_input"
          placeholder="Период отбытия"
        />
      </div>
      <p v-show="errors.date" class="err_msg">
        {{ errors.date }}
      </p>
    </div>
    <div class="flex flex-col relative">
      <div class="form_input_parent" ref="day">
        <img src="/assets/icons/form/moon.png" alt="" />
        <input
          v-model="form.day"
          type="text"
          class="form_input"
          placeholder="Кол-во ночей"
        />
      </div>
      <p v-show="errors.day" class="err_msg">
        {{ errors.day }}
      </p>
    </div>
    <div class="flex flex-col relative">
      <div class="form_input_parent" ref="users">
        <img src="/assets/icons/form/users.svg" alt="" />
        <input
          v-model="form.users"
          type="text"
          class="form_input"
          placeholder="Туристы"
        />
      </div>
      <p v-show="errors.users" class="err_msg">
        {{ errors.users }}
      </p>
    </div>
    <div
      class="flex justify-center auth_button w-[190px] h-[44px] whitespace-nowrap text[16px] px-0"
      @click="searchTicket"
    >
      <img
        src="/assets/icons/form/search.svg"
        draggable="false"
        alt=""
        class="w-[24px] h-[24px]"
      />
      <span> Найти туры</span>
    </div>
  </form>
</template>

<script setup lang="ts">
import countries from "~/data/countries";

interface FieldNames {
  from: string;
  to: string;
  date: string;
  day: string;
  users: string;
}
const from = ref();
const to = ref();
const date = ref();
const day = ref();
const users = ref();
const form = ref<FieldNames>({
  from: "",
  to: "",
  date: "",
  day: "",
  users: "",
});
const errors = ref<FieldNames>({
  from: "",
  to: "",
  date: "",
  day: "",
  users: "",
});

const fieldNames: FieldNames = {
  from: "Откуда",
  to: "Куда",
  date: "Период отбытия",
  day: "Кол-во ночей",
  users: "Туристы",
};
const showFromCard = ref(false);
const validateField = (field: keyof FieldNames) => {
  const fieldValue = form.value[field];

  if (!fieldValue) {
    errors.value[field] = `Введите ${fieldNames[field]}`;
    eval(`${field}.value`).classList.add("err_form");
  } else {
    errors.value[field] = "";
    eval(`${field}.value`).classList.remove("err_form");
  }
};

const searchTicket = () => {
  const fields: (keyof FieldNames)[] = ["from", "to", "date", "day", "users"];
  fields.forEach((field) => validateField(field));

  const hasErrors = Object.values(errors.value).some((error) => error);
  if (!hasErrors) {
    console.log("success");
  }
};

const handleInputFocus = (focused: boolean) => {
  showFromCard.value = focused;
};

const citySelected = (city: string) => {
  form.value.from = city;
  showFromCard.value = false;
};
const countrySelected = (country: string) => {
  form.value.from = country;
  showFromCard.value = false;
};
</script>
<style scoped></style>
