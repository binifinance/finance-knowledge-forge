import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { X, Calendar, User, Tag, Share, Bookmark, BookmarkCheck } from 'lucide-react';
import type { Article } from './ArticleBlock';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  relatedArticles?: Article[];
}

export function ArticleModal({ article, onClose, relatedArticles = [] }: ArticleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!article) return;

    // Focus trap
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    // Focus the close button initially
    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [article, onClose]);

  if (!article) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.body.substring(0, 200) + '...',
          url: window.location.href + '#' + article.id,
        });
      } catch (err) {
        // User cancelled or share not supported
        const url = window.location.href + '#' + article.id;
        navigator.clipboard.writeText(url);
      }
    }
  };

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('wof-bookmarks') || '[]');
    const isBookmarked = bookmarks.includes(article.id);
    const updatedBookmarks = isBookmarked
      ? bookmarks.filter((id: string) => id !== article.id)
      : [...bookmarks, article.id];
    
    localStorage.setItem('wof-bookmarks', JSON.stringify(updatedBookmarks));
    // Force re-render by triggering a custom event
    window.dispatchEvent(new CustomEvent('bookmarkChanged'));
  };

  const isBookmarked = () => {
    const bookmarks = JSON.parse(localStorage.getItem('wof-bookmarks') || '[]');
    return bookmarks.includes(article.id);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/95 backdrop-blur-sm p-4 lg:p-8"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-lg shadow-[var(--shadow-modal)] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        {/* Modal Header */}
        <header className="flex items-start justify-between p-6 border-b border-border bg-card sticky top-0 z-10">
          <div className="flex-1 pr-4">
            <h1 id="modal-title" className="text-2xl font-bold text-card-foreground mb-3 leading-tight">
              {article.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Tag size={14} />
                <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium">
                  {article.section}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{article.author}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors duration-150"
              title="Share article"
            >
              <Share size={18} />
            </button>
            
            <button
              onClick={handleBookmark}
              className={cn(
                "p-2 rounded-md transition-colors duration-150",
                isBookmarked()
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-accent hover:bg-accent/10"
              )}
              title={isBookmarked() ? "Remove bookmark" : "Bookmark article"}
            >
              {isBookmarked() ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            </button>

            <button
              ref={firstFocusableRef}
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors duration-150 ml-2"
              title="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-8">
            <div className="text-card-foreground leading-relaxed space-y-4">
              {article.body.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">
                Related Articles
              </h3>
              <div className="grid gap-3">
                {relatedArticles.slice(0, 3).map((relatedArticle) => (
                  <button
                    key={relatedArticle.id}
                    className="text-left p-3 bg-muted/20 hover:bg-muted/30 rounded-md border border-border/50 hover:border-accent/30 transition-all duration-150"
                    onClick={() => {
                      // This would open the related article
                      console.log('Open related article:', relatedArticle.id);
                    }}
                  >
                    <div className="text-sm font-medium text-card-foreground">
                      {relatedArticle.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {relatedArticle.section} • {formatDate(relatedArticle.date)}
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}