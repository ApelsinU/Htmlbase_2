function HtmlCssSwitch() {
    let tabHtml = document.getElementById("tab-html");
    let tabCss = document.getElementById("tab-css");

    let colHtml = document.getElementById("col-html");
    let colCss = document.getElementById("col-css");

    console.log(tabHtml, tabCss, colHtml);

    tabHtml.addEventListener('click', function(){
        colHtml.classList.remove("active");
        colCss.classList.remove("active");
        tabHtml.classList.remove("active");
        tabCss.classList.remove("active");

        colHtml.classList.add("active");
        tabHtml.classList.add("active");
    });

    tabCss.addEventListener('click', function(){
        colHtml.classList.remove("active");
        colCss.classList.remove("active");
        tabHtml.classList.remove("active");
        tabCss.classList.remove("active");

        colCss.classList.add("active");
        tabCss.classList.add("active");
    });

    document.getElementById("tab-html").click();
}


function PseudoClassesShow() {
    let pseudoBtn = document.querySelector(".pseudo-btn");
    let pseudoContent = document.querySelector(".pseudo__content");
    let cssBtn = document.querySelector(".css-btn");
    let cssContent = document.querySelector(".css__content");

    pseudoBtn.addEventListener('click', function(){
        if ( pseudoBtn.classList.contains("active")) {
            pseudoContent.classList.remove("active");
            pseudoBtn.classList.remove("active");
        }
        else {
            pseudoContent.classList.add("active");
            pseudoBtn.classList.add("active");
        };
    });

    cssBtn.addEventListener('click', function(){
        if ( cssBtn.classList.contains("active")) {
            cssContent.classList.remove("active");
            cssBtn.classList.remove("active");
        }
        else {
            cssContent.classList.add("active");
            cssBtn.classList.add("active");
        };
    });
}


HtmlCssSwitch();
PseudoClassesShow();
