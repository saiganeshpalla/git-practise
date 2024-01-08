function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    var timeString = hours + ':' + minutes + ':' + seconds;
  
    document.getElementById('time').innerText = timeString;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately
  updateTime();
  