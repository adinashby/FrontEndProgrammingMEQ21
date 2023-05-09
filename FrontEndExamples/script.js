function changeColor() {
  let paragraph = document.createElement("p");
  paragraph.setAttribute("id", "my-p");
  paragraph.innerHTML = "This is going to pop up!";

  if (document.getElementById("test").style.backgroundColor == "red") {
    document.getElementById("test").style.backgroundColor = "blue";
    document.getElementById("test").appendChild(paragraph);
    $("div").css("font-style", "italic");
  } else {
    document.getElementById("test").style.backgroundColor = "red";
    document
      .getElementById("test")
      .removeChild(document.getElementById("my-p"));
    $("div").css("font-style", "normal");
  }
}

function hideOrShow() {
  //$(element name).action();
  // document.getElementByTagName(element name)

  $("#img-1").fadeToggle();
  $("#test-p").wrap("<div class='new'><p>Hi</p></div>");
}
