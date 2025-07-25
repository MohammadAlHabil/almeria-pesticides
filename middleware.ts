import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(ar|en)/:path*"],
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
