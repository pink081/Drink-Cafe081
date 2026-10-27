import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def create_manual():
    doc = docx.Document()

    # Set Margins (Normal: 1 inch)
    for section in doc.sections:
        section.top_margin = Inches(1)
        section.bottom_margin = Inches(1)
        section.left_margin = Inches(1)
        section.right_margin = Inches(1)
        section.different_first_page_header_footer = False

    # Color Palette (Vintage Earth Tone)
    COLOR_PRIMARY = RGBColor(0x2C, 0x4A, 0x3E)     # Forest Green #2C4A3E
    COLOR_SECONDARY = RGBColor(0x7D, 0x4F, 0x33)   # Warm Wood #7D4F33
    COLOR_TEXT = RGBColor(0x2D, 0x27, 0x23)        # Dark Charcoal #2D2723
    COLOR_MUTED = RGBColor(0x70, 0x68, 0x61)       # Muted Gray

    # Helper: Set Cell Background Color
    def set_cell_background(cell, fill_hex):
        shading_xml = f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>'
        cell._tc.get_or_add_tcPr().append(parse_xml(shading_xml))

    # Helper: Set Cell Margins
    def set_cell_margins(cell, top=140, bottom=140, left=200, right=200):
        tcPr = cell._tc.get_or_add_tcPr()
        tcMar = OxmlElement('w:tcMar')
        for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
            node = OxmlElement(f'w:{m}')
            node.set(qn('w:w'), str(val))
            node.set(qn('w:type'), 'dxa')
            tcMar.append(node)
        tcPr.append(tcMar)

    # Style Configurations
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Cordia New'
    normal_style.font.size = Pt(14)
    normal_style.font.color.rgb = COLOR_TEXT

    # Header / Footer
    for section in doc.sections:
        footer = section.footer
        f_p = footer.paragraphs[0]
        f_p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        f_run = f_p.add_run("ร่มรื่นคาเฟ่ (Romruen Cafe) — คู่มือการใช้งานระบบเว็บไซต์")
        f_run.font.name = 'Cordia New'
        f_run.font.size = Pt(11)
        f_run.font.color.rgb = COLOR_MUTED

    # ------------------ COVER / TITLE SECTION ------------------
    p_title_top = doc.add_paragraph()
    p_title_top.paragraph_format.space_before = Pt(20)
    p_title_top.paragraph_format.space_after = Pt(4)
    r_sub = p_title_top.add_run("เอกสารคู่มือระบบ • USER & ADMIN MANUAL")
    r_sub.font.name = 'Cordia New'
    r_sub.font.size = Pt(13)
    r_sub.font.bold = True
    r_sub.font.color.rgb = COLOR_SECONDARY

    p_title = doc.add_paragraph()
    p_title.paragraph_format.space_before = Pt(0)
    p_title.paragraph_format.space_after = Pt(12)
    r_title = p_title.add_run("คู่มือการใช้งานเว็บไซต์ร้าน\nร่มรื่นคาเฟ่ (Romruen Cafe)")
    r_title.font.name = 'Cordia New'
    r_title.font.size = Pt(28)
    r_title.font.bold = True
    r_title.font.color.rgb = COLOR_PRIMARY

    p_desc = doc.add_paragraph()
    p_desc.paragraph_format.space_after = Pt(24)
    r_desc = p_desc.add_run(
        "คู่มือฉบับสมบูรณ์ครอบคลุมฟังก์ชันการสั่งซื้อเครื่องดื่ม การเลือกปรับแต่งระดับความหวาน/นม/ท็อปปิ้ง "
        "การคำนวณราคาแบบเรียลไทม์ การสรุปออเดอร์ส่งเข้า LINE ตลอดจนขั้นตอนการดูแลและแก้ไขข้อมูลเมนูสำหรับเจ้าหน้าที่ร้าน"
    )
    r_desc.font.name = 'Cordia New'
    r_desc.font.size = Pt(14)
    r_desc.font.color.rgb = COLOR_MUTED

    # Metadata Box
    table_meta = doc.add_table(rows=4, cols=2)
    table_meta.alignment = WD_TABLE_ALIGNMENT.CENTER
    table_meta.autofit = False

    meta_data = [
        ("ชื่อโครงการ / เว็บไซต์", "ร่มรื่นคาเฟ่ (Romruen Cafe) - Vintage & Brew"),
        ("ธีมและสไตล์การออกแบบ", "Vintage Earth Tone (เขียวธรรมชาติ, น้ำตาลไม้, ครีมงาช้าง)"),
        ("เวลาทำการร้าน", "08:00 - 17:00 น. (หยุดทุกวันอังคาร)"),
        ("สถานะระบบ", "พร้อมใช้งาน (HTML5 / Tailwind CSS / Vanilla JavaScript)")
    ]

    for idx, (label, val) in enumerate(meta_data):
        row = table_meta.rows[idx]
        
        # Col 0 (Label)
        c0 = row.cells[0]
        c0.width = Inches(2.2)
        set_cell_background(c0, "F3ECE1")
        set_cell_margins(c0, top=100, bottom=100, left=150, right=150)
        p0 = c0.paragraphs[0]
        p0.paragraph_format.space_after = Pt(0)
        r0 = p0.add_run(label)
        r0.font.name = 'Cordia New'
        r0.font.size = Pt(13)
        r0.font.bold = True
        r0.font.color.rgb = COLOR_SECONDARY

        # Col 1 (Value)
        c1 = row.cells[1]
        c1.width = Inches(4.3)
        set_cell_background(c1, "FAF7F2")
        set_cell_margins(c1, top=100, bottom=100, left=150, right=150)
        p1 = c1.paragraphs[0]
        p1.paragraph_format.space_after = Pt(0)
        r1 = p1.add_run(val)
        r1.font.name = 'Cordia New'
        r1.font.size = Pt(13)
        r1.font.color.rgb = COLOR_TEXT

    doc.add_paragraph().paragraph_format.space_after = Pt(20)

    # Helper: Add Section Heading
    def add_section_heading(title, number=None):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(18)
        p.paragraph_format.space_after = Pt(8)
        p.paragraph_format.keep_with_next = True
        
        if number:
            r_num = p.add_run(f"บทที่ {number}: ")
            r_num.font.name = 'Cordia New'
            r_num.font.size = Pt(20)
            r_num.font.bold = True
            r_num.font.color.rgb = COLOR_SECONDARY
            
        r = p.add_run(title)
        r.font.name = 'Cordia New'
        r.font.size = Pt(20)
        r.font.bold = True
        r.font.color.rgb = COLOR_PRIMARY

    # Helper: Add Subheading
    def add_subheading(title):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(12)
        p.paragraph_format.space_after = Pt(4)
        p.paragraph_format.keep_with_next = True
        r = p.add_run(title)
        r.font.name = 'Cordia New'
        r.font.size = Pt(16)
        r.font.bold = True
        r.font.color.rgb = COLOR_SECONDARY

    # Helper: Add Callout Box
    def add_callout(text, title=None, fill_hex="EBF2EE"):
        tbl = doc.add_table(rows=1, cols=1)
        tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
        cell = tbl.rows[0].cells[0]
        cell.width = Inches(6.5)
        set_cell_background(cell, fill_hex)
        set_cell_margins(cell, top=140, bottom=140, left=180, right=180)
        p = cell.paragraphs[0]
        p.paragraph_format.space_after = Pt(0)
        if title:
            r_t = p.add_run(f"{title}\n")
            r_t.font.name = 'Cordia New'
            r_t.font.size = Pt(14)
            r_t.font.bold = True
            r_t.font.color.rgb = COLOR_PRIMARY
        r_c = p.add_run(text)
        r_c.font.name = 'Cordia New'
        r_c.font.size = Pt(13)
        r_c.font.color.rgb = COLOR_TEXT
        doc.add_paragraph().paragraph_format.space_after = Pt(6)

    # ------------------ CHAPTER 1 ------------------
    add_section_heading("ภาพรวมระบบและโครงสร้างเว็บไซต์", "1")
    
    p = doc.add_paragraph()
    p.add_run(
        "เว็บไซต์ร้านร่มรื่นคาเฟ่ ออกแบบขึ้นเพื่อเป็นหน้าร้านดิจิทัลสไตล์ Vintage Earth Tone ที่ผสมผสานความสวยงามแบบคลาสสิก "
        "เข้ากับฟังก์ชันการใช้งานที่ทันสมัย รองรับการใช้งานทั้งบนคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน (Responsive Design) อย่างสมบูรณ์แบบ"
    )

    add_subheading("1.1 โครงสร้างไฟล์ในระบบ")
    p = doc.add_paragraph()
    p.add_run(
        "ระบบประกอบด้วย 3 ไฟล์หลักที่ทำงานร่วมกันอย่างเป็นระบบ ไม่จำเป็นต้องติดตั้งโปรแกรมหรือฐานข้อมูลที่ซับซ้อน:"
    )

    tbl_files = doc.add_table(rows=4, cols=2)
    tbl_files.alignment = WD_TABLE_ALIGNMENT.CENTER
    file_items = [
        ("index.html", "ไฟล์โครงสร้างหน้าเว็บหลัก รวบรวม Navbar, Hero Section, หมวดหมู่เมนู, หน้าต่างปรับแต่ง (Modal), ถาดรายการสั่ง (Cart Drawer), แกลเลอรีรูปภาพ และส่วนข้อมูลติดต่อ"),
        ("styles.css", "ไฟล์ตกแต่งสไตล์ กำหนดธีมสี Vintage Earth Tone, ฟอนต์ Noto Serif Thai / Prompt, เอฟเฟกต์การ์ดวินเทจ, อนิเมชันปุ่ม และแถบเลื่อน (Scrollbar)"),
        ("app.js", "ไฟล์ระบบการทำงานและคำนวณ จัดเก็บฐานข้อมูลเมนู, ระบบตรวจเช็กเวลาเปิด-ปิดร้านอัตโนมัติ, ระบบคำนวณราคาท็อปปิ้งเรียลไทม์ และระบบสร้างข้อความสั่งซื้อสำหรับ LINE"),
        ("คู่มือการใช้งาน.docx", "ไฟล์เอกสารคู่มือสำหรับผู้ใช้งานและผู้ดูแลร้าน")
    ]
    for idx, (f_name, f_desc) in enumerate(file_items):
        row = tbl_files.rows[idx]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(1.8)
        c1.width = Inches(4.7)
        set_cell_background(c0, "F3ECE1" if idx % 2 == 0 else "FFFFFF")
        set_cell_background(c1, "FAF7F2" if idx % 2 == 0 else "FFFFFF")
        set_cell_margins(c0, top=80, bottom=80, left=120, right=120)
        set_cell_margins(c1, top=80, bottom=80, left=120, right=120)
        p0 = c0.paragraphs[0]
        r0 = p0.add_run(f_name)
        r0.font.name = 'Cordia New'
        r0.font.bold = True
        r0.font.size = Pt(13)
        r0.font.color.rgb = COLOR_SECONDARY
        p1 = c1.paragraphs[0]
        r1 = p1.add_run(f_desc)
        r1.font.name = 'Cordia New'
        r1.font.size = Pt(13)

    add_subheading("1.2 วิธีการเปิดใช้งานเว็บไซต์")
    p = doc.add_paragraph()
    p.add_run("สามารถเปิดใช้งานได้ 2 รูปแบบ:\n")
    p.add_run("1. เปิดโดยตรงผ่าน Browser: ").bold = True
    p.add_run("ดับเบิลคลิกที่ไฟล์ index.html บนคอมพิวเตอร์ของคุณ ระบบจะเปิดบน Google Chrome, Microsoft Edge หรือ Safari ทันที\n")
    p.add_run("2. เปิดผ่าน Local Web Server: ").bold = True
    p.add_run("เปิด PowerShell หรือ Terminal ที่โฟลเดอร์ c:\\081 แล้วพิมพ์คำสั่ง python -m http.server 8080 จากนั้นเข้าผ่าน URL http://localhost:8080")

    # ------------------ CHAPTER 2 ------------------
    add_section_heading("ฟังก์ชันและคู่มือสำหรับลูกค้า (Customer Guide)", "2")

    add_subheading("2.1 ระบบตรวจสอบสถานะร้านแบบเรียลไทม์ (Live Store Status)")
    p = doc.add_paragraph()
    p.add_run(
        "บนส่วนบนสุดของหน้าเว็บ (Hero Section) จะมีป้ายสถานะอัจฉริยะที่คำนวณตามเวลาจริงของเครื่องลูกค้า:\n"
        "• เวลาทำการปกติ: ทุกวัน เวลา 08:00 - 17:00 น.\n"
        "• วันหยุดประจำสัปดาห์: ทุกวันอังคาร (ระบบจะแสดงป้ายสีแดงว่า 'วันนี้ร้านหยุด (หยุดทุกวันอังคาร) • เปิดบริการพรุ่งนี้ 08:00 น.')\n"
        "• ช่วงเวลาเปิดทำการ: แสดงจุดสีเขียวกะพริบ 'เปิดให้บริการอยู่ตอนนี้ (08:00 - 17:00 น.)'\n"
        "• นอกเวลาทำการ: แสดงป้ายสีส้ม 'ขณะนี้ร้านปิดให้บริการ • เปิดบริการ 08:00 - 17:00 น.'"
    )

    add_subheading("2.2 การเลือกดูหมวดหมู่เมนู")
    p = doc.add_paragraph()
    p.add_run(
        "ลูกค้าสามารถกดปุ่มตัวกรองเพื่อเลือกดูเมนูตามความต้องการได้อย่างรวดเร็ว:\n"
        "1. ทั้งหมด (All): แสดงเครื่องดื่มและเบเกอรี่ทุกรายการ\n"
        "2. ☕ กาแฟ (Coffee): อเมริกาโน่, คาเฟ่ลาเต้, คาราเมลมัคคิอาโต้\n"
        "3. 🍵 ชา & นม (Tea & Milk): มัทฉะลาเต้พรีเมียม (Uji Matcha), ชาไทยร่มรื่น, ดาร์กโกโก้\n"
        "4. 🍊 สดชื่นซิกเนเจอร์ (Refreshing): ยูซุฮันนี่สปาร์กลิง\n"
        "5. 🥐 เบเกอรี่โฮมเมด (Bakery): ครัวซองต์เนยสดฝรั่งเศส, ครัวซองต์อัลมอนด์, บาสก์ชีสเค้กหน้าไหม้"
    )

    add_subheading("2.3 ระบบปรับแต่งเมนูและคำนวณราคา (Interactive Customizer)")
    p = doc.add_paragraph()
    p.add_run(
        "เมื่อลูกค้าคลิกที่ปุ่ม 'เลือกปรับแต่ง' บนการ์ดเมนู จะมีหน้าต่าง Pop-up แสดงขึ้นมาให้เลือกปรับแต่งตามต้องการ:"
    )

    tbl_options = doc.add_table(rows=6, cols=3)
    tbl_options.alignment = WD_TABLE_ALIGNMENT.CENTER
    opt_headers = ["หมวดตัวเลือก", "รายการที่มีให้เลือก", "ราคาเพิ่มเติม"]
    for i, h in enumerate(opt_headers):
        c = tbl_options.rows[0].cells[i]
        set_cell_background(c, "2C4A3E")
        set_cell_margins(c, top=100, bottom=100, left=120, right=120)
        p = c.paragraphs[0]
        r = p.add_run(h)
        r.font.name = 'Cordia New'
        r.font.bold = True
        r.font.size = Pt(13)
        r.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

    opt_rows = [
        ("ประเภทเครื่องดื่ม", "เย็น (Iced) / ร้อน (Hot) / ปั่น (Frappe)", "เย็น/ร้อน ฟรี, ปั่น +10 บาท"),
        ("ระดับความหวาน", "0% ไม่หวาน / 25% หวานน้อย / 50% หวานพอดี / 100% ปกติ", "ฟรีทุกระดับ"),
        ("ระดับการคั่ว (กาแฟ)", "คั่วกลาง-เข้ม (หอมเข้ม ดื่มง่าย) / คั่วกลาง (บาลานซ์ ฟรุตตี้)", "ฟรี"),
        ("ประเภทนม (Milk Choice)", "นมสดปกติ (ฟรี) / นมถั่วเหลือง (+10฿) / นมโอ๊ต Oatly (+15฿) / นมอัลมอนด์ (+15฿)", "+0 ถึง +15 บาท"),
        ("ท็อปปิ้งเครื่องดื่ม", "ไข่มุกบราวน์ชูการ์ (+10฿) / บุกคริสตัล (+10฿) / วิปครีมสด (+15฿) / เพิ่มช็อตกาแฟ (+15฿)", "+10 ถึง +15 บาทต่ออย่าง")
    ]
    for idx, (cat, items, extra) in enumerate(opt_rows):
        row = tbl_options.rows[idx + 1]
        for col_idx, text in enumerate([cat, items, extra]):
            cell = row.cells[col_idx]
            set_cell_background(cell, "FAF7F2" if idx % 2 == 0 else "FFFFFF")
            set_cell_margins(cell, top=80, bottom=80, left=120, right=120)
            p = cell.paragraphs[0]
            r = p.add_run(text)
            r.font.name = 'Cordia New'
            r.font.size = Pt(13)

    doc.add_paragraph().paragraph_format.space_after = Pt(8)
    add_callout(
        "💡 จุดเด่นของระบบคำนวณราคา: เมื่อลูกค้าคลิกเลือกออปชันใดๆ เช่น เลือกมัทฉะลาเต้ (80฿) แล้วติ๊กเปลี่ยนเป็นนมโอ๊ต (+15฿) "
        "และเพิ่มวิปครีมสด (+15฿) ตัวเลขยอดรวมที่ปุ่มด้านล่างจะอัปเดตเป็น ฿110 ให้เห็นทันทีแบบเรียลไทม์ก่อนกดใส่ถาด!",
        "ระบบคำนวณราคาแบบเรียลไทม์ (Instant Price Calculation)"
    )

    add_subheading("2.4 ถาดรายการและการส่งคำสั่งซื้อ (Order Tray & LINE Ordering)")
    p = doc.add_paragraph()
    p.add_run(
        "หลังจากเลือกสินค้าแล้ว จะมีปุ่ม 'ถาดเครื่องดื่ม' สีเขียวเข้มลอยอยู่มุมขวาล่าง เมื่อคลิกจะเปิดแถบสรุปรายการ:\n"
        "1. ตรวจสอบและแก้ไข: ลูกค้าสามารถกดปุ่ม (+) หรือ (-) เพื่อเปลี่ยนจำนวน หรือกดปุ่มถังขยะเพื่อลบรายการได้\n"
        "2. สรุปยอดรวมสุทธิ: ระบบจะรวมยอดราคาทั้งหมดโดยอัตโนมัติ\n"
        "3. ปุ่ม 'คัดลอกรายการ': คัดลอกรายละเอียดคำสั่งซื้อทั้งหมดลงคลิปบอร์ด เพื่อนำไปวางส่งในแชตส่วนตัวหรือจดให้พนักงาน\n"
        "4. ปุ่ม 'ส่งรายการเข้า LINE': เมื่อกดปุ่ม ระบบจะเปิดแอปพลิเคชัน LINE พร้อมพิมพ์ข้อความคำสั่งซื้อที่จัดหน้าไว้อย่างสวยงามให้ทันที"
    )

    # ------------------ CHAPTER 3 ------------------
    add_section_heading("คู่มือสำหรับพนักงานและบาริสต้า (Staff Guide)", "3")

    p = doc.add_paragraph()
    p.add_run(
        "สำหรับพนักงานหน้าร้านหรือผู้รับออเดอร์ผ่าน LINE Official (@romruen.cafe) ข้อความที่ได้รับจากระบบจะอยู่ในรูปแบบที่เป็นระเบียบ "
        "ช่วยให้อ่านง่าย ชงถูกต้อง ไม่ตกหล่นออปชันพิเศษ:"
    )

    sample_order = (
        "🌿 รายการสั่ง - ร่มรื่นคาเฟ่ 🌿\n"
        "📅 เวลา: 27 ต.ค. 2026, 11:30\n"
        "------------------------------------\n"
        "1. มัทฉะลาเต้ (Uji Matcha Latte) x 1\n"
        "   - เย็น (Iced)\n"
        "   - หวาน 25%\n"
        "   - นมโอ๊ต Oatly (+฿15)\n"
        "   - วิปครีมสดแท้ (+฿15)\n"
        "   ราคา: ฿110\n"
        "2. ครัวซองต์เนยสด (French Butter Croissant) x 1\n"
        "   - อุ่นร้อนพร้อมทาน\n"
        "   ราคา: ฿75\n"
        "------------------------------------\n"
        "💵 ยอดรวมทั้งหมด: ฿185\n"
        "🙏 ขอบคุณที่เลือกความร่มรื่นครับ"
    )
    add_callout(sample_order, "ตัวอย่างข้อความคำสั่งซื้อที่ส่งผ่าน LINE", "F3ECE1")

    p = doc.add_paragraph()
    p.add_run("ขั้นตอนการปฏิบัติงานของพนักงานเมื่อได้รับออเดอร์:\n")
    p.add_run("1. ตรวจสอบรายการเครื่องดื่มและระดับความหวาน (สำคัญที่สุดเพื่อรสชาติที่ลูกค้าต้องการ)\n")
    p.add_run("2. ตรวจสอบชนิดนม หากมีระบุนมโอ๊ต นมถั่วเหลือง หรือนมอัลมอนด์ ให้หยิบกล่องนมเฉพาะนั้นๆ\n")
    p.add_run("3. หากมีเบเกอรี่ให้ดูว่าระบุ 'อุ่นร้อนพร้อมทาน' หรือ 'ไม่อุ่นร้อน' เพื่อเตรียมเข้าเตาอบในเวลาที่พอดีกับเครื่องดื่ม\n")
    p.add_run("4. แจ้งยอดรวมและส่ง QR Code พร้อมเพย์ให้ลูกค้าโอนชำระเงินตามยอดรวมที่ระบบคำนวณไว้")

    # ------------------ CHAPTER 4 ------------------
    add_section_heading("การปรับแต่งและแก้ไขข้อมูลในอนาคต (Admin & Maintenance)", "4")

    p = doc.add_paragraph()
    p.add_run(
        "ทางร้านสามารถปรับราคา เพิ่มเมนูใหม่ หรือเปลี่ยนเวลาเปิด-ปิดร้านได้ด้วยตัวเองอย่างง่ายดาย "
        "โดยเปิดไฟล์ app.js ด้วยโปรแกรมแก้ไขข้อความ เช่น Notepad หรือ VS Code"
    )

    add_subheading("4.1 การเพิ่มหรือแก้ไขเมนูใน app.js")
    p = doc.add_paragraph()
    p.add_run(
        "ข้อมูลเมนูจะอยู่ที่ตัวแปร const menuData ซึ่งจัดเรียงเป็นโครงสร้างที่เข้าใจง่าย แต่ละเมนูมีคุณสมบัติดังนี้:"
    )

    code_sample = (
        "{\n"
        "  id: 'matcha-latte',              // รหัสเมนู (ห้ามซ้ำ)\n"
        "  name: 'มัทฉะลาเต้',               // ชื่อภาษาไทย\n"
        "  nameEn: 'Uji Matcha Latte',      // ชื่อภาษาอังกฤษ\n"
        "  category: 'tea',                 // หมวดหมู่ (coffee, tea, refreshing, bakery)\n"
        "  price: 80,                       // ราคาเริ่มต้น (บาท)\n"
        "  tags: ['ซิกเนเจอร์', 'แนะนำ'],     // ป้ายไฮไลต์\n"
        "  image: 'URL รูปภาพ',              // ลิงก์รูปภาพเมนู\n"
        "  description: 'คำอธิบายรสชาติ...',  // รายละเอียดเมนู\n"
        "  type: 'drink',                   // ประเภท (drink หรือ bakery)\n"
        "  allowSweetness: true,            // เลือกระดับความหวานได้หรือไม่\n"
        "  allowMilk: true,                 // เลือกชนิดนมได้หรือไม่\n"
        "  allowTopping: true               // เลือกท็อปปิ้งได้หรือไม่\n"
        "}"
    )
    add_callout(code_sample, "โครงสร้างข้อมูลเมนูในไฟล์ app.js", "F5F5F5")

    add_subheading("4.2 การแก้ไขเวลาเปิด-ปิดร้าน และวันหยุด")
    p = doc.add_paragraph()
    p.add_run(
        "ค้นหาฟังก์ชัน checkStoreStatus() ในไฟล์ app.js:\n"
        "• หากต้องการเปลี่ยนวันหยุด: แก้ไขค่า day === 2 (เลข 0 = อาทิตย์, 1 = จันทร์, 2 = อังคาร, 3 = พุธ, ...)\n"
        "• หากต้องการเปลี่ยนเวลาเปิด-ปิด: แก้ไขตัวเลข currentTime >= 8 && currentTime < 17 (เลข 8 คือ 08:00 น. และเลข 17 คือ 17:00 น.)"
    )

    add_subheading("4.3 การแก้ไขช่องทางการติดต่อและเบอร์โทรศัพท์")
    p = doc.add_paragraph()
    p.add_run(
        "เปิดไฟล์ index.html และค้นหาส่วน <!-- Contact items grid -->:\n"
        "• เบอร์โทรศัพท์: แก้ไขข้อความ 089-123-4567 และค่า tel:0891234567\n"
        "• LINE Official: แก้ไขข้อความ @romruen.cafe และลิงก์ LINE\n"
        "• Instagram & Facebook: ใส่ URL หน้าเพจของร้านลงในแท็ก <a href=\"...\">"
    )

    # ------------------ CHAPTER 5 ------------------
    add_section_heading("คำแนะนำการนำเว็บไซต์ขึ้นออนไลน์ (Deployment)", "5")

    p = doc.add_paragraph()
    p.add_run(
        "เนื่องจากเว็บไซต์ถูกพัฒนาเป็นแบบ Static Web (HTML, CSS, JS) จึงสามารถนำขึ้นสู่อินเทอร์เน็ตได้ฟรีและรวดเร็ว โดยแนะนำ 3 ช่องทาง:\n\n"
        "1. Vercel / Netlify (แนะนำมากที่สุด): เพียงลากโฟลเดอร์ c:\\081 ไปวางบนหน้าเว็บ Vercel หรือ Netlify เว็บไซต์จะออนไลน์ทันที พร้อมได้ลิงก์ HTTPS ฟรี และสามารถผูกชื่อโดเมนของร้านได้ (เช่น romruen-cafe.com)\n\n"
        "2. GitHub Pages: อัปโหลดไฟล์ขึ้น GitHub Repository แล้วเปิดฟังก์ชัน GitHub Pages ในเมนู Settings\n\n"
        "3. Web Hosting ทั่วไป: อัปโหลดทั้ง 3 ไฟล์ (index.html, styles.css, app.js) เข้าไปยังโฟลเดอร์ public_html ผ่าน FTP ได้ทันที"
    )

    # Save document
    path_th = os.path.join(r"c:\081", "คู่มือการใช้งาน_ร่มรื่นคาเฟ่.docx")
    path_en = os.path.join(r"c:\081", "Romruen_Cafe_User_Manual.docx")
    doc.save(path_th)
    doc.save(path_en)
    print("Saved successfully to both paths!")

if __name__ == "__main__":
    create_manual()
