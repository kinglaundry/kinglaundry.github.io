var dataReload = document.querySelectorAll("[data-reload]");
var language = {
    en:{
        abt: "King Laundry and Dry Cleaning is laundry provider (24 hours service) with free delivery pickup and drop off only in Yogyakarta City. Established in 2016 and had a pew merchant, and have a good quality tools and experience employee",
        nav1: "Home",
        nav2: "Introduction",
        nav3: "Reason",
        nav4: "Contact",
        ls1: "Storage",
        ls2: "We store the clean laundry on the hygine dry, clean and tidy place",
        rs1: "Free Delivery",
        rs2: "We offer free delivery (pickup and drop off) for our customer",
        title1: "Introduction",
        desc1: "Focus in this business is very important for the laundry process in this era, laundry is very needed. But sometimes we don't want to lost our focus in business goals. Laundry management need a time, investation, human resources and a good laundry management. Cooperation laundry with other panty make the laundry business more easy, focus and give a chance to develope this business which is need efficiency and effectiveness need for sight to choose business partner in the laundry management. Some of the thing that need attention when we choose the business partner is law status for all aspect. How to operate laundry machine for industrial, quality laundry, on timing and free delivery with choosed right business partner. One of the important duty one and we can continue to focus in the mainpoint of the business",
        title2: "Why Choose Us ?",
        desc2a: "Processing with modern machine and special heavy duty plus we using premium chemical",
        desc2b: "Standard 24-hour service is guaranteed to complete. Service is open every day, start from Monday to Sunday",
        desc2c: "Standar Operasional Procedure memberikan hasil sesuai spesifikasi dan memenuhi kebutuhan konsumen secara efisien dan efektif. Sehingga bisa memenuhi ketepatan waktu dan sesuai standar kualitas",
        desc2d: "Press machine with roller for linnen and for big laundry. This is supported by professional human resource while processing",
        desc2e: "Steam cleaning needed for special customer and the laundry material wich is need more special handling, and the material wich is suspecible with water. That why we commited to keep the quality with using special detergent who friendly with environment",
        desc2f: "Professional staff who get well trained, so when the staff handling the machine and when clean the laundry we get a good result which is meet our standart and the customer happy",
        title3: "Free Delivery (Pick up and Drop off)",
        title3a: "Step 1",
        desc3a: "Prepare the laundry (dirty laundry) that customer want to wash in the King Laundry",
        title3b: "Step 2",
        desc3b: "We pick up to customer location",
        title3c: "Step 3",
        desc3c: "Laundry start to handle (cleaning, washing & pressing)",
        title3d: "Step 4",
        desc3d: "Pack the laundry first and the laundry already to delivery",
        title4: "Contact Person",
        call: "Call / Whatsapp",
        ask: "Have Question ?",
        ask2: "King Laundry location is beside on Toko Ikbar",
        order: "Order Now !",
    },
    id:{
        abt: "Adalah penyedia layanan jasa pencucian kilat 24 jam non stop dengan fasilitas antar jemput gratis di area Kota Yogyakarta. King didirikan pada tahun 2016, yang saat ini memiliki beberapa cabang dan workshop yang memadai dengan peralatan pendukung yang berkualitas serta karyawan yang berpengalaman mengenai laundry & dry clean",
        nav1: "Beranda",
        nav2: "Pendahuluan",
        nav3: "Alasan",
        nav4: "Hubungi",
        ls1: "Penyimpanan Mencukupi",
        ls2: "Kami menyimpan hasil cucian di tempat yang luas serta higienis dan rapi",
        rs1: "Pengiriman Gratis",
        rs2: "Kami menawarkan gratis antar jemput bagi pelanggan yang berada di area Yogyakarta",
        title1: "Pendahuluan",
        desc1: "Fokus dalam bisnis merupakan hal yang sangat penting untuk kemajuan usaha ditengah-tengah kecepatan bisnis dalam era sekarang ini. Kebutuhan laundry tentu sangat dibutuhkan, namun terkadang kita tidak ingin kehilangan fokus dalam tujuan bisnis. Pengelolaan laundry sangat membutuhkan waktu, investasi, sumber daya manusia dan managemen laundry. Pengelolaan laundry dengan pihak lain memberikan kemudahan dalam fokus bisnis utama kita dan memberikan ruang dan waktu untuk mengembangkan bisnis yang membutuhkan efisiensi dan efektifitas. Perlu kejelian memilih partner dalam pengelolaan laundry. Beberapa hal yang perlu diperhatikan dalam memilih partner adalah status badan hukum untuk aspek legalnya, penggunaan mesin-mesin laundry untuk industri, higienitas proses pengerjaan laundry, kualitas hasil laundry, ketepatan waktu dan fasilitas antar jemput secara exclusive. Dengan memilih partner yang tepat, maka satu pekerjaan penting sudah kita kerjakaan dan kita bisa kembali fokus kepada bisnis utama kita",
        title2: "Kenapa Kami ?",
        desc2a: "Pengerjaan dengan mesin-mesin modern dan heavy duty untuk skala industri serta menggunakan chemicals yang berkualitas serta ramah lingkungan",
        desc2b: "Standar pelayanan 24 jam dijamin selesai. Pelayanan dibuka setiap hari, mulai dari hari Senin sampai dengan hari Minggu",
        desc2c: "Standar Operasional Procedure memberikan hasil sesuai spesifikasi dan memenuhi kebutuhan konsumen secara efisien dan efektif. Sehingga bisa memenuhi ketepatan waktu dan sesuai standar kualitas",
        desc2d: "Mesin seterika dengan sistem roller untuk linen dan kebutuhan ukuran laundry besar. Hal ini didukung SDM tenaga profesional dalam proses ironing untuk laundry Anda",
        desc2e: "Steam cleaning dibutuhkan untuk kebutuhan khusus konsumen dan laundry yang memiliki tingkat kehalusan tinggi serta rentan terhadap air. Untuk itu kami berkomitmen untuk tetap menjaga kualitas laundry dengan menggunakan detergent yang ramah lingkungan",
        desc2f: "Tenaga profesional yang terlatih dalam bidang laundry. Staff dilatih langsung dari tenaga ahli manufacturing sehingga tepat dalam handling mesin maupun proses laundry. Hasil yang diperoleh akan sesuai dengan standar yang ditentukan dengan fokus kepada kepuasan pelanggan.",
        title3: "ANTAR JEMPUT GRATIS",
        title3a: "Langkah 1",
        desc3a: "Siapkan cucian anda terlebih dahulu",
        title3b: "Langkah 2",
        desc3b: "Kami jemput langsung ke lokasi anda",
        title3c: "Langkah 3",
        desc3c: "Proses laundry & dry cleaning",
        title3d: "Langkah 4",
        desc3d: "Packing dan siap untuk diantar kembali",
        title4: "Hubungi Kami",
        call: "Telepon / Whatsapp",
        ask: "Punya Pertanyaan ?",
        ask2: "Toko kami berada persis disamping Toko Ikbar",
        order: "Pesan Sekarang !",
    }
}
if(window.location.hash){
    if(window.location.hash == '#en'){
        Object.keys(language.en).forEach(function (key) {
            $("." + key).text(language.en[key])
        });
    }
}else{
    Object.keys(language.id).forEach(function (key) {
        $("." + key).text(language.id[key])
    });
}

for (let i = 0; i < dataReload.length; i++) {
    dataReload[i].onclick = function(){
        window.location.href = dataReload[i].hash;
        location.reload(true);
    }
}