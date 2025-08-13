import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-light tracking-wide">FOR KIAN</h1>
            <p className="text-foreground">
              I'm the intuitive, <span className="italic text-accent font-medium">Nucleus</span>-obsessed
              <br />
              killer-generalist you're looking for.
            </p>
          </div>

          {/* Video Player */}
          <div className="space-y-2">
            {/* Test Button */}
            <div className="text-center">
              <button 
                onClick={() => {
                  const video = document.createElement('video');
                  video.src = '/IMG 5159.mp4';
                  video.onloadstart = () => console.log('Test video loading started');
                  video.oncanplay = () => console.log('Test video can play');
                  video.onerror = (e) => console.error('Test video error:', e);
                  video.load();
                }}
                className="text-xs text-accent hover:underline mb-2"
              >
                Test Video Load
              </button>
            </div>
            
            <div className="aspect-video bg-muted rounded-sm overflow-hidden">
            <video
              controls
              className="w-full h-full object-cover"
              preload="metadata"
              onError={(e) => {
                console.error('Video failed to load:', e);
                // Show fallback message
                const videoElement = e.target;
                const fallback = document.createElement('div');
                fallback.className = 'flex items-center justify-center h-full text-center p-4';
                fallback.innerHTML = `
                  <div>
                    <p class="text-sm text-muted-foreground mb-2">Video failed to load</p>
                    <p class="text-xs text-muted-foreground">File: IMG 5159.mp4</p>
                    <p class="text-xs text-muted-foreground">Check console for errors</p>
                  </div>
                `;
                videoElement.parentNode.appendChild(fallback);
                videoElement.style.display = 'none';
              }}
              onLoadStart={() => {
                console.log('Video loading started');
              }}
              onCanPlay={() => {
                console.log('Video can play');
              }}
              onLoadedData={() => {
                console.log('Video data loaded');
              }}
              onLoadedMetadata={() => {
                console.log('Video metadata loaded');
              }}
              onCanPlayThrough={() => {
                console.log('Video can play through');
              }}
            >
              <source src="/IMG 5159.mp4" type="video/mp4" />
              <source src="/IMG 5159.mp4" type="video/mp4; codecs=avc1.42E01E, mp4a.40.2" />
              Your browser does not support the video tag.
            </video>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 text-sm">
            <button 
              onClick={() => window.open('/Rishabh 2025 resume.pdf', '_blank')}
              className="cursor-pointer transition-colors border-b border-transparent hover:text-accent pb-1 underline"
            >
              Resume
            </button>
            <button 
              onClick={() => window.open('/Research Portfolio (3).pdf', '_blank')}
              className="cursor-pointer transition-colors border-b border-transparent hover:text-accent pb-1 underline"
            >
              Past work
            </button>
          </div>

          {/* Signature */}
          <div className="text-center">
            <p className="text-2xl font-light tracking-wide">SINCERELY, RISHABH</p>
          </div>
        </div>

        {/* Easter Egg Link */}
        <div className="absolute bottom-8 right-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/easter-egg")}
            className="text-base font-mono underline hover:bg-transparent hover:text-accent"
          >
            Easter egg
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;