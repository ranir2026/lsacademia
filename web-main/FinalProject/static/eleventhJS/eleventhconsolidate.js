document.addEventListener("DOMContentLoaded", function() {
    /* Language */
    function get11thLangSelection() {

        // get course and level
        let langCourse = $('input[name="language11"]:checked').val();
        let langLevel;

        if (langCourse === "Spanish" || langCourse === "French") {

            langLevel = $('input[name="langLevel"]:checked').val()
            if (langLevel === undefined) {langLevel = "(Level)"}

        }

        else if (langCourse === "Latin 3" || langCourse === "Mandarin 3" || langCourse === "German 3") {
            langLevel = "";

        }

        // concatenate language course and level names
        let concatenated  = langCourse + " " + langLevel;

        // return concatenated string (course name with level)
        return concatenated

    }

    let completeLang11;

    $('input[name="language11"]').on("change", function() {

        completeLang11 = get11thLangSelection()

        let lang11Header = document.getElementById('grade11lang')
        lang11Header.innerText = completeLang11;

    })

    $('input[name="langLevel"]').on("change", function() {

        completeLang11 = get11thLangSelection()

        let lang11Header = document.getElementById('grade11lang')
        lang11Header.innerText = completeLang11;
    })


    /* Math */
    function get11thMathSelection() {
        let mathCourse = $('input[name="algorgeo"]:checked').val()
        let mathLevel = "(Level)";

        if (mathCourse === "Trigonometry/Precalculus") {
            mathLevel = $('input[name="algIILevelSelect"]:checked').val()
            if (mathLevel === undefined) {
                mathLevel = "(Level)"
            }

            if (mathLevel === "algIIstandard") {
                mathLevel = "Standard";
            }

        } else {
            mathLevel = ""
        }

        // concatenate math course and level names
        let concatenated  = mathCourse + " " + mathLevel

        return concatenated

    }

    $('input[name="algorgeo"]').on("change", function() {
        let completeMath11 = get11thMathSelection()

        // update header
        let math11Header = document.getElementById('grade11Math')
        math11Header.innerText = completeMath11;
    })

    $('input[name="algIILevelSelect"]').on("change", function() {
        let completeMath11 = get11thMathSelection()

        // update header
        let math11Header = document.getElementById('grade11Math')
        math11Header.innerText = completeMath11;
    })

    /* Science */
    function get11thSciSelection() {
        // get course and level
        let sciCourse = "Chemistry";
        let sciLevel = $('input[name="chemLevel"]:checked').val()

        // concatenate science course and level names
        let concatenated  = sciCourse + " " + sciLevel

        // return concatenated string (course name with level)
        return concatenated

    }

    let completeSci11;

    $('input[name="chemLevel"]').on("change", function() {
        completeSci11 = get11thSciSelection()

        let sci11Header = document.getElementById('grade11sci')
        sci11Header.innerText = completeSci11;
    })


    /* History */

    $('input[name="UShistoryselect"]').on("change", function() {
        let history11 = $('input[name="UShistoryselect"]:checked').val()

        let history11Header = document.getElementById('grade11hist')
        history11Header.innerText = history11;
    })

})
