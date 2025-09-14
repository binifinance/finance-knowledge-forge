import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ArticleBlock, type Article } from '@/components/ArticleBlock';
import { ArticleModal } from '@/components/ArticleModal';
import { getArticlesBySection, getRelatedArticles } from '@/data/articles';
import { Search, BookOpen, Calculator, FileText, TrendingUp } from 'lucide-react';

const Accounting = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const accountingArticles = getArticlesBySection('Accounting');
  
  const filteredArticles = accountingArticles.filter(article => {
    return searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  const subcategories = [
    { name: "Treasury Management", icon: TrendingUp, count: 2 },
    { name: "Tax Management", icon: Calculator, count: 0 },
    { name: "Revenue Recognition", icon: FileText, count: 1 },
    { name: "Lease Accounting", icon: BookOpen, count: 1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content Area */}
      <main className="ml-0 lg:ml-[260px] min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="mb-6">
              <nav className="text-sm text-muted-foreground mb-2">
                <span>Home</span> <span className="mx-2">/</span> <span className="text-accent">Accounting</span>
              </nav>
              <h1 className="text-4xl font-bold text-foreground mb-3">Accounting Knowledge</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Comprehensive coverage of accounting implications for financial activities, 
                regulatory compliance, and technical accounting standards that impact business operations.
              </p>
            </div>

            {/* Subcategory Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {subcategories.map((category) => (
                <div
                  key={category.name}
                  className="p-4 bg-muted/20 border border-border rounded-lg hover:border-accent/30 transition-colors duration-150"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon size={20} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {category.count} article{category.count !== 1 ? 's' : ''}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search accounting articles and topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>
        </header>

        {/* Articles Content */}
        <div className="max-w-6xl mx-auto p-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {searchTerm ? 'No articles found' : 'No accounting articles yet'}
              </h3>
              <p className="text-muted-foreground">
                {searchTerm 
                  ? `No accounting articles match "${searchTerm}"`
                  : 'New accounting content will be published regularly.'
                }
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Latest Accounting Articles
                </h2>
                <p className="text-muted-foreground">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                  {searchTerm && ` matching "${searchTerm}"`}
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

export default Accounting;