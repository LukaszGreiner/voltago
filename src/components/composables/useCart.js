import { reactive, computed } from "vue";

const cart = reactive({
  model: "ZX-500",
  modelImg: "/img/scooter-small-1.png",
  withAssembly: false,
  basePrice: 1599,
  features: [],
  deliveryCost: null,
});

const totalPrice = computed(() => {
  return (
    cart.basePrice +
    cart.deliveryCost +
    cart.features.reduce((sum, feature) => sum + feature.price, 0)
  );
});

const cartDataFilled = computed(() => {
  return cart?.model?.length > 0 && cart?.basePrice > 0;
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
    cartDataFilled,
  };
}
