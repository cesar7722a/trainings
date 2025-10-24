import { Route, Routes } from "react-router-dom";
import Home from "./private/home";
import About from "./private/about";
import { PrivateLayout } from "./private/private-layout";
import { PublicLayout } from "./public/public-layout";
import { FormLogin } from "./public/auth/auth-login";
import { FormRegister } from "./public/auth/auth-register";
import Deposit from "./private/deposit";
import Transfer from "./private/transfer";
import Withdraw from "./private/withdraw";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<FormLogin />} />
        <Route path="auth-register" element={<FormRegister />} />
      </Route>

      <Route path="bank" element={<PrivateLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="withdraw" element={<Withdraw />} />
      </Route>
    </Routes>
  );
}

export default App;
