import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X, VolumeX, Volume2 } from 'lucide-react';
import de1 from '../Images/degal1.png';
import de2 from '../Images/degal2.png';
import de3 from '../Images/degal3.png';

import wie1 from '../Images/wie1.jpg';
import wie2 from '../Images/WIE2.png';

import spark1 from '../Images/spark1.png';
import spark2 from '../Images/spark2.jpg';
import spark4 from '../Images/spark4.jpg';
import spark5 from '../Images/spark5.jpg';


import ot1 from '../Images/ot1.png';
import ot2 from '../Images/ot2.png';
import ot3 from '../Images/ot3.png';
import ot4 from '../Images/ot4.png';
import ot5 from '../Images/ot5.png';
import ot6 from '../Images/ot6.png';
import ot7 from '../Images/ot7.png';
import ot8 from '../Images/ot8.png';
import ot9 from '../Images/ot9.png';






function Design() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [overlayProject, setOverlayProject] = useState(null);
  const [overlayMediaIndex, setOverlayMediaIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Enhanced design projects with video content
  const designProjects = [
    {
      id: 'design1',
      title: 'D-egal (Digital legal) Mobile App Design',
      category: 'UI/UX Design',
      images: [
        de1,
        de2,
        de3
      ],
      media: [
        { 
          type: 'image', 
          url: de1,
          thumbnail: de1
        },
        { 
          type: 'image', 
          url: de2,
          thumbnail: de2
        },
        { 
          type: 'image', 
          url: de3,
          thumbnail: de3
        }
        // { 
        //   type: 'video', 
        //   url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        //   thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=120&h=80&fit=crop'
        // },
        
      ],
      highlights: [
        'Law focussed and intuitive user interface design',
        'Main features in the navigation tab for optimized user flow',
        'Implemented Features as per our robust research',
        'Recieved Praises by multiple Legal experts'
      ],
      documentation: {
        intuition: [
          'Created a user-centric design approach focusing on seamless shopping experience',
          'Prioritized visual hierarchy to guide users through the purchase funnel',
          'Implemented familiar e-commerce patterns while adding unique brand elements',
          'Focused on reducing cognitive load through clean, minimalist interface design'
        ],
        reasoning: [
          'Conducted extensive user research to understand shopping behaviors and pain points',
          'Analyzed competitor apps to identify gaps and opportunities for differentiation',
          'Applied design principles of consistency, feedback, and error prevention',
          'Utilized color psychology to enhance user engagement and trust',
          'Implemented progressive disclosure to present information at the right time'
        ],
        research: [
          'Performed user interviews with 25+ participants across different demographics',
          'Analyzed heat maps and user flow data from existing e-commerce platforms',
          'Conducted A/B testing on key interface elements and interactions',
          'Studied accessibility guidelines and implemented WCAG 2.1 compliance',
          'Researched mobile-first design patterns and touch interaction principles'
        ]
      }
    },
    {
      id: 'design2',
      title: 'IEEE-WIE Design Head',
      category: 'Design',
      images: [
        wie1,wie2
      ],
      media: [
        { 
          type: 'image', 
          url: wie1,
          thumbnail: wie1
        },
        { 
          type: 'image', 
          url: wie2,
          thumbnail: wie2
        }
        // { 
        //   type: 'video', 
        //   url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        //   thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=120&h=80&fit=crop'
        // }
      ],
      highlights: [
        'Gave them thier uniqe Identity by creating a logo as per the IEEE-WIE guidelines',
        'Created 50+ Designs',
        'Rewarded as the best team of that tenure',
        'Helped in Creating UI of their website'
      ],
      documentation: {
        intuition: [
          'Designed for data-driven professionals who need quick insights',
          'Emphasized visual clarity and information hierarchy',
          'Created modular components for flexible dashboard customization',
          'Focused on reducing time-to-insight through intuitive data presentation'
        ],
        reasoning: [
          'Applied data visualization best practices for maximum comprehension',
          'Implemented responsive grid system for various screen sizes',
          'Used consistent color coding and iconography across all components',
          'Prioritized performance optimization for real-time data updates',
          'Created scalable design system for future feature expansion'
        ],
        research: [
          'Studied user behavior patterns in business intelligence tools',
          'Analyzed successful dashboard designs across different industries',
          'Conducted usability testing with target user groups',
          'Researched accessibility standards for data visualization',
          'Evaluated performance metrics and loading time optimization'
        ]
      }
    },
    {
      id: 'design3',
      title: 'Spark E-cell Social Media Head',
      category: 'Design',
      images: [
        spark5,
        spark1,
        spark2,
        spark4
      ],
      media: [
        { 
          type: 'image', 
          url: spark1,
          thumbnail: spark1
        },{ 
          type: 'image', 
          url: spark2,
          thumbnail: spark2
        },{ 
          type: 'image', 
          url: spark4,
          thumbnail: spark4
        },{ 
          type: 'image', 
          url: spark5,
          thumbnail: spark5
        },
        // { 
        //   type: 'video', 
        //   url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        //   thumbnail: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=120&h=80&fit=crop'
        // }
      ],
      highlights: [
        'Designed various Social Media Posts and Stories by keeping in mind their style guides',
        'Shot and Edited Various videos and reels during this tenure.',
        'Played a key role in completion of Flag ship event "BENNOVATE"',
        'Followers count increased from 500 to 1500 during my tenure',
      ],
      documentation: {
        intuition: [
          'Created a memorable brand that resonates with target audience',
          'Developed visual identity that communicates brand values effectively',
          'Ensured scalability across all brand touchpoints and media',
          'Balanced modern aesthetics with timeless design principles'
        ],
        reasoning: [
          'Conducted thorough brand positioning and competitive analysis',
          'Applied color psychology and typography principles strategically',
          'Designed for versatility across digital and print applications',
          'Created cohesive visual language that supports brand messaging',
          'Implemented systematic approach to brand asset creation'
        ],
        research: [
          'Analyzed target market preferences and cultural considerations',
          'Studied successful brand identities in similar industries',
          'Conducted brand perception surveys and focus groups',
          'Researched trademark and legal considerations for logo design',
          'Evaluated brand performance metrics and recognition studies'
        ]
      }
    },
    {
      id: 'design4',
      title: 'Other Misc. Stuff',
      category: 'Design',
      images: [
        ot1,
        ot2,
        ot3,
        ot4,
        ot5,
        ot6,
        ot7,
        ot8,
        ot9
      ],
      media: [
        { 
          type: 'image', 
          url: ot1,
          thumbnail: ot1
        },{ 
          type: 'image', 
          url: ot2,
          thumbnail: ot2
        },{ 
          type: 'image', 
          url: ot3,
          thumbnail: ot3
        },{ 
          type: 'image', 
          url: ot4,
          thumbnail: ot4
        },{ 
          type: 'image', 
          url: ot5,
          thumbnail: ot5
        },{ 
          type: 'image', 
          url: ot6,
          thumbnail: ot6
        },{ 
          type: 'image', 
          url: ot7,
          thumbnail: ot7
        },{ 
          type: 'image', 
          url: ot8,
          thumbnail: ot8
        },{ 
          type: 'image', 
          url: ot9,
          thumbnail: ot9
        }
        // { 
        //   type: 'video', 
        //   url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        //   thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=120&h=80&fit=crop'
        // },
      ],
      highlights: [
        'Made a few Sketches during Covid pandemic',
        'Love creating designs when I\'m bored',
        'Curated and designed a lot of templates, posts and reels for various social media accounts',
        'Designed Logos for 5+ Businesses and brands',
      ],
      documentation: {
        intuition: [
          'Designed to trigger appetite and encourage food ordering',
          'Created seamless user journey from discovery to delivery',
          'Emphasized visual appeal through high-quality food imagery',
          'Focused on reducing friction in the ordering process'
        ],
        reasoning: [
          'Applied food photography best practices for maximum appeal',
          'Implemented GPS-based restaurant recommendations',
          'Created clear information hierarchy for menu navigation',
          'Designed intuitive cart and checkout experience',
          'Integrated social proof elements to build trust'
        ],
        research: [
          'Analyzed user behavior patterns in food delivery apps',
          'Studied successful food delivery platforms worldwide',
          'Conducted user testing on ordering flow and navigation',
          'Researched local food preferences and cultural considerations',
          'Evaluated payment security and user trust factors'
        ]
      }
    }
  ];

  const nextImage = (projectId) => {
    const project = designProjects.find(p => p.id === projectId);
    const currentIndex = currentImageIndex[projectId] || 0;
    const nextIndex = (currentIndex + 1) % project.images.length;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: nextIndex
    }));
  };

  const prevImage = (projectId) => {
    const project = designProjects.find(p => p.id === projectId);
    const currentIndex = currentImageIndex[projectId] || 0;
    const prevIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: prevIndex
    }));
  };

  const goToImage = (projectId, imageIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: imageIndex
    }));
  };

  const openProjectDetails = (project) => {
    setOverlayProject(project);
    setOverlayMediaIndex(0);
    setIsMuted(true);
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setOverlayProject(null);
    setOverlayMediaIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = () => {
    if (overlayProject) {
      setOverlayMediaIndex(prev => 
        prev === overlayProject.media.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevMedia = () => {
    if (overlayProject) {
      setOverlayMediaIndex(prev => 
        prev === 0 ? overlayProject.media.length - 1 : prev - 1
      );
    }
  };

  const goToMedia = (index) => {
    setOverlayMediaIndex(index);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && overlayProject) {
        closeOverlay();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [overlayProject]);

  return (
    <div className="design">
      {/* Header */}
      <div className="design-header">
        <h1>Design &nbsp; ̶P̶o̶r̶t̶f̶o̶l̶i̶o̶ &nbsp; Journey</h1>
      </div>

      {/* Introduction */}
      <div className="design-intro">
        <p>
          Designing is something I love, it's like my ESCAPE ZONE and here I'm Documenting my design journey
        </p>
        
        <div className="achievements-highlight">
          <h3>When I was a kid (Before 2022) :</h3>
          <ul>
            <li>Won drawing and handwriting competitions in Class 3 – early signs of creativity.</li>
            <li>Became Chief Editor of class magazine in Class 4.</li>
            <li>BREAKTHROUGH MOMENT 1: During class 12th when everyone was building simple Python CLI Project, I made amazing CLI UI using Colorama and ASCII art – still used as a model Project to the juniors.</li>
          </ul>

          <h3>Early Explorer (Before 2025) :</h3>
          <ul>
            <li>Designed and managed 2–3 Instagram theme pages; learned Canva and design basics.</li>
            <li>Design Head at IEEE WIE – team work praised by peers and seniors alike.</li>
            <li>Ranked 36/380+ teams in SIH solely because of prototype quality and research depth.</li>
            <li>Conducted UX surveys and built the frontend for project UniVerse.</li>
            <li>Social Media Head at SPARK E-Cell – led a new team to successful campaigns.</li>
          </ul>

          <h3>UI/UX as a career? (June 2025 onwards) :</h3>
          <ul>
            <li>Applying for Juspay PE-Intern role made me realize I could combine logic and creativity and make career out of it – my "IKIGAI".</li>
            <li>Explored Figma deeply and completed multiple UI/UX-focused courses.</li>
          </ul>

        </div>
      </div>

      {/* Projects Grid */}
      <div className="design-projects">
        {designProjects.map((project, index) => {
          const currentIndex = currentImageIndex[project.id] || 0;
          return (
            <div key={project.id} className="design-project-tile">
              <div className="project-content">
                {/* Image Carousel */}
                <div className="project-carousel">
                  <div className="carousel-container">
                    <img 
                      src={project.images[currentIndex]} 
                      alt={`${project.title} - Image ${currentIndex + 1}`}
                      className="carousel-image"
                    />
                  </div>
                  
                  {project.images.length > 1 && (
                    <div className="carousel-controls">
                      <button 
                        className="carousel-btn"
                        onClick={() => prevImage(project.id)}
                      >
                        <ChevronLeft size={16} />
                      </button>
                      
                      <div className="carousel-indicators">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToImage(project.id, index)}
                          />
                        ))}
                      </div>
                      
                      <button 
                        className="carousel-btn"
                        onClick={() => nextImage(project.id)}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                  
                  <button 
                    className="carousel-view-details"
                    onClick={() => openProjectDetails(project)}
                  >
                    <ExternalLink size={16} />
                    View Details
                  </button>
                </div>
                
                {/* Project Details */}
                <div className="project-details">
                  <div className="project-category">
                    {project.category}
                  </div>
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  
                  <div className="project-highlights">
                    <h4>Key Highlights:</h4>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Overlay */}
      {overlayProject && (
        <div className={`overlay ${overlayProject ? 'active' : ''}`}>
          {/* Backdrop */}
          <div 
            className="overlay-backdrop"
            onClick={closeOverlay}
          ></div>
          
          {/* Close Button */}
          <button 
            className="overlay-close"
            onClick={closeOverlay}
          >
            <X size={24} />
          </button>
          
          {/* Content */}
          <div className="overlay-content">
            {/* Header */}
            <div className="overlay-header">
              <h2>{overlayProject.title}</h2>
              <div className="overlay-category">
                {overlayProject.category}
              </div>
            </div>
            
            {/* Enhanced Media Viewer */}
            <div className="media-viewer">
              <div className="media-container">
                <div className="media-display">
                  {/* Previous Button - Overlay on Media Display */}
                  <button 
                    className="media-nav-btn media-nav-prev"
                    onClick={prevMedia}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  {/* Next Button - Overlay on Media Display */}
                  <button 
                    className="media-nav-btn media-nav-next"
                    onClick={nextMedia}
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="media-display-inner">
                    {overlayProject.media[overlayMediaIndex].type === 'image' ? (
                      <img 
                        src={overlayProject.media[overlayMediaIndex].url}
                        alt={`${overlayProject.title} - Media ${overlayMediaIndex + 1}`}
                        className="media-content"
                      />
                    ) : (
                      <div className="video-container">
                        <video 
                          ref={videoRef}
                          src={overlayProject.media[overlayMediaIndex].url}
                          controls
                          muted={isMuted}
                          autoPlay={false}
                          className="media-content"
                        />
                        <button 
                          className="mute-btn"
                          onClick={toggleMute}
                        >
                          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Simplified Media Controls - Only Thumbnails */}
                <div className="media-controls-wrapper">
                  <div className="media-thumbnails">
                    {overlayProject.media.map((media, index) => (
                      <div 
                        key={index}
                        className={`media-thumbnail-wrapper ${index === overlayMediaIndex ? 'active' : ''}`}
                        onClick={() => goToMedia(index)}
                      >
                        <img
                          src={media.thumbnail}
                          alt={`Thumbnail ${index + 1}`}
                          className="media-thumbnail"
                        />
                        {media.type === 'video' && (
                          <div className="video-indicator">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Documentation */}
            <div className="project-documentation">

              <h3>Documentation and reasoning under construction , possible update date : 30th july </h3>
              <h3>Also more Proof of work will be added in the format of pics, video, Links</h3>
              
              
              
              
              
              
              
              
              {/* <div className="doc-section">
                <h3>Intuition</h3>
                <ul>
                  {overlayProject.documentation.intuition.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div> */}
              
              {/* <div className="doc-section">
                <h3>Reasoning</h3>
                <ul>
                  {overlayProject.documentation.reasoning.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div> */}
              
              {/* <div className="doc-section">
                <h3>Research</h3>
                <ul>
                  {overlayProject.documentation.research.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Design;
