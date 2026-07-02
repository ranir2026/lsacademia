// AJAX GET REQUEST TO GET POS DICT FROM PYTHON

$.ajax({
    // sends GET request to url '/get-data/' with data
    url: '/get-data',
    type: 'GET',

    success: function(response) {

        // Handle the response data
        let POS = JSON.parse(response);

        // iterate through dictionaries (keys, cuz its a dict of dicts) in POS
        const keys = Object.keys(POS);

        // get semester english div
        let semesterEnglish11 = document.getElementById('semesterEnglish11')

        // iterate through POS
        for (let i=0; i<keys.length; i++) {

            // DISPLAY OPTIONS FOR SEMESTER LONG ENGLISHES
            if (POS[keys[i]]['Subject'] === 'English' && POS[keys[i]]['Grades Open'] === '9-12' && POS[keys[i]]['Duration'] === "Semester") {

                // create a wrapper for each option
                let wrapper = document.createElement("radio-wrapper")
                wrapper.className = "radio-wrapper";

                // create checkbox input option for each wellness class
                let english = document.createElement("input");
                english.type = "checkbox";
                english.id = POS[keys[i]]['Course Name'];
                english.value = POS[keys[i]]['Course Name'];
                english.name = "semesterEnglishSelect";

                english.addEventListener("change", function() {
                    const checkedCheckboxes = document.querySelectorAll('input[name="semesterEnglishSelect"]:checked');
                    if (checkedCheckboxes.length > 2) {
                        this.checked = false;
                    }
                })

                // /* add event listener to show on the left side */
                // THIS IS FOR DISPLAYING THE SEMESTER ENGLISHES CHOSEN IN THE SIDE BAR
                english.addEventListener("change", function() {

                    // if semester is chosen
                    if ($('input[name="semoryrEnglish"]:checked').val() === "semester") {
                        let selected = []
                        const checkedCheckboxes = document.querySelectorAll('input[name="semesterEnglishSelect"]:checked')
                        for (i=0; i<checkedCheckboxes.length; i++) {
                            selected.push(checkedCheckboxes[i].value)
                        }

                        // display english class box inside side bar div for english class
                        document.getElementById("eng11").innerHTML = ""
                        for (let i=0; i<selected.length; i++) {
                            display = document.createElement("h5")
                            display.className = "selected11thClass";
                            display.innerText = selected[i]
                            document.getElementById("eng11").appendChild(display);
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
                wrapper.appendChild(english);
                wrapper.appendChild(label);

                //append the wrapper for each button to the div in the class
                semesterEnglish11.appendChild(wrapper);

            }

            // DISPLAY OPTIONS FOR YEAR LONG ENGLISHES
            if (POS[keys[i]]['Subject'] === 'English' && POS[keys[i]]['Grades Open'] === '9-12' && POS[keys[i]]['Duration'] === "Full") {

                // create a wrapper for each option
                let wrapper = document.createElement("radio-wrapper")
                wrapper.className = "radio-wrapper";

                // create checkbox input option for each wellness class
                let english = document.createElement("input");
                english.type = "checkbox";
                english.id = POS[keys[i]]['Course Name'];
                english.value = POS[keys[i]]['Course Name'];
                english.name = "yearEnglishSelect";

                english.addEventListener("change", function() {
                    const checkedCheckboxes = document.querySelectorAll('input[name="yearEnglishSelect"]:checked');
                    if (checkedCheckboxes.length > 2) {
                        this.checked = false;
                    }
                })

                // /* add event listener to show on the left side */
                // THIS IS FOR DISPLAYING THE YEAR ENGLISHES CHOSEN IN THE SIDE BAR
                english.addEventListener("change", function() {

                    // if semester is chosen
                    if ($('input[name="semoryrEnglish"]:checked').val() === "year") {
                        let selected = []
                        const checkedCheckboxes = document.querySelectorAll('input[name="yearEnglishSelect"]:checked')
                        for (i=0; i<checkedCheckboxes.length; i++) {
                            selected.push(checkedCheckboxes[i].value)
                        }

                        // display english class box inside side bar div for english class
                        document.getElementById("eng11").innerHTML = ""
                        for (let i=0; i<selected.length; i++) {
                            display = document.createElement("h5")
                            display.className = "selected11thClass";
                            display.innerText = selected[i]
                            document.getElementById("eng11").appendChild(display);
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
                wrapper.appendChild(english);
                wrapper.appendChild(label);

                //append the wrapper for each button to the div in the class
                yearEnglish11.appendChild(wrapper);

            }

            // logic for form for choosing between semester or yr classes
            $(document).ready(function() {
                hideYearLongs()
                hideSemesterLongs()
                $('input[name="semoryrEnglish"]').on("change", function() {
                    let course = $('input[name="semoryrEnglish"]:checked').val()

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
                let yearElectives = document.getElementById("yearEnglish11container")
                yearElectives.classList.add('elective-select-hidden')
                yearElectives.classList.remove('elective-select-visible')
            }

            function showYearLongs() {
                let yearElectives = document.getElementById("yearEnglish11container")
                yearElectives.classList.remove('elective-select-hidden')
                yearElectives.classList.add('elective-select-visible')
            }

            function hideSemesterLongs() {
                let semElectives = document.getElementById("semesterEnglish11container")
                semElectives.classList.add('elective-select-hidden')
                semElectives.classList.remove('elective-select-visible')
            }

            function showSemesterLongs() {
                let semElectives = document.getElementById("semesterEnglish11container")
                semElectives.classList.remove('elective-select-hidden')
                semElectives.classList.add('elective-select-visible')
            }



        }

    }

})
