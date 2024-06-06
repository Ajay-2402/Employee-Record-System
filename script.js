document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-employee-form");
    const employeesList = document.getElementById("employees");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("employee-name").value;
        const age = document.getElementById("employee-age").value;
        const position = document.getElementById("employee-position").value;

        if (name && age && position) {
            const employeeItem = document.createElement("li");
            employeeItem.innerHTML = `<strong>${name}</strong> (Age: ${age}, Position: ${position})`;
            employeesList.appendChild(employeeItem);

            // Clear form fields
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
