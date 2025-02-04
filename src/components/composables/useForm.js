import { computed, reactive, watch } from "vue";

const formDetails = reactive({
  firstName: "Sven",
  lastName: "Schwarz",
  email: "sven.sven@gmail.com",
  localPhone: "23122321",
  phoneCountryCode: "+49",
  street: "ulica",
  houseNumber: "2",
  postalCode: "1-100",
  city: "Vienna",
});

const fullName = computed(() => {
  return formDetails.firstName + " " + formDetails.lastName;
});

const phoneNumber = computed(() => {
  return formDetails.phoneCountryCode + " " + formDetails.localPhone;
});

const fullAdress = computed(() => {
  return (
    formDetails.street +
    " " +
    formDetails.houseNumber +
    ", " +
    formDetails.postalCode +
    " " +
    formDetails.city
  );
});

watch(
  formDetails,
  (val) => {
    console.log(val);
  },
  { deep: true }
);

export function useForm() {
  return {
    formDetails,
    fullName,
    phoneNumber,
    fullAdress,
    email: formDetails.email,
  };
}
