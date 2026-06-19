import os
import re

directory = r"C:\Users\HP\OneDrive\Desktop\PrestigePalm"

replacements = [
    (r"Mahindra\s+Beacon\s+Hill", "Prestige Palm Court"),
    (r"MahindraBeaconHill", "PrestigePalmCourt"),
    (r"mahindrabeaconhill", "prestigepalmcourt"),
    (r"mahindra-beacon-hill", "prestige-palm-court"),
    (r"Mahalaxmi,\s*Mumbai", "Madhavaram, North Chennai"),
    (r"Mahalaxmi", "Madhavaram"),
    (r"Mumbai", "North Chennai"),
    (r"Premium 3, 3\.5 &amp; 4 BHK Residences", "Premium 1, 2 &amp; 3 BHK Homes"),
    (r"Premium 3, 3\.5 & 4 BHK Residences", "Premium 1, 2 & 3 BHK Homes"),
    (r"₹ 6\.30 Cr\*", "₹ 64 Lacs*"),
    (r"₹6\.30 Cr", "₹64 Lacs"),
    (r"Avail Exclusive EOI Benefits", "Get Early Bird Advantage"),
    (r"Exclusive Rooftop Lounge & Amenities", "Madhavaram's Largest Residential Community")
]

for root, dirs, files in os.walk(directory):
    if "node_modules" in root or ".next" in root or ".git" in root:
        continue
    for file in files:
        if file.endswith((".js", ".jsx", ".json", ".html", ".css", ".md")):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except UnicodeDecodeError:
                continue

            new_content = content
            for old, new in replacements:
                # Use regex with re.IGNORECASE for some? No, precise is better.
                new_content = re.sub(old, new, new_content)
                
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
