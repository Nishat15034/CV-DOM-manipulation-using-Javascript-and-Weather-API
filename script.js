function edu1(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}


function edu2(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}

function edu3(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}


function work1(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}

function work2(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}


function contest(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}

function problem(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}

function projects(item, icon) {
    var content = document.getElementById(item);
    var lists = content.classList;
    if (lists.contains('hidden')) {
        lists.replace('hidden', 'block');
        icon.className = "fas fa-chevron-up";
    } else {
        lists.replace('block', 'hidden');
        icon.className = "fas fa-chevron-down";
    }
}

function weatherShow() {

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Kishoreganj&appid=b2b674ac7ac03d339ca9db80db6ad763&units=metric').then(function(response) {
        temp = response.data.main.temp;
        feel = response.data.main.feels_like;
        humidity = response.data.main.humidity;
        wind = response.data.wind.speed;


        document.getElementById("temp").innerHTML = temp + "°C";
        document.getElementById("feel").innerHTML = feel + "°C";
        document.getElementById("humidity").innerHTML = humidity + "%";
        document.getElementById("wind").innerHTML = temp + "km/h";

        document.getElementById("weatherInfo").style.display = "block";

        setTimeout(function() {
            document.getElementById("weatherInfo").style.display = "none";
        }, 5000);

        console.log(response.data);

    }).catch(function(error) {
        console.log(error);
    });
}