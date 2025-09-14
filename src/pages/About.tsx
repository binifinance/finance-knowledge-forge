import { Navigation } from '@/components/Navigation';
import { BookOpen, Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content Area */}
      <main className="ml-0 lg:ml-[260px] min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <nav className="text-sm text-muted-foreground mb-2">
              <span>Home</span> <span className="mx-2">/</span> <span className="text-accent">About</span>
            </nav>
            <h1 className="text-4xl font-bold text-foreground mb-3">About World of Finance</h1>
            <p className="text-lg text-muted-foreground">
              Your trusted source for comprehensive financial and accounting knowledge
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto p-6">
          {/* Mission Statement */}
          <section className="mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                World of Finance serves as a comprehensive knowledge hub, providing professionals 
                with authoritative insights into accounting implications of financial activities 
                and financial developments that impact modern business operations.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">What We Provide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={24} className="text-accent" />
                  <h3 className="text-xl font-medium text-foreground">Expert Analysis</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  In-depth analysis of complex accounting standards, regulatory changes, 
                  and their practical implications for business operations.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={24} className="text-accent" />
                  <h3 className="text-xl font-medium text-foreground">Market Insights</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive coverage of financial market developments, economic indicators, 
                  and their impact on business strategy and planning.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={24} className="text-accent" />
                  <h3 className="text-xl font-medium text-foreground">Professional Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Content tailored for finance professionals, accountants, and business leaders 
                  who need reliable, technical information for decision-making.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={24} className="text-accent" />
                  <h3 className="text-xl font-medium text-foreground">Quality Standards</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  All content is researched, reviewed, and updated by experienced 
                  financial professionals to ensure accuracy and relevance.
                </p>
              </div>
            </div>
          </section>

          {/* Content Areas */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Knowledge Areas</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-medium text-foreground mb-3">Accounting</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Comprehensive coverage of accounting implications for financial activities, 
                  including treasury management, revenue recognition, lease accounting, and tax compliance.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Treasury Management and Cash Flow Optimization</li>
                  <li>Revenue Recognition under ASC 606 and IFRS 15</li>
                  <li>Lease Accounting Standards and Implementation</li>
                  <li>Tax Management and Regulatory Compliance</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-medium text-foreground mb-3">Finance & Markets</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Financial developments, market analysis, and economic indicators that drive 
                  business decisions and impact organizational strategy.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Foreign Exchange Rate Analysis and Risk Management</li>
                  <li>Inflation Trends and Economic Impact Assessment</li>
                  <li>Purchasing Power Indices and Consumer Behavior</li>
                  <li>Market Sentiment Analysis and Business Surveys</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Connect With Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're committed to providing valuable insights and maintaining the highest 
              standards of professional financial knowledge. For questions, suggestions, 
              or collaboration opportunities, we welcome your input.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">Editorial Team</h4>
                <p className="text-muted-foreground">
                  Experienced finance professionals and certified accountants with extensive 
                  industry expertise in technical accounting and financial analysis.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Content Updates</h4>
                <p className="text-muted-foreground">
                  Regular publication schedule with timely updates on regulatory changes, 
                  market developments, and emerging accounting standards.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;