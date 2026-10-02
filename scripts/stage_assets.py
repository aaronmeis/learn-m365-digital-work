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
]

YOUTUBE = {name: "" for name, *_ in SHORTS}
YOUTUBE["deep-dive-cut"] = ""


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
        copy(NBLM / f"{src_title}.mp4", mp4)
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
            "file": f"media/shorts/{name}.mp4", "youtube": YOUTUBE.get(name, ""), "status": "ready",
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
