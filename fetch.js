// fecth corrected for homepage
fetch("http://valender.dk/t9/wp-json/wp/v2/past-project")
    .then(res => res.json())
    .then(handleData)


function handleData(smallPP) {
    console.log(smallPP);
    smallPP.forEach(createProject);
}

let e = 1;

function createProject(spp) {
    const template = document.querySelector(".small_project_template").content;
    const copy = template.cloneNode(true);
    const holder = copy.querySelector(".project_holder_small");

    holder.classList.add(`project_box_${e}`);
    holder.setAttribute("id", spp.id);
    copy.querySelector(".project_img_1_small").src = spp.photo_1.guid;
    copy.querySelector(".project_img_2_small").src = spp.photo_2.guid;
    copy.querySelector(".project_img_3_small").src = spp.photo_3.guid;

    document.querySelector(".wrapper_pp").appendChild(copy);

    e++;

}

fetch("http://valender.dk/t9/wp-json/wp/v2/past-project-big")
    .then(res => res.json())
    .then(rehandleData)


function rehandleData(bigPP) {
    console.log(bigPP);
    bigPP.forEach(createBigProject);
}

function createBigProject(bpp) {
    const template_big = document.querySelector(".big_project_template").content;
    const copy_big = template_big.cloneNode(true);

    copy_big.querySelector(".project_img_1").src = bpp.photo_1.guid;
    copy_big.querySelector(".project_img_2").src = bpp.photo_2.guid;
    copy_big.querySelector(".project_img_3").src = bpp.photo_3.guid;

    document.querySelector(".wrapper_pp").appendChild(copy_big);

}

setTimeout(function () {
    const pp = document.querySelectorAll(".project_holder_small");

    pp.forEach(function (e) {
        e.addEventListener("click", doSomething, false);
    })
}, 1000);


function doSomething(f) {

    var currentId = f.currentTarget.getAttribute("id");
    var urlString = "url(http://valender.dk/t9/wp-json/wp/v2/past-project?id=";
    var endpoint = ".photo_1.guid)";

    const modal = document.querySelector(".module_container");

    console.log(currentId + urlString + endpoint);
    modal.addEventListener("click", Disappear, false);
    modal.classList.toggle("appear");

}

function Disappear() {
    const modal = document.querySelector(".module_container");
    modal.classList.toggle("appear");
}
