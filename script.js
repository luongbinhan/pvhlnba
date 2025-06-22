// script.js
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);

// Cập nhật ngay lập tức khi trang được tải
updateClock();
