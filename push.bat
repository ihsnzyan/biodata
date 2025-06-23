@echo off
cd /d "D:\Codingan\biodata"

echo Adding all files...
git add .

echo Committing...
git commit -m "Update otomatis dari script"

echo Pushing to GitHub...
git push origin main --force

pause
