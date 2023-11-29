const userTypeRadios = document.querySelectorAll('input[name="userType"]');

userTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === "Others") {
            const othersTypeInput = document.getElementById('userName');
            if (othersTypeInput.value.toLowerCase() === "caregiver") {
                // If "Caregiver" is selected, display relevant results
                const caregiverResults = document.getElementById('caregiverResults');
                caregiverResults.style.display = "block";
            } else {
                const caregiverResults = document.getElementById('caregiverResults');
                caregiverResults.style.display = "none";
            }
        } else {
            // Hide results for other options
            const caregiverResults = document.getElementById('caregiverResults');
            caregiverResults.style.display = "none";
        }
    });
});