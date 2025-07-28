"use client";

import { ModalProvider } from "@/shared/context";
import { Dashboard } from "@/pages/dashboard";

function DashboardPage() {
  return (
    <ModalProvider>
      <Dashboard />
    </ModalProvider>
  );
}

export default DashboardPage;
