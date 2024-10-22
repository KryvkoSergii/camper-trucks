import { Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CamperCatalogPage = lazy(() => import("./pages/CamperCatalogPage/CamperCatalogPage"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage"));
const CamperFeatures = lazy(() => import("./components/CamperFeatures/CamperFeatures"));
const CamperReviews = lazy(() => import("./components/CamperReviews/CamperReviews"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CamperCatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
