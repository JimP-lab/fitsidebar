async function deleteAccount() {
    const confirmed = confirm("Do You Want To Delete Your Account?");
        if (!confirmed) {
            return;
        }
    
        const username = prompt("Enter Your Username");
        if (username === null) {
            return;
        }
        try {
            const response = await fetch('DeleteUsers.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username })
            });
    
            const result = await response.json();
    
            if (result.status === 'Success') {
                alert(result.message);
                window.location.href = 'index.html';
            } else {
                alert(result.message);
                window.location.href = 'index.html';
            }
        } catch (error) {
            console.error('Error Deleting Account:', error);
            alert('An Error Occurred.');
            window.location.href = 'index.html';
        }
    }
    async function addExercise(event) {
        event.preventDefault();
    
        // Get the form data
        const formData = new FormData(document.getElementById('exerciseForm'));
    
        // Check if all metrics are filled
        if (!formData.get('exerciseName') || !formData.get('reps') || !formData.get('time')) {
            alert("Enter your Metrics.");
            return;
        }
    
        // Send the form data via fetch API
        fetch('SaveExercise.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                // Create a new list item for the added exercise
                const exerciseList = document.getElementById('exerciseList');
                const newItem = document.createElement('div');
                newItem.className = 'p-4 mb-4 border rounded-md';
                newItem.innerHTML = `Exercise: ${formData.get('exerciseName')}, Reps: ${formData.get('reps')}, Time: ${formData.get('time')} 
                <button onclick="deleteExercise(${data.id})" class="ml-4 text-red-500">Delete</button>`;
                exerciseList.appendChild(newItem);
            }
            // Display an alert with the message
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while saving the exercise.');
        });
    }
    
    function deleteExercise(id) {
        fetch('DeleteExercise.php', {
            method: 'POST',
            body: JSON.stringify({ id: id }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                location.reload();
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while deleting the exercise.');
        });
    }
    async function addMeal(event) {
        event.preventDefault(); // Prevent the default form submission
    
        // Get the form data
        const formData = new FormData(document.getElementById('mealsForm'));
    
        // Send the form data via fetch API
        fetch('SaveMeals.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                // Create a new list item for the added meal
                const mealList = document.getElementById('mealList');
                const newItem = document.createElement('div');
                newItem.className = 'p-4 mb-4 border rounded-md';
                newItem.textContent = `Meal: ${formData.get('mealsValue')}, Calories: ${formData.get('calories')}, Time: ${formData.get('mealTime')}`;
                mealList.appendChild(newItem);
            }
            // Display an alert with the message
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while saving the meal.');
        });
    }
