"use client";

import { RecoilRoot } from "recoil";
import { AppProvider } from "./components/AppContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

export default function ClientLayout({ children }) {
  return (
    <RecoilRoot>
      <AppProvider>
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
      </AppProvider>
    </RecoilRoot>
  );
}
