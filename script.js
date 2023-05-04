function getFormvalue() {
    var x=document.getElementById("form1");
    console.log(x);
    let form_info = ""
    for (var i=0;i<x.length;i++) {
        if (x.elements[i].value!='Submit') {
			console.log(x.elements[i].value);
            form_info += x.elements[i].name + ": " + x.elements[i].value + "\n"
        }
    }
    alert(form_info.substring(0,form_info.length-1))
}