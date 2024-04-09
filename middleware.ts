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


{/*import { authMiddleware } from '@clerk/nextjs';  // Adjusted import path

// Using a regular expression for route matching (if `createRouteMatcher` unavailable)
const protectedRoutesRegex = /^(\/|\/upcoming|\/meeting(\/.*)?|\/previous|\/recordings|\/personal-room)$/;

export default authMiddleware ((auth,req) => {
  // Check for protected routes using the regular expression (if applicable)
  if (protectedRoutesRegex.test(req.url)) {
    return auth().protect();
  }

  // Handle public routes
  return true;
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};*/}

import { authMiddleware } from '@clerk/nextjs';

// Define the type for the middleware function
type MiddlewareFunction = (auth: any, req: any) => any;

// Using a regular expression for route matching (if `createRouteMatcher` unavailable)
const protectedRoutesRegex = /^(\/|\/upcoming|\/meeting(\/.*)?|\/previous|\/recordings|\/personal-room)$/;

const middleware: MiddlewareFunction = (auth, req) => {
  // Check for protected routes using the regular expression (if applicable)
  if (protectedRoutesRegex.test(req.url)) {
    return auth().protect();
  }

  // Handle public routes
  return true;
};

export default authMiddleware(middleware as any);

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
