import "./App.css";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import Layout from "./components/Layout";

function App() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
