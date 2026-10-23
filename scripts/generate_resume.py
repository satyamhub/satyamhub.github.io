"""Build the hosted resume from verified portfolio content.

Run with the bundled Codex Python runtime when updating the resume:
python3 scripts/generate_resume.py
"""

from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "Satyam_Mall_Resume.pdf"
FONT_REGULAR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#4B5563")
ACCENT = colors.HexColor("#0F766E")
RULE = colors.HexColor("#CBD5E1")


def link(label: str, url: str) -> str:
    return f'<link href="{escape(url)}" color="#0F766E">{escape(label)}</link>'


def section(title: str, styles: dict):
    return [
        Spacer(1, 5),
        Paragraph(title.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.55, color=RULE, spaceBefore=1, spaceAfter=4),
    ]


def project(title: str, stack: str, bullets: list[str], styles: dict):
    content = [
        Paragraph(title, styles["project_title"]),
        Paragraph(f"<i>{escape(stack)}</i>", styles["stack"]),
    ]
    content.extend(Paragraph(f"- {escape(bullet)}", styles["bullet"]) for bullet in bullets)
    return KeepTogether(content + [Spacer(1, 2.5)])


def make_resume() -> None:
    pdfmetrics.registerFont(TTFont("ResumeSans", FONT_REGULAR))
    pdfmetrics.registerFont(TTFont("ResumeSans-Bold", FONT_BOLD))
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=12 * mm,
        bottomMargin=12 * mm,
        title="Satyam Mall Resume",
        author="Satyam Mall",
    )

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="Name", parent=styles["Normal"], fontName="ResumeSans-Bold", fontSize=22, leading=24, textColor=INK, alignment=TA_CENTER, spaceAfter=1))
    styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="ResumeSans", fontSize=9.2, leading=12, textColor=MUTED, alignment=TA_CENTER, spaceAfter=1))
    styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="ResumeSans", fontSize=8.1, leading=10.2, textColor=MUTED, alignment=TA_CENTER, spaceAfter=1))
    styles.add(ParagraphStyle(name="section", parent=styles["Normal"], fontName="ResumeSans-Bold", fontSize=9.4, leading=11, textColor=ACCENT, spaceAfter=0))
    styles.add(ParagraphStyle(name="body", parent=styles["Normal"], fontName="ResumeSans", fontSize=8.35, leading=10.7, textColor=INK, alignment=TA_LEFT, spaceAfter=0))
    styles.add(ParagraphStyle(name="project_title", parent=styles["Normal"], fontName="ResumeSans-Bold", fontSize=8.85, leading=10.6, textColor=INK, spaceAfter=0))
    styles.add(ParagraphStyle(name="stack", parent=styles["Normal"], fontName="ResumeSans", fontSize=7.95, leading=9.4, textColor=MUTED, spaceAfter=1))
    styles.add(ParagraphStyle(name="bullet", parent=styles["Normal"], fontName="ResumeSans", fontSize=8.2, leading=10.1, leftIndent=8, firstLineIndent=-7, textColor=INK, spaceAfter=0.6))

    story = [
        Paragraph("SATYAM MALL", styles["Name"]),
        Paragraph("B.Tech Computer Science Engineering, 2025 - 2029 | Full-Stack Developer", styles["Role"]),
        Paragraph("Greater Noida, Uttar Pradesh | +91 97210 07449 | " + link("satyaminc.tk@gmail.com", "mailto:satyaminc.tk@gmail.com"), styles["Contact"]),
        Paragraph(link("github.com/satyamhub", "https://github.com/satyamhub") + " | " + link("linkedin.com/in/satyamhub", "https://www.linkedin.com/in/satyamhub/") + " | " + link("leetcode.com/u/satyaminc", "https://leetcode.com/u/satyaminc/"), styles["Contact"]),
        Spacer(1, 3),
    ]

    story += section("Profile", styles)
    story.append(Paragraph("B.Tech CSE student focused on backend and full-stack development. Built production-minded web products and practical prototypes using Next.js, TypeScript, PHP, Python, and relational databases. Strengthening problem-solving through 175 accepted LeetCode problems across Easy, Medium, and Hard.", styles["body"]))

    story += section("Education", styles)
    story.append(Paragraph("<b>B.Tech in Computer Science Engineering</b> | 2025 - 2029<br/>G.L. Bajaj Institute of Technology and Management, Greater Noida", styles["body"]))

    story += section("Technical Skills", styles)
    for line in [
        "<b>Languages:</b> C++, TypeScript, JavaScript, Python, PHP, SQL",
        "<b>Frameworks and Web:</b> Next.js, React, Node.js, Tailwind CSS, HTML/CSS",
        "<b>Data:</b> PostgreSQL, MySQL, Prisma",
        "<b>Tools and Core:</b> Git, GitHub, Linux, REST APIs, authentication, DSA, OOP",
    ]:
        story.append(Paragraph(line, styles["body"]))

    story += section("Selected Projects", styles)
    story.append(project("HealSync | Full-Stack Appointment Platform | " + link("GitHub", "https://github.com/satyamhub/HealSync"), "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL", ["Built a role-based doctor-patient appointment platform with signed HTTP-only sessions, server-side authorization, and protected route groups.", "Implemented availability and slot generation plus database conflict keys to prevent doctor and patient double-booking; added dashboards, audit logs, and business-rule tests."], styles))
    story.append(project("PeerKart x G.L. Bajaj | Campus Marketplace | " + link("Live", "https://glbpeerkart.netlify.app") + " | " + link("GitHub", "https://github.com/satyamhub/PeerKart-x-GL-Bajaj"), "Web, Android", ["Released a campus marketplace on web and Android where students browse and save listings, chat with sellers, and arrange campus handovers.", "Enabled student-ID sign-in with email OTP verification and seller listings with photos and pickup details."], styles))
    story.append(project("Cloudforce Fraud Ring | Devacation 2026 | " + link("GitHub", "https://github.com/satyamhub/cloudforce-fraud-ring"), "TigerGraph, Python, Flask, HTML/CSS/JavaScript", ["Co-built a graph-powered investigation demo that detects coordinated mule rings across shared devices, phones, IPs, merchants, and money-flow links.", "Exposed explainable investigation paths with TigerGraph REST++ queries and a lightweight Flask-backed interactive viewer."], styles))

    story += section("Achievements", styles)
    for line in [
        "<b>LeetCode:</b> 175 problems solved (96 Easy, 72 Medium, 7 Hard); earned the 200 Days Badge 2026.",
        "<b>Adobe Hackathon 2026:</b> Qualified for Round 2.",
        "<b>JEE Main:</b> 90.62 percentile.",
    ]:
        story.append(Paragraph(f"- {line}", styles["bullet"]))

    doc.build(story)


if __name__ == "__main__":
    make_resume()
