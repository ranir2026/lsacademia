document.addEventListener("DOMContentLoaded", function() {
    /* Language */
    function get12thLangSelection() {

        // get course and level
        let langCourse = $('input[name="language12"]:checked').val();
        let langLevel;

        if (langCourse === "Spanish" || langCourse === "French") {

            langLevel = $('input[name="langLevel"]:checked').val()
            if (langLevel === undefined) {langLevel = "(Level)"}

        }

        else if (langCourse === "Latin 4" || langCourse === "Mandarin 4" || langCourse === "German 4") {
            langLevel = "";

        }

        // concatenate language course and level names
        let concatenated  = langCourse + " " + langLevel;

        // return concatenated string (course name with level)
        return concatenated

    }

    let completeLang12;

    $('input[name="language12"]').on("change", function() {

        completeLang12 = get12thLangSelection()

        let lang12Header = document.getElementById('grade12lang')
        lang12Header.innerText = completeLang12;

    })

    $('input[name="langLevel"]').on("change", function() {

        completeLang12 = get12thLangSelection()

        let lang12Header = document.getElementById('grade12lang')
        lang12Header.innerText = completeLang12;
    })


    /* Math -- a lil strange*/
    // function get12thMathSelection() {
    //     let mathCourse = $('input[name="algorgeo"]:checked').val()
    //     let mathLevel = "(Level)";

    //     if (mathCourse === "Trigonometry/Precalculus") {
    //         mathLevel = $('input[name="algIILevelSelect"]:checked').val()
    //         if (mathLevel === undefined) {
    //             mathLevel = "(Level)"
    //         }

    //         if (mathLevel === "algIIstandard") {
    //             mathLevel = "Standard";
    //         }

    //     } else {
    //         mathLevel = ""
    //     }

    //     // concatenate math course and level names
    //     let concatenated  = mathCourse + " " + mathLevel

    //     return concatenated

    // }

    // $('input[name="algorgeo"]').on("change", function() {
    //     let completeMath12 = get12thMathSelection()

    //     // update header
    //     let math12Header = document.getElementById('grade12Math')
    //     math12Header.innerText = completeMath12;
    // })

    // $('input[name="algIILevelSelect"]').on("change", function() {
    //     let completeMath12 = get12thMathSelection()

    //     // update header
    //     let math12Header = document.getElementById('grade12Math')
    //     math12Header.innerText = completeMath12;
    // })

    /* Science */
    function get12thSciSelection() {
        // get course and level
        let sciCourse = "Physics";
        let sciLevel = $('input[name="physLevel"]:checked').val()

        if (sciLevel === "AP Physics C: Mechanics") {
            return sciLevel
        }

        // concatenate science course and level names
        let concatenated  = sciCourse + " " + sciLevel

        // return concatenated string (course name with level)
        return concatenated

    }

    let completeSci12;

    $('input[name="physLevel"]').on("change", function() {
        completeSci12 = get12thSciSelection()

        let sci12Header = document.getElementById('grade12sci')
        sci12Header.innerText = completeSci12;
    })


    /* History */

    $('input[name="historySelect"]').on("change", function() {
        let history12 = $('input[name="historySelect"]:checked').val()

        let history12Header = document.getElementById('grade12hist')
        history12Header.innerText = history12;
    })

})
