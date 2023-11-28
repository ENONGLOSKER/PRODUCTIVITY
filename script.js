let productiveTime;
let breakTime;
let timer;
let intervals;

function startTimer() {
    productiveTime = parseInt(document.getElementById('productive-time').value) * 60 || 0; // Mengonversi menit ke detik
    breakTime = parseInt(document.getElementById('break-time').value) * 60 || 0; // Mengonversi menit ke detik

    if (productiveTime > 0 && breakTime > 0) {
        intervals = Math.floor(productiveTime / breakTime);

        timer = setInterval(function () {
            if (productiveTime > 0) {
                productiveTime--;
                updateTimerDisplay(productiveTime);

                if (productiveTime % breakTime === 0 && productiveTime !== 0) {
                    showNotification('Break Time!');
                }
            } else {
                clearInterval(timer);
                showNotification('Session Completed!');
            }
        }, 1000); // Menggunakan interval detik
    } else {
        alert('Please enter valid productive and break times.');
    }
}

function stopTimer() {
    clearInterval(timer);
    showNotification('Timer Stopped');
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer-display').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function showNotification(message) {
    alert(message);
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('time').innerText = formattedTime;

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('id-ID', dateOptions);
    document.getElementById('date').innerText = formattedDate;
}

setInterval(updateClock, 1000);