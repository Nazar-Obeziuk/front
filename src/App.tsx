import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutProstopoo from "./pages/about/about-prostopoo/AboutProstopoo";
import AboutContacts from "./pages/about/about-contacts/AboutContacts";
import AboutMade from "./pages/about/about-made/AboutMade";
import AboutWarranty from "./pages/about/about-warranty/AboutWarranty";
import AboutPolicy from "./pages/about/about-policy/AboutPolicy";
import AboutPublic from "./pages/about/about-public/AboutPublic";
import ClientNeed from "./pages/client/client-need/ClientNeed";
import ClientRecommendation from "./pages/client/client-recommendation/ClientRecommendation";
import OrderMake from "./pages/order/order-make/OrderMake";
import OrderPayment from "./pages/order/order-payment/OrderPayment";
import OrderDelivery from "./pages/order/order-delivery/OrderDelivery";
import CatalogIndividual from "./pages/catalog/catalog-individual/CatalogIndividual";
import CatalogOrthopedic from "./pages/catalog/catalog-orthopedic/CatalogOrthopedic";
import CatalogCertificate from "./pages/catalog/catalog-certificate/CatalogCertificate";
import CatalogProduct from "./pages/catalog/catalog-product/CatalogProduct";
import CartAbout from "./pages/cart/cart-about/CartAbout";
import CartDelivery from "./pages/cart/cart-delivery/CartDelivery";
import CartPayment from "./pages/cart/cart-payment/CartPayment";
import Admin from "./pages/admin/Admin";
import AdminLogin from "./pages/admin/admin-login/AdminLogin";
import AdminWorkerUpdate from "./pages/admin/components/admin-workers/components/admin-worker-update/AdminWorkerUpdate";
import AdminError from "./pages/admin/admin-error/AdminError";
import AdminProductUpdate from "./pages/admin/components/admin-products/components/admin-product-update/AdminProductUpdate";
import AdminReviewsUpdate from "./pages/admin/components/admin-reviews/components/admin-reviews-update/AdminReviewsUpdate";
import AdminProductVariationUpdate from "./pages/admin/components/admin-products/components/admin-product-update/components/admin-product-update-variations/components/admin-product-variation-update/AdminProductVariationUpdate";
import AdminProductsReviewsUpdate from "./pages/admin/components/admin-products/components/admin-product-update/components/admin-product-update-reviews/components/admin-products-reviews-update/AdminProductsReviewsUpdate";
import AdminIndividualInsolesUpdate from "./pages/admin/components/admin-individual-insoles/components/admin-individual-insoles-update/AdminIndividualInsolesUpdate";
import AdminIndividualInsolesVariationUpdate from "./pages/admin/components/admin-individual-insoles/components/admin-individual-insoles-update/components/admin-individual-insoles-update-variations/components/admin-individual-insoles-variation-update/AdminIndividualInsolesVariationUpdate";
import AdminCertificateUpdate from "./pages/admin/components/admin-certificate/components/admin-certificate-update/AdminCertificateUpdate";
import AdminFopUpdate from "./pages/admin/components/admin-fop/components/admin-fop-update/AdminFopUpdate";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/home/prostopoo/about"
          element={<AboutProstopoo />}
        ></Route>
        <Route
          path="/home/prostopoo/contacts"
          element={<AboutContacts />}
        ></Route>
        <Route path="/home/prostopoo/made" element={<AboutMade />}></Route>
        <Route
          path="/home/prostopoo/warranty-and-exchange"
          element={<AboutWarranty />}
        ></Route>
        <Route
          path="/home/prostopoo/privacy-policy"
          element={<AboutPolicy />}
        ></Route>
        <Route
          path="/home/prostopoo/public-offer-agreement"
          element={<AboutPublic />}
        ></Route>
        <Route
          path="/home/client/who-need-individual-orthopedic-insoles"
          element={<ClientNeed />}
        ></Route>
        <Route
          path="/home/client/recommendations"
          element={<ClientRecommendation />}
        ></Route>
        <Route
          path="/home/order/how-to-make-a-order"
          element={<OrderMake />}
        ></Route>
        <Route path="/home/order/payment" element={<OrderPayment />}></Route>
        <Route path="/home/order/delivery" element={<OrderDelivery />}></Route>
        <Route
          path="/home/catalog/individual-orthopedic-insoles"
          element={<CatalogIndividual />}
        ></Route>
        <Route
          path="/home/catalog/orthopedic-insoles"
          element={<CatalogOrthopedic />}
        ></Route>
        <Route
          path="/catalog/orthopedic-insoles/:id"
          element={<CatalogProduct />}
        ></Route>
        <Route
          path="/home/catalog/gift-certificate-prostopoo"
          element={<CatalogCertificate />}
        ></Route>
        <Route path="/home/cart" element={<CartAbout />}></Route>
        <Route
          path="/home/cart/contacts-and-delivery"
          element={<CartDelivery />}
        ></Route>
        <Route path="/home/cart/payment" element={<CartPayment />}></Route>
        <Route path="/prostopoo-admin-panel" element={<Admin />}></Route>
        <Route
          path="/prostopoo-admin-panel/update-worker/:id"
          element={<AdminWorkerUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/update-product/:id"
          element={<AdminProductUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/product-variation-update/:id"
          element={<AdminProductVariationUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/product-review-update/:id"
          element={<AdminProductsReviewsUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/update-general-review/:id"
          element={<AdminReviewsUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/update-individual/:id"
          element={<AdminIndividualInsolesUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/individual-insoles-variation-update/:id"
          element={<AdminIndividualInsolesVariationUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/update-certificate/:id"
          element={<AdminCertificateUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/update-fop/:id"
          element={<AdminFopUpdate />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/login"
          element={<AdminLogin />}
        ></Route>
        <Route
          path="/prostopoo-admin-panel/error"
          element={<AdminError />}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
