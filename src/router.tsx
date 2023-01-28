import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Layout } from "./layout";
import LoginForm from "./features/login/login";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="login" element={<LoginForm />} />
                    {/* <Route path="contact/:id" element={<Dashboard />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<NoMatch />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
