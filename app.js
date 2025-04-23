document.addEventListener("DOMContentLoaded", function() {
    let modal = document.createElement("div");
    modal.id = "bookingModal";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "white";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
    modal.style.display = "none";
    modal.style.zIndex = "1000";
    modal.style.borderRadius = "15px";
    modal.style.width = "350px";
    modal.style.textAlign = "center";

    modal.innerHTML = `
        <h2 style="font-size: 18px;">Оформлення бронювання</h2>
        <input id="phone" type="text" placeholder="Номер телефону" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <input id="email" type="email" placeholder="Електронна пошта" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <input id="days" type="number" placeholder="Кількість днів проживання" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <input id="people" type="number" placeholder="Кількість осіб (1 - 3)" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <div id="error-message" style="color: red; font-size: 14px; margin-top: 5px;"></div>
        <button id="confirmBooking" style="background: gold; color: white; padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; margin-top: 15px;">Оформити бронювання</button>
        <button id="closeModal" style="background: red; color: white; padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; margin-top: 10px;">Закрити</button>
    `;
    document.body.appendChild(modal);

    
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Запобігаємо стандартним діям
            modal.style.display = "block";
        });
    });

    
    document.getElementById("closeModal").addEventListener("click", function() {
        modal.style.display = "none";
    });

    
    document.getElementById("confirmBooking").addEventListener("click", function() {
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const days = document.getElementById("days");
        const people = document.getElementById("people");
        const error = document.getElementById("error-message");

        let valid = true;
        error.textContent = "";

        [phone, email, days, people].forEach(input => {
            input.style.border = "1px solid gray"; // скидання стилю
            if (!input.value.trim()) {
                input.style.border = "2px solid red";
                valid = false;
            }
        });

        if (!valid) {
            error.textContent = "Будь ласка, заповніть всі поля!";
            return;
        }

        alert("Ваше бронювання підтверджено!");
        modal.style.display = "none";
    });

    
    const inputs = [
        document.getElementById("phone"),
        document.getElementById("email"),
        document.getElementById("days"),
        document.getElementById("people")
    ];
    const error = document.getElementById("error-message");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value.trim()) {
                input.style.border = "1px solid gray";
                error.textContent = "";
            }
        });
    });
});