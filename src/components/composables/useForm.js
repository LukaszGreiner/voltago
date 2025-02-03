import { reactive } from "vue";

const formDetails = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  street: "",
  houseNumber: "",
  postalCode: "",
  city: "",
});

export function useForm() {
  return {
    formDetails,
    updateFormDetails,
  };
}

const updateFormDetails = (props) => {
  const { firstName, lastName, email, phoneNumber } = props;

  formDetails.firstName = firstName;
  formDetails.lastName = lastName;
  formDetails.email = email;
  formDetails.phoneNumber = phoneNumber;
  console.log("Provided: ", firstName, lastName, email, phoneNumber);
  console.log(
    "FormDetails: ",
    formDetails.firstName,
    formDetails.lastName,
    formDetails.email,
    formDetails.phoneNumber
  );
};
