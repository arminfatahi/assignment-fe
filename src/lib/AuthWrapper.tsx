import React, { useEffect, JSX } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";

function withProtectedRoute<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>,
) {
  const ProtectedRoute = (props: P) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (!loading) {
        if (!user) {
          if (pathname !== "/login") {
            router.replace("/login");
          }
        } else {
          if (pathname === "/login") {
            router.replace("/dashboard");
          }
        }
      }
    }, [user, loading, router, pathname]);

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoute;
}

export default withProtectedRoute;
