"""Copy and downsize digital-work-platform media into the site folder."""
import json
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image

SITE = Path(__file__).resolve().parent.parent
OUT = Path(r"C:\output\obsidian\notebooklm\tdd-m365-digital-work-platform")
NBLM = OUT / "NEXUS _ tdd-m365-digital-work-platform _ 2026-09-28 _ tech-deep-dive"
BATCH = OUT / "shorts-batch2"
PACK = Path(r"C:\obsidian\personal_research_2026\Learning\tech-deep-dive\m365-digital-work-platform")
FORCE = "--force" in sys.argv

SHORTS = [
    ("01-boundary", "How Microsoft's Digital-Work Platform Boundary Works", "Where the platform boundary sits", "Block 1 · scope", "Architecture",
     ["boundary", "copilot", "graph", "github", "enablement"]),
    ("02-synced-index", "How Microsoft Copilot Indexes External Knowledge", "How synced connectors index knowledge", "Block 5 · integration", "Connectors",
     ["synced", "acl", "graph", "index", "externalitem"]),
    ("03-live-fetch", "How Copilot Fetches Live Data", "How federated connectors fetch live", "Block 5 · integration", "Connectors",
     ["federated", "mcp", "live", "servicenow"]),
    ("04-federated-protect", "How Copilot Federated Connectors Protect Data", "How federated connectors protect data", "Block 5 · AI", "AI path",
     ["federated", "mcp", "permission", "gateway"]),
    ("05-oversharing", "How Copilot Stops Data Oversharing", "How Copilot stops data oversharing", "Block 7 · failure modes", "AI path",
     ["oversharing", "label", "dlp", "acl", "purview"]),
    ("06-sync-overshare", "How Copilot Syncing Causes Data Oversharing", "How a bad sync overshares", "Block 7 · failure modes", "Connectors",
     ["sync", "acl", "oversharing", "permission"]),
    ("07-two-copilots", "07-two-copilots", "Two Copilots, two licenses", "Block 1 · scope", "Architecture",
     ["license", "github copilot", "microsoft 365 copilot", "entra"]),
    ("08-acl-map", "08-acl-map", "The ACL map cannot be sloppy", "Block 3 · logical", "Connectors",
     ["acl", "externalitem", "permission", "sync"]),
    ("09-github-app", "09-github-app", "GitHub App, not a PAT", "Block 4 · physical", "Identity",
     ["github app", "pat", "token", "installation"]),
    ("10-checks-api", "10-checks-api", "The model does not own the merge", "Block 3 · logical", "Delivery",
     ["checks", "webhook", "branch protection", "pull request"]),
    ("11-one-record", "11-one-record", "Do not copy the system of record", "Block 2 · conceptual", "Architecture",
     ["sharepoint", "github", "system of record", "copy"]),
    ("12-mcp-standard", "12-mcp-standard", "MCP is the shared standard", "Block 5 · integration", "Connectors",
     ["mcp", "graph", "github", "extensibility"]),
    ("13-three-planes", "13-three-planes", "Three planes, one boundary", "Block 2 · conceptual", "Architecture",
     ["knowledge", "transaction", "control", "enablement"]),
    ("14-write-gate", "14-write-gate", "A write needs an approval", "Block 7 · failure modes", "AI path",
     ["mcp", "write", "approval", "workflow"]),
    ("15-prompt-injection", "15-prompt-injection", "Retrieved text is data", "Block 7 · failure modes", "AI path",
     ["prompt injection", "grounding", "allowlist", "tool"]),
    ("16-verify-cloud", "16-verify-cloud", "Verify the cloud before you commit", "Block 4 · physical", "Cloud",
     ["gcc", "gcc high", "dod", "tenant"]),
]

# Unlisted uploads, 2026-10-02. Empty string falls back to the local MP4.
YOUTUBE = {
    "deep-dive-cut": "EWcgztIW-Z8",
    "01-boundary": "LkzxRQAXn7I",
    "02-synced-index": "y6vdWrhzguw",
    "03-live-fetch": "UWwPnbAfN2s",
    "04-federated-protect": "gGJvC3IbF70",
    "05-oversharing": "rLK27JyJLL8",
    "06-sync-overshare": "6bAqImgw-2s",
    "07-two-copilots": "yndinYHFMWI",
    "08-acl-map": "tzm_OiIio4k",
    "09-github-app": "ItgoluU-oiY",
}


def duration(path: Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
        capture_output=True, text=True, check=True,
    ).stdout
    return float(out.strip())


def copy(src: Path, dst: Path):
    if dst.exists() and not FORCE:
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    print("copied", dst.relative_to(SITE))


def resize(src: Path, dst: Path, width: int, quality=82):
    if dst.exists() and not FORCE:
        return
    im = Image.open(src).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    dst.parent.mkdir(parents=True, exist_ok=True)
    im.save(dst, "JPEG", quality=quality, optimize=True)
    print("resized", dst.relative_to(SITE))


def crop_square(src: Path, dst: Path, cx: int, cy: int, size: int, out=320):
    im = Image.open(src).convert("RGB")
    h = size // 2
    im.crop((cx - h, cy - h, cx + h, cy + h)).resize((out, out), Image.LANCZOS).save(dst, "JPEG", quality=85)
    print("emblem", dst.relative_to(SITE))


def main():
    items = []
    for name, src_title, title, tag, pillar, keywords in SHORTS:
        mp4 = SITE / "media" / "shorts" / f"{name}.mp4"
        src = NBLM / f"{src_title}.mp4"
        if not src.exists():
            src = BATCH / f"{name}.mp4"
        copy(src, mp4)
        poster = SITE / "media" / "posters" / f"{name}.webp"
        if FORCE or not poster.exists():
            poster.parent.mkdir(parents=True, exist_ok=True)
            subprocess.run(
                ["ffmpeg", "-y", "-loglevel", "error", "-ss", "4", "-i", str(mp4), "-frames:v", "1",
                 "-vf", "scale=360:-2", "-q:v", "70", str(poster)],
                check=True,
            )
            print("poster", poster.relative_to(SITE))
        items.append({
            "id": name, "name": name, "title": title, "tag": tag, "pillar": pillar, "keywords": keywords,
            "duration": round(duration(mp4)), "poster": f"media/posters/{name}.webp",
            "file": "" if YOUTUBE.get(name) else f"media/shorts/{name}.mp4",
            "youtube": YOUTUBE.get(name, ""), "status": "ready",
        })
    catalog = {
        "notebook_alias": "tdd-m365-digital-work-platform",
        "title": "Learn Microsoft's Digital-Work Platform - NotebookLM shorts",
        "deep_dive": {"file": "media/deep-dive-cut.mp4", "youtube": YOUTUBE["deep-dive-cut"]},
        "total": len(items), "ready": len(items), "items": items,
    }
    (SITE / "shorts-catalog.json").write_text(json.dumps(catalog, indent=2), encoding="utf-8")
    (SITE / "shorts-catalog.js").write_text("window.SHORTS = " + json.dumps(catalog) + ";\n", encoding="utf-8")

    copy(OUT / "tdd-m365-digital-work-platform-deep-dive-cut.mp4", SITE / "media" / "deep-dive-cut.mp4")
    copy(NBLM / "Securing Copilot across Microsoft and GitHub.m4a", SITE / "media" / "audio-overview.m4a")

    for i in range(1, 16):
        resize(OUT / "tdd-m365-digital-work-platform-presentation" / f"Slide{i}.JPG",
               SITE / "assets" / "slides" / f"slide-{i:02d}.jpg", 1600)
    for f in (PACK / "assets" / "diagrams").iterdir():
        if f.suffix in (".png", ".drawio", ".mmd"):
            copy(f, SITE / "assets" / "diagrams" / f.name)
    copy(NBLM / "Governed AI Blueprint.pdf", SITE / "assets" / "downloads" / "digital-work-blueprint.pdf")
    copy(OUT / "tdd-m365-digital-work-platform-presentation.pptx", SITE / "assets" / "downloads" / "digital-work-deck.pptx")

    s1 = OUT / "tdd-m365-digital-work-platform-presentation" / "Slide1.JPG"
    crop_square(s1, SITE / "assets" / "hero.jpg", 1956, 1190, 900)
    crop_square(s1, SITE / "assets" / "security.jpg", 1420, 900, 640)
    crop_square(s1, SITE / "assets" / "governance.jpg", 2490, 900, 640)
    crop_square(s1, SITE / "assets" / "compliance.jpg", 1420, 1480, 640)
    crop_square(s1, SITE / "assets" / "ai.jpg", 2490, 1480, 640)
    for size in (192, 512):
        icon = SITE / "assets" / "icons" / f"icon-{size}.png"
        icon.parent.mkdir(parents=True, exist_ok=True)
        Image.open(SITE / "assets" / "hero.jpg").resize((size, size), Image.LANCZOS).save(icon, "PNG", optimize=True)
        print("icon", icon.relative_to(SITE))


if __name__ == "__main__":
    main()
