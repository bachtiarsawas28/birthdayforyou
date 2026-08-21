document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENT
    ===================================================== */

    const openButton =
        document.getElementById("openButton");

    const envelope =
        document.querySelector(".envelope");

    const backgroundMusic =
        document.getElementById("backgroundMusic");

    const greetingCard =
        document.querySelector(".greeting-card");

    const storySection =
        document.getElementById("storySection");

    const storyArrow =
        document.getElementById("storyStart");

    const storyText =
        document.getElementById("storyText");

    const memorySection =
        document.getElementById("memorySection");

    const memoryBox =
        document.getElementById("memoryBox");

    const memoryScene =
        document.getElementById("memoryScene");

    const boxHint =
        document.getElementById("boxHint");

    const memoryGreeting =
        document.getElementById("memoryGreeting");

    const showPhotosButton =
        document.getElementById("showPhotosButton");

    const photoGallery =
        document.getElementById("photoGallery");

    const memoryQuote =
        document.getElementById("memoryQuote");

    const lovePopup =
        document.getElementById("lovePopup");

    const loveCard =
        document.getElementById("loveCard");

    const fallingHearts =
        document.getElementById("fallingHearts");

    const finalQuote =
        document.getElementById("finalQuote");

    const birthdayScene =
        document.getElementById("birthdayScene");

    const birthdayCake =
        document.getElementById("birthdayCake");

    const cakeCandle =
        document.getElementById("cakeCandle");

    const candleFlame =
        document.getElementById("candleFlame");

    const blowMessage =
        document.getElementById("blowMessage");

    const cakeCountdown =
        document.getElementById("cakeCountdown");

    const partyPopper =
        document.getElementById("partyPopper");

    const confettiContainer =
        document.getElementById("confettiContainer");

    const birthdayFinalCard =
        document.getElementById("birthdayFinalCard");


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    if (storySection) {
        storySection.style.display = "none";
        storySection.style.opacity = "0";
    }

    if (memorySection) {
        memorySection.style.display = "none";
        memorySection.style.opacity = "0";
    }

    if (lovePopup) {
        lovePopup.classList.remove("show");
    }

    if (finalQuote) {
        finalQuote.classList.remove("show");
    }

    if (birthdayScene) {
        birthdayScene.style.display = "none";
        birthdayScene.classList.remove("show");
    }

    if (partyPopper) {
        partyPopper.style.display = "none";
    }

    if (birthdayFinalCard) {

        birthdayFinalCard.classList.remove("show");
    
    }


    /* =====================================================
       1. OPEN ME
    ===================================================== */

    if (openButton) {

        openButton.addEventListener("click", function () {

            console.log("OPEN ME");

            /* Buka amplop */

            if (envelope) {
                envelope.classList.add("open");
            }


            /* Musik */

            if (backgroundMusic) {

                backgroundMusic.volume = 0.5;

                backgroundMusic
                    .play()
                    .catch(function (error) {

                        console.log(
                            "Music gagal diputar:",
                            error
                        );

                    });

            }


            /* Greeting */

            if (openButton) {
                openButton.innerHTML =
                    "HAPPY BIRTHDAY ❤️";
            }


            if (greetingCard) {

                greetingCard.style.opacity = "1";

                greetingCard.style.transform =
                    "translateY(-40px) scale(1)";

            }


            /* Amplop selesai */

            setTimeout(function () {

                if (envelope) {
                    envelope.classList.add("finished");
                }

            }, 2200);


            /* Button hilang */

            setTimeout(function () {

                openButton.style.opacity = "0";

                openButton.style.pointerEvents =
                    "none";

            }, 2500);


            /* Story muncul */

            setTimeout(function () {

                if (greetingCard) {

                    greetingCard.style.opacity = "0";

                    greetingCard.style.transform =
                        "translateY(-100px) scale(0.8)";
                }


                if (storySection) {

                    storySection.style.display =
                        "flex";

                    setTimeout(function () {

                        storySection.style.opacity =
                            "1";

                        if (storyText) {
                            storyText.classList.add("show");
                        }

                    }, 100);

                }

            }, 6000);


            /* Arrow story */

            setTimeout(function () {

                if (storyArrow) {
                    storyArrow.classList.add("show");
                }

            }, 3000);

        });

    }


    /* =====================================================
       2. STORY → MEMORY BOX
    ===================================================== */

    if (storyArrow) {

        storyArrow.addEventListener("click", function () {

            console.log("STORY → MEMORY BOX");

            storyArrow.classList.remove("show");

            if (storyText) {
                storyText.classList.remove("show");
            }

            if (storySection) {
                storySection.style.opacity = "0";
            }


            setTimeout(function () {

                if (storySection) {
                    storySection.style.display = "none";
                }

                if (memorySection) {

                    memorySection.style.display =
                        "flex";

                    setTimeout(function () {

                        memorySection.style.opacity =
                            "1";

                    }, 100);

                }

            }, 800);

        });

    }


    /* =====================================================
       3. MEMORY BOX
    ===================================================== */

    if (memoryBox) {

        memoryBox.addEventListener("click", function () {

            if (
                memoryBox.classList.contains("open")
            ) {
                return;
            }

            console.log("MEMORY BOX OPEN");

            memoryBox.classList.add("open");

            if (boxHint) {

                boxHint.innerHTML =
                    "Opening our memories... ❤️";

                boxHint.style.animation = "none";

            }


            /* Greeting card muncul */

            setTimeout(function () {

                if (memorySection) {
                    memorySection.classList.add(
                        "show-greeting"
                    );
                }

                if (boxHint) {
                    boxHint.style.opacity = "0";
                }

            }, 1800);

        });

    }


    /* =====================================================
       4. KLIK AKU → FOTO
    ===================================================== */

    if (showPhotosButton) {

        showPhotosButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                console.log(
                    "KLIK AKU → PHOTO GALLERY"
                );


                /* Greeting hilang */

                if (memorySection) {

                    memorySection.classList.remove(
                        "show-greeting"
                    );

                }


                /* Gallery muncul */

                setTimeout(function () {

                    if (photoGallery) {

                        photoGallery.classList.add(
                            "show"
                        );

                    }


                    /* Mulai timer 10 detik */

                    setTimeout(function () {

                        showLovePopup();

                    }, 10000);

                }, 500);

            }
        );

    }


    /* =====================================================
       5. LOVE POPUP
    ===================================================== */

    function showLovePopup() {

        console.log("LOVE POPUP");

        if (!lovePopup) {
            console.error(
                "lovePopup tidak ditemukan"
            );
            return;
        }

        lovePopup.classList.add("show");

        startFallingHearts();

    }


    /* =====================================================
       6. LOVE BERJATUHAN
    ===================================================== */

    function startFallingHearts() {

        if (!fallingHearts) {
            return;
        }

        fallingHearts.innerHTML = "";


        for (let i = 0; i < 60; i++) {

            const heart =
                document.createElement("div");

            heart.classList.add(
                "falling-heart"
            );

            heart.innerHTML =
                Math.random() > 0.5
                    ? "❤️"
                    : "💗";


            heart.style.left =
                Math.random() * 100 + "%";


            heart.style.fontSize =
                (15 + Math.random() * 25) +
                "px";


            heart.style.animationDuration =
                (3 + Math.random() * 4) +
                "s";


            heart.style.animationDelay =
                Math.random() * 2 +
                "s";


            fallingHearts.appendChild(
                heart
            );

        }

    }


    /* =====================================================
       7. LOVE CARD → FINAL QUOTE
    ===================================================== */

    if (loveCard) {

        loveCard.addEventListener(
            "click",
            function () {

                console.log(
                    "LOVE CARD CLICK"
                );


                /* Love popup hilang */

                if (lovePopup) {

                    lovePopup.classList.remove(
                        "show"
                    );

                }


                /* Final quote muncul */

                setTimeout(function () {

                    if (finalQuote) {

                        finalQuote.classList.add(
                            "show"
                        );

                    }

                }, 700);

            }
        );

    }


    /* =====================================================
       8. FINAL QUOTE → BIRTHDAY CAKE
       
       Klik final quote untuk lanjut
    ===================================================== */

    if (finalQuote) {

        finalQuote.addEventListener(
            "click",
            function () {

                console.log(
                    "FINAL QUOTE CLICK → CAKE"
                );


                /* Hilangkan quote */

                finalQuote.classList.remove(
                    "show"
                );


                setTimeout(function () {

                    finalQuote.style.display =
                        "none";


                    /* Mulai birthday */

                    startBirthdaySequence();

                }, 800);

            }
        );

    }


    /* =====================================================
       9. BIRTHDAY SEQUENCE
    ===================================================== */

    function startBirthdaySequence() {

        console.log(
            "🎂 BIRTHDAY SEQUENCE START"
        );


        /* =========================
           BERSIHKAN HALAMAN
        ========================= */

        if (memorySection) {
            memorySection.style.display =
                "none";
        }

        if (storySection) {
            storySection.style.display =
                "none";
        }

        if (lovePopup) {
            lovePopup.style.display =
                "none";
        }


        /* =========================
           TAMPILKAN BIRTHDAY SCENE
        ========================= */

        if (!birthdayScene) {

            console.error(
                "birthdayScene tidak ditemukan!"
            );

            return;

        }


        birthdayScene.style.display =
            "flex";


        setTimeout(function () {

            birthdayScene.classList.add(
                "show"
            );

        }, 100);


        /* =========================
           RESET
        ========================= */

        resetCake();


        /* =========================
           MULAI ANIMASI ROTI
        ========================= */

        startCakeAnimation();

    }


    /* =====================================================
       10. RESET CAKE
    ===================================================== */

    function resetCake() {

        const layers =
            document.querySelectorAll(
                ".cake-layer"
            );


        layers.forEach(function (layer) {

            layer.style.opacity = "0";

            layer.classList.remove(
                "cake-drop"
            );

        });


        if (cakeCandle) {

            cakeCandle.style.opacity = "0";

            cakeCandle.classList.remove(
                "candle-drop"
            );

        }


        if (candleFlame) {

            candleFlame.style.opacity = "0";

            candleFlame.classList.remove(
                "flame-on"
            );

            candleFlame.classList.remove(
                "flame-out"
            );

        }


        if (blowMessage) {

            blowMessage.style.opacity =
                "0";

        }


        if (cakeCountdown) {

            cakeCountdown.style.opacity =
                "0";

        }


        if (partyPopper) {

            partyPopper.style.display =
                "none";

            partyPopper.classList.remove(
                "show"
            );

        }


        if (birthdayFinalCard) {

            birthdayFinalCard.classList.remove("show");
        
        }

    }


    /* =====================================================
       11. CAKE BUILDING
    ===================================================== */

    function startCakeAnimation() {

        const bottom =
            document.querySelector(
                ".cake-bottom"
            );

        const middle =
            document.querySelector(
                ".cake-middle"
            );

        const top =
            document.querySelector(
                ".cake-top"
            );


        /* ROTI 1 */

        setTimeout(function () {

            if (bottom) {

                bottom.style.opacity = "1";

                bottom.classList.add(
                    "cake-drop"
                );

            }

        }, 500);


        /* ROTI 2 */

        setTimeout(function () {

            if (middle) {

                middle.style.opacity = "1";

                middle.classList.add(
                    "cake-drop"
                );

            }

        }, 1500);


        /* ROTI 3 */

        setTimeout(function () {

            if (top) {

                top.style.opacity = "1";

                top.classList.add(
                    "cake-drop"
                );

            }

        }, 2500);


        /* LILIN */

        setTimeout(function () {

            if (cakeCandle) {

                cakeCandle.style.opacity =
                    "1";

                cakeCandle.classList.add(
                    "candle-drop"
                );

            }

        }, 3500);


        /* =====================================================
   NYALAKAN API
===================================================== */

setTimeout(function () {

    if (cakeCandle) {

        // 🔥 NYALAKAN API
        cakeCandle.classList.add("lit");

    }

    if (candleFlame) {

        candleFlame.style.opacity = "1";

    }

    if (blowMessage) {

        blowMessage.style.opacity = "1";

    }

    console.log("🔥 API LILIN MENYALA");

    /* Tunggu 3 detik */

    setTimeout(function () {

        startCandleCountdown();

    }, 3000);

}, 4500);

    }


    /* =====================================================
       12. COUNTDOWN 3 → 2 → 1
    ===================================================== */

    function startCandleCountdown() {

        if (!cakeCountdown) {
            return;
        }


        console.log(
            "COUNTDOWN START"
        );


        cakeCountdown.style.opacity =
            "1";


        let count = 3;


        cakeCountdown.innerHTML =
            count;


        const interval =
            setInterval(function () {

                count--;


                if (count > 0) {

                    cakeCountdown.innerHTML =
                        count;

                } else {

                    clearInterval(interval);


                    cakeCountdown.innerHTML =
                        "💨";


                    setTimeout(function () {

                        blowCandle();

                    }, 500);

                }

            }, 1000);

    }


    /* =====================================================
       13. MATIKAN LILIN
    ===================================================== */

    function blowCandle() {

        console.log(
            "💨 CANDLE BLOWN"
        );


        if (cakeCandle) {

            cakeCandle.classList.remove("lit");
        
            cakeCandle.classList.remove("candle-drop");
        
            cakeCandle.style.opacity = "0";
        
        }
        
        if (candleFlame) {
        
            candleFlame.style.opacity = "0";
        
            candleFlame.classList.remove("flame-out");
        
        }


        if (blowMessage) {

            blowMessage.style.opacity =
                "0";

        }


        if (cakeCountdown) {

            cakeCountdown.style.opacity =
                "0";

        }


        /* Party */

        setTimeout(function () {

            startPartyPopper();

        }, 1000);

    }


    /* =====================================================
       14. PARTY POPPER
    ===================================================== */

    function startPartyPopper() {

        console.log(
            "🎉 PARTY POPPER!"
        );


        if (!partyPopper) {

            console.error(
                "partyPopper tidak ditemukan!"
            );

            return;

        }


        partyPopper.style.display =
            "flex";


        setTimeout(function () {

            partyPopper.classList.add(
                "show"
            );

        }, 50);


        createConfetti();


        /* Party 4 detik */

        setTimeout(function () {

            partyPopper.classList.remove(
                "show"
            );


            setTimeout(function () {

                partyPopper.style.display =
                    "none";


                showBirthdayFinalCard();

            }, 800);

        }, 2000);

    }


    /* =====================================================
       15. CONFETTI
    ===================================================== */

    function createConfetti() {

        if (!confettiContainer) {

            console.error(
                "confettiContainer tidak ditemukan!"
            );

            return;

        }


        confettiContainer.innerHTML =
            "";


        for (let i = 0; i < 120; i++) {

            const confetti =
                document.createElement(
                    "div"
                );


            confetti.classList.add(
                "confetti"
            );


            confetti.style.left =
                Math.random() * 100 + "%";


            confetti.style.top =
                "45%";


            const x =
                Math.random() * 700 - 350;


            const y =
                Math.random() * 650 + 150;


            const rotate =
                Math.random() * 720 - 360;


            confetti.style.setProperty(
                "--x",
                x + "px"
            );


            confetti.style.setProperty(
                "--y",
                y + "px"
            );


            confetti.style.setProperty(
                "--rotate",
                rotate + "deg"
            );


            const size =
                Math.random() * 8 + 5;


            confetti.style.width =
                size + "px";


            confetti.style.height =
                size * 1.8 + "px";


            confetti.style.animationDelay =
                Math.random() * 0.5 + "s";


            confettiContainer.appendChild(
                confetti
            );

        }

    }


    /* =====================================================
       16. FINAL BIRTHDAY CARD
    ===================================================== */

    function showBirthdayFinalCard() {

        console.log("❤️ FINAL BIRTHDAY CARD");
    
        if (!birthdayFinalCard) {
    
            console.error(
                "birthdayFinalCard tidak ditemukan!"
            );
    
            return;
    
        }
    
        birthdayFinalCard.classList.add("show");
    
    }

});