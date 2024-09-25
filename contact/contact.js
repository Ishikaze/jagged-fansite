
    const http = new XMLHttpRequest();
    const url = 'https://api.lanyard.rest/v1/users/767020823524671489';

    http.onload = function () {
        console.log('loaded')
        const obj = JSON.parse(http.responseText)

        document.getElementById('username').innerHTML = obj.data.discord_user.display_name;

        document.getElementById('pfp').style.backgroundImage = 'url(https://api.lanyard.rest/' + obj.data.discord_user.id + '.webp)';
        document.getElementById('dbug').innerHTML = http.responseText

        if (obj.data.discord_status !== "offline") {
            document.getElementById('status-text').innerHTML = "I am currently online!";
            document.getElementById('status').style.backgroundColor = "#57F287"
        } else {
            document.getElementById('status-text').innerHTML = "I am currently offfline.";
            document.getElementById('status').style.backgroundColor = "grey"
        }
}

setTimeout(function () {
    http.open("GET", url);
http.send();
}, 1)

setInterval(function () {
    http.open("GET", url);
http.send();
}, 10000)

