import { reactive, computed } from "vue";

const order = reactive({
  paymentOption: null,
  deliveryOption: null,
  termsAndConditionsAccepted: false,
});

const orderFilled = computed(() => {
  return (
    order?.paymentOption?.length > 0 &&
    order?.deliveryOption?.length > 0 &&
    order?.termsAndConditionsAccepted
  );
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
  };
}
