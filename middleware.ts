import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // List of locale prefixes to redirect (remove from URL)
  const localePrefixes = ['/eg', '/en', '/ar', '/fr']
  
  // Check if pathname starts with any locale prefix
  for (const locale of localePrefixes) {
    if (pathname === locale || pathname.startsWith(`${locale}/`)) {
      const newPath = pathname.replace(new RegExp(`^${locale}`), '') || '/'
      const url = request.nextUrl.clone()
      url.pathname = newPath
      return NextResponse.redirect(url, 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
}

