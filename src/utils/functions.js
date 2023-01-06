export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);

export const sumItems = (items) =>
  items?.map((item) => item.quantity)?.reduce((a, b) => a + b, 0);

export const getNumber =()=> Math.floor(Math.random() *10000)
