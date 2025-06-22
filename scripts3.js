function showAirlineInfo() {
    const airlineSelect = document.getElementById("airlineSelect");
    const selectedAirline = airlineSelect.value;
    const airlineImages = document.getElementById("airlineImages");
    const airlineLogo = document.getElementById("airlineLogo");

    // Xóa nội dung cũ
    airlineImages.innerHTML = "";
    airlineLogo.innerHTML = "";

    // Danh sách logo của các hãng hàng không
    const airlineLogos = {
        VN: "VN/logo.png",
        BR: "BR/logo.png",
        CI: "CI/logo.png",
        CX: "CX/logo.png",
        JL: "JL/logo.png",
        JX: "JX/logo.png",
        KE: "KE/logo.png",
        MH: "MH/logo.png",
        NH: "NH/logo.png",
        OZ: "OZ/logo.png",
        SQ: "SQ/logo.png"
    };

    // Danh sách các hãng hàng không và đường dẫn ảnh tương ứng
    const airlines = {
        VN: {
            imagePaths: ["VN/1.png", "VN/2.png", "VN/3.png", "VN/4.png", "VN/5.png"],
            imageLabels: ["VIP", "BJ", "BP", "BP", "TỔ BAY"]
        },
        BR: {
            imagePaths: ["BR/1.png", "BR/2.png", "BR/3.png"],
            imageLabels: ["F1", "F2", "F2"]
        },
        CI: {
            imagePaths: ["CI/1.png", "CI/2.png"],
            imageLabels: ["BF", "BP"]
        },
        CX: {
            imagePaths: ["CX/1.png", "CX/2.png"],
            imageLabels: ["BF", "BP"]
        },
        JL: {
            imagePaths: ["JL/1.png", "JL/2.png", "JL/3.png", "JL/4.png"],
            imageLabels: ["VIP", "BF", "BC", "EXP"]
        },
        JX: {
            imagePaths: ["JX/1.png", "JX/2.png", "JX/3.png"],
            imageLabels: ["BF", "BP", "BS"]
        },
        KE: {
            imagePaths: ["KE/1.png", "KE/2.png", "KE/3.png", "KE/4.png"],
            imageLabels: ["VIP", "BF", "BC", "BL"]
        },
        MH: {
            imagePaths: ["MH/1.png", "MH/2.png", "MH/3.png"],
            imageLabels: ["PLA", "BJ", "BP"]
        },
        NH: {
            imagePaths: ["NH/1.png", "NH/2.png", "NH/3.png"],
            imageLabels: ["VIP", "BF", "BC"]
        },
        OZ: {
            imagePaths: ["OZ/1.png", "OZ/2.png", "OZ/3.png", "OZ/4.png", "OZ/5.png"],
            imageLabels: ["VIP", "BF", "BC", "BP", "BU"]
        },
        SQ: {
            imagePaths: ["SQ/1.png", "SQ/2.png", "SQ/3.png"],
            imageLabels: ["VIP", "BF", "BJ"]
        }
    };

    // Hiển thị logo và thông tin hãng
    if (selectedAirline && airlines[selectedAirline]) {
        const { imagePaths, imageLabels } = airlines[selectedAirline];

        // Thêm logo vào bảng
        if (airlineLogos[selectedAirline]) {
            const logoImg = document.createElement("img");
            logoImg.src = airlineLogos[selectedAirline];
            logoImg.alt = `${selectedAirline} Logo`;
            logoImg.className = "my-unique-airline-image";  // Đổi tên lớp CSS
            airlineLogo.appendChild(logoImg);
        }

        airlineImages.appendChild(airlineLogo);

        // Thêm ảnh và nhãn
        imagePaths.forEach((path, index) => {
            const imgContainer = document.createElement("div");
            imgContainer.className = "my-unique-image-container";  // Đổi tên lớp CSS

            const label = document.createElement("p");
            label.textContent = imageLabels[index];
            label.className = "my-unique-image-label";  // Đổi tên lớp CSS

            const img = document.createElement("img");
            img.src = path;
            img.alt = imageLabels[index];
            img.className = "my-unique-airline-image";  // Đổi tên lớp CSS

            imgContainer.appendChild(label);
            imgContainer.appendChild(img);
            airlineImages.appendChild(imgContainer);
        });

        airlineImages.style.display = "block";
    } else {
        airlineImages.style.display = "none";
    }
}
