import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/admin/login" || 
    pathname === "/api/admin/login" ||
    pathname === "/api/admin/setup"
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin_token")?.value;

  if (!token) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "Unauthorized access. Token missing." },
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is missing");
    }
    const secretKey = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secretKey);
    return NextResponse.next();

  } catch (error) {
    console.error("Middleware Auth Error:", error);

    if (pathname.startsWith("/api/")) {
      return NextResponse.json(
        { error: "Unauthorized access. Invalid or expired token." },
        { status: 401 }
      );
    }

    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    response.cookies.delete("admin_token");
    return response;
  }
}

export const config = {
  matcher: [
    "/admin/:path*", 
    "/api/admin/:path*",
  ],
};