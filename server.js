const express = require("express");
const path = require("path");
const { DatabaseSync } = require("node:sqlite");


const app = express();

const PORT = process.env.PORT || 3000;

// =====================================================
// DATABASE
// =====================================================

const dbPath =
    path.join(__dirname, "irrigation.db");


const db =
    new DatabaseSync(dbPath);


// =====================================================
// CREATE TABLE
// =====================================================

db.exec(`

    CREATE TABLE IF NOT EXISTS irrigation_plans (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        crop TEXT NOT NULL,

        growth_stage TEXT NOT NULL,

        soil TEXT NOT NULL,

        weather TEXT NOT NULL DEFAULT 'sunny',

        water_requirement TEXT NOT NULL,

        frequency TEXT NOT NULL,

        duration TEXT NOT NULL,

        recommendation TEXT NOT NULL,

        best_time TEXT NOT NULL,

        language TEXT NOT NULL DEFAULT 'en',

        created_at DATETIME
            DEFAULT CURRENT_TIMESTAMP

    )

`);


// =====================================================
// DATABASE MIGRATION
// =====================================================

// Add weather to old database

try {

    db.exec(`

        ALTER TABLE irrigation_plans

        ADD COLUMN weather
        TEXT NOT NULL
        DEFAULT 'sunny'

    `);

} catch (error) {

    // Column already exists.
}


// Add language to old database

try {

    db.exec(`

        ALTER TABLE irrigation_plans

        ADD COLUMN language
        TEXT NOT NULL
        DEFAULT 'en'

    `);

} catch (error) {

    // Column already exists.
}


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(
    express.json()
);


app.use(
    express.static(__dirname)
);


// =====================================================
// TEST API
// =====================================================

app.get(
    "/api/test",
    (req, res) => {

        res.json({

            success: true,

            message:
                "Smart Irrigation Backend is working!"

        });

    }
);


// =====================================================
// IRRIGATION PLAN GENERATOR
// =====================================================

function generateIrrigationPlan(
    crop,
    growthStage,
    soil,
    weather
) {


    let waterRequirement =
        "Moderate";


    let frequency =
        "Every 2-3 days";


    let duration =
        "20 minutes";


    let recommendation =
        "Check soil moisture before irrigation.";


    let bestTime =
        "Early morning or evening";



    // =================================================
    // CROP RULES
    // =================================================

    if (crop === "rice") {

        waterRequirement =
            "High";

        frequency =
            "Every 1-2 days";

        duration =
            "30 minutes";

    }


    else if (crop === "tomato") {

        waterRequirement =
            "Moderate";

        frequency =
            "Every 2 days";

        duration =
            "20 minutes";

    }


    else if (crop === "cotton") {

        waterRequirement =
            "Moderate";

        frequency =
            "Every 3-4 days";

        duration =
            "25 minutes";

    }


    else if (crop === "groundnut") {

        waterRequirement =
            "Moderate";

        frequency =
            "Every 3 days";

        duration =
            "20 minutes";

    }


    else if (crop === "maize") {

        waterRequirement =
            "Moderate";

        frequency =
            "Every 2-3 days";

        duration =
            "25 minutes";

    }



    // =================================================
    // GROWTH STAGE
    // =================================================

    if (growthStage === "seedling") {

        frequency =
            "Every 2-3 days";

        duration =
            "15-20 minutes";

        recommendation =
            "Seedlings need regular but moderate moisture.";

    }


    else if (growthStage === "vegetative") {

        frequency =
            "Every 1-2 days";

        duration =
            "20-25 minutes";

        recommendation =
            "The vegetative stage needs regular moisture for healthy growth.";

    }


    else if (growthStage === "flowering") {

        frequency =
            "Every 1-2 days";

        duration =
            "25-30 minutes";

        recommendation =
            "Flowering requires adequate moisture for crop development.";

    }


    else if (growthStage === "maturity") {

        frequency =
            "Every 2-3 days";

        duration =
            "15-20 minutes";

        recommendation =
            "Water requirements generally decrease during maturity.";

    }



    // =================================================
    // SOIL
    // =================================================

    if (soil === "sandy") {

        frequency =
            "More frequently";

        recommendation +=
            " Sandy soil drains water quickly.";

    }


    else if (soil === "clay") {

        frequency =
            "Less frequently";

        recommendation +=
            " Clay soil retains water for longer.";

    }


    else if (soil === "loamy") {

        recommendation +=
            " Loamy soil generally provides good moisture retention and drainage.";

    }



    // =================================================
    // WEATHER
    // =================================================

    if (weather === "rainy") {

        waterRequirement =
            "Low";

        frequency =
            "Postpone irrigation";

        duration =
            "Not required during rainfall";

        recommendation +=
            " Rainy weather can provide natural water, so unnecessary irrigation should be avoided.";

    }


    else if (weather === "cloudy") {

        frequency =
            "Less frequently";

        duration =
            "15-20 minutes";

        recommendation +=
            " Cloudy conditions may reduce water loss compared with hot, sunny conditions.";

    }


    else if (weather === "sunny") {

        recommendation +=
            " Sunny weather can increase water loss, so monitor soil moisture regularly.";

    }


    else if (weather === "hot") {

        waterRequirement =
            "High";

        frequency =
            "More frequently";

        duration =
            "25-30 minutes";

        recommendation +=
            " Hot conditions can increase water loss, so soil moisture should be monitored closely.";

    }



    return {

        crop:

            crop,

        growthStage:

            growthStage,

        soil:

            soil,

        weather:

            weather,

        waterRequirement:

            waterRequirement,

        frequency:

            frequency,

        duration:

            duration,

        recommendation:

            recommendation,

        bestTime:

            bestTime

    };

}


// =====================================================
// CREATE PLAN
// =====================================================

app.post(
    "/api/plan",
    (req, res) => {


        const {

            crop,

            growthStage,

            soil,

            weather,

            language

        } = req.body;



        if (
            !crop ||
            !growthStage ||
            !soil ||
            !weather
        ) {

            return res.status(400).json({

                success: false,

                error:
                    "Please select all required fields."

            });

        }



        try {


            const plan =
                generateIrrigationPlan(
                    crop,
                    growthStage,
                    soil,
                    weather
                );



            const selectedLanguage =
                ["en", "te", "hi"].includes(
                    language
                )
                    ? language
                    : "en";



            const statement =
                db.prepare(`

                    INSERT INTO irrigation_plans

                    (

                        crop,

                        growth_stage,

                        soil,

                        weather,

                        water_requirement,

                        frequency,

                        duration,

                        recommendation,

                        best_time,

                        language

                    )

                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

                `);



            const result =
                statement.run(

                    plan.crop,

                    plan.growthStage,

                    plan.soil,

                    plan.weather,

                    plan.waterRequirement,

                    plan.frequency,

                    plan.duration,

                    plan.recommendation,

                    plan.bestTime,

                    selectedLanguage

                );



            plan.id =
                Number(
                    result.lastInsertRowid
                );


            plan.language =
                selectedLanguage;



            res.json({

                success: true,

                plan: plan

            });

        }


        catch (error) {

            console.error(error);


            res.status(500).json({

                success: false,

                error:
                    "Something went wrong while generating the plan."

            });

        }

    }
);


// =====================================================
// GET ALL PLANS
// =====================================================

app.get(
    "/api/plans",
    (req, res) => {


        try {


            const plans =
                db.prepare(`

                    SELECT *

                    FROM irrigation_plans

                    ORDER BY id DESC

                `).all();



            res.json({

                success: true,

                plans: plans

            });

        }


        catch (error) {

            console.error(error);


            res.status(500).json({

                success: false,

                error:
                    "Could not retrieve saved plans."

            });

        }

    }
);


// =====================================================
// GET ONE PLAN
// =====================================================

app.get(
    "/api/plans/:id",
    (req, res) => {


        try {


            const id =
                Number(
                    req.params.id
                );


            const plan =
                db.prepare(`

                    SELECT *

                    FROM irrigation_plans

                    WHERE id = ?

                `).get(id);



            if (!plan) {

                return res.status(404).json({

                    success: false,

                    error:
                        "Plan not found."

                });

            }



            res.json({

                success: true,

                plan: plan

            });

        }


        catch (error) {

            console.error(error);


            res.status(500).json({

                success: false,

                error:
                    "Could not retrieve the plan."

            });

        }

    }
);


// =====================================================
// DELETE PLAN
// =====================================================

app.delete(
    "/api/plans/:id",
    (req, res) => {


        try {


            const id =
                Number(
                    req.params.id
                );


            const result =
                db.prepare(`

                    DELETE FROM irrigation_plans

                    WHERE id = ?

                `).run(id);



            if (
                result.changes === 0
            ) {

                return res.status(404).json({

                    success: false,

                    error:
                        "Plan not found."

                });

            }



            res.json({

                success: true,

                message:
                    "Plan deleted successfully."

            });

        }


        catch (error) {

            console.error(error);


            res.status(500).json({

                success: false,

                error:
                    "Could not delete the plan."

            });

        }

    }
);


// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, "0.0.0.0", () => {

        console.log("");

        console.log(
            "======================================"
        );

        console.log(
            "     SMART IRRIGATION PLANNER"
        );

        console.log(
            "======================================"
        );

        console.log("");

        console.log(
            `Backend running at http://localhost:${PORT}`
        );

        console.log("");

        console.log(
            "Database connected successfully."
        );

        console.log(
            "======================================"
        );

        console.log("");

    }
);