# FakeStore React Redux
- It is a dynamic and responsive website built using React and Redux to manage products, cart, and user login credentials.
- The website includes a login page, cart page, home page, and individual product pages based on ID routing.

## Structure
### Pages

- **Login Page**: Includes a form for user login with email and password, stored in local storage.
- **Cart Page**: Displays a list of products added to the cart with options to increase, decrease, or remove items.
- **Home Page**: Shows a grid of products with filters for categories like men, women, jewellery, etc.

### Reducers

- **cartReducer**: Manages the state of the cart.
- **authReducer**: Manages user authentication state.
- **proReducer**: Manages the state of products.
These reducers are combined in the `index.js` file in the `reducers` folder.

### Actions

All actions are defined in the `index.js` file in the `actions` folder. Some key actions include:

- `handleLogin`: Add userDetails in localStorage and make isAuth true in state.
- `handleLogout`: Remove userDetails from localStorage and make isAuth false in state. 
- `addCart`: Adds a product to the cart.
- `delCart`: Removes a product from the cart.
- `increaseQuantity`: Increase product quantity.
- `decreaseQuantity`: Decrease product quantity.
- `setProduct`: Add individual product description data to the state.

### Store

The global store is created using `createStore` with the combined reducers. An `initialState` variable contains the initial data like cart items and authentication status.

## Components

### Header

- **Title**: Displays the website title.
- **Login/Logout Button**: Toggles based on user authentication state.
- **Cart Button**: Displays the count of products in the cart and navigates to the cart page on click.

### Product Card

- **Image**: Displays the product image.
- **Description**: Shows the product description.
- **Category**: Displays the product category.
- **Price**: Shows the product price.
- **Add to Cart Button**: Allows logged-in users to add products to the cart.

### Cart

- **Product Details**: Displays the same details as the product card.
- **Quantity Management**: Includes buttons to increase or decrease the quantity of each product.
- **Remove Button**: Allows users to remove a product from the cart.

## User Flow

1. **Login**: User logs in using the form on the login page.
2. **Browse Products**: User can browse products on the home page and filter by category.
3. **Add to Cart**: Logged-in users can add products to the cart.
4. **Manage Cart**: Users can view the cart, manage quantities, and remove products.
5. **Logout**: Users can log out, which clears the authentication state.

## Screenshots
Below is a screenshot of the website's user interface:

**Login Page**
![image](https://github.com/VirtiShah247/FakeStore-React-Redux/assets/102175129/f6533299-22cf-4f7d-9135-6a86d130a7d8)

**Home Page**
![image](https://github.com/VirtiShah247/FakeStore-React-Redux/assets/102175129/7a7af360-d3ae-4cd3-a2ab-8f56e998b1ae)
![image](https://github.com/VirtiShah247/FakeStore-React-Redux/assets/102175129/874a0599-ffdd-4d5f-a6f2-3b792e75a36d)

**Add to Cart**
![image](https://github.com/VirtiShah247/FakeStore-React-Redux/assets/102175129/253876d5-072c-437c-a542-729f7d38caed)

**Cart Page**
![image](https://github.com/VirtiShah247/FakeStore-React-Redux/assets/102175129/9406706b-5470-4224-b23d-f45a7d22e612)


## Usage

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/VirtiShah247/FakeStore-React-Redux.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
