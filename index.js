console.log('Script Running!')

var sidebarToggle = document.getElementById("sidebar-toggle");

sidebarToggle.onclick = function() {
    var sidebar = document.getElementById('sidebar')
    
    sidebar.style.transform = "translateX(0)"
    sidebar.style.backgroundColor = "rgb(170, 210, 54)";
}