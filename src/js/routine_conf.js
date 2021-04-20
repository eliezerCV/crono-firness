var timePerBreak = 10; 
var timePerExercise = 60;
var beepsQuantity = 3;

var mask = document.querySelector("#mask");
var formConfig = document.querySelector("#form_config");
var btnShowModalConf = document.querySelector("#btnShowModal");
var btnCloseModalConf = document.querySelector("#btnCloseModal");
var btnSaveConf = document.querySelector("#btn_save");
var loaderSpinner = document.querySelector("#loader_spinner");

var beepsQuantitySelect = document.querySelector("#beeps_quantity");
var timePerExerciseInput = document.querySelector("#timePerExercise");
var timePerBreakInput = document.querySelector("#timePerBreak");

var popupFeed = document.querySelector("#popup_feed");
var btnClosePopup = document.querySelector("#btn_close_popup");

timePerExerciseInput.addEventListener('focus', (e) => e.target.select())
timePerBreakInput.addEventListener('focus', (e) => e.target.select())
btnClosePopup.addEventListener("click", closePopup);
mask.addEventListener('click', closeConfModal);
btnShowModalConf.addEventListener('click', showConfModal);
btnCloseModalConf.addEventListener('click', closeConfModal);
btnSaveConf.addEventListener("click", saveConf);
    
    

function saveConf() {
    timePerExercise = timePerExerciseInput.value;
    timePerBreak = timePerBreakInput.value;
    beepsQuantity = beepsQuantitySelect.value;
    let conf = {timePerBreak, timePerExercise, beepsQuantity}
    localStorage.setItem('conf_fitness', JSON.stringify(conf));
    closeConfModal();
    popupFeed.classList.add("show-popup");
    setTimeout(() => {
        popupFeed.classList.remove("show-popup");
    }, 3000);
}

function getConfFromLocal() {
    if (localStorage.getItem('conf_fitness')) {
        let conf = JSON.parse(localStorage.getItem('conf_fitness'))
        timePerBreak =  conf.timePerBreak;
        timePerExercise = conf.timePerExercise;
        beepsQuantity = conf.beepsQuantity;
    }
    timePerBreakInput.value = timePerBreak;
    timePerExerciseInput.value = timePerExercise;
    beepsQuantitySelect.value = beepsQuantity;
    
    setTimeout(() => {
        mask.classList.remove('show-mask');
        loaderSpinner.style.display = "none";
    }, 500);
}

function showConfModal() {
    mask.classList.add('show-mask');
    formConfig.classList.add('show-modal-conf')
}

function closeConfModal() {
    mask.classList.remove('show-mask');
    formConfig.classList.remove('show-modal-conf')
}

function closePopup() {
    popupFeed.classList.remove("show-popup");
}
getConfFromLocal();
export {
    timePerBreak,
    timePerExercise,
    beepsQuantity
}