from PIL import Image, ImageDraw, ImageFont
import qrcode

# ====== USER SETTINGS ======
pdf_url = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"  # तुमचा direct link इथे टाका
template_image_path = "poster_template.jpg"   # तुमचा Poster background
output_path = "poster_with_qr.png"

# QR Code Settings
qr_size_px = 500
qr_position = (200, 300)  # QR कुठे ठेवायचा (x, y)

# Text Settings
owner_name = "मालकाचे नाव : रमेश रतन हिवाळे"
property_no = "मालमत्ता क्र. : 05"
font_path = "NotoSansDevanagari-Regular.ttf"   # मराठी फॉन्ट
font_size = 40
text_position1 = (800, 350)  # Owner Name text
text_position2 = (800, 420)  # Property No text

# ====== Generate QR ======
qr = qrcode.QRCode(
    error_correction=qrcode.constants.ERROR_CORRECT_H
)
qr.add_data(pdf_url)
qr.make(fit=True)
qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
qr_img = qr_img.resize((qr_size_px, qr_size_px), Image.LANCZOS)

# ====== Paste QR on Template ======
template = Image.open(template_image_path).convert("RGB")
template.paste(qr_img, qr_position)

# ====== Draw Text ======
draw = ImageDraw.Draw(template)
try:
    font = ImageFont.truetype(font_path, font_size)
except:
    font = ImageFont.load_default()

draw.text(text_position1, owner_name, font=font, fill="black")
draw.text(text_position2, property_no, font=font, fill="black")

# ====== Save Final Poster ======
template.save(output_path, dpi=(300,300))
print("✅ Poster तयार झाले :", output_path)
