const faker = require("faker");

const qtyTotal = () => {
  const qty = faker.random.number({ min: 1, max: 100 });
  const price = faker.finance.amount(100, 100000, 2, "$");
  const [symbol, ...priceNumber] = price.split("$");
  const total = (qty * priceNumber).toFixed(2);
  return { price: priceNumber.join(""), qty, total };
};

const getState = () => {
  const STATES = ["processed", "in_transit", "delivered"];

  const state = faker.random.arrayElement(STATES);

  return state !== STATES[0]
    ? {
        state,
        deliveryBy: `${faker.name.firstName()} ${faker.name.lastName()}`,
        unit: faker.random.uuid(),
        deliverID: faker.random.uuid()
      }
    : { state };
};

const createOrder = (howMany = 1) => {
  const orders = Array.from({ length: howMany });

  return orders.map(value => {
    return {
      product: faker.random.word(),
      ...qtyTotal()
    };
  });
};

const model = (view = false) => {
  const orderNumber = faker.random.uuid();
  const date = Date.now();
  const customerData = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: {
      postalCode: faker.address.zipCode(),
      street: faker.address.streetAddress(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      lat: faker.address.latitude(),
      lon: faker.address.longitude()
    }
  };
  const products = createOrder(faker.random.number({ min: 1, max: 50 }));
  const totalAmount = products.reduce(
    (prev, curr) => (prev * 1 + curr.total * 1).toFixed(2),
    0
  );
  const deliveryDate = faker.date.future(1);
  const providerData = {
    name: faker.company.companyName(),
    address: {
      postalCode: faker.address.zipCode(),
      street: faker.address.streetAddress(),
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      lat: faker.address.latitude(),
      lon: faker.address.longitude()
    },
    mail: faker.internet.email(),
    phone: faker.phone.phoneNumber()
  };

  const state = getState();

  return view
    ? { orderNumber, date, provider: providerData.name, totalAmount, state }
    : {
        orderNumber,
        date,
        customerData,
        products,
        totalAmount,
        deliveryDate,
        providerData,
        state
      };
};

const generateOrders = () => {
  const orders = Array.from({ length: faker.random.number({ min: 3, max: 10 }) });

  return orders.map(value => model(true));
}

module.exports = {model, generateOrders};
