'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Video } from 'lucide-react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Implement video generation API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setVideoUrl('path_to_generated_video.mp4');
    } catch (error) {
      console.error('Error generating video:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">MovieMe</h1>
        <p className="text-center text-gray-600">
          Transform your ideas into videos using AI
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the video you want to create..."
            className="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <Button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Video...
              </>
            ) : (
              <>
                <Video className="mr-2 h-4 w-4" />
                Generate Video
              </>
            )}
          </Button>
        </form>

        {videoUrl && (
          <div className="rounded-lg border bg-card p-4">
            <video 
              controls 
              className="w-full rounded-lg"
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </main>
  );
}