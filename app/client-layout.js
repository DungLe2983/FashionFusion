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
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
        <df-messenger
          intent="WELCOME"
          chat-title="FashionFushion"
          agent-id="0058d451-d5ab-4986-8912-face9b8e1e29"
          language-code="vi"
        ></df-messenger>
      </AppProvider>
    </RecoilRoot>
  );
}
