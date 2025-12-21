# PowerShell script to create a placeholder for the contact illustration

# Create an empty file as a placeholder
$outputPath = "public\images\contact-illustration.png"
New-Item -ItemType File -Path $outputPath -Force | Out-Null

Write-Host "Created contact illustration placeholder at $outputPath"
