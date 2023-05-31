// Script for MINI TABS
var tablinks = document.getElementsByClassName("tab-links"); // Grabs mini tab title names
        var tabcontents = document.getElementsByClassName("tab-contents"); // Grabs mini tab content
        // Replaces active links between mini tabs
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link"); // Removes active mini tab title
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab"); // Removes active mini tab content
            }
            event.currentTarget.classList.add("active-link"); // Shows active link on click
            document.getElementById(tabname).classList.add("active-tab") // Shows active content on click
        }

// Onclick function for mobile view sidebar
var sidebar = document.getElementById("sidebar");

        function openmenu() {
            sidebar.style.right = "0";
        }

        function closemenu() {
            sidebar.style.right = "-150px";
        }

// Google sheet repository code by Jamie Wilson (https://github.com/jamiewilson/form-to-google-sheets)
const scriptURL = '<https://script.google.com/macros/s/AKfycbyes-mHwr8JfizAcfD37KmvJae1AHqkulo63oxr2D-ktuw2KUdcRdh7R_W9IRcRWiFf/exec>'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent!"
                    setTimeout(function(){
                        msg.innerHTML = ""
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })