<script>
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (name === '' || email === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate form submission
            console.log('Form submitted with the following values:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Password:', password);

            // Display a success message
            alert('Form submitted successfully!');
        });
    </script>

