import { Card, CardContent } from "./ui/card";
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { useState, useEffect } from "react";

// Twitter/X logo component
const TwitterXIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface TwitterTestimonial {
  name: string;
  username: string;
  verified?: boolean;
  profileImage: string;
  text: string;
  timestamp: string;
  likes?: number;
  retweets?: number;
  tweetUrl?: string;
}

export function Testimonials() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const testimonials: TwitterTestimonial[] = [
    {
      name: "Raj Kumar",
      username: "raj_kumar",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      text: "I needed money urgently for my daughter's wedding. Got ₹2 lakh loan in just 30 minutes. Very easy process.",
      timestamp: "2023-10-01T14:48:00Z",
      likes: 150,
      retweets: 50,
      tweetUrl: "https://twitter.com/raj_kumar/status/1234567890"
    },
    {
      name: "Sunita Devi",
      username: "sunita_devi",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=face",
      text: "Even though I didn't have a bank account, I got the loan. Staff was very helpful and my gold was kept safe.",
      timestamp: "2023-09-25T09:30:00Z",
      likes: 200,
      retweets: 30,
      tweetUrl: "https://twitter.com/sunita_devi/status/1234567891"
    },
    {
      name: "Amit Sharma",
      username: "amit_sharma",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      text: "Suddenly needed money for business. Other banks had too much hassle, here everything was very easy. Got low interest rate too.",
      timestamp: "2023-09-15T16:45:00Z",
      likes: 180,
      retweets: 40,
      tweetUrl: "https://twitter.com/amit_sharma/status/1234567892"
    },
    {
      name: "Priya Patel",
      username: "priya_patel",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      text: "Wanted to renovate the house. Got good value for my gold and EMI was also set according to my budget. Very happy.",
      timestamp: "2023-09-10T11:00:00Z",
      likes: 170,
      retweets: 35,
      tweetUrl: "https://twitter.com/priya_patel/status/1234567893"
    },
    {
      name: "Ramesh Gupta",
      username: "ramesh_gupta",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      text: "Needed money immediately for medical emergency. Office was open till 10 PM. Really good customer service.",
      timestamp: "2023-08-30T18:20:00Z",
      likes: 160,
      retweets: 25,
      tweetUrl: "https://twitter.com/ramesh_gupta/status/1234567894"
    },
    {
      name: "Asha Singh",
      username: "asha_singh",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
      text: "First time taking gold loan, was a bit scared. But everything was very clear, no hidden fees. Would recommend.",
      timestamp: "2023-08-20T13:50:00Z",
      likes: 155,
      retweets: 20,
      tweetUrl: "https://twitter.com/asha_singh/status/1234567895"
    },
    {
      name: "Krishnan Nair",
      username: "krishnan_nair",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=80&h=80&fit=crop&crop=face",
      text: "My son's education fees were due urgently. Got ₹3.5 lakh loan within 2 hours. Digital process made it so convenient.",
      timestamp: "2023-08-15T08:10:00Z",
      likes: 145,
      retweets: 15,
      tweetUrl: "https://twitter.com/krishnan_nair/status/1234567896"
    },
    {
      name: "Meera Joshi",
      username: "meera_joshi",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      text: "Needed funds for my startup. The flexible repayment options helped me manage cash flow perfectly. Excellent service.",
      timestamp: "2023-08-10T14:30:00Z",
      likes: 140,
      retweets: 10,
      tweetUrl: "https://twitter.com/meera_joshi/status/1234567897"
    },
    {
      name: "Balwinder Singh",
      username: "balwinder_singh",
      verified: true,
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
      text: "During harvest season, needed quick money for workers' payment. Same day loan approval saved my crop. Thank you!",
      timestamp: "2023-07-30T10:00:00Z",
      likes: 135,
      retweets: 5,
      tweetUrl: "https://twitter.com/balwinder_singh/status/1234567898"
    },
    {
      name: "Lakshmi Reddy",
      username: "lakshmi_reddy",
      verified: false,
      profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
      text: "Grandmother's gold got me through medical expenses during COVID. Staff was understanding and helped with documentation.",
      timestamp: "2023-07-25T15:45:00Z",
      likes: 130,
      retweets: 0,
      tweetUrl: "https://twitter.com/lakshmi_reddy/status/1234567899"
    }
  ];

  // Update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (typeof window === 'undefined') return;
      
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);
  
  // Reset slide when slidesPerView changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [slidesPerView]);
  
  // Calculate total pages (complete sets of testimonials)
  const totalPages = Math.ceil(testimonials.length / slidesPerView);
  const maxSlides = Math.max(0, totalPages - 1);
  
  const nextSlide = () => {
    handleUserInteraction();
    setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1);
  };
  
  const prevSlide = () => {
    handleUserInteraction();
    setCurrentSlide(prev => prev <= 0 ? maxSlides : prev - 1);
  };

  // Get testimonials for current page
  const getCurrentPageTestimonials = () => {
    const startIndex = currentSlide * slidesPerView;
    const endIndex = Math.min(startIndex + slidesPerView, testimonials.length);
    return testimonials.slice(startIndex, endIndex);
  };

  // Calculate testimonials display info
  const getPageInfo = () => {
    const startIndex = currentSlide * slidesPerView + 1;
    const endIndex = Math.min((currentSlide + 1) * slidesPerView, testimonials.length);
    return { startIndex, endIndex, total: testimonials.length };
  };
  
  const goToSlide = (index: number) => {
    handleUserInteraction();
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (totalPages <= 1) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextSlide();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(maxSlides);
          break;
      }
    };

    const carouselElement = document.getElementById('testimonials-carousel');
    if (carouselElement) {
      carouselElement.addEventListener('keydown', handleKeyDown);
      return () => carouselElement.removeEventListener('keydown', handleKeyDown);
    }
  }, [totalPages, maxSlides]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused || totalPages <= 1) return;

    const autoPlayInterval = setInterval(() => {
      setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoPlayInterval);
  }, [isAutoPlaying, isPaused, maxSlides, totalPages]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsPaused(true);
    // Resume after 10 seconds of no interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="testimonials" className="section-padding-large bg-white relative overflow-hidden">
      {/* Background Elements */}



      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-full mb-6 relative overflow-hidden">
            <div className="absolute inset-0 gradient-shimmer-gold opacity-30"></div>
            <Sparkles className="w-4 h-4 mr-2 relative z-10" />
            <span className="text-sm font-medium relative z-10">Customer Stories</span>
          </div>
          

          
          <p className="lead text-[16px]">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Custom Carousel Container */}
        <div 
          id="testimonials-carousel"
          className="relative mb-16 focus:outline-none"
          tabIndex={0}
          role="region"
          aria-label={`Customer testimonials carousel. Page ${currentSlide + 1} of ${totalPages}. Use arrow keys to navigate.`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Page Info Display */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-muted-foreground">
                Showing {getPageInfo().startIndex}-{getPageInfo().endIndex} of {getPageInfo().total} stories
              </div>
              <div className="text-sm font-medium">
                Page {currentSlide + 1} of {totalPages}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  title={`Previous page (${currentSlide} of ${totalPages})`}
                  aria-label={`Go to page ${currentSlide} of ${totalPages}`}
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === maxSlides}
                  className="w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  title={`Next page (${currentSlide + 2} of ${totalPages})`}
                  aria-label={`Go to page ${currentSlide + 2} of ${totalPages}`}
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </>
          )}

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalPages * 100}%`
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div 
                  key={pageIndex}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {testimonials
                    .slice(pageIndex * slidesPerView, (pageIndex + 1) * slidesPerView)
                    .map((testimonial, index) => (
                    <div 
                      key={pageIndex * slidesPerView + index} 
                      className="w-full transform transition-all duration-300 hover:scale-[1.02]"
                    >
                      {/* Twitter/X Card Style */}
                      <div className="bg-white border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl relative overflow-hidden group h-full transition-all duration-300">
                        <div className="flex flex-col h-full">
                          {/* Header with profile */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <ImageWithFallback
                                src={testimonial.profileImage}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-border/50"
                              />
                              <div>
                                <div className="flex items-center space-x-1">
                                  <span className="font-semibold">{testimonial.name}</span>
                                  {testimonial.verified && (
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/>
                                    </svg>
                                  )}
                                </div>
                                <div className="text-sm text-muted-foreground">@{testimonial.username}</div>
                              </div>
                            </div>
                            <TwitterXIcon className="w-5 h-5 text-muted-foreground" />
                          </div>

                          {/* Tweet Text */}
                          <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                            {testimonial.text}
                          </p>

                          {/* Tweet Timestamp */}
                          <div className="text-sm text-muted-foreground mb-3">
                            {new Date(testimonial.timestamp).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </div>

                          {/* Engagement Stats */}
                          {(testimonial.likes || testimonial.retweets) && (
                            <div className="flex items-center space-x-4 pt-3 border-t border-border text-sm text-muted-foreground">
                              {testimonial.retweets !== undefined && testimonial.retweets > 0 && (
                                <div className="flex items-center space-x-1">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                  </svg>
                                  <span>{testimonial.retweets}</span>
                                </div>
                              )}
                              {testimonial.likes !== undefined && testimonial.likes > 0 && (
                                <div className="flex items-center space-x-1">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                  <span>{testimonial.likes}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* View on Twitter Link */}
                          {testimonial.tweetUrl && (
                            <a 
                              href={testimonial.tweetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 text-sm text-blue-500 hover:underline flex items-center space-x-1"
                            >
                              <span>View on X</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const testimonialsInPage = Math.min(
                    slidesPerView, 
                    testimonials.length - (index * slidesPerView)
                  );
                  return (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative transition-all duration-200 ${
                        currentSlide === index 
                          ? 'w-8 h-2 bg-foreground rounded-full' 
                          : 'w-2 h-2 bg-border hover:bg-foreground/50 rounded-full'
                      }`}
                      title={`Page ${index + 1} (${testimonialsInPage} testimonial${testimonialsInPage > 1 ? 's' : ''})`}
                      aria-label={`Go to page ${index + 1} showing ${testimonialsInPage} testimonials`}
                    />
                  );
                })}
              </div>
              {/* Optional: Quick jump controls for large carousels */}
              {totalPages > 3 && (
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <button
                    onClick={() => goToSlide(0)}
                    className="px-2 py-1 hover:bg-muted rounded transition-colors"
                    disabled={currentSlide === 0}
                  >
                    First
                  </button>
                  <button
                    onClick={() => goToSlide(maxSlides)}
                    className="px-2 py-1 hover:bg-muted rounded transition-colors"
                    disabled={currentSlide === maxSlides}
                  >
                    Last
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rating Summary */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-6 bg-white border border-border rounded-3xl p-8 shadow-lg">
            <div className="text-5xl font-bold gradient-text-fast">4.8/5</div>
            <div className="text-left">
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{t('testimonials.rating')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}