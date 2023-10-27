// import React from "react";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  BrowserRouter,Route,Routes
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<div> <h1>Expense tracker has been mounted</h1>
    <Link to="/expense-tracker/first-page">Got to the first page of expense tracker</Link>
    </div>
  },
  {
    path: "/expense-tracker",
    element:<div> <h1>Expense tracker has been mounted</h1>
    <Link to="/expense-tracker/first-page">Got to the first page of expense tracker</Link>
    </div>
  },
  {
    path:"/expense-tracker/first-page",
    element:<div>
      <h1>First page of Expense tracker project</h1>
    </div>
  }
],);

export default function Root(props) {

  return <RouterProvider router={router} />;
}
