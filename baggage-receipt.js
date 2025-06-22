// Mở cửa sổ mới để hiển thị phiếu bàn giao hành lý
function openBaggageReceiptWindow() {
    // Mở cửa sổ mới
    const baggageWindow = window.open("", "_blank", "width=800,height=600");

    // Đưa nội dung vào cửa sổ mới
    baggageWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Phiếu Bàn Giao Hành Lý</title>
            <style>
                /* Đưa vào CSS của phiếu bàn giao hành lý */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
                .receipt-container {
                    width: 210mm;
                    margin: auto;
                    border: 1px solid black;
                    padding: 10mm;
                    box-sizing: border-box;
                }
                .receipt-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .receipt-header .logo-container {
                    flex: 1;
                    text-align: left;
                }
                .receipt-header .logo-container img {
                    max-width: 80px;
                }
                .receipt-header .title-container {
                    flex: 2;
                    text-align: center;
                    font-size: 16px;
                    font-weight: bold;
                }
                .receipt-header .info-container {
                    flex: 1;
                    text-align: right;
                    font-size: 12px;
                }
                .info-container p {
                    margin: 0;
                }
                .receipt-details {
                    margin-bottom: 20px;
                }
                .receipt-details p {
                    margin: 5px 0;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                table, th, td {
                    border: 1px solid black;
                }
                th, td {
                    padding: 5px;
                    text-align: center;
                    font-size: 12px;
                    height: 30px;
                }
                .note-section {
                    margin-top: 20px;
                }

                .dotted-line {
                    font-size: 16px; /* Đảm bảo chữ có kích thước 16px */
                    white-space: nowrap; /* Đảm bảo không có xuống dòng */
                    display: block;
                    width: 100%;
                    border-bottom: 1px dotted #000; /* Tạo dòng chấm */
                    margin: 15px 0; /* Tăng khoảng cách giữa các dòng chấm */
                }

                .note-section p {
                    font-size: 16px;  /* Đảm bảo kích thước chữ cho phần ghi chú */
                    margin: 0;
                }

                /* Đảm bảo logo chỉ hiển thị trong cửa sổ in */
                .logo-container img {
                    display: block; /* Đảm bảo hình ảnh hiển thị */
                    max-width: 80px; /* Giới hạn kích thước logo */
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <div class="receipt-container">
                <div class="receipt-header">
                    <div class="logo-container">
                        <img src="logo2.png" alt="Logo" style="max-width: 130px; display: block !important;">
                    </div>
                    <div class="title-container">
                        <p>PHIẾU GIAO NHẬN HÀNH LÝ</p>
                        <p>CHUYẾN BAY ĐẾN</p>
                    </div>
                    <div class="info-container">
                        <p>Mã số: IF/VNBA/TTĐH/09</p>
                        <p>Ban hành: 01</p>
                        <p>Hiệu lực: 15/08/2016</p>
                    </div>
                </div>

                <div class="receipt-details">
                    <p>Số hiệu chuyến bay:<span>.........</span></p>
                    <br>
                    <p>Vị trí băng chuyền:<span>.........</span></p>

                </div>

                <table>
                    <thead>
                        <tr><th>STT</th><th>Số thùng hành lý</th><th>Loại hành lý</th><th>Giờ bàn giao<br><span style="display: block; text-align: center;">tại BC Đến</th><th>Người giao<br><span style="display: block; text-align: center;">DVSĐ</th><th>Người nhận<br><span style="display: block; text-align: center;">PVHL</th></tr>
                    </thead>
                    <tbody>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
                <div class="note-section">
                    <p><strong>Ghi chú:</strong></p>
                    <span class="dotted-line"></span>
                    <span class="dotted-line"></span>
                </div>
            </div>
        </body>
        </html>
    `);

    baggageWindow.document.close();

    // Đợi 1 giây trước khi gọi lệnh in
    setTimeout(function() {
        baggageWindow.print();
    }, 500); // Chờ 500ms (1 giây) trước khi in

    baggageWindow.onafterprint = function() {
        baggageWindow.close();
    };
}


