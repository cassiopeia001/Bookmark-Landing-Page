const iconMenu= document.getElementById("menu-icon");
const iconClose= document.getElementById("close-icon");
const navbar= document.getElementById("navbar");
const list= document.getElementById("list");
const logo= document.getElementById("logo");
const socials= document.getElementById("socials");
const featuresContainer= document.getElementById("features-container");
const featuresList= featuresContainer.querySelectorAll(':scope > div');
const tabContainer= document.getElementById('tab-container');
const tabList= tabContainer.querySelectorAll('button');
const form= document.getElementById('form');
const email= document.getElementById('email');
const submitButton= document.getElementById('submit-btn');

iconMenu.addEventListener('click', ()=>{
    navbar.classList.add("fixed", "mt-0", "top-0", "left-0","w-full","h-full","z-20","bg-VeryDarkBlue","opacity-85","flex-col", "p-10");
    navbar.classList.remove('mt-7');
    iconMenu.classList.remove("md:block");
    iconClose.classList.remove("hidden");
    list.classList.remove("md:hidden");
    socials.classList.add("flex");
    socials.classList.remove("hidden");
    logo.src="images/logo-bookmark -light.svg";
});
iconClose.addEventListener('click', ()=>{
    navbar.classList.remove("fixed", "top-0", "left-0","w-full","h-full","mt-0","z-20","bg-VeryDarkBlue","opacity-85","flex-col", "p-10");
    navbar.classList.add('mt-7');
    iconMenu.classList.add("md:block");
    iconClose.classList.add("hidden");
    list.classList.add("md:hidden");
    socials.classList.remove("flex");
    socials.classList.add("hidden");
    logo.src="images/logo-bookmark.svg";
});

function switchTab(evt,tab){
    featuresList.forEach(feature=> {
        feature.classList.add('hidden');
    });
    const currentTab= document.getElementById(tab);
    currentTab.classList.remove('hidden');
    currentTab.classList.add('flex');    
     
    tabList.forEach(btn=>{
        btn.classList.add('after:opacity-0');
        btn.classList.remove('after:opacity-100');
    });
    evt.currentTarget.classList.add('after:opacity-100');
}
submitButton.addEventListener("click", ()=> {
    if (!email.checkValidity()) {

        submitButton.classList.add("bg-white", "border-SoftRed", "text-SoftRed");
    }
    else{
        submitButton.classList.remove("bg-white", "border-SoftRed", "text-SoftRed");
    }
})

