import { Route, Routes } from "react-router-dom";
import { HomePage, Navigation, SignIn } from "./routes";

const Shop = () => {
  return <h1>Shop Pages</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
