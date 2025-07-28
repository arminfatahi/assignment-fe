"use client";

import { ModalProvider } from "@/shared/lib/context";
import { Dashboard } from "@/pages/dashboard";

function DashboardPage() {
  return (
    <ModalProvider>
      <Dashboard />
    </ModalProvider>
  );
}

export default DashboardPage;
