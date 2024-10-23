import { Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";


const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
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
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
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
