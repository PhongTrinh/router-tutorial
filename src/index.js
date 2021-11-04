import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Connect the URL
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import components (Add Some Routes)
import Expenses from "../src/routes/expenses";
import Invoices from "../src/routes/invoices";
import Invoice from "../src/routes/invoice";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} >
            {/* Index Routes */}
            <Route 
              // Notice it has the index prop instead of a path. 
              // That's because the index route shares the path of the parent. 
              // That's the whole point--it doesn't have a path.
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            {/* Reading URL Params */}
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          {/* Adding a "No Match" Route */}
          <Route 
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
