#!/bin/bash
echo "=== Deploying Dattatreya Portfolio to GitHub ==="

# 1. Clone existing repo
git clone https://github.com/Dattatreya-MK/dattatreya_website.git temp_repo
cd temp_repo

# 2. Clear old files (keep .git)
find . -not -path "./.git*" -not -name "." -delete 2>/dev/null

# 3. Copy new portfolio files
cp -r ../portfolio_files/. .

# 4. Commit and push
git add -A
git commit -m "feat: replace with new Next.js portfolio — Dattatreya M K"
git push origin main

echo ""
echo "✅ Pushed to GitHub!"
echo "🌐 Enable GitHub Pages: Settings → Pages → GitHub Actions"
echo "   OR connect repo to Vercel at vercel.com for instant deploy"
