import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Review from "./pages/Review";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CreateReview from "./pages/CreateReview";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/reviews/:reviewName" element={<Review />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-review" element={<CreateReview />} />
      </Route>
    </Routes>
  );
};

export default App;
