import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import EasterEgg from "./pages/EasterEgg";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Global favicon management
  useEffect(() => {
    const removeFavicon = () => {
      // Remove all existing favicon links
      const links = document.querySelectorAll('link[rel*="icon"]');
      links.forEach(link => link.remove());
      
      // Create a new favicon with "R" for Rishabh
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23ffffff"/><text x="50" y="60" text-anchor="middle" font-family="Arial" font-size="40" fill="%23000">R</text></svg>';
      document.head.appendChild(newFavicon);
    };
    
    // Run immediately and then every second
    removeFavicon();
    const interval = setInterval(removeFavicon, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/easter-egg" element={<EasterEgg />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
