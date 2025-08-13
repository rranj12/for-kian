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
            <h1 className="text-[26px] font-medium tracking-wide">FOR KIAN</h1>
            <p className="text-foreground text-[20px] leading-[105%]">
              I'm the intuitive,{" "}
              <span className="italic text-accent font-medium">Nucleus</span>
              -obsessed
              <br />
              killer-generalist you're looking for.
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="aspect-video bg-muted rounded-sm overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/_PdX4dMLFns"
              title="Portfolio Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 text-[20px]">
            <button
              onClick={() => window.open("/Rishabh 2025 resume.pdf", "_blank")}
              className="cursor-pointer transition-colors border-b border-transparent hover:text-accent pb-1 underline"
            >
              Resume
            </button>
            <button
              onClick={() =>
                window.open("/Research Portfolio (3).pdf", "_blank")
              }
              className="cursor-pointer transition-colors border-b border-transparent hover:text-accent pb-1 underline"
            >
              Past work
            </button>
          </div>

          {/* Signature */}
          <div className="text-center">
            <p className="text-[26px] font-medium tracking-wide">
              FROM RISHABH
            </p>
          </div>
        </div>

        {/* Easter Egg Link */}
        <div className="absolute bottom-8 right-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/easter-egg")}
            className="text-[20px] font-light underline hover:bg-transparent hover:text-accent"
          >
            Easter egg
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
