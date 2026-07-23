export default function menuMobile()
{
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileBotao = document.getElementById("mobile-botao");

    mobileBotao.addEventListener("click", () =>
    {
        mobileMenu.classList.toggle("max-md:hidden");
        mobileMenu.classList.toggle("max-md:flex");

    });

    mobileMenu.addEventListener("click", () =>
    {
        mobileMenu.classList.add("max-md:hidden");
        mobileMenu.classList.remove("max-md:flex");

    });

}
