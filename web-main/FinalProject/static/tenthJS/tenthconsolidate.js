document.addEventListener("DOMContentLoaded", function() {
    /* Language */
    function get10thLangSelection() {

        // get course and level
        let langCourse = $('input[name="language10"]:checked').val();
        console.log(langCourse)
        let langLevel;

        if (langCourse === "Spanish" || langCourse === "French") {

            langLevel = $('input[name="langLevel"]:checked').val()
            if (langLevel === undefined) {langLevel = "(Level)"}

        }

        else if (langCourse === "Latin 2" || langCourse === "Mandarin 2" || langCourse === "German 2") {
            langLevel = "";

        }

        // concatenate language course and level names
        let concatenated  = langCourse + " " + langLevel;

        // return concatenated string (course name with level)
        return concatenated

    }

    let completeLang10;

    $('input[name="language10"]').on("change", function() {

        completeLang10 = get10thLangSelection()

        let lang10Header = document.getElementById('grade10lang')
        lang10Header.innerText = completeLang10;

    })

    $('input[name="langLevel"]').on("change", function() {

        completeLang10 = get10thLangSelection()

        let lang10Header = document.getElementById('grade10lang')
        lang10Header.innerText = completeLang10;
    })


    /* Math */
    function get10thMathSelection() {
        let mathCourse = $('input[name="algorgeo"]:checked').val()
        let mathLevel = "(Level)";

        if (mathCourse === "Algebra II") {
            mathLevel = $('input[name="algIILevelSelect"]:checked').val()
            if (mathLevel === undefined) {
                mathLevel = "(Level)"
            }

            if (mathLevel === "algIIstandard") {
                mathLevel = "Standard";
            } else if (mathLevel === "1 Foundations" || mathLevel === "2 Foundations") {
                mathCourse = "Alg/Geo"
            }

        } else {
            mathLevel = ""
        }

        // concatenate math course and level names
        let concatenated  = mathCourse + " " + mathLevel

        return concatenated

    }

    $('input[name="algorgeo"]').on("change", function() {
        let completeMath10 = get10thMathSelection()

        // update header
        let math10Header = document.getElementById('grade10Math')
        math10Header.innerText = completeMath10;
    })

    $('input[name="algIILevelSelect"]').on("change", function() {
        let completeMath10 = get10thMathSelection()

        // update header
        let math10Header = document.getElementById('grade10Math')
        math10Header.innerText = completeMath10;
    })

    /* Science */
    function get10thSciSelection() {
        // get course and level
        let sciCourse = "Biology";
        let sciLevel = $('input[name="bioLevel"]:checked').val()

        // concatenate science course and level names
        let concatenated  = sciCourse + " " + sciLevel

        // return concatenated string (course name with level)
        return concatenated

    }

    let completeSci10;

    $('input[name="bioLevel"]').on("change", function() {
        completeSci10 = get10thSciSelection()

        let sci10Header = document.getElementById('grade10sci')
        sci10Header.innerText = completeSci10;
    })


    /* History */

    $('input[name="UShistoryselect"]').on("change", function() {
        let history10 = $('input[name="UShistoryselect"]:checked').val()

        let history10Header = document.getElementById('grade10hist')
        history10Header.innerText = history10;
    })

})
