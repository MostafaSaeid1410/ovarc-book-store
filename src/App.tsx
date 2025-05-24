import { Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import Layout from "./sharedComponents/Layout/Layout";
import Books from "./pages/Books/Books";
import Author from "./pages/Author/Author";
import Stores from "./pages/Stores/Stores";
import Shop from "./pages/Shop/Shop";
import queryClient from "./queryClient";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Books />} />
                    <Route path="books" element={<Books />} />
                    <Route path="author" element={<Author />} />
                    <Route path="stores" element={<Stores />} />
                    <Route path="shop" element={<Shop />} />
                </Route>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;
