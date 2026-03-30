import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host')

  // 1. Check karo ki site production mein hai aur host 'www.' se shuru nahi ho raha
  // Ya protocol 'https' nahi hai
  if (
    process.env.NODE_ENV === 'production' && 
    (!host.startsWith('www.') || request.headers.get('x-forwarded-proto') !== 'https')
  ) {
    // Sabko zabardasti https://www.recipeoai.com par redirect kar do
    return NextResponse.redirect(
      `https://www.recipeoai.com${url.pathname}${url.search}`,
      301
    )
  }

  return NextResponse.next()
}

// Ye config batata hai ki kin cheezon pe redirect nahi lagana (images, static files etc.)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}