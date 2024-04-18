<template>
  <form class="form_body flex justify-between">
    <div
      class="overlay_bg"
      v-if="showFromCard"
      @click="handleInputFocus(false)"
    ></div>
    <div class="overlay_bg" v-if="showFromTo" @click="InputShowTo(false)"></div>
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
          @focus="InputShowTo(true)"
        />
      </div>
      <p v-show="errors.to" class="err_msg">
        {{ errors.to }}
      </p>
      <transition name="slide-fade">
        <FormCard
          :countries="countries"
          v-if="showFromTo"
          @citySelected="cityToSelected"
          @countrySelected="countrySelected"
        />
      </transition>
    </div>
    <div class="flex flex-col relative">
      <div class="form_input_parent" ref="date">
        <img src="/assets/icons/form/calendar.svg" alt="" />
<!--        <input-->
<!--          v-model="form.date"-->
<!--          type="text"-->
<!--          class="form_input"-->
<!--          placeholder="Период отбытия"-->
<!--        />-->

        <client-only>
<!--          <h2>Calendar</h2>-->
<!--          <VCalendar v-model="form.date" />-->
<!--          <h2>Date Picker</h2>-->
<!--          <VDatePicker v-model="form.date" :attributes="attrs" />-->
<!--          <VDatePicker v-model="form.date" :popover="false">-->
<!--            <template #default="{ inputValue, inputEvents }">-->
<!--              <BaseInput :value="inputValue" v-on="inputEvents" />-->
<!--            </template>-->
<!--          </VDatePicker>-->
          <VDatePicker v-model.range="form.date" :popover="false"  :columns="columns" color="indigo" locale="ru">
            <template #default="{ togglePopover, inputValue, inputEvents }">
              <div
                  class="flex  overflow-hidden"
              >
                <input
                    @click.prevent="() => togglePopover()"
                    :value="`${inputValue.start} - ${inputValue.end}`"
                    v-on="inputEvents"
                    class="flex-grow px-2 py-1 bg-white outline-none form_input"
                />
              </div>
            </template>
          </VDatePicker>
        </client-only>
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
import { useScreens } from 'vue-screen-utils';
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
  date: {
    start: new Date(),
    end: new Date(),
  },
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
const showFromTo = ref(false);
const disabledDates = ref([
  {
    repeat: {
      weekdays: [7],
    },
  },
]);
const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' });
const columns = mapCurrent({ lg: 2 }, 1);
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
const InputShowTo = (focused: boolean) => {
  showFromTo.value = focused;
};

const citySelected = (city: string) => {
  form.value.from = city;
  showFromCard.value = false;
};
const cityToSelected = (city: string) => {
  form.value.to = city;
  showFromTo.value = false;
};
const countrySelected = (country: string) => {
  form.value.from = country;
  showFromCard.value = false;
};
</script>
<style scoped></style>
