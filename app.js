document.addEventListener("DOMContentLoaded", function() {
    // Створення модального вікна
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
        <input type="text" placeholder="Номер телефону" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <input type="email" placeholder="Електронна пошта" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <input type="number" placeholder="Кількість днів проживання" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <input type="number" placeholder="Кількість осіб (1 - 3)" style="display:block; margin:10px auto; width:80%; padding:10px; border-radius:10px; border: 1px solid gray; background:#e0e0e0;">
        <button id="confirmBooking" style="background: gold; color: white; padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; margin-top: 15px;">Оформити бронювання</button>
        <button id="closeModal" style="background: red; color: white; padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; margin-top: 10px;">Закрити</button>
    `;
    document.body.appendChild(modal);
    
    // Отримуємо всі кнопки з класом "button" (тільки для бронювання)
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Запобігаємо стандартним діям
            modal.style.display = "block";
        });
    });

    // Закриття модального вікна
    document.getElementById("closeModal").addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Підтвердження бронювання
    document.getElementById("confirmBooking").addEventListener("click", function() {
        alert("Ваше бронювання підтверджено!");
        modal.style.display = "none";
    });
});
