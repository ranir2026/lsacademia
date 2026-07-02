/* Language */
function get9thLangSelection() {

    // get course and level
    let langCourse = $('input[name="language9"]:checked').val();
    console.log(langCourse)

    let langLevel;

    if (langCourse === "Spanish" || langCourse === "French") {

        langLevel = $('input[name="langLevel"]:checked').val()
        if (langLevel === undefined) {langLevel = "(Level)"}

    }

    else if (langCourse === "Latin 1" || langCourse === "Mandarin 1" || langCourse === "German 1") {

        langLevel = "";

    }

    // concatenate language course and level names
    let concatenated  = langCourse + " " + langLevel;

    // return concatenated string (course name with level)
    return concatenated

}

let completeLang9;

$('input[name="language9"]').on("change", function() {

    completeLang9 = get9thLangSelection()

    let lang9Header = document.getElementById('grade9lang')
    lang9Header.innerText = completeLang9;

})

$('input[name="langLevel"]').on("change", function() {

    completeLang9 = get9thLangSelection()

    let lang9Header = document.getElementById('grade9lang')
    lang9Header.innerText = completeLang9;
})


/* Math */
function get9thMathSelection() {
    let mathCourse = $('input[name="algorgeo"]:checked').val()
    let mathLevel = "(Level)";

    if (mathCourse === "Algebra I") {
        mathLevel = $('input[name="algILevelSelect"]:checked').val()
        if (mathLevel === undefined) {
            mathLevel = "(Level)"
        }

        if (mathLevel === "algIstandard") {
            mathLevel = "Standard";
        } else if (mathLevel === "1 Foundations" || mathLevel === "2 Foundations") {
            mathCourse = "Alg/Geo"
        }

    } else if (mathCourse === "Geometry") {
        mathLevel = $('input[name="geoLevelSelect"]:checked').val()
        if (mathLevel === undefined) {
            mathLevel = "(Level)"
        }

        if (mathLevel === "geoStandard") {
            mathLevel = "Standard";
        }
    }

    // concatenate math course and level names
    let concatenated  = mathCourse + " " + mathLevel

    return concatenated

}

$('input[name="algorgeo"]').on("change", function() {
    let completeMath9 = get9thMathSelection()

    // update header
    let math9Header = document.getElementById('grade9Math')
    math9Header.innerText = completeMath9;
})

$('input[name="algILevelSelect"]').on("change", function() {
    let completeMath9 = get9thMathSelection()

    // update header
    let math9Header = document.getElementById('grade9Math')
    math9Header.innerText = completeMath9;
})

$('input[name="geoLevelSelect"]').on("change", function() {
    let completeMath9 = get9thMathSelection()

    // update header
    let math9Header = document.getElementById('grade9Math')
    math9Header.innerText = completeMath9;
})

/* Science */
function get9thSciSelection() {
    // get course and level
    let sciCourse = "Earth Science";
    let sciLevel = $('input[name="esLevel"]:checked').val()

    // concatenate science course and level names
    let concatenated  = sciCourse + " " + sciLevel

    // return concatenated string (course name with level)
    return concatenated

}

let completeSci9;

$('input[name="esLevel"]').on("change", function() {
    completeSci9 = get9thSciSelection()

    let sci9Header = document.getElementById('grade9sci')
    sci9Header.innerText = completeSci9;
})


/* WELLNESS WILL BE DONE IN A DIFF SCRIPT*/


/* ELECTIVE WILL BE DONE IN A DIFF SCRIPT */
