# PowerShell script to create simple placeholder images for partners

# Create directory if it doesn't exist
$partnersDir = "public\images\partners"
if (-not (Test-Path $partnersDir)) {
    New-Item -ItemType Directory -Path $partnersDir -Force
}

# Create a simple HTML file that will be used to generate the placeholder images
$htmlContent = @"
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 150px;
            width: 150px;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .placeholder {
            text-align: center;
            color: #333;
            font-size: 16px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="placeholder">PARTNER_TEXT</div>
</body>
</html>
"@

# Create 12 partner placeholder images
for ($i = 1; $i -le 12; $i++) {
    $outputPath = Join-Path $partnersDir "partner$i.png"
    $partnerText = "Partner $i"
    
    # Create a temporary HTML file with the partner text
    $tempHtmlPath = [System.IO.Path]::GetTempFileName() + ".html"
    $htmlContent.Replace("PARTNER_TEXT", $partnerText) | Out-File -FilePath $tempHtmlPath -Encoding utf8
    
    Write-Host "Created temporary HTML file for $partnerText at $tempHtmlPath"
    Write-Host "Please manually convert this HTML to an image and save it to $outputPath"
    
    # Open the HTML file in the default browser
    Start-Process $tempHtmlPath
}

Write-Host "Please take screenshots of each partner placeholder and save them to the appropriate location."
Write-Host "Partner placeholder HTML files have been created and opened in your browser."
