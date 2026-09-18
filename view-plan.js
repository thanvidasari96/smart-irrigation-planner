document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadPlan();

    }
);


async function loadPlan() {


    const container =
        document.getElementById(
            "planContainer"
        );


    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const id =
        urlParams.get("id");


    if (!id) {

        container.innerHTML =
            "<p>Plan ID not found.</p>";

        return;

    }


    try {


        const response =
            await fetch(
                `/api/plans/${id}`
            );


        const data =
            await response.json();


        if (!data.success) {

            container.innerHTML =
                `<p>${data.error}</p>`;

            return;

        }


        const plan =
            data.plan;


        container.innerHTML = `

            <div class="plan-card">


                <div class="plan-header">

                    <h2>

                        🌾
                        ${translateValue(
                            plan.crop
                        )}

                    </h2>


                    <span>
                        Plan #${plan.id}
                    </span>

                </div>


                <div class="plan-details">


                    <p>

                        <strong>
                            ${t("crop")}:
                        </strong>

                        ${translateValue(
                            plan.crop
                        )}

                    </p>


                    <p>

                        <strong>
                            ${t("stage")}:
                        </strong>

                        ${translateValue(
                            plan.growth_stage
                        )}

                    </p>


                    <p>

                        <strong>
                            ${t("soil")}:
                        </strong>

                        ${translateValue(
                            plan.soil
                        )}

                    </p>


                    <p>

                        <strong>
                            ${t("weather")}:
                        </strong>

                        ${translateValue(
                            plan.weather
                        )}

                    </p>


                    <p>

                        <strong>
                            ${t("water")}:
                        </strong>

                        ${translateValue(
                            plan.water_requirement
                        )}

                    </p>


                    <p>

                        <strong>
                            ${t("frequency")}:
                        </strong>

                        ${translateValue(
                            plan.frequency
                        )}

                    </p>


                    <p>

                        <strong>
                            ${t("duration")}:
                        </strong>

                        ${translateValue(
                            plan.duration
                        )}

                    </p>


                    <p>

                        <strong>
                            ${t("bestTime")}:
                        </strong>

                        ${translateValue(
                            plan.best_time
                        )}

                    </p>


                </div>


                <div class="recommendation">

                    <strong>
                        ${t("recommendation")}
                    </strong>


                    <p>

                        ${buildRecommendation(
                            plan.growth_stage,
                            plan.soil,
                            plan.weather
                        )}

                    </p>

                </div>


                <div class="plan-actions">

                    <button
                        class="view-btn"
                        onclick="
                            window.location.href='history.html'
                        ">

                        ${t("backHistory")}

                    </button>

                </div>


            </div>

        `;

    }


    catch (error) {

        console.error(error);


        container.innerHTML = `

            <p>
                ${t("connectionError")}
            </p>

        `;

    }

}


// =====================================================
// RECOMMENDATION
// =====================================================

function buildRecommendation(
    stage,
    soil,
    weather
) {

    let result = "";


    if (stage === "seedling") {

        result += t("recSeedling");

    }

    else if (stage === "vegetative") {

        result += t("recVegetative");

    }

    else if (stage === "flowering") {

        result += t("recFlowering");

    }

    else if (stage === "maturity") {

        result += t("recMaturity");

    }


    if (soil === "sandy") {

        result += " " + t("recSandy");

    }

    else if (soil === "clay") {

        result += " " + t("recClay");

    }

    else if (soil === "loamy") {

        result += " " + t("recLoamy");

    }


    if (weather === "rainy") {

        result += " " + t("recRainy");

    }

    else if (weather === "cloudy") {

        result += " " + t("recCloudy");

    }

    else if (weather === "sunny") {

        result += " " + t("recSunny");

    }

    else if (weather === "hot") {

        result += " " + t("recHot");

    }


    return result;

}