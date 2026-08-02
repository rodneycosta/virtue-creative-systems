import urllib.request
import re
import html
import ssl
import json

url = "https://www.youtube.com/watch?v=hSe0Z_JrwpA"
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
}

ctx = ssl._create_unverified_context()
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, context=ctx) as response:
        content = response.read().decode('utf-8', errors='ignore')
        
    print("Fetched successfully. Content length:", len(content))
    
    # Try to find captionTracks
    match = re.search(r'"captionTracks":\s*(\[.+?\])', content)
    if match:
        caption_tracks = json.loads(match.group(1))
        print("Found caption tracks:")
        for track in caption_tracks:
            print(f"- Language: {track.get('languageCode')}, URL: {track.get('baseUrl')}")
            # Let's fetch the first track (usually English)
            track_url = track.get('baseUrl')
            if track_url:
                if 'fmt=' not in track_url:
                    track_url += '&fmt=srv3'
                print("Fetching URL:", track_url)
                req_track = urllib.request.Request(track_url, headers=headers)
                try:
                    with urllib.request.urlopen(req_track, context=ctx) as track_resp:
                        print("Response Code:", track_resp.getcode())
                        print("Response Headers:", track_resp.info().items())
                        xml_content = track_resp.read().decode('utf-8', errors='ignore')
                        print("Raw caption length:", len(xml_content))
                        print("Raw caption preview:", xml_content[:500])
                        # Extract text between text tags or srv3 elements
                        # In srv3, text is in <p> tags: <p t="0" d="1000">text</p>
                        texts = re.findall(r'<p[^>]*>([^<]*)</p>', xml_content)
                        if not texts:
                            # Try matching <text> tags
                            texts = re.findall(r'<text[^>]*>([^<]*)</text>', xml_content)
                        decoded_texts = [html.unescape(t) for t in texts if t.strip()]
                        print("\n--- TRANSCRIPT START ---")
                        print("\n".join(decoded_texts[:100]))  # Print first 100 lines
                        print("--- TRANSCRIPT END ---\n")
                except Exception as ex:
                    print("Error fetching track:", ex)
                break
    else:
        print("Caption tracks not found in HTML.")
except Exception as e:
    print("Error:", e)
