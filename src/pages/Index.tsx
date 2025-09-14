import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ArticleBlock, type Article } from '@/components/ArticleBlock';
import { ArticleModal } from '@/components/ArticleModal';
import { sampleArticles, getRelatedArticles } from '@/data/articles';
import { Search, Filter } from 'lucide-react';

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSection, setFilterSection] = useState<'All' | 'Accounting' | 'Finance'>('All');

  const filteredArticles = sampleArticles.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filterSection === 'All' || article.section === filterSection;
    
    return matchesSearch && matchesFilter;
  });

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content Area */}
      <main className="ml-0 lg:ml-[260px] min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-20">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-foreground">World of Finance</h1>
              <p className="text-muted-foreground mt-1">
                Complete knowledge hub covering accounting implications and financial developments
              </p>
            </div>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <select
                  value={filterSection}
                  onChange={(e) => setFilterSection(e.target.value as 'All' | 'Accounting' | 'Finance')}
                  className="pl-10 pr-8 py-2.5 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="All">All Sections</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        {/* Articles Content */}
        <div className="max-w-6xl mx-auto p-6 text-gray-900" style={{ background: 'radial-gradient(ellipse at center, white 40%, #0B2545 100%)' }}>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                  {searchTerm && ` for "${searchTerm}"`}
                  {filterSection !== 'All' && ` in ${filterSection}`}
                </p>
              </div>
              
              <div className="grid gap-6">
                {filteredArticles.map((article) => (
                  <ArticleBlock
                    key={article.id}
                    article={article}
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-card mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">World of Finance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional knowledge hub providing comprehensive coverage of accounting implications 
                  and financial developments that impact modern business operations.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Knowledge Areas</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Treasury Management</li>
                  <li>Revenue Recognition</li>
                  <li>FX & Currency Risk</li>
                  <li>Inflation Analysis</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Technical Accounting Guides</li>
                  <li>Market Analysis Reports</li>
                  <li>Economic Indicators</li>
                  <li>Regulatory Updates</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 World of Finance. Professional financial knowledge and insights.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Article Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={handleCloseModal}
        relatedArticles={selectedArticle ? getRelatedArticles(selectedArticle) : []}
      />
    </div>
  );
};

export default Index;
