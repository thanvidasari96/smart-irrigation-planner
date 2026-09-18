document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadPlans();

    }
);


async function loadPlans() {

    const container =
        document.getElementById(
            "plansContainer"
        );


    try {

        const response =
            await fetch("/api/plans");


        const data =
            await response.json();


        if (!data.success) {

            container.innerHTML =
                `<p>${t("unableDelete")}</p>`;

            return;

        }


        if (data.plans.length === 0) {

            container.innerHTML = `

                <div class="empty-plans">

                    <h2 data-i18n="noPlans">
                        🌱 No plans yet
                    </h2>

                    <p data-i18n="createFirst">
                        Create your first irrigation plan.
                    </p>

                    <a href="planner.html">

                        <button data-i18n="createPlan">
                            Create Plan
                        </button>

                    </a>

                </div>

            `;

            return;

        }


        container.innerHTML = "";


        data.plans.forEach(
            function (plan) {


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "plan-card";


                card.innerHTML = `

                    <div class="plan-header">

                        <h2>
                            🌾
                            ${translateValue(plan.crop)}
                        </h2>

                        <span>
                            Plan #${plan.id}
                        </span>

                    </div>


                    <div class="plan-details">


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
                            onclick="viewPlan(${plan.id})">

                            ${t("viewPlan")}

                        </button>


                        <button
                            class="delete-btn"
                            onclick="deletePlan(${plan.id})">

                            ${t("deletePlan")}

                        </button>


                    </div>

                `;


                container.appendChild(card);

            }
        );

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
// RECOMMENDATION TRANSLATOR
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


// =====================================================
// VIEW
// =====================================================

function viewPlan(id) {

    window.location.href =
        `view-plan.html?id=${id}`;

}


// =====================================================
// DELETE
// =====================================================

async function deletePlan(id) {


    const confirmDelete =
        confirm(
            t("deleteConfirm")
        );


    if (!confirmDelete) {

        return;

    }


    try {


        const response =
            await fetch(
                `/api/plans/${id}`,
                {
                    method: "DELETE"
                }
            );


        const data =
            await response.json();


        if (!data.success) {

            alert(
                t("unableDelete")
            );

            return;

        }


        alert(
            t("deleted")
        );


        loadPlans();

    }


    catch (error) {

        console.error(error);


        alert(
            t("connectionError")
        );

    }

}