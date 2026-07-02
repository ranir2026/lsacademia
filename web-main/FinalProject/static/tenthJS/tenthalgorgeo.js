$(document).ready(function() {
    hideAlgLevels()
    $('input[name="algorgeo"]').on("change", function() {
        let course = $('input[name="algorgeo"]:checked').val()

        if (course === "Algebra II") {
            showAlgLevels()
        } else {
            hideAlgLevels()
        }
    })
})

function hideAlgLevels() {
    let mathLevels = document.getElementById("algIILevelSelect")
    mathLevels.classList.add('level-select-hidden')
    mathLevels.classList.remove('level-select-visible')
}

function showAlgLevels() {
    let mathLevels = document.getElementById("algIILevelSelect")
    mathLevels.classList.add('level-select-visible')
    mathLevels.classList.remove('level-select-hidden')
}
