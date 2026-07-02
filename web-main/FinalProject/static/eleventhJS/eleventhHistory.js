$.ajax({
    // sends GET request to url '/get-data/' with data
    url: '/get-data',
    type: 'GET',

    success: function(response) {

        // Handle the response data
        let POS = JSON.parse(response);

        // iterate through dictionaries (keys, cuz its a dict of dicts) in POS
        const keys = Object.keys(POS);

        // iterate through POS
        for (let i=0; i<keys.length; i++) {


            // DISPLAY OPTIONS FOR HISTORIES
            if (POS[keys[i]]['Subject'] === 'History' && POS[keys[i]]['Grades Open'] === '9-12' && POS[keys[i]]['Type'] !== 'American') {

                // create a wrapper for each option
                let wrapper = document.createElement("radio-wrapper")
                wrapper.className = "radio-wrapper";

                // create checkbox input option for each wellness class
                let history = document.createElement("input");
                history.type = "radio";
                history.id = POS[keys[i]]['Course Name'];
                history.value = POS[keys[i]]['Course Name'];
                history.name = "historySelect";

                // /* add event listener to show on the left side */
                // THIS IS FOR DISPLAYING THE HISTORy CHOSEN IN THE SIDE BAR
                history.addEventListener("change", function() {

                    let selected = []
                    const checkedCheckboxes = document.querySelectorAll('input[name="historySelect"]:checked')
                    for (i=0; i<checkedCheckboxes.length; i++) {
                        selected.push(checkedCheckboxes[i].value)
                    }

                    // display history class box inside side bar div for history class
                    document.getElementById("history11").innerHTML = ""
                    for (let i=0; i<selected.length; i++) {
                        display = document.createElement("h5")
                        display.className = "selected11thClass";
                        display.innerText = selected[i]
                        document.getElementById("history11").appendChild(display);
                        }

                })

                // create label for each radio button dynamically
                let label = document.createElement("label");

                // INNER TEXT MEANS COURSE NAME IS ACTUALLY DISPLAYED
                label.innerText = POS[keys[i]]['Course Name'];

                // HTML FOR MEANS THAT THE RIGHT COURSE NAME LABEL GOES TO EACH BUTTON
                label.htmlFor = POS[keys[i]]['Course Name'];

                // append option to regular div
                wrapper.appendChild(history);
                wrapper.appendChild(label);

                //append the wrapper for each button to the div in the class
                let historyOptions = document.getElementById("history-select-wrapper");

                historyOptions.appendChild(wrapper);

            }

        }

    }

})
