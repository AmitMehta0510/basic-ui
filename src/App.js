// import React from "react";
// import ReactDOM from "react-dom";
// import Header from "./components/Header";
// import Body from "./components/Body";

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/Topnav";
import ClientTable from "./components/ClientTable";
import PaginationComponent from "./components/PaginationComponent";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <ClientTable />
        <PaginationComponent />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
