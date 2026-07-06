/* ==========================================
   LJL DIGITAL HUB
   script.js - Part 1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       DARK MODE
    ========================== */

    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark");
        if (themeToggle) themeToggle.textContent = "☀️";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {

            body.classList.toggle("dark");

            const dark = body.classList.contains("dark");

            themeToggle.textContent = dark ? "☀️" : "🌙";

            localStorage.setItem("theme", dark ? "dark" : "light");

        });
    }

    /* ==========================
       TYPING EFFECT
    ========================== */

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [

            "IT Infrastructure Specialist",

            "Systems Administrator",

            "Network Engineer",

            "Founder of LMF Payment Services",

            "Technology Leader"

        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const current = words[wordIndex];

            if (!deleting) {

                typing.textContent = current.substring(0, charIndex++);

                if (charIndex > current.length) {

                    deleting = true;

                    setTimeout(type, 1500);

                    return;

                }

            } else {

                typing.textContent = current.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                }

            }

            setTimeout(type, deleting ? 40 : 80);

        }

        type();

    }

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});