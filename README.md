# rtk-and-rtk-query
Testing rtk with rtk query

* This project is a test to see if
* The RTK query can get the current state
* In the case of dispatching an action before
* Executing the query
* See the `handleLogin()` function in App.tsx
* And it was seen that it works.

<br />

* Try switching the components and fetching data afterwards
* The request header will change accordingly
* But the attempt to wrap each layout with different
* Provider component resulted in failure, since the components aren't
* Getting the store context.

<br />

* To run the frontend `npm run dev`
* To run the backend `npm run server`