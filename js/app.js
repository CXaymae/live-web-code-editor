document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
    // Save the code in localStorage
    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", cssCode);
    localStorage.setItem("jsCode", jsCode);
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    
    window.addEventListener("DOMContentLoaded", function() {
    // Check if there is a previously saved HTML code in localStorage
    if(localStorage.getItem("htmlCode")) {
        // If there is, retrieve it from localStorage and set the value of the "htmlCode" textarea to the saved code
        document.getElementById("htmlCode").value = localStorage.getItem("htmlCode");
    }
    // Check if there is a previously saved CSS code in localStorage
    if(localStorage.getItem("cssCode")) {
        // If there is, retrieve it from localStorage and set the value of the "cssCode" textarea to the saved code
        document.getElementById("cssCode").value = localStorage.getItem("cssCode");
    }
    // Check if there is a previously saved JavaScript code in localStorage
    if(localStorage.getItem("jsCode")) {
        // If there is, retrieve it from localStorage and set the value of the "jsCode" textarea to the saved code
        document.getElementById("jsCode").value = localStorage.getItem("jsCode");
    }
    showPreview(); // Call the showPreview function to update the preview after loading the saved code
});
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
