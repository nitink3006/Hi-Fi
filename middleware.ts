/*import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};*/


import { authMiddleware } from '@clerk/nextjs/server';  // Adjusted import path

// Using a regular expression for route matching (if `createRouteMatcher` unavailable)
const protectedRoutesRegex = /^(\/|\/upcoming|\/meeting(\/.*)?|\/previous|\/recordings|\/personal-room)$/;

export default authMiddleware ((auth, req) => {
  // Check for protected routes using the regular expression (if applicable)
  if (protectedRoutesRegex.test(req.url)) {
    return auth().protect();
  }

  // Handle public routes
  return true;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
