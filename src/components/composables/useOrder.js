import { reactive, computed } from "vue";

const order = reactive({
  paymentOption: null,
  deliveryOption: null,
  termsAndConditions: [
    {
      text: "Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und akzeptiert habe**",
      isRequired: true,
      accepted: false,
    },
    {
      text: "Hiermit bestätige ich, dass ich die Daten korrekt eingetragen habe sowie die Datenschutzerklärung und die Cookies Richtlinien durchgelesen und akzeptierts habe*",
      isRequired: true,
      accepted: false,
    },
  ],
});

const allTermsAccepted = computed(() => {
  return order.termsAndConditions.every(
    (term) => !term.isRequired || term.accepted
  );
});

const orderFilled = computed(() => {
  return order?.paymentOption?.length > 0 && order?.deliveryOption?.length > 0;
});

const updateOrder = (props) => {
  Object.assign(order, props);

  console.log("Passed props: ", props);
  console.log("updateOrder: ", order);
};

export function useOrder() {
  return {
    order,
    orderFilled,
    updateOrder,
    allTermsAccepted,
  };
}
