import { Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectLoader } from "./redux/selectors";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const loading = useSelector(selectLoader);
  return (
    <Suspense
      fallback={
        <div className="initial_load">
          <Loader />
        </div>
      }
    >
      <div>
        <Navigation />
        {loading && (
          <div className="initial_load">
            <Loader />
          </div>
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
