import { reactive, watch } from "vue";

const cart = reactive({
  model: null,
  withAssembly: null,
  basePrice: 0,
  features: [
    { name: "feature1", price: 100, withAssembly: false },
    { name: "feature2", price: 200, withAssembly: true },
  ],
  totalPrice: 0,
});

// Watch for changes in basePrice and features to update totalPrice
watch(
  () => [cart.basePrice, cart.features],
  () => {
    cart.totalPrice =
      cart.basePrice +
      cart.features.reduce((sum, feature) => sum + feature.price, 0);
  },
  { deep: true }
);

const updateModel = (props) => {
  const { model, withAssembly, price } = props;
  cart.model = model;
  cart.withAssembly = withAssembly;
  cart.basePrice = price;
  console.log("Cart: ", cart.model, cart.withAssembly, cart.basePrice);
};

const updateFeatures = (props) => {
  const { name, price, withAssembly, remove } = props;

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

const updateTotalPrice = () => {
  cart.features.map();
};

export function useCart() {
  return {
    cart,
    updateModel,
    updateFeatures,
    removeFeature,
  };
}
