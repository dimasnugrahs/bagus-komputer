import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles = {
  "/": "Home - Bagus Komputer",
  "/about": "About Us - My Dynamic App",
  "/services": "Services - My Dynamic App",
  "/contact": "Contact - My Dynamic App",
};

function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "My Dynamic App";
    document.title = title;
  }, [location]);

  return null;
}

export default DynamicTitle;
