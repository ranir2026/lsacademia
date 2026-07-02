


let POS;

$.ajax({
    // sends GET request to url '/get-data/' with data
    url: '/get-data',
    type: 'GET',

    success: function(response) {

        // Handle the response data
        POS = JSON.parse(response);

    }
})


document.addEventListener("DOMContentLoaded", function() {

    let confirmButton = document.getElementById("confirm12thclasses")


    confirmButton.addEventListener("mouseup", function() {

        // delete all the children
        let selectedClasses = [];
        document.getElementById("mainClassesDisplayContainer").innerHTML = "";


        document.getElementById("12thsetupformcontainer").classList.remove("level-select-visible")
        document.getElementById("12thsetupformcontainer").classList.add("level-select-hidden")

        let allh5s = document.getElementsByClassName("selected12thClass")
        let mainContainer = document.getElementById("mainClassesDisplayContainer")

        // ADD SELECTED CLASSES TO SELECTED CLASSES LIST BY ITERATING THROUGH LIST
        for (let i=0; i<allh5s.length; i++) {
            selectedClasses.push(allh5s[i].innerText)
        }

        // iterate through selected classes to add class and details to screen div
        for (let i=0; i<selectedClasses.length; i++) {
            // create container (div) for each class and set name
            let classContainer = document.createElement("div")
            classContainer.className = "class-container"

            // create an h3 for the name of the class and append the name h3 to the class div
            let nameOfClass = document.createElement("h3")
            nameOfClass.innerText = selectedClasses[i]
            classContainer.appendChild(nameOfClass)

            // search the POS
            // iterate through dictionaries (keys, cuz its a dict of dicts) in POS
            const keys = Object.keys(POS);

            for (let i=0; i<keys.length; i++) {
                // ITERATE THROUGH POS TO FIND CLASS AND ALL DETAILS
                if (POS[keys[i]]['Course Name'].toUpperCase().trim() === nameOfClass.innerText.toUpperCase().trim()) {

                    // get subject
                    let subject = POS[keys[i]]['Subject']
                    let thing = document.createElement("h2")
                    thing.className = "big-subject";
                    thing.innerText = subject;
                    classContainer.insertBefore(thing, classContainer.firstChild); // add it to the beginning

                    // get credits
                    let credits = POS[keys[i]]['Credits']
                    let classCredits = document.createElement("h4")

                    // account for 1 credit plural vs singular shenanigans
                    if (credits === "1") {

                        classCredits.innerText = credits + " credit"

                    } else {

                        classCredits.innerText = credits + " credits"

                    }

                    classContainer.appendChild(classCredits)

                    // get duration
                    let duration = POS[keys[i]]['Duration']

                    if (duration === "Full") {
                        duration = "Full year course"
                    } else if (duration === "Semester") {
                        duration = "Semester long course"
                    } else if (duration === "Quarter") {
                        duration = "Quarter long course"
                    }

                    let classDuration = document.createElement("h4")
                    classDuration.innerText = duration
                    classContainer.appendChild(classDuration)

                    // grades open to
                    let gradesOpen = POS[keys[i]]['Grades Open']
                    let classGradesOpen = document.createElement("h4")

                    if (gradesOpen.length === 1) {

                        classGradesOpen.innerText = "Open to grade " + gradesOpen
                    } else {
                        classGradesOpen.innerText = "Open to grades " + gradesOpen

                    }

                    classContainer.appendChild(classGradesOpen)

                    // global scholars designation

                    let isGlobalScholars = POS[keys[i]]['Global Scholars Requirement']
                    if (isGlobalScholars === "Yes") {
                        let classGlobalScholars = document.createElement("h4")
                        classGlobalScholars.innerText = "Meets Global Scholars Requirement"
                        classContainer.appendChild(classGlobalScholars)

                    } // don't add anything if it doesn't meet global scholars like on jit

                }

            }

            // append the class container to the main container AFTER ALL THE DETAILS HAVE BEEN ADDED
            mainContainer.appendChild(classContainer)




        }



    })



})


