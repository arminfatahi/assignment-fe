import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getUserFromCookie(cookie: string | undefined) {
  if (!cookie) return null;
  try {
    return JSON.parse(cookie);
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userCookie = request.cookies.get("user")?.value;
  const user = getUserFromCookie(userCookie);

  const isLoginPage = pathname === "/login";
  const isApi = pathname.startsWith("/api");

  if (isApi || pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (!user && !isLoginPage) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (user && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
