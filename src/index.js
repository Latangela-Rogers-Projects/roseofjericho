import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./index.css";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import ProductList from "./pages/public/ProductList";
import DashboardLayout from "./layouts/DashboardLayout";
import ProductDetail from "./pages/public/ProductDetail";
import Cart from "./pages/public/Cart";
import Checkout from "./pages/public/Checkout";
import OrderConfirmation from "./pages/public/OrderConfirmation";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Unauthorized from "./pages/auth/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";

// import Orders from "./pages/dashboard/Orders";
// import OrderDetails from "./pages/dashboard/OrderDetails";
// import CreateOrder from "./pages/dashboard/CreateOrder";
// import Products from "./pages/dashboard/Products";
// import ProductCreate from "./pages/dashboard/ProductCreate";
// import ProductEdit from "./pages/dashboard/ProductEdit";
// import ProductView from "./pages/dashboard/ProductView";
// import CollectionCreate from "./pages/dashboard/CollectionCreate";
// import CollectionEdit from "./pages/dashboard/CollectionEdit";
// import CollectionView from "./pages/dashboard/CollectionView";
// import Inventory from "./pages/dashboard/Inventory";
// import Customers from "./pages/dashboard/Customers";
// import CustomerCreate from "./pages/dashboard/CustomerCreate";
// import CustomerDetails from "./pages/dashboard/CustomerDetails";
// import CustomerEdit from "./pages/dashboard/CustomerEdit";
// import Campaigns from "./pages/dashboard/Campaigns";
// import Analytics from "./pages/dashboard/Analytics";
// import POS from "./pages/dashboard/POS";
// import Staff from "./pages/dashboard/Staff";
// import Settings from "./pages/dashboard/Settings";
// import Shipping from "./pages/dashboard/Shipping";
// import Payments from "./pages/dashboard/Payments";

import { ToastContainer } from "./components/Toast";
import Overview from "./pages/dashboard/Overview";
import About from "./pages/public/About";
import ClientBookingPage from "./pages/public/client-booking";
import HealingPavilionDashboard from "./pages/dashboard/dashboard";
import HealingPavilionAvailabilityManagementPage from "./pages/dashboard/availability";
import HealingPavilionBookingsPage from "./pages/dashboard/bookings";
import HealingPavilionSettingsPage from "./pages/dashboard/Settings";
import Mission_Vission from "./pages/public/Mission_Vission";
import Our_Team from "./pages/public/Team";
import OurPrograms_Services from "./pages/public/OurPrograms&Services";
import OutOfTheBox from "./pages/public/OutOfTheBox";
import ComunityImpact from "./pages/public/ComunityImpact";
import HeartforCleanWaterProject from "./pages/public/HeartforCleanWaterProject";
import WomensWellnessClinic from "./pages/public/WomensWellnessClinic";
import TheJoshuaCoalition from "./pages/public/TheJoshuaCoalition";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})


function App() {
  const isDev = process.env.NODE_ENV === "development";
  return isDev ? <React_App /> : <WordPress_App />;
}


function useCurrentPageSlug() {
  const location = useLocation();
  return location.pathname.replace(/^\/|\/$/g, "");
}

function React_App() {
  return (
    <Router>
      <React_App_Layout />
    </Router>
  );
}

function React_App_Layout() {
  const currentPageSlug = useCurrentPageSlug();

  const renderRoutes = (pages, isDashboard = false) =>
    Object.entries(pages).map(([path, Component]) => {
      const resolvedPath = isDashboard
        ? path === "dashboard"
          ? "/dashboard"
          : `/dashboard/${path}` // Keep dynamic segments like :id/:slug intact
        : `/${path}`;

      const element = isDashboard ? (
        <ProtectedRoute requiredPermissions={["view_dashboard", "use_pos"]}>
          <DashboardLayout currentPageSlug={path}>
            <Component currentPageSlug={path} />
          </DashboardLayout>
        </ProtectedRoute>
      ) : (
        <PublicLayout currentPageSlug={path}>
          <Component currentPageSlug={path} />
        </PublicLayout>
      );

      return <Route key={resolvedPath} path={resolvedPath} element={element} />;
    });

  return (
    <Routes>
      {/* Public pages */}
      {renderRoutes(PUBLIC_PAGES)}

      {/* Dashboard pages */}
      {renderRoutes(DASHBOARD_PAGES, true)}

      {/* Auth pages */}
      {renderRoutes(AUTH_PAGES)}

      {/* Default fallback */}
      <Route path="*" element={<PublicLayout currentPageSlug="home"><Home /></PublicLayout>} />
    </Routes>
  );
}


function WordPress_App() {
  const path = window.wpData?.path || "";
  const segments = path.split("/").filter(Boolean);

  const isDashboard = segments[0] === "dashboard";

  if (isDashboard) {
    return (
      <ProtectedRoute requiredPermissions={["view_dashboard", "use_pos"]}>
        <DashboardRouter segments={segments.slice(1)} />
      </ProtectedRoute>
    );
  }

  return <PublicRouter segments={segments} />;
}

function DashboardRouter({ segments }) {
  // const routeKey = segments.join("/") || "dashboard";
  const routeKey = normalizeRoute(segments, "dashboard");

  const Component =
    DASHBOARD_PAGES[routeKey] ||
    DASHBOARD_PAGES[segments[0]] ||
    Overview;

  return (
    <DashboardLayout currentPageSlug={routeKey}>
      <Component currentPageSlug={routeKey} />
    </DashboardLayout>
  );
}

function PublicRouter({ segments }) {
  const routeKey = normalizeRoute(segments, "public");

  let Component = null;

  // 1. Auth pages FIRST
  if (AUTH_PAGES[routeKey]) {
    Component = AUTH_PAGES[routeKey];
  }

  // 2. Public pages (exact match only)
  else if (PUBLIC_PAGES[routeKey]) {
    Component = PUBLIC_PAGES[routeKey];
  }

  // 3. Home fallback ONLY when route is empty
  else if (!segments.length) {
    Component = Home;
  }

  // 4. Final fallback (404 behavior)
  else {
    Component = Home;
  }

  return (
    <PublicLayout currentPageSlug={routeKey}>
      <Component currentPageSlug={routeKey} />
    </PublicLayout>
  );
}

function parsePath() {
  try {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const [base, id, sub, subId] = pathParts;
    return { base, id, sub, subId };
  } catch {
    return { base: null, id: null, sub: null, subId: null };
  }
}

function normalizeRoute(segments, mode = "public") {
  if (!segments.length) return "home";

  // =========================
  // DASHBOARD ROUTES
  // =========================
  if (mode === "dashboard") {
    if (segments[0] === "products" && segments[1] === "create") {
      return "products/create";
    }

    if (segments[0] === "products" && segments[2] === "edit") {
      return "products/:id/edit";
    }

    if (segments[0] === "products" && segments[1]) {
      return "products/:id";
    }

    if (segments[0] === "customers" && segments[1] === "create") {
      return "customers/create";
    }

    if (segments[0] === "customers" && segments[2] === "edit") {
      return "customers/:id/edit";
    }

    if (segments[0] === "customers" && segments[1]) {
      return "customers/:id";
    }

    if (segments[0] === "orders" && segments[1]) {
      return "orders/:id";
    }

    return segments.join("/");
  }

  // =========================
  // PUBLIC ROUTES
  // =========================
  if (segments[0] === "products" && segments[1]) {
    return "products/:slug";
  }

  return segments.join("/");
}

// ------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AuthProvider>
  <QueryClientProvider client={queryClient}>
    <>
      <App />
      <ToastContainer theme="dark" pauseOnHover newestOnTop pauseOnFocusLoss />
    </>
  </QueryClientProvider>
  // </AuthProvider>
);









// Define page mappings
const PUBLIC_PAGES = {
  home: Home,
  aboutUs: About,
  "mission": Mission_Vission,
  team: Our_Team,
  "services":OurPrograms_Services,
  "OTB": OutOfTheBox,
  "comunity-impact": ComunityImpact,
  "heart-for-clean-water": HeartforCleanWaterProject,
  "womens-wellness-clinic": WomensWellnessClinic,
  "the-joshua-coalition": TheJoshuaCoalition,
  "book-session": ClientBookingPage,
  products: ProductList,
  "products/:slug": ProductDetail,
  "cart": Cart,
  "checkout": Checkout,
  "order-confirmation": OrderConfirmation,
};

const DASHBOARD_PAGES = {
  dashboard: HealingPavilionDashboard,
  "availability": HealingPavilionAvailabilityManagementPage,
  "bookings": HealingPavilionBookingsPage,
  settings: HealingPavilionSettingsPage
  // orders: Orders,
  // "orders/:id": OrderDetails,
  // "create-order": CreateOrder,
  // "products": Products,
  // "products/create": ProductCreate,
  // "products/:id/edit": ProductEdit,
  // "products/:id": ProductView,
  // "collections/create": CollectionCreate,
  // "collections/:id/edit": CollectionEdit,
  // "collections/:id": CollectionView,
  // inventory: Inventory,
  // customers: Customers,
  // "customers/create": CustomerCreate,
  // "customers/:id": CustomerDetails,
  // "customers/:id/edit": CustomerEdit,
  // campaigns: Campaigns,
  // analytics: Analytics,
  // pos: POS,
  // staff: Staff,
  // settings: Settings,
  // shipping: Shipping,
  // payments: Payments,
};

const AUTH_PAGES = {
  login: Login,
  register: Register,
  unauthorized: Unauthorized,
};