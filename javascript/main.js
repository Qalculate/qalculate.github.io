const menuimg = document.getElementById("menuimg-js");
menuimg.addEventListener("click", menuOpen);

function menuOpen() {
        document.getElementById("topmenu-js").classList.add("add");
        document.getElementById("pageselect").classList.remove("show");
        document.getElementById("pageselect").classList.add("hide");
        window.setTimeout(menuOpen2, 50);
    } 

    function menuOpen2() {
        document.getElementById("topmenu-js").classList.add('show');
        document.getElementById("pageselect").classList.remove("add");
        document.getElementById("pageselect").classList.add("remove");
    }

const closeimg = document.getElementById("closeimg-js");
closeimg.addEventListener("click", menuClose);

function menuClose() {
    document.getElementById("topmenu-js").classList.remove("show");
    document.getElementById("topmenu-js").classList.add("hide");
    document.getElementById("pageselect").classList.remove("remove");
    document.getElementById("pageselect").classList.add("show");
    window.setTimeout(menuClose2, 200);
}

function menuClose2() {
    document.getElementById("topmenu-js").classList.remove('add');
    document.getElementById("topmenu-js").classList.add('remove');
}