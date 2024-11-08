# Swiggy Clone Project

This project is a front-end clone of Swiggy, designed with Angular. The application allows users to explore restaurants, search for items, sign in, add items to a cart, and view detailed information about each restaurant. This README provides a comprehensive overview of the project structure and functionality of each folder, page, and component.

## DEMO URL :- https://swiggy-clone-angular.netlify.app/

## Project Structure

The main project structure under the `src/app` folder is organized into two primary folders:
- **pages**: Contains main pages the user navigates to, such as Home, Search, Cart, etc.
- **components**: Contains reusable components like the header, footer, and restaurant cards.

Additionally, the project includes services that handle data and business logic.

### Pages

1. **Home Page**
   - **Purpose**: This is the main landing page of the application, similar to the Swiggy homepage.
   - **Sections**:
     - **Header**: Contains the main navigation menu.
     - **Popular Categories**: Displays a set of popular food categories that users can explore.
     - **Featured Restaurants**: Lists restaurants prominently featured based on popularity or other criteria.
     - **Footer**: Contains footer information and links.
   - **Components Used**: Header, Footer, Popular Categories, Restaurant Card (used in the Featured Restaurants section).

2. **Search Page**
   - **Purpose**: Allows users to search for any food item or restaurant.
   - **Functionality**: On entering a search term, it retrieves and displays relevant search results.
   - **Components Used**: Typically includes an input field and a results display section.
     ![image](https://github.com/user-attachments/assets/c0a9988f-5611-40ce-97e0-df8beb768fca)


3. **Sign-In Page**
   - **Purpose**: Prompts the user to sign in with an email, name, and phone number.
   - **Functionality**:
     - Form validation ensures valid data entry.
     - On clicking the Sign-In button, validated data is sent to a MockAPI.
     - Upon successful sign-in, the user is redirected to the Home Page, where their name replaces the "Sign In" text in the header
   - **Components Used**: Form fields and validation messages.
     ![image](https://github.com/user-attachments/assets/4e8f03d3-d531-4476-87ec-1d01ceb6baef)


4. **Cart Page**
   - **Purpose**: Displays all items the user has added to their cart.
   - **Functionality**:
     - Allows users to increase or decrease the quantity of items.
     - Enables users to remove individual items or clear the cart entirely.
     - If the cart is empty, a message prompts the user to explore restaurants and add items to the cart.
   - **Components Used**: Cart item cards, total amount display, and empty cart message.
     ![image](https://github.com/user-attachments/assets/be77f7a1-8953-47a9-9975-fe589c49f2c9)


5. **Explore Page**
   - **Purpose**: Displays additional browsing options or restaurants based on user interest.
   - **Functionality**: May include filters or sorting options for restaurant exploration.
   - **Components Used**: Typically includes a collection of restaurant cards.
     ![image](https://github.com/user-attachments/assets/8175fa4b-82b0-4652-a695-75666903ac42)


### Components

The **components** folder contains all reusable components that enhance modularity and reusability across the application.

1. **Footer**
   - **Purpose**: Displays footer links and information at the bottom of each page.
   - **Usage**: Used in multiple pages, especially the Home Page and other main views.
     ![image](https://github.com/user-attachments/assets/20ea9482-fc0c-4ae0-a0c7-746cff852a54)


2. **Header**
   - **Purpose**: The main navigation bar for the application.
   - **Features**:
     - Contains navigation links to Home, Cart, Explore, and Account pages.
     - Shows the user’s name upon successful sign-in.
   - **Usage**: Rendered at the top of every page for consistent navigation.

3. **Menu Item**
   - **Purpose**: Displays individual menu items in a structured card format.
   - **Usage**: Primarily used within the Restaurant Detail Page to showcase each restaurant's menu.
   - **Features**: Displays item name, price, description, and "Add to Cart" functionality.

4. **Popular Categories**
   - **Purpose**: Displays a collection of popular food categories.
   - **Usage**: Featured on the Home Page to encourage exploration of popular food types.

5. **Restaurant Card**
   - **Purpose**: Displays individual restaurant information in a structured card format.
   - **Features**: Shows restaurant image, name, rating, category, and a partial location.
   - **Usage**: Used across pages where restaurant listings are required, such as Home Page, Search Page, and Explore Page.

6. **Restaurant Detail Page**
   - **Purpose**: Displays detailed information about a specific restaurant.
   - **Features**: 
     - Shows restaurant details like address, rating, and description.
     - Lists menu items associated with the restaurant.
   - **Usage**: Accessed when a user clicks on a specific restaurant card.
     ![image](https://github.com/user-attachments/assets/dc81b3bf-42d6-4912-8a7f-9dc61ad01b21)


### Services

The **services** folder contains Angular services that manage data handling and API communication for various parts of the application.

1. **Cart Service**
   - **Purpose**: Manages all cart-related operations.
   - **Features**:
     - Adds items to the cart.
     - Adjusts item quantities.
     - Removes individual items or clears the cart.
   - **Usage**: Utilized by Cart Page and components that modify the cart (like Menu Item).

2. **Menu Item Service**
   - **Purpose**: Manages data retrieval and business logic for menu items.
   - **Usage**: Used by the Restaurant Detail Page and Menu Item components to display and handle menu data.

3. **Restaurant Service**
   - **Purpose**: Manages data related to restaurants.
   - **Features**:
     - Retrieves restaurant listings.
     - Fetches details for specific restaurants based on their ID.
   - **Usage**: Utilized across components that display restaurant information, including the Home Page, Restaurant Card, and Restaurant Detail Page.

4. **Popular Categories Service ( menu service )**
   - **Purpose**: Fetches and provides data for popular categories.
   - **Usage**: Mainly used by the Popular Categories component on the Home Page.

---

## Additional Information

- **Mock API**: This project uses MockAPI for handling user sign-in.
- **Angular Modules**: The project is modularized to ensure separation of concerns, and services are injected where needed for optimal data flow and management.
- **Routing**: Angular Router is used for navigating between pages (like Home, Cart, Sign-In, etc.).
  
## Running the Project

To run the project locally:
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `ng serve`.

