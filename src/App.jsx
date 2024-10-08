import React, { Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const NavBar = lazy (()=>import('./components/NavBar'))

function App() {
  return (
    <div className="min-h-screen">
      <Suspense
        className={
          <div className="flex justify-center items-center min-h-screen">
            <LoadingSpinner />
          </div>
        }
      >
        <div>
          <div className="bg-primary pt-4">
            <NavBar />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
