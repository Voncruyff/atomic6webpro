import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
  return (
    <div className="text-2xl flex justify-center min-h-screen items-center">
      {/*<LoginPage></LoginPage>*/}  
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;