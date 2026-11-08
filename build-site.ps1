# Copies only the files the live website needs into a clean "site" folder,
# ready to upload (e.g. drag onto Netlify Drop). Your working files (data,
# scripts, original photos, screenshots) stay out of it.
#
#   powershell -ExecutionPolicy Bypass -File build-site.ps1
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$out  = Join-Path $root "site"
if (Test-Path $out) { Remove-Item $out -Recurse -Force }
New-Item -ItemType Directory -Force (Join-Path $out "images") | Out-Null

$files = @(
  "index.html", "styles.css", "script.js", "favicon.svg", "Sahil-Monga-CV.pdf",
  "images\moxies-scene.svg", "images\dashboard-scene.svg", "images\web-scene.svg", "images\sahil.jpg"
)
foreach ($f in $files) {
  $src = Join-Path $root $f
  if (-not (Test-Path $src)) { Write-Warning "Missing: $f"; continue }
  Copy-Item $src (Join-Path $out $f)
}
$size = (Get-ChildItem $out -Recurse -File | Measure-Object Length -Sum).Sum
"Built site folder: $out"
"{0} files, {1:N1} MB" -f (Get-ChildItem $out -Recurse -File).Count, ($size / 1MB)
