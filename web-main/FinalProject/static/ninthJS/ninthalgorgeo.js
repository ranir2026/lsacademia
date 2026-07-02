$(document).ready(function() {
    hideAlgLevels()
    hideGeoLevels()
    $('input[name="algorgeo"]').on("change", function() {
        let course = $('input[name="algorgeo"]:checked').val()

        if (course === "Algebra I") {
            hideGeoLevels()
            showAlgLevels()
        } else if (course === "Geometry") {
            hideAlgLevels()
            showGeoLevels()
        }
    })
})

function hideAlgLevels() {
    let mathLevels = document.getElementById("algILevelSelect")
    mathLevels.classList.add('level-select-hidden')
    mathLevels.classList.remove('level-select-visible')
}

function hideGeoLevels() {
    let mathLevels = document.getElementById("geoLevelSelect")
    mathLevels.classList.add('level-select-hidden')
    mathLevels.classList.remove('level-select-visible')
}

function showAlgLevels() {
    let mathLevels = document.getElementById("algILevelSelect")
    mathLevels.classList.remove('level-select-hidden')
    mathLevels.classList.add('level-select-visible')
}

function showGeoLevels() {
    let mathLevels = document.getElementById("geoLevelSelect")
    mathLevels.classList.remove('level-select-hidden')
    mathLevels.classList.add('level-select-visible')
}
