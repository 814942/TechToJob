import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized path segments
  matcher: ["/", "/(es|en)/:path*"],
};
