import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center pt-24 md:pt-0">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold text-foreground">404</h1>
          <p className="mb-6 text-xl md:text-2xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-8 text-sm md:text-base text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="hero">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
