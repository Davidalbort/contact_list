# `Introduction`

 * This project was created with react js, styled with module component formatting and with axios for API request. The styling was created with mobile first in mind, this was done without media query to avoid rewriting the styling code. A server was created on localhost port 4000 to store and simulate the web services in this case the CRUD, the endpoint Api is http://localhost:4000/products.


# `Development process`

* Read and analyze the documentation (challenge)
* Learn how to create a server to simulate the consumption of web services.
*Create the CRUD services for the consumption of the web services and performed functional tests.
* Sketching the application interface.
* Creation of components, containers and home page to structure the application with semantic HTML, all this taking into account the Atomic Design methodology.
* The logic for each of the components was made, also two custom hooks were created, one containing the logic of operation and another that brings the information that the server has, finally a context was created so that all the information is throughout the app.
*Two modals were created, one for the interface to add contact and another for the option to edit it, this so that there is no stacking and overflow in the DOM.
* The design was modified taking into account the mobile first, since it was not included in the document, this proposal was taken into account to not use mediaQueri. 
* Creation of styles for components and containers with style module, without media query and taking into account the mobile first, also placed a horizontal overflow to the table in mobile mode, this in order to have a functional and aesthetic design.
* Necessary tags were added to have a good SEO performance.
* Two integration tests were performed, one for the header and one for the add button.
* Finally the user manual of the application was made.

-Documentation of the whole path.



Available Scripts

* In the project directory, you can run:

 ## `Getting Started`

* First type on terminal

```bash
npm i
```

* Second, run the development server:

```bash
npm run dev-db
```

* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of the App and the store in the [http://localhost:4000](http://localhost:4000/products).
