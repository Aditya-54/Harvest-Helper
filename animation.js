window.addEventListener("load",() =< {
    const animation01=document.querySelector(".animation01");
    animation01.classList.add("animation01-hidden");
    animation01.addEventListener("transitionend",() =< {
        document.body.removechild("animation01");
    })
})