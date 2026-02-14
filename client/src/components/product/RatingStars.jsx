import { Star } from 'lucide-react';

const RatingStars = ({ rating = 0, size = 'md', showValue = false, reviewCount }) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={`${sizes[size]} fill-subtle-gold text-subtle-gold`}
          />
        ))}
        
        {/* Half Star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className={`${sizes[size]} text-gray-300`} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={`${sizes[size]} fill-subtle-gold text-subtle-gold`} />
            </div>
          </div>
        )}
        
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={`${sizes[size]} text-gray-300`}
          />
        ))}
      </div>
      
      {showValue && (
        <span className="ml-2 text-sm font-medium text-deep-charcoal dark:text-soft-ivory">
          {rating.toFixed(1)}
          {reviewCount !== undefined && (
            <span className="text-muted-walnut ml-1">({reviewCount})</span>
          )}
        </span>
      )}
    </div>
  );
};

export default RatingStars;