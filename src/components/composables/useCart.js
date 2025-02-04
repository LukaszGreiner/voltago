import { reactive, computed } from "vue";
import PaymentOptions from "../Shopping/PaymentOptions.vue";

const cart = reactive({
  model: null,
  withAssembly: true,
  basePrice: 0,
  features: [{ name: "placeholderFeature", withAssembly: true, price: 999 }],
  paymentOption: null,
  deliveryOption: null,
  deliveryCost: 0,
});

const totalPrice = computed(() => {
  return (
    cart.basePrice +
    cart.deliveryCost +
    cart.features.reduce((sum, feature) => sum + feature.price, 0)
  );
});

const updateCart = (props) => {
  Object.assign(cart, props);

  console.log("Passed props: ", props);
  console.log("Cart: ", cart);
};

const updateFeatures = (props) => {
  const { name, price, withAssembly } = props;

  // Removes duplicate features
  cart.features = cart.features.filter((feature) => feature.name !== name);

  cart.features.push({ name, price, withAssembly });
  console.log(cart.features);
};

const removeFeature = (featureName) => {
  cart.features = cart.features.filter(
    (feature) => feature.name !== featureName
  );
  console.log(cart.features);
};

export function useCart() {
  return {
    cart,
    updateCart,
    updateFeatures,
    removeFeature,
    totalPrice,
  };
}
