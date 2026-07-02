document.addEventListener("DOMContentLoaded", function() {

    // IF THEY CHOOSE LATIN 3/MANDARIN 3, THEY CAN'T CHOOSE THE LEVEL (3.1 OR 3.2)

    function limitLangLevelSelect() {

        let langy = $('input[name="language11"]:checked').val();

        if (langy === "Latin 3" || langy === "Mandarin 3" || langy === "German 3") {

            let langyLevels = document.getElementById("regularLangLevelSelect")
            langyLevels.classList.add('level-select-hidden')
            langyLevels.classList.remove('level-select-visible')

        }

        if (langy === "Spanish" || langy === "French") {

            let langyLevels = document.getElementById("regularLangLevelSelect")
            langyLevels.classList.add('level-select-visible')
            langyLevels.classList.remove('level-select-hidden')

        }

    }

        $('input[name="language11"]').on("change", function() {
            limitLangLevelSelect()

        })

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
                    display.className = ('selected11thClass')

                    // setting the inner text of the display to the chosen dbl enroll option
                    display.innerText = $('input[name="language11DblEnroll"]:checked').val()

                    // append the
                    document.getElementById("electivesDisplay").appendChild(display)
                })

                // FRENCH DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
                document.getElementById("frenchDblEnroll").addEventListener("change", function() {

                    // reset the inner HTML of the electives display div
                    document.getElementById("electivesDisplay").innerHTML = ""

                    // create an h5
                    let display = document.createElement("h5")
                    display.className = ('selected11thClass')

                    // setting the inner text of the display to the chosen dbl enroll option
                    display.innerText = $('input[name="language11DblEnroll"]:checked').val()

                    // append the
                    document.getElementById("electivesDisplay").appendChild(display)
                })

                // GERMAN DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
                document.getElementById("germanDblEnroll").addEventListener("change", function() {

                    // reset the inner HTML of the electives display div
                    document.getElementById("electivesDisplay").innerHTML = ""

                    // create an h5
                    let display = document.createElement("h5")
                    display.className = ('selected11thClass')

                    // setting the inner text of the display to the chosen dbl enroll option
                    display.innerText = $('input[name="language11DblEnroll"]:checked').val()

                    // append the
                    document.getElementById("electivesDisplay").appendChild(display)
                })

                // MANDARIN DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
                document.getElementById("mandarinDblEnroll").addEventListener("change", function() {

                    // reset the inner HTML of the electives display div
                    document.getElementById("electivesDisplay").innerHTML = ""

                    // create an h5
                    let display = document.createElement("h5")
                    display.className = ('selected11thClass')

                    // setting the inner text of the display to the chosen dbl enroll option
                    display.innerText = $('input[name="language11DblEnroll"]:checked').val()

                    // append the
                    document.getElementById("electivesDisplay").appendChild(display)
                })

                // LATIN DOUBLE ENROLL CLICKED AND CHECKED AND AHHHHHH
                document.getElementById("latinDblEnroll").addEventListener("change", function() {

                    // reset the inner HTML of the electives display div
                    document.getElementById("electivesDisplay").innerHTML = ""

                    // create an h5
                    let display = document.createElement("h5")
                    display.className = ('selected11thClass')

                    // setting the inner text of the display to the chosen dbl enroll option
                    display.innerText = $('input[name="language11DblEnroll"]:checked').val()

                    // append the
                    document.getElementById("electivesDisplay").appendChild(display)
                })



            }
        })








    })

