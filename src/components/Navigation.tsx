import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
  subitems?: string[];
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "Accounting", 
    href: "/accounting", 
    subitems: ["Treasury management", "Tax management", "Revenue recognition", "Lease accounting"] 
  },
  { 
    label: "Finance", 
    href: "/finance", 
    subitems: ["FX & rates", "Inflation & CPI", "Purchasing Index", "Sentiment & Surveys"] 
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Auto-expand current section
  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = navigationItems.find(item => 
      item.href === currentPath || currentPath.startsWith(item.href + '/')
    );
    if (currentItem && currentItem.subitems) {
      setExpandedSection(currentItem.label);
    }
  }, [location.pathname]);

  const toggleSection = (sectionLabel: string) => {
    setExpandedSection(expandedSection === sectionLabel ? null : sectionLabel);
  };

  const isActiveRoute = (href: string) => {
    return location.pathname === href || 
           (href !== "/" && location.pathname.startsWith(href));
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-nav text-nav-foreground rounded-md shadow-lg"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <nav 
        className={cn(
          "fixed left-0 top-0 h-full w-[260px] border-r border-nav-border z-40 transform transition-transform duration-200 ease-in-out custom-scrollbar overflow-y-auto bg-primary",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-blue-900">
              World of Finance
            </h1>
            <p className="text-sm text-nav-foreground mt-1">
              Knowledge Hub
            </p>
          </div>

          {/* Navigation Items */}
          <ul className="space-y-2">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <div className="space-y-1">
                  {/* Main Navigation Link */}
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center justify-between w-full px-3 py-2.5 text-sm rounded-md transition-colors duration-150",
                      isActiveRoute(item.href)
                        ? "bg-nav-active text-nav-active-foreground font-medium"
                        : "text-nav-foreground hover:bg-nav-active/20 hover:text-nav-active-foreground"
                    )}
                    onClick={() => {
                      if (item.subitems) {
                        toggleSection(item.label);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.subitems && (
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-150",
                          expandedSection === item.label ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </Link>

                  {/* Subitems */}
                  {item.subitems && expandedSection === item.label && (
                    <ul className="ml-4 space-y-1 border-l border-nav-border/50 pl-3">
                      {item.subitems.map((subitem) => (
                        <li key={subitem}>
                          <button
                            className="block w-full text-left px-2 py-1.5 text-sm text-nav-foreground/80 hover:text-nav-active transition-colors duration-150"
                            onClick={() => {
                              // This would filter articles by subcategory in a real implementation
                              console.log(`Filter by: ${subitem}`);
                            }}
                          >
                            {subitem}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer in Navigation */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-6 border-t border-nav-border bg-primary"
        >
          <div className="text-xs text-nav-foreground/60 space-y-1">
            <p>&copy; 2025 World of Finance</p>
            <p>Professional finance knowledge</p>
          </div>
        </div>
      </nav>
    </>
  );
}