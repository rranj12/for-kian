import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const EasterEgg = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Fixed start times for the counters
  const startTime1 = new Date('2025-08-12T23:12:00');
  const startTime2 = new Date('2025-08-12T23:12:00');
  const endTime2 = new Date('2025-08-13T04:39:00');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeDifference = (start: Date, end?: Date) => {
    const endTime = end || currentTime;
    const diffMs = endTime.getTime() - start.getTime();
    return Math.floor(diffMs / 1000);
  };

  const elapsed1 = getTimeDifference(startTime1);
  const elapsed2 = getTimeDifference(startTime2, endTime2);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Back to Home Button */}
      <div className="absolute top-8 left-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="text-base font-mono underline hover:bg-transparent hover:text-accent"
        >
          Back to home
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-8 lg:p-16">
        <div className="max-w-6xl w-full flex gap-16">
          {/* Left Side - Timers */}
          <div className="flex-1 space-y-12 ml-16">
          
          {/* First Timer */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-muted-foreground tracking-wide">
              TIME ELAPSED SINCE 08/12/25<br />
              11:12 PM PST:
            </div>
            <div className="text-6xl font-mono font-light tracking-wider">
              {formatTime(elapsed1)}
            </div>
          </div>

          {/* Second Timer */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-muted-foreground tracking-wide">
              TIME ELAPSED FROM 08/12/25<br />
              11:12 PM PST TO 08/13/25<br />
              04:39 AM PST
            </div>
            <div className="text-6xl font-mono font-light tracking-wider">
              {formatTime(elapsed2)}
            </div>
          </div>

          
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src="/easter-egg-image.jpg"
              alt="Easter Egg Image"
              className="max-w-sm h-auto rounded-lg shadow-lg border border-border"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;