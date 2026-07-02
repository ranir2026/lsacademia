
document.addEventListener("DOMContentLoaded", function() {

    // limit user to selecting two semester long math courses
    let semesterMathClasses = document.getElementsByName("sem12thMath")

    // iterate through semester classes
    for (i=0;i<semesterMathClasses.length;i++) {
        semesterMathClasses[i].addEventListener("change", function() {
            const checkedCheckboxes = document.querySelectorAll('input[name="sem12thMath"]:checked');
            if (checkedCheckboxes.length > 2) {
                this.checked = false;
            }

            // if semester is chosen
            if ($('input[name="semoryrMath"]:checked').val() === "semester") {
                let selected = []
                const checkedCheckboxes = document.querySelectorAll('input[name="sem12thMath"]:checked')
                for (i=0; i<checkedCheckboxes.length; i++) {
                    selected.push(checkedCheckboxes[i].value)
                }

                // display math class box inside side bar div for math class
                document.getElementById("math12").innerHTML = ""
                for (let i=0; i<selected.length; i++) {
                    display = document.createElement("h5")
                    display.className = "selected12thClass";
                    display.innerText = selected[i]
                    document.getElementById("math12").appendChild(display);
                }

            }

        })
    }

    // limit user to selecting only 1 year long course
    let yearMathClasses = document.getElementsByName("year12thMath")

    for (i=0;i<yearMathClasses.length;i++) {

        yearMathClasses[i].addEventListener("change", function() {
            const checkedCheckboxes = document.querySelectorAll('input[name="year12thMath"]:checked');
            if (checkedCheckboxes.length > 1) {
                this.checked = false;
            }

            // if year is chosen
            if ($('input[name="semoryrMath"]:checked').val() === "year") {
                let selected = []
                const checkedCheckboxes = document.querySelectorAll('input[name="year12thMath"]:checked')
                for (i=0; i<checkedCheckboxes.length; i++) {
                    selected.push(checkedCheckboxes[i].value)
                }

                // display math class box inside side bar div for math class
                document.getElementById("math12").innerHTML = ""
                for (let i=0; i<selected.length; i++) {
                    display = document.createElement("h5")
                    display.className = "selected12thClass";
                    display.innerText = selected[i]
                    document.getElementById("math12").appendChild(display);
                }

            }
        })

    }


    // logic for form for choosing between semester or yr classes
    $(document).ready(function() {
        hideYearLongs()
        hideSemesterLongs()
        $('input[name="semoryrMath"]').on("change", function() {
            let course = $('input[name="semoryrMath"]:checked').val()

            if (course === "semester") {
                hideYearLongs()
                showSemesterLongs()
            } else if (course === "year") {
                hideSemesterLongs()
                showYearLongs()
            }
        })

    })

    function hideYearLongs() {
        let yearElectives = document.getElementById("yearMath12container")
        yearElectives.classList.add('elective-select-hidden')
        yearElectives.classList.remove('elective-select-visible')
    }

    function showYearLongs() {
        let yearElectives = document.getElementById("yearMath12container")
        yearElectives.classList.remove('elective-select-hidden')
        yearElectives.classList.add('elective-select-visible')
    }

    function hideSemesterLongs() {
        let semElectives = document.getElementById("semesterMath12container")
        semElectives.classList.add('elective-select-hidden')
        semElectives.classList.remove('elective-select-visible')
    }

    function showSemesterLongs() {
        let semElectives = document.getElementById("semesterMath12container")
        semElectives.classList.remove('elective-select-hidden')
        semElectives.classList.add('elective-select-visible')
    }





})

