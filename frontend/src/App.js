import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/form/Form";
import Step1 from "./pages/form/components/Step1";
import Step2 from "./pages/form/components/Step2";
import Step3 from "./pages/form/components/Step3";
import Step4 from "./pages/form/components/Step4";
import Step5 from "./pages/form/components/Step5";
import Final from "./pages/form/components/Final";
import { CommonProvider } from "./pages/Contexts/CommonContext";
import CV from "./pages/form/CV";

function App() {

  return (
    <CommonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/step-1" element={<Step1 />} />
          <Route path="/step-2" element={<Step2 />} />
          <Route path="/step-3" element={<Step3 />} />
          <Route path="/step-4" element={<Step4 />} />
          <Route path="/step-5" element={<Step5 />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/review" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </CommonProvider>
  );
}

export default App;
