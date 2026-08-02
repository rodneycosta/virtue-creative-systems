from youtube_transcript_api import YouTubeTranscriptApi

try:
    video_id = "hSe0Z_JrwpA"
    print("Fetching transcript for video:", video_id)
    transcript = YouTubeTranscriptApi.get_transcript(video_id)
    print("\n--- TRANSCRIPT START ---")
    for entry in transcript:
        print(f"[{entry['start']:.2f}s - {entry['duration']:.2f}s]: {entry['text']}")
    print("--- TRANSCRIPT END ---\n")
except Exception as e:
    print("Error fetching transcript:", e)
