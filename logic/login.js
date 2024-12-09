document.getElementById('loginBtn').addEventListener('click', async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:5000/login', { // Change URL for deployment
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            alert(data.message);
            // Redirect to a dashboard or homepage
            window.location.href = "/dashboard.html";
        } else {
            alert(data.message || "Login failed.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred while trying to log in.");
    }
});
