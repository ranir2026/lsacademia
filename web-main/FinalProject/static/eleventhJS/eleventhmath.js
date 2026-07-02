$(document).ready(function() {
    hideTPCLevels()
    $('input[name="algorgeo"]').on("change", function() {
        let course = $('input[name="algorgeo"]:checked').val()

        if (course === "Trigonometry/Precalculus") {
            showTPCLevels()
        } else {
            hideTPCLevels()
        }
    })
})

function hideTPCLevels() {
    let mathLevels = document.getElementById("algIILevelSelect")
    mathLevels.classList.add('level-select-hidden')
    mathLevels.classList.remove('level-select-visible')
}

function showTPCLevels() {
    let mathLevels = document.getElementById("algIILevelSelect")
    mathLevels.classList.add('level-select-visible')
    mathLevels.classList.remove('level-select-hidden')
}
