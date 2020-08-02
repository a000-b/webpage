function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

var msg1 = "";

function msg() {
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('newId').innerHTML;
    var msg1 = document.createElement("p");
    msg1.innerHTML = document.getElementById("msg1").value;
    div.appendChild(msg1);
    var msg2 = document.createElement("p");
    msg2.innerHTML = document.getElementById("msg2").value;
    div.appendChild(msg2);

    document.body.appendChild(div);
    var element = document.getElementById("attach");
    element.appendChild(div);

    document.getElementById('msg1').value = "";
    document.getElementById('msg2').value = "";
}