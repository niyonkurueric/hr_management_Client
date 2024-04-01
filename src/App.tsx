import { Toaster } from "react-hot-toast";
import AppProviders from "./providers/Providers";

const App = () => {
  return (
    <>
      <AppProviders />
      <Toaster />
    </>
  );
};

export default App;
