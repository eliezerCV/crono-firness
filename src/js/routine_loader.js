var routineElem = document.querySelector("#routines");

const renderRoutine = () => {

    let routines = [ 
        {
            name: "Calentamiento",
            exercises: ["ejercicio de ejempo 1", "ejercicio de ejempo 2", "ejercicio de ejempo 3"]
        }
    ]
    let r = "";
    
    routines.forEach((routine, indexr) => {
        r += `
        <div class="circuit" id="routine_${indexr}">
            <div class="circiut-header">
                <!-- <div class="load-bar-header"></div> -->
                <i class="fas fa-minus"></i>
                <h4>${routine.name}</h4>
            </div>
            <div class="exercices">`;
                routine.exercises.forEach((exercise, indexe) => {
                    r += `
                    <div class="exe" id="routine${indexr}_exe${indexe}">
                        <!-- <div class="load-bar-exercice"></div> -->
                        <span>${exercise}</span>
                    </div>`
                })
            +`</div>
        </div>`
    })
    routineElem.innerHTML = r;
}

renderRoutine();




















