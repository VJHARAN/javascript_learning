document.addEventListener('DOMContentLoaded',()=>{
    console.log("DOM is fully Loaded");

});
document.addEventListener('load',()=>{
    console.log("page fully loaded");

});
document.addEventListener('beforeunload',()=>{
    console.log("page unloading");
});

document.addEventListener('unload',()=>{
    console.log("Page unloaded");
});