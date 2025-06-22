function calculateTime() {
    const baggageCount = parseInt(document.getElementById('baggageCount').value, 10);
    if (isNaN(baggageCount) || baggageCount < 0) {
        document.getElementById('result').innerText = 'Nhập số kiện vào ô';
        return;
    }

    // Tính thời gian
    const time = Math.ceil(baggageCount / 100) * 12;
    document.getElementById('result').innerText = `Tối đa: ${time} phút`;
}

function calculateDuration() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    if (!startTime || !endTime || startTime < 0 || endTime < 0 || startTime > 2359 || endTime > 2359) {
        document.getElementById('timeResult').innerText = 'Nhập giờ vào ô';
        return;
    }

    // Chuyển thời gian HHMM sang phút
    const startHour = Math.floor(startTime / 100);
    const startMinute = startTime % 100;
    const endHour = Math.floor(endTime / 100);
    const endMinute = endTime % 100;

    const startTotalMinutes = startHour * 60 + startMinute;
    const endTotalMinutes = endHour * 60 + endMinute;

    // Tính tổng thời gian
    let duration = endTotalMinutes - startTotalMinutes;
    if (duration < 0) {
        duration += 24 * 60; // Trường hợp thời gian kết thúc qua ngày hôm sau
    }

    document.getElementById('timeResult').innerText = `Tổng thời gian: ${duration} phút`;
}




function calculateEndTime() {
    const startTime = parseInt(document.getElementById('startTime2').value, 10);
    const baggageCount = parseInt(document.getElementById('baggageCount2').value, 10);

    if (isNaN(startTime) || isNaN(baggageCount) || startTime < 0 || baggageCount < 0) {
        document.getElementById('endTimeResult').innerText = 'Nhập đúng giờ bắt đầu và số kiện';
        return;
    }

    // Tính toán thời gian kết thúc
    const timeToAdd = Math.ceil(baggageCount / 100) * 12; // Mỗi 100 kiện = 12 phút
    const startHour = Math.floor(startTime / 100);
    const startMinute = startTime % 100;

    let endHour = startHour;
    let endMinute = startMinute + timeToAdd;


    // Xử lý nếu phút vượt quá 60
    if (endMinute >= 60) {
        endHour += Math.floor(endMinute / 60);
        endMinute %= 60;
    }

    // Định dạng giờ kết thúc HHMM
    const endTime = `${String(endHour).padStart(2, '0')}${String(endMinute).padStart(2, '0')}`;
    document.getElementById('endTimeResult').innerText = `Thời gian kết thúc: ${endTime}`;
}

