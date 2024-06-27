
function changePassword() {
    // Redirect user to the index1 file 
    window.location.href = "index1.html";
}
function contactSupport() {
    // Add logic to redirect to email for support
    window.location.href = "index8.html";
}
    // Function to delete user credentials
    function deleteUser() {
        const confirmed = confirm("Are you sure you want to delete your account?");
        if (confirmed) {
            // Assuming you have the username stored in a variable or retrieved it from somewhere
            const username = 'username_to_delete'; // Replace with actual username or retrieve dynamically
            fetch('deleteusers.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Your account has been deleted.');
                    // Redirect to home page or login page
                    window.location.href = 'index.html';
                } else {
                    alert('Failed to delete account. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        }
    }
function logout() {
    const confirmLogout = confirm('Do you want to log out?');

    if (confirmLogout) {
        // Redirect to the login page if needed
        window.location.href = 'index.html'; 
        // Clear local storage data if needed
        localStorage.removeItem('userData');
    } else {
        // User clicked "No", do nothing or perform additional actions as needed
    }
}
