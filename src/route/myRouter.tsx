import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "../pages/Index/Index";
import Admin from "../pages/Admin/Admin";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index></Index>}></Route>

        <Route path={"/admin"} element={<Admin></Admin>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default MyRouter;
