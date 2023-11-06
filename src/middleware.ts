import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const user = request.cookies.has('username')
  const loginURL = new URL('/login', request.url)

  if(!user) {
    if (request.nextUrl.pathname === '/login') {
      return NextResponse.next()
    }
    return NextResponse.redirect(loginURL)
  }
}

export const config = {
  matcher: ['/home', '/home2'],
}