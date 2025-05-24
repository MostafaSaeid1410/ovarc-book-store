import { Routes, Route } from "react-router-dom";
import Layout from "./sharedComponents/Layout/Layout";
import Books from "./pages/Books/Books";
import Author from "./pages/Author/Author";
import Stores from "./pages/Stores/Stores";
import Shop from "./pages/Shop/Shop";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Books />} />
                <Route path="books" element={<Books />} />
                <Route path="author" element={<Author />} />
                <Route path="stores" element={<Stores />} />
                <Route path="shop" element={<Shop />} />
            </Route>
        </Routes>
    );
}

export default App;
