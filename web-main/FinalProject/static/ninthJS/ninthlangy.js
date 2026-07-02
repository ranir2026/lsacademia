
// THIS IS FOR DISPLAYING THE LANGUAGE DBL ENROLL YEAR ELECTIVE CHOSEN IN THE SIDE BAR
document.getElementById("langDblEnroll").addEventListener("change", function() {

    if ($('input[name="semoryr"]:checked').val() === "semester") {

    //if the user has chosen to choose year long elective
    } else if ($('input[name="semoryr"]:checked').val() === "year") {

        // SPANISH DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
        document.getElementById("spanishDblEnroll").addEventListener("change", function() {

            // reset the inner HTML of the electives display div
            document.getElementById("electivesDisplay").innerHTML = ""

            // create an h5
            let display = document.createElement("h5")
            display.className = ('selected9thClass')

            // setting the inner text of the display to the chosen dbl enroll option
            display.innerText = $('input[name="language9DblEnroll"]:checked').val()

            // append the
            document.getElementById("electivesDisplay").appendChild(display)
        })

        // FRENCH DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
        document.getElementById("frenchDblEnroll").addEventListener("change", function() {

            // reset the inner HTML of the electives display div
            document.getElementById("electivesDisplay").innerHTML = ""

            // create an h5
            let display = document.createElement("h5")
            display.className = ('selected9thClass')

            // setting the inner text of the display to the chosen dbl enroll option
            display.innerText = $('input[name="language9DblEnroll"]:checked').val()

            // append the
            document.getElementById("electivesDisplay").appendChild(display)
        })

        // GERMAN DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
        document.getElementById("germanDblEnroll").addEventListener("change", function() {

            // reset the inner HTML of the electives display div
            document.getElementById("electivesDisplay").innerHTML = ""

            // create an h5
            let display = document.createElement("h5")
            display.className = ('selected9thClass')

            // setting the inner text of the display to the chosen dbl enroll option
            display.innerText = $('input[name="language9DblEnroll"]:checked').val()

            // append the
            document.getElementById("electivesDisplay").appendChild(display)
        })

        // MANDARIN DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
        document.getElementById("mandarinDblEnroll").addEventListener("change", function() {

            // reset the inner HTML of the electives display div
            document.getElementById("electivesDisplay").innerHTML = ""

            // create an h5
            let display = document.createElement("h5")
            display.className = ('selected9thClass')

            // setting the inner text of the display to the chosen dbl enroll option
            display.innerText = $('input[name="language9DblEnroll"]:checked').val()

            // append the
            document.getElementById("electivesDisplay").appendChild(display)
        })

        // LATIN DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
        document.getElementById("latinDblEnroll").addEventListener("change", function() {

            // reset the inner HTML of the electives display div
            document.getElementById("electivesDisplay").innerHTML = ""

            // create an h5
            let display = document.createElement("h5")
            display.className = ('selected9thClass')

            // setting the inner text of the display to the chosen dbl enroll option
            display.innerText = $('input[name="language9DblEnroll"]:checked').val()

            // append the
            document.getElementById("electivesDisplay").appendChild(display)
        })



    }
})
