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
    const holder_big = copy_big.querySelector(".project_holder_big");

    holder_big.setAttribute("id", bpp.id);
    copy_big.querySelector(".project_img_1").src = bpp.photo_1.guid;
    copy_big.querySelector(".project_img_2").src = bpp.photo_2.guid;
    copy_big.querySelector(".project_img_3").src = bpp.photo_3.guid;

    document.querySelector(".wrapper_pp").appendChild(copy_big);

}

setTimeout(function () {

    const big_box = document.querySelector(".project_holder_big");
    big_box.addEventListener("click", doSomethingtoo, false);

    const pp = document.querySelectorAll(".project_holder_small");

    pp.forEach(function (e) {
        e.addEventListener("click", doSomething, false);
    })
}, 2000);


function doSomething(f) {

    var currentId = f.currentTarget.getAttribute("id");
    var urlString = "http://valender.dk/t9/wp-json/wp/v2/past-project/";
    var endpoint = ".photo_1.guid";

    fetch(`${urlString + currentId}`)
        .then(res => res.json())
        .then(fillModal)

    function fillModal(jsonData) {
        const modal = document.querySelector(".module_container");
        const moduleb = document.querySelector(".module_b");
        const modulem = document.querySelector(".module_m");
        const modules1 = document.querySelector(".module_s1");
        const modules2 = document.querySelector(".module_s2");

        const module_b_title = document.querySelector("#module_b_title");
        const module_b_p = document.querySelector("#module_b_p");

        const module_m_title = document.querySelector("#module_m_title");
        const module_m_p = document.querySelector("#module_m_p");

        const module_s1_title = document.querySelector("#module_s1_title");
        const module_s1_p = document.querySelector("#module_s1_p");

        const module_s2_title = document.querySelector("#module_s2_title");
        const module_s2_p = document.querySelector("#module_s2_p");

        moduleb.style.background = "url(" + `${jsonData.photo_1.guid}` + ")";
        moduleb.style.backgroundSize = "cover";

        modulem.style.background = "url(" + `${jsonData.photo_2.guid}` + ")";
        modulem.style.backgroundSize = "cover";

        modules1.style.background = "url(" + `${jsonData.photo_3.guid}` + ")";
        modules1.style.backgroundSize = "cover";

        modules2.style.background = "url(" + `${jsonData.photo_4.guid}` + ")";
        modules2.style.backgroundSize = "cover";

        module_b_title.innerHTML = jsonData.title.rendered;
        module_b_p.innerHTML = jsonData.content.rendered;

        module_m_title.innerHTML = jsonData.title.rendered;
        module_m_p.innerHTML = jsonData.content.rendered;

        module_s1_title.innerHTML = jsonData.title.rendered;
        module_s1_p.innerHTML = jsonData.content.rendered;

        module_s2_title.innerHTML = jsonData.title.rendered;
        module_s2_p.innerHTML = jsonData.content.rendered;

        console.log(moduleb.firstChild.firstChild);
        modal.addEventListener("click", Disappear, false);
        modal.classList.toggle("appear");


    }

}

function Disappear() {
    const modal = document.querySelector(".module_container");
    modal.classList.toggle("appear");
}

function doSomethingtoo(f) {

    var currentId = f.currentTarget.getAttribute("id");
    var urlString = "http://valender.dk/t9/wp-json/wp/v2/past-project-big/";
    var endpoint = ".photo_1.guid";

    fetch(`${urlString + currentId}`)
        .then(res => res.json())
        .then(fillModal)

    function fillModal(jsonData) {
        const modal = document.querySelector(".module_container");
        const moduleb = document.querySelector(".module_b");
        const modulem = document.querySelector(".module_m");
        const modules1 = document.querySelector(".module_s1");
        const modules2 = document.querySelector(".module_s2");


        moduleb.style.background = "url(" + `${jsonData.photo_1.guid}` + ")";
        moduleb.style.backgroundSize = "cover";

        modulem.style.background = "url(" + `${jsonData.photo_2.guid}` + ")";
        modulem.style.backgroundSize = "cover";

        modules1.style.background = "url(" + `${jsonData.photo_3.guid}` + ")";
        modules1.style.backgroundSize = "cover";

        modules2.style.background = "url(" + `${jsonData.photo_4.guid}` + ")";
        modules2.style.backgroundSize = "cover";

        modal.addEventListener("click", Disappear, false);
        modal.classList.toggle("appear");
    }

}
