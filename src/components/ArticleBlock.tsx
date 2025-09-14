import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Share, Bookmark, BookmarkCheck, Calendar, User, Tag } from 'lucide-react';

export interface Article {
  id: string;
  section: 'Accounting' | 'Finance';
  title: string;
  author: string;
  date: string;
  tags?: string[];
  body: string;
  excerptLines: string[];
  related?: string[];
}

interface ArticleBlockProps {
  article: Article;
  onReadMore: (article: Article) => void;
  className?: string;
}

export function ArticleBlock({ article, onReadMore, className }: ArticleBlockProps) {
  const [isBookmarked, setIsBookmarked] = useState(() => {
    const bookmarks = JSON.parse(localStorage.getItem('wof-bookmarks') || '[]');
    return bookmarks.includes(article.id);
  });

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('wof-bookmarks') || '[]');
    const updatedBookmarks = isBookmarked
      ? bookmarks.filter((id: string) => id !== article.id)
      : [...bookmarks, article.id];
    
    localStorage.setItem('wof-bookmarks', JSON.stringify(updatedBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerptLines.join(' '),
          url: window.location.href + '#' + article.id,
        });
      } catch (err) {
        // User cancelled sharing or share API not supported
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    const url = window.location.href + '#' + article.id;
    navigator.clipboard.writeText(url).then(() => {
      // Could show toast notification here
      console.log('Link copied to clipboard');
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <article 
      id={article.id}
      className={cn(
        "bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-lg hover:border-accent/30",
        className
      )}
    >
      {/* Article Header */}
      <header className="mb-4">
        <h3 className="text-xl font-semibold text-card-foreground mb-3 leading-tight">
          {article.title}
        </h3>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Tag size={14} />
            <span className="px-2 py-0.5 bg-accent/20 text-accent rounded text-xs font-medium">
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
      </header>

      {/* Article Excerpt */}
      <div className="mb-6">
        <div className="space-y-1 text-card-foreground/90 leading-relaxed">
          {article.excerptLines.map((line, index) => (
            <p key={index} className="text-sm">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Article Controls */}
      <footer className="flex items-center justify-between pt-4 border-t border-border/50">
        <button
          onClick={() => onReadMore(article)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-150 text-sm font-medium"
        >
          <span>Read More</span>
          <ChevronDown size={16} />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-colors duration-150"
            title="Share article"
          >
            <Share size={16} />
          </button>
          
          <button
            onClick={handleBookmark}
            className={cn(
              "p-2 rounded-md transition-colors duration-150",
              isBookmarked
                ? "text-accent bg-accent/10"
                : "text-muted-foreground hover:text-accent hover:bg-accent/10"
            )}
            title={isBookmarked ? "Remove bookmark" : "Bookmark article"}
          >
            {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          </button>
        </div>
      </footer>
    </article>
  );
}