// AJAX GET REQUEST TO GET POS DICT FROM PYTHON

$.ajax({
    // sends GET request to url '/get-data/' with data
    url: '/get-data',
    type: 'GET',

    success: function(response) {

        // Handle the response data
        let POS = JSON.parse(response);

        // console.log(POS);

        regWellnessDiv11 = document.getElementById('wellnessElectiveSelect11');

        // iterate through dictionaries (keys, cuz its a dict of dicts) in POS
        const keys = Object.keys(POS);

        for (let i=0; i<keys.length; i++) {

            // THIS IS FOR 9th GRADE WELLNESS ELECTIVE
            if (POS[keys[i]]['Subject'] === 'Wellness' && POS[keys[i]]['Grades Open'] === '9-12') {

                // create a wrapper for each option
                let wrapper = document.createElement("radio-wrapper")
                wrapper.className = "radio-wrapper";

                // create radio button input option for each wellness class
                let wellness = document.createElement("input");
                wellness.type = "checkbox";
                wellness.id = POS[keys[i]]['Course Name'];
                wellness.value = POS[keys[i]]['Course Name'];
                wellness.name = "wellnessSelect";

                $('input[name="wellnessSelect"]').on("change", function() {
                    let wellnessOptions = document.getElementsByName("wellnessSelect");
                    let chosenWellnesses = [];

                    for (let i=0; i<wellnessOptions.length; i++) {
                        if (wellnessOptions[i].checked) {
                            chosenWellnesses.push(wellnessOptions[i].value)
                        }
                    }

                    try {
                        document.getElementById("wellness1").innerText = chosenWellnesses[0]
                    } catch {}

                    try {
                        document.getElementById("wellness2").innerText = chosenWellnesses[1]
                    } catch {}
                })

                // u can only select 2
                wellness.addEventListener("change", function() {
                    const checkedCheckboxes = document.querySelectorAll('input[name="wellnessSelect"]:checked');
                    if (checkedCheckboxes.length > 2) {
                        this.checked = false;
                    }
                })

                // create label for each radio button dynamically
                let label = document.createElement("label");

                // INNER TEXT MEANS COURSE NAME IS ACTUALLY DISPLAYED
                label.innerText = POS[keys[i]]['Course Name'];

                // HTML FOR MEANS THAT THE RIGHT COURSE NAME LABEL GOES TO EACH BUTTON
                label.htmlFor = POS[keys[i]]['Course Name'];

                // append option to regular wellness div
                wrapper.appendChild(wellness);
                wrapper.appendChild(label);

                //append the wrapper for each button to the div in the class
                regWellnessDiv11.appendChild(wrapper);

            };

            // THIS IS FOR 11th GRADE REGULAR ELECTIVE

            let regElectiveDiv11 = document.getElementById('regElectiveDiv11')

            // logic for form for choosing between
            $(document).ready(function() {
                hideYearLongs()
                hideSemesterLongs()
                hideLangDbls()
                $('input[name="semoryr"]').on("change", function() {
                    let course = $('input[name="semoryr"]:checked').val()

                    if (course === "semester") {
                        hideYearLongs()
                        showSemesterLongs()
                    } else if (course === "year") {
                        hideSemesterLongs()
                        showYearLongs()
                    }
                })

                $('input[name="yearElectiveSelect"]').on("change", function() {
                    let dingy = $('input[name="yearElectiveSelect"]:checked').val()

                    if (dingy === "Language Double Enrollment") {
                        showLangDbls()

                    } else if (dingy !== "Language Double Enrollment") {
                        hideLangDbls()
                    }
                })
            })


            function hideLangDbls() {
                let langDbls = document.getElementById("langDblEnrollOptions")
                langDbls.classList.add('elective-select-hidden')
                langDbls.classList.remove('elective-select-visible')
            }

            function showLangDbls() {
                let yearElectives = document.getElementById("langDblEnrollOptions")
                yearElectives.classList.remove('elective-select-hidden')
                yearElectives.classList.add('elective-select-visible')
            }

            function hideYearLongs() {
                let yearElectives = document.getElementById("yearElective11container")
                yearElectives.classList.add('elective-select-hidden')
                yearElectives.classList.remove('elective-select-visible')
            }

            function hideSemesterLongs() {
                let yearElectives = document.getElementById("semesterElective11container")
                yearElectives.classList.add('elective-select-hidden')
                yearElectives.classList.remove('elective-select-visible')
            }

            function showYearLongs() {
                let yearElectives = document.getElementById("yearElective11container")
                yearElectives.classList.remove('elective-select-hidden')
                yearElectives.classList.add('elective-select-visible')
            }

            function showSemesterLongs() {
                let yearElectives = document.getElementById("semesterElective11container")
                yearElectives.classList.remove('elective-select-hidden')
                yearElectives.classList.add('elective-select-visible')
            }




            // SEMESTER LONG ELECTIVES

            let semesterElective11 = document.getElementById('semesterElective11')

            if ((POS[keys[i]]['Subject'] === 'FATA' || POS[keys[i]]['Subject'] === 'Elective' || POS[keys[i]]['Subject'] === 'Digital Literacy and Computer Science (DLCS)') && POS[keys[i]]['Grades Open'] === "9-12" && POS[keys[i]]['Duration'] === "Semester") {

                // create a wrapper for each option
                let wrapper = document.createElement("radio-wrapper")
                wrapper.className = "radio-wrapper";

                // create checkbox input option for each wellness class
                let elective = document.createElement("input");
                elective.type = "checkbox";
                elective.id = POS[keys[i]]['Course Name'];
                elective.value = POS[keys[i]]['Course Name'];
                elective.name = "semesterElectiveSelect";

                elective.addEventListener("change", function() {
                    const checkedCheckboxes = document.querySelectorAll('input[name="semesterElectiveSelect"]:checked');
                    if (checkedCheckboxes.length > 2) {
                        this.checked = false;
                    }
                })




                // /* add event listener to show on the left side */
                // THIS IS FOR DISPLAYING THE SEMESTER ELECTIVES CHOSEN IN THE SIDE BAR
                elective.addEventListener("change", function() {

                    if ($('input[name="semoryr"]:checked').val() === "semester") {
                        let selected = []
                        const checkedCheckboxes = document.querySelectorAll('input[name="semesterElectiveSelect"]:checked')
                        for (i=0; i<checkedCheckboxes.length; i++) {
                            selected.push(checkedCheckboxes[i].value)
                        }


                        document.getElementById("electivesDisplay").innerHTML = ""
                        for (let i=0; i<selected.length; i++) {
                            display = document.createElement("h5")
                            display.className = "selected11thClass";
                            display.innerText = selected[i]
                            document.getElementById("electivesDisplay").appendChild(display);
                        }

                    }
                })


                // create label for each radio button dynamically
                let label = document.createElement("label");

                // INNER TEXT MEANS COURSE NAME IS ACTUALLY DISPLAYED
                label.innerText = POS[keys[i]]['Course Name'];

                // HTML FOR MEANS THAT THE RIGHT COURSE NAME LABEL GOES TO EACH BUTTON
                label.htmlFor = POS[keys[i]]['Course Name'];

                // append option to regular wellness div
                wrapper.appendChild(elective);
                wrapper.appendChild(label);

                //append the wrapper for each button to the div in the class
                semesterElective11.appendChild(wrapper);

            };

            // year LONG ELECTIVES

            let yearElective11 = document.getElementById('yearElective11')

            if ((POS[keys[i]]['Subject'] === 'FATA' || POS[keys[i]]['Subject'] === 'Elective' || POS[keys[i]]['Subject'] === 'Digital Literacy and Computer Science (DLCS)') && POS[keys[i]]['Grades Open'] === "9-12" && POS[keys[i]]['Duration'] === "Full") {

                // create a wrapper for each option
                let wrapper = document.createElement("radio-wrapper")
                wrapper.className = "radio-wrapper";

                // create radio button input option for each wellness class
                let elective = document.createElement("input");
                elective.type = "radio";
                elective.id = POS[keys[i]]['Course Name'];
                elective.value = POS[keys[i]]['Course Name'];
                elective.name = "yearElectiveSelect";

                /* add event listener to show on the left side */
                elective.addEventListener("change", function() {
                    let selected = ""
                    if ($('input[name="semoryr"]:checked').val() === "semester") {

                    } else if ($('input[name="semoryr"]:checked').val() === "year") {
                        const checkedCheckboxes = document.querySelectorAll('input[name="yearElectiveSelect"]:checked')
                        selected = checkedCheckboxes[checkedCheckboxes.length - 1].value
                        document.getElementById("electivesDisplay").innerHTML = ""


                        let display = document.createElement("h5")
                        display.className = "selected11thClass"
                        display.innerText = selected
                        document.getElementById("electivesDisplay").appendChild(display)
                    }
                })


                // create label for each radio button dynamically
                let label = document.createElement("label");

                // INNER TEXT MEANS COURSE NAME IS ACTUALLY DISPLAYED
                label.innerText = POS[keys[i]]['Course Name'];

                // HTML FOR MEANS THAT THE RIGHT COURSE NAME LABEL GOES TO EACH BUTTON
                label.htmlFor = POS[keys[i]]['Course Name'];

                // append option to regular wellness div
                wrapper.appendChild(elective);
                wrapper.appendChild(label);

                //append the wrapper for each button to the div in the class
                yearElective11.appendChild(wrapper);

            };

        };

    },
    // if error with AJAX request, error will be logged into console
    error: function(error) {
            console.log(error);
        }

})



