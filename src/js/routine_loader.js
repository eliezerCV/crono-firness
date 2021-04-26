var routineElem = document.querySelector("#routines");
var btnIds = [];

document.addEventListener("click", (e) => onShowHideExercices(e))
export var routines = [ 
    {
        name: "Calentamiento",
        completed: false,
        repeat: 1,
        exercises: [
            {name: "ejercicio de ejempo 1", completed: true, duration: 10, breakTime: 5}, 
            {name: "ejercicio de ejempo 2", completed: true, duration: 12, breakTime: 6},
            {name: "ejercicio de ejempo 3", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 4", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 5", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 6", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 7", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 8", completed: false, duration: 60, breakTime: 20}
        ]
    },
    {
        name: "Cardio",
        completed: false,
        repeat: 1,
        exercises: [
            {name: "ejercicio de ejempo 1", completed: false, duration: 60, breakTime: 20}, 
            {name: "ejercicio de ejempo 2", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 3", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 3", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 3", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 3", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 3", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 3", completed: false, duration: 60, breakTime: 20},
            {name: "ejercicio de ejempo 1", completed: false, duration: 60, breakTime: 20}
        ]
    }
];

const renderRoutine = () => {
    let r = "";
    
    routines.forEach((routine, indexr) => {
        r += `
        <div class="circuit" id="routine_${indexr}">
            <div class="circiut-header" id="routine_header_${indexr}">
                <!-- <div class="load-bar-header"></div> -->
                <i class="fas ${indexr==0?'fa-minus':'fa-plus'}" id="btn_show_hide_exes${indexr}"></i>
                <h4>${routine.name}</h4>
                <i class="fas fa-check-circle" id="routine_check_${indexr}"></i>
            </div>
            <div class="exercices" style="${(indexr==0)?'display: block':'display:none'}" id="list_exes${indexr}">`;
                btnIds.push({btnId: `btn_show_hide_exes${indexr}`, listId: `list_exes${indexr}`})
                routine.exercises.forEach((exercise, indexe) => {
                    r += `
                    <div class="exe" id="routine${indexr}_exe${indexe}">
                        <!-- <div class="load-bar-exercice"></div> -->
                        <span>${exercise.name}</span>
                        <i class="fas fa-check-circle" id="exe_routine${indexr}_check_${indexe}"></i>
                    </div>`
                })
            r +=`</div>
        </div>`;
    })
    routineElem.innerHTML = r;
}

function onShowHideExercices(elem) {
    let btn = btnIds.find((btn) => btn.btnId == elem.target.id);
    
    if (btn) {
        let list = document.querySelector(`#${btn.listId}`);
        // console.log(list.style.display)
        if (list.style.display == "block") {
            elem.target.classList.remove("fa-minus");  
            elem.target.classList.add("fa-plus");  
            list.style.display = "none"
        } else {
            list.style.display = "block";
            elem.target.classList.add("fa-minus");  
            elem.target.classList.remove("fa-plus");
        }
    }
}

renderRoutine();




















