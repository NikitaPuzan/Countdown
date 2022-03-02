let countDownDate = new Date("Dec 31, 2022 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "  :  " + hours + "  :  "
    + minutes + "  :  " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

const sendEmail = event => {
  event.preventDefault()
  let url = 'index.html#popup1';
  sendAjax(url);
}
function sendAjax(url)
{
  let req = createRequest();
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if(req.status == 200) alert('Отправка формы выполнена');
    }
  }
  req.open('GET',url,true);
  req.send(null);
}
function createRequest()
{
  var Request = false;
  if (window.XMLHttpRequest)
  {
    Request = new XMLHttpRequest();
  }
  else if (window.ActiveXObject)
  {
    try
    {
      Request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    catch (CatchException)
    {
      Request = new ActiveXObject('Msxml2.XMLHTTP');
    }
  }

  if (!Request)
  {
    alert('Невозможно создать XMLHttpRequest');
  }
  return Request;
}