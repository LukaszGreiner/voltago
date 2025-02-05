import { computed, reactive, watch } from "vue";

const formDetails = reactive({
  firstName: "Sven",
  lastName: "Schwarz",
  email: "sven.sven@gmail.com",
  localPhone: "23122321",
  phoneCountryCode: "",
  street: "",
  houseNumber: "",
  postalCode: "",
  city: "",
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

const formFilled = computed(() => {
  return (
    formDetails?.localPhone?.length > 0 &&
    formDetails?.phoneCountryCode?.length > 0 &&
    formDetails?.street?.length > 0 &&
    formDetails?.houseNumber?.length > 0 &&
    formDetails?.postalCode?.length > 0 &&
    formDetails?.city?.length > 0
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
    formFilled,
  };
}
