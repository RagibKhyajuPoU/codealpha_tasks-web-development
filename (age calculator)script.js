function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Months are 0-indexed
    const year = parseInt(document.getElementById('year').value);
    const today = new Date();

    if (!day || !month || !year || year > today.getFullYear()) {
        document.getElementById('result').innerText = "Please enter a valid date!";
        return;
    }

    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    if (age >= 0) {
        document.getElementById('result').innerText = `Your age is: ${age} years`;
    } else {
        document.getElementById('result').innerText = "Invalid date of birth!";
    }
}
