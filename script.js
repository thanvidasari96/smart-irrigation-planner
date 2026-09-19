document.addEventListener(
    "DOMContentLoaded",
    function () {

        const button =
            document.getElementById(
                "generateBtn"
            );


        button.addEventListener(
            "click",
            async function () {


                // =====================================
                // GET USER INPUTS
                // =====================================

                const crop =
                    document.getElementById(
                        "crop"
                    ).value;


                const stage =
                    document.getElementById(
                        "stage"
                    ).value;


                const soil =
                    document.getElementById(
                        "soil"
                    ).value;


                const weather =
                    document.getElementById(
                        "weather"
                    ).value;


                const language =
                    getLanguage();


                // =====================================
                // VALIDATION
                // =====================================

                if (
                    crop === "" ||
                    stage === "" ||
                    soil === "" ||
                    weather === ""
                ) {

                    alert(
                        t("selectAll")
                    );

                    return;

                }


                try {

                    button.disabled = true;


                    button.textContent =
                        t("generatingPlan");


                    // =================================
                    // SEND TO BACKEND
                    // =================================

                    const response =
                        await fetch(
                            "/api/plan",
                            {

                                method: "POST",

                                headers: {

                                    "Content-Type":
                                        "application/json"

                                },

                                body:
                                    JSON.stringify({

                                        crop:
                                            crop,

                                        growthStage:
                                            stage,

                                        soil:
                                            soil,

                                        weather:
                                            weather,

                                        language:
                                            language

                                    })

                            }
                        );


                    const data =
                        await response.json();


                    // =================================
                    // CHECK RESPONSE
                    // =================================

                    if (!data.success) {

                        alert(
                            data.error ||
                            "Unable to generate plan."
                        );

                        return;

                    }


                    const plan =
                        data.plan;


                    // =================================
                    // SAVE PLAN DATA
                    // =================================

                    localStorage.setItem(
                        "water",
                        plan.waterRequirement
                    );


                    localStorage.setItem(
                        "frequency",
                        plan.frequency
                    );


                    localStorage.setItem(
                        "duration",
                        plan.duration
                    );


                    localStorage.setItem(
                        "reason",
                        plan.recommendation
                    );


                    localStorage.setItem(
                        "crop",
                        plan.crop
                    );


                    localStorage.setItem(
                        "stage",
                        plan.growthStage
                    );


                    localStorage.setItem(
                        "soil",
                        plan.soil
                    );


                    localStorage.setItem(
                        "weather",
                        plan.weather
                    );


                    localStorage.setItem(
                        "bestTime",
                        plan.bestTime
                    );


                    localStorage.setItem(
                        "planId",
                        plan.id
                    );


                    // =================================
                    // SAVE LANGUAGE
                    // =================================

                    localStorage.setItem(
                        "planLanguage",
                        plan.language
                    );


                    // =================================
                    // SAVE PERSONALIZED TIPS
                    // =================================

                    localStorage.setItem(
                        "tips",
                        JSON.stringify(
                            plan.tips || []
                        )
                    );


                    // =================================
                    // OPEN RESULT PAGE
                    // =================================

                    window.location.href =
                        "result.html";

                }


                catch (error) {

                    console.error(error);


                    alert(
                        t("connectionError")
                    );

                }


                finally {

                    button.disabled = false;


                    button.textContent =
                        t("generatePlan");

                }

            }

        );

    }
);