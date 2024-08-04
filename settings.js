
function changePassword() {
    // Redirect user to the index1 file 
    window.location.href = "test3.html";
}
function contactSupport() {
    // Add logic to redirect to email for support
    window.location.href = "settings3.html";
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
