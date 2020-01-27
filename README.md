# API Kata

A legacy api exists for interacting with a stock system.  It returns results asynchronously. The details of the API are included below, and should be generally correct.  Using the API complete the following tasks:

1.	Lookup the SKU and price for an apple, a banana and an orange, printed in the format:

    Product: SKU: <SKU>, Price: <Price>

    e.g.
```
    apple: SKU: a134, Price: 0.99
```

2.	Create a new basket and add the following products (or the maximum available):
-	4 bananas
-	16 apples

    e.g. where there are only 3 bananas available, you would add only 3.

    At each point print out the quantity of the products added

    Then confirm the order, printing the returned order-code.

    The expected output should look similar to:

```
    Added 3 bananas 
    Added 16 apples
    Order confirmed: ORD-1234
```

## API Documentation

### Installation

To install the API:

```
npm install <PACKAGE NAME>
```

In your code to create an instance of the API Client:

```
const ApiClient = require('<PACKAGE NAME');

const api = new ApiClient();
```

### Lookup SKU

Product names will resolve to a Stock Keeping Unit.  Prices and Stock can only be looked up against SKU, **NOT** name.

`api.lookupSku(name, callback);`

#### Parameters

 - name: string, name of the product, case insensitive
 - callback: function to call on lookup completion, function will be called with the parameters: error, sku.  If successful, error will be null/undefined.

#### Errors

On failure to locate product, an error with the message: `PRODUCT_NOT_FOUND` will be returned.

### Lookup Price

`api.lookupPrice(sku, callback);`

#### Parameters

 - sku: string, Product SKU, **NOT** product name
 - callback: function to call on lookup completion, function will be called with the parameters: error, price.  If successful, error will be null/undefined.

#### Errors

On failure to locate product, an error with the message: `PRODUCT_NOT_FOUND` will be returned.

### Lookup Stock

`api.lookupStock(sku, callback);`

#### Parameters

 - sku: string, Product SKU, **NOT** product name
 - callback: function to call on lookup completion, function will be called with the parameters: error, quantity remaining.  If successful, error will be null/undefined.

#### Errors

On failure to locate product, an error with the message: `PRODUCT_NOT_FOUND` will be returned.

### Create Basket

`api.createBasket(sku, callback);`

#### Parameters

 - sku: string, Product SKU, **NOT** product name
 - callback: function to call on lookup completion, function will be called with the parameters: error, basket object.  If successful, error will be null/undefined.

#### Errors

On failure to locate product, an error with the message: `PRODUCT_NOT_FOUND` will be returned.

### Add Product to Basket

`basket.add(sku, quantity, callback);`

#### Parameters

 - sku: string, Product SKU, **NOT** product name
 - quantity: integer, number of products to add
 - callback: function to call on lookup completion, function will be called with the parameters: error  If successful, error will be null/undefined.

#### Errors

On failure to locate product, an error with the message: `PRODUCT_NOT_FOUND` will be returned.

On insufficient stock, an error with the message: `NOT_ENOUGH_STOCK` will be returned.

### Confirm Basket Order

`basket.confirm(callback);`

 - callback: function to call on lookup completion, function will be called with the parameters: error  If successful, error will be null/undefined.
