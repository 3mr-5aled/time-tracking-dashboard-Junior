function openCity(evt, cityName) {
  var i, tabcontent, tablinks, tabname
  tabcontent = document.querySelectorAll(".tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none"
    tabcontent[i].classList.remove("show")
    tabcontent[i].classList.add("hidden")
  }
  tablinks = document.querySelectorAll(".tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active")
  }
  tabname = cityName
  var elms = document.querySelectorAll(`[id='${tabname}']`)
  console.log("elms")
  for (var i = 0; i < elms.length; i++) {
    // elms[i].style.display = "flex"
    elms[i].classList.add("show")
    elms[i].classList.remove("hidden")
  }
  evt.currentTarget.classList.add("active")
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();
