import { NextURL } from 'next/dist/server/web/next-url'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

interface LoginRequest {
  username: string
}

export async function POST(request: Request) {
  const body = await request.json()
  const { username }: LoginRequest = body
 
  if(!username) {
    return new Response('Username is required', {
      status: 400
    })
  }

  cookies().set('username', username)
  return NextResponse.redirect(new NextURL('/home', request.url))
}