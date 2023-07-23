document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const text = document.querySelector("#text");
    const button = document.querySelector('#start');

    let totalTime = 7500;
    let breathTime = (totalTime / 5) * 2;
    let holdTime = totalTime / 5;

    function meditateAnimation() {
        text.innerHTML = "吸って！";
        container.className = "container grow";
        setTimeout(() => {
            text.innerHTML = "止めて！";

            setTimeout(() => {
                container.className = "container shrink";
                text.innerHTML = "吐いて！";
            }, holdTime);
        }, breathTime);
    }

    button.addEventListener('click', function () {
        const endTime = new Date().getTime() + 180000;
        updateTimer(); // タイマーを開始する直前に1回実行して初期表示を行う

        const timerInterval = setInterval(updateTimer, 1000);
        function updateTimer() {
            let current = new Date().getTime();
            let remainingTime = endTime - current;

            let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            document.querySelector('.minutes').textContent = formatTime(minutes);
            document.querySelector('.seconds').textContent = formatTime(seconds);

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
            }
        }

        function formatTime(time) {
            return time < 10 ? "0" + time : time.toString();
        }

        
    });

    setInterval(meditateAnimation,totalTime);

    meditateAnimation(); // 初期表示のために1回実行
});
