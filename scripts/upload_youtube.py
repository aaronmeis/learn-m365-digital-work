"""Upload the deep-dive cut and six shorts as unlisted YouTube videos.

Reuses the Learn AI Law YouTube token already on this machine. Writes IDs to
youtube-ids.json (gitignored). Does not print the token.
"""
import json
import os
import sys
from pathlib import Path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload

ROOT = Path(__file__).resolve().parent.parent
TOKEN = Path(os.environ["LOCALAPPDATA"]) / "learn-ai-law-youtube" / "token.json"
SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]
OUT = ROOT / "youtube-ids.json"

DISCLOSURE = (
    "Study clip for the Learn Microsoft's Digital-Work Platform console. "
    "Educational material. Unlisted: not searchable, reachable only by link."
)

ITEMS = [
    ("deep-dive-cut", "Microsoft's Digital-Work Platform — deep dive", ROOT / "media" / "deep-dive-cut.mp4"),
    ("01-boundary", "Where the digital-work platform boundary sits", ROOT / "media" / "shorts" / "01-boundary.mp4"),
    ("02-synced-index", "How synced connectors index knowledge", ROOT / "media" / "shorts" / "02-synced-index.mp4"),
    ("03-live-fetch", "How federated connectors fetch live", ROOT / "media" / "shorts" / "03-live-fetch.mp4"),
    ("04-federated-protect", "How federated connectors protect data", ROOT / "media" / "shorts" / "04-federated-protect.mp4"),
    ("05-oversharing", "How Copilot stops data oversharing", ROOT / "media" / "shorts" / "05-oversharing.mp4"),
    ("06-sync-overshare", "How a bad sync overshares", ROOT / "media" / "shorts" / "06-sync-overshare.mp4"),
]


def creds():
    if not TOKEN.exists():
        sys.exit(f"No YouTube token at {TOKEN}. Run the Learn AI Law uploader --auth first.")
    c = Credentials.from_authorized_user_file(str(TOKEN), SCOPES)
    if c.expired and c.refresh_token:
        c.refresh(Request())
        TOKEN.write_text(c.to_json(), encoding="utf-8")
    if not c.valid:
        sys.exit("YouTube token is not valid.")
    return c


def main():
    ids = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}
    youtube = build("youtube", "v3", credentials=creds())
    for key, title, path in ITEMS:
        if ids.get(key):
            print(f"skip  {key}  {ids[key]}")
            continue
        if not path.exists():
            print(f"missing  {path}")
            sys.exit(1)
        body = {
            "snippet": {"title": title[:100], "description": f"{title}\n\n{DISCLOSURE}", "categoryId": "27"},
            "status": {"privacyStatus": "unlisted", "selfDeclaredMadeForKids": False, "embeddable": True},
        }
        media = MediaFileUpload(str(path), mimetype="video/mp4", resumable=True, chunksize=8 * 1024 * 1024)
        request = youtube.videos().insert(part="snippet,status", body=body, media_body=media)
        response = None
        try:
            while response is None:
                status, response = request.next_chunk()
                if status:
                    print(f"  {key}  {int(status.progress() * 100)}%")
        except HttpError as exc:
            print(f"FAIL  {key}  {exc}")
            sys.exit(1)
        ids[key] = response["id"]
        OUT.write_text(json.dumps(ids, indent=2) + "\n", encoding="utf-8")
        privacy = response.get("status", {}).get("privacyStatus", "")
        print(f"OK    {key}  {ids[key]}  {privacy}")
    print("done", len(ids))


if __name__ == "__main__":
    main()
