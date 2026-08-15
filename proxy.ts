import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const authCookie = request.cookies.get('admin_session')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!authCookie && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    if (authCookie && isLoginPage) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
