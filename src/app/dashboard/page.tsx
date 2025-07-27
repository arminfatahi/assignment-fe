"use client";

import { ModalProvider } from "@/shared/lib/context/ModalContext";
import Dashboard from "@/views/dashboard/ui";

function DashboardPage() {
  return (
    <ModalProvider>
      <Dashboard />
    </ModalProvider>
  );
}

export default DashboardPage;
