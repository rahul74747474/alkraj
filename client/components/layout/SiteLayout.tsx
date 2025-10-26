import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 text-foreground">
      <SiteHeader />
      <SiteNav />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
