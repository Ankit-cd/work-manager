import { NextResponse } from "next/server";

export function middleware(request) {

  // Retrieve the login token from cookies
  const loginToken = request.cookies.get("loginToken")?.value;

  // Paths that do not require authentication
  const publicPaths = ["/login", "/signup"];

  // Paths that require authentication
  const protectedPaths = [
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ];

  const { pathname } = request.nextUrl;

  // Redirect logged-in users away from login and signup
  if (publicPaths.includes(pathname) && loginToken) {
    return NextResponse.redirect(new URL("/profile/user", request.url));
  }

  // Redirect users without a token from protected paths
  if (protectedPaths.some((path) => pathname.startsWith(path)) && !loginToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to proceed for other cases
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ],
};

