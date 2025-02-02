const url = window.location.href.split("?")[1].split("&");
url[3] = url[3].replace("%40", "@");
url[4] = url[4].replace("%2B", "+");


const display = document.querySelector("#details1");
const div = document.createElement("div");
div.innerHTML = `<p>Thank you for filling our form. Your details are as follows:</p>
<p>Name: ${url[0].split("=")[1]} ${url[1].split("=")[1]}</p>
<p>Email: ${url[3].split("=")[1]}</p>
<p>Phone: ${url[4].split("=")[1]}</p>
<p>Organization name: ${url[5].split("=")[1]}</p>
<p>Time Loaded: ${url[8].split("=")[1]}</p>
`;
display.appendChild(div);