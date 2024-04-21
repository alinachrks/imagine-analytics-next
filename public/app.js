const select = document.querySelector('#languageDropdown');
const allLang = ['en', 'ru'];

select.addEventListener('change', changeLanguage);

// Function to handle language change
function changeLanguage() {
    let lang = select.value;
    // Change the language of elements on the page
    changePageLanguage(lang);
    // Update the URL hash with the selected language
    window.location.hash = lang;
}

// Function to set language based on URL hash
function setLanguage() {
    let hash = window.location.hash.substr(1);
    // Check if the hash is a valid language option
    if (!allLang.includes(hash)) {
        // If not, default to English
        hash = 'en';
        // Redirect to English version
        location.href = window.location.pathname + '#' + hash;
    }
    // Set the dropdown value to the selected language
    select.value = hash;

    // Change the language of elements on the page
    changePageLanguage(hash);
}

// Function to change the language of elements on the page
function changePageLanguage(lang) {
    // Loop through each key in langArr
    for (let key in langArr) {
        // Find the corresponding element on the page using the key
        let elem = document.getElementById(key);
        if (elem) {
            // Update the innerHTML of the element with the translation for the selected language
            elem.innerHTML = langArr[key][lang];
        }
    }
}

// Call setLanguage function on page load
window.addEventListener('load', setLanguage);
