# PowerShell script to download placeholder images for the projects, engagement, chapters, and partners sections

# Project images
$projectImageUrls = @(
    "https://source.unsplash.com/random/800x600/?school,africa",
    "https://source.unsplash.com/random/800x600/?training,education",
    "https://source.unsplash.com/random/800x600/?conference,education",
    "https://source.unsplash.com/random/800x600/?renovation,school",
    "https://source.unsplash.com/random/800x600/?teacher,training"
)

$projectOutputPaths = @(
    "public/images/projects/nigeria-school.jpg",
    "public/images/projects/training-webinar.jpg",
    "public/images/projects/education-expo.jpg",
    "public/images/projects/school-renovation.jpg",
    "public/images/projects/teacher-training.jpg"
)

# Engagement images
$engagementImageUrls = @(
    "https://source.unsplash.com/random/800x600/?conference,education",
    "https://source.unsplash.com/random/800x600/?handshake,partnership",
    "https://source.unsplash.com/random/800x600/?donation,charity",
    "https://source.unsplash.com/random/800x600/?volunteer,community"
)

$engagementOutputPaths = @(
    "public/images/engagement/ambassador membership.png",
    "public/images/engagement/partner with us.png",
    "public/images/engagement/donate.png",
    "public/images/engagement/volunteer.png"
)

# Chapter country flags
$countryFlagUrls = @(
    "https://flagcdn.com/w320/ke.png",
    "https://flagcdn.com/w320/za.png",
    "https://flagcdn.com/w320/gh.png",
    "https://flagcdn.com/w320/ng.png"
)

$countryFlagOutputPaths = @(
    "public/images/chapters/kenya.png",
    "public/images/chapters/south-africa.png",
    "public/images/chapters/ghana.png",
    "public/images/chapters/nigeria.png"
)

# Partner logos (using placeholder.com)
$partnerLogoUrls = @()
$partnerLogoOutputPaths = @()

for ($i = 1; $i -le 12; $i++) {
    $partnerLogoUrls += "https://via.placeholder.com/150x150.png?text=Partner+$i"
    $partnerLogoOutputPaths += "public/images/partners/partner$i.png"
}

# Function to download images
function Get-Images {
    param (
        [string[]]$urls,
        [string[]]$paths,
        [string]$sectionName
    )

    Write-Host "Downloading $sectionName images..."

    for ($i = 0; $i -lt $urls.Count; $i++) {
        $url = $urls[$i]
        $outputPath = $paths[$i]

        Write-Host "Downloading image from $url to $outputPath"

        try {
            Invoke-WebRequest -Uri $url -OutFile $outputPath
            Write-Host "Successfully downloaded image to $outputPath"
        } catch {
            Write-Host "Failed to download image: $_"
        }
    }

    Write-Host "$sectionName downloads completed!"
}

# Download project images
Get-Images -urls $projectImageUrls -paths $projectOutputPaths -sectionName "Project"

# Download engagement images
Get-Images -urls $engagementImageUrls -paths $engagementOutputPaths -sectionName "Engagement"

# Download country flag images
Get-Images -urls $countryFlagUrls -paths $countryFlagOutputPaths -sectionName "Country Flags"

# Download partner logo images
Get-Images -urls $partnerLogoUrls -paths $partnerLogoOutputPaths -sectionName "Partner Logos"

Write-Host "All downloads completed!"
