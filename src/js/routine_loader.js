var routineElem = document.querySelector("#routines");
export var routines = [ 
    {
        name: "Calentamiento",
        open: true,
        completed: false,
        exercises: [
            {name: "ejercicio de ejempo 1", completed: true}, 
            {name: "ejercicio de ejempo 2", completed: true},
            {name: "ejercicio de ejempo 3", completed: false}
        ]
    },
    {
        name: "Calentamiento",
        open: false,
        completed: false,
        exercises: [
            {name: "ejercicio de ejempo 1", completed: false}, 
            {name: "ejercicio de ejempo 2", completed: false},
            {name: "ejercicio de ejempo 3", completed: false}
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
                <i class="fas fa-minus"></i>
                <h4>${routine.name}</h4>
                <i class="fas fa-check-circle" id="routine_check_${indexr}"></i>
                <!-- <input type="checkbox" class="exercise-completed" /> -->
            </div>
            <div class="exercices">`;
                routine.exercises.forEach((exercise, indexe) => {
                    r += `
                    <div class="exe" id="routine${indexr}_exe${indexe}">
                        <!-- <div class="load-bar-exercice"></div> -->
                        <span>${exercise.name}</span>
                        <!-- <input type="checkbox" class="exercise-completed" /> -->
                        <i class="fas fa-check-circle" id="exe_routine${indexr}_check_${indexe}"></i>
                    </div>`
                })
            r +=`</div>
        </div>`;
    })
    routineElem.innerHTML = r;
}

renderRoutine();




















