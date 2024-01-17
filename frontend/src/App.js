import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/form/Form";
import { CommonProvider } from "./pages/Contexts/CommonContext";
import InternForm from "./pages/form/InternForm";
import Final from "./pages/form/components/Final";

function App() {

  return (
    <CommonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/form" element={<InternForm />} />
          <Route path="/review" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </CommonProvider>
  );
}

export default App;
