const express = require("express");
const path = require("path");
const { DatabaseSync } = require("node:sqlite");

const app = express();

const PORT = process.env.PORT || 3000;

// =====================================================
// DATABASE
// =====================================================

const dbPath = path.join(__dirname, "irrigation.db");

const db = new DatabaseSync(dbPath);


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

        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);


// =====================================================
// DATABASE MIGRATION
// =====================================================

// Add weather column if old database does not have it

try {

    db.exec(`
        ALTER TABLE irrigation_plans
        ADD COLUMN weather TEXT NOT NULL DEFAULT 'sunny'
    `);

} catch (error) {
    // Column already exists
}


// Add language column if old database does not have it

try {

    db.exec(`
        ALTER TABLE irrigation_plans
        ADD COLUMN language TEXT NOT NULL DEFAULT 'en'
    `);

} catch (error) {
    // Column already exists
}


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json());

app.use(express.static(__dirname));


// =====================================================
// TEST API
// =====================================================

app.get("/api/test", (req, res) => {

    res.json({

        success: true,

        message:
            "Smart Irrigation Backend is working!"

    });

});


// =====================================================
// IRRIGATION PLAN GENERATOR
// =====================================================

function generateIrrigationPlan(
    crop,
    growthStage,
    soil,
    weather,
    language
) {

    let waterRequirement = "Moderate";

    let frequency = "Every 2-3 days";

    let duration = "20 minutes";

    let recommendation =
        "Check soil moisture before irrigation.";

    let bestTime =
        "Early morning or evening";


    // =================================================
    // CROP RULES
    // =================================================

    if (crop === "rice") {

        waterRequirement = "High";

        frequency = "Every 1-2 days";

        duration = "30 minutes";

    }

    else if (crop === "tomato") {

        waterRequirement = "Moderate";

        frequency = "Every 2 days";

        duration = "20 minutes";

    }

    else if (crop === "cotton") {

        waterRequirement = "Moderate";

        frequency = "Every 3-4 days";

        duration = "25 minutes";

    }

    else if (crop === "groundnut") {

        waterRequirement = "Moderate";

        frequency = "Every 3 days";

        duration = "20 minutes";

    }

    else if (crop === "maize") {

        waterRequirement = "Moderate";

        frequency = "Every 2-3 days";

        duration = "25 minutes";

    }


    // =================================================
    // GROWTH STAGE
    // =================================================

    if (growthStage === "seedling") {

        frequency = "Every 2-3 days";

        duration = "15-20 minutes";

        recommendation =
            "Seedlings need regular but moderate moisture.";

    }

    else if (growthStage === "vegetative") {

        frequency = "Every 1-2 days";

        duration = "20-25 minutes";

        recommendation =
            "The vegetative stage needs regular moisture for healthy growth.";

    }

    else if (growthStage === "flowering") {

        frequency = "Every 1-2 days";

        duration = "25-30 minutes";

        recommendation =
            "Flowering requires adequate moisture for crop development.";

    }

    else if (growthStage === "maturity") {

        frequency = "Every 2-3 days";

        duration = "15-20 minutes";

        recommendation =
            "Water requirements generally decrease during maturity.";

    }


    // =================================================
    // SOIL
    // =================================================

    if (soil === "sandy") {

        frequency = "More frequently";

        recommendation +=
            " Sandy soil drains water quickly.";

    }

    else if (soil === "clay") {

        frequency = "Less frequently";

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

        waterRequirement = "Low";

        frequency = "Postpone irrigation";

        duration = "Not required during rainfall";

        recommendation +=
            " Rainy weather can provide natural water, so unnecessary irrigation should be avoided.";

    }

    else if (weather === "cloudy") {

        frequency = "Less frequently";

        duration = "15-20 minutes";

        recommendation +=
            " Cloudy conditions may reduce water loss compared with hot, sunny conditions.";

    }

    else if (weather === "sunny") {

        recommendation +=
            " Sunny weather can increase water loss, so monitor soil moisture regularly.";

    }

    else if (weather === "hot") {

        waterRequirement = "High";

        frequency = "More frequently";

        duration = "25-30 minutes";

        recommendation +=
            " Hot conditions can increase water loss, so soil moisture should be monitored closely.";

    }


    // =================================================
    // PERSONALIZED TIPS
    // =================================================

    let tips = [];


    // =================================================
    // ENGLISH TIPS
    // =================================================

    if (language === "en") {


        // Crop

        if (crop === "rice") {

            tips.push(
                "Monitor moisture regularly during important rice growth stages."
            );

        }

        else if (crop === "tomato") {

            tips.push(
                "Try to maintain reasonably consistent soil moisture for tomato plants."
            );

        }

        else if (crop === "cotton") {

            tips.push(
                "Monitor cotton plants regularly and avoid unnecessary irrigation."
            );

        }

        else if (crop === "groundnut") {

            tips.push(
                "Check moisture around the groundnut root zone before irrigation."
            );

        }

        else if (crop === "maize") {

            tips.push(
                "Monitor soil moisture regularly during active maize growth."
            );

        }


        // Growth stage

        if (growthStage === "seedling") {

            tips.push(
                "Seedlings have developing root systems, so maintain moderate and consistent moisture."
            );

        }

        else if (growthStage === "vegetative") {

            tips.push(
                "During the vegetative stage, monitor moisture regularly to support healthy growth."
            );

        }

        else if (growthStage === "flowering") {

            tips.push(
                "Avoid unnecessary water stress during flowering and monitor soil moisture regularly."
            );

        }

        else if (growthStage === "maturity") {

            tips.push(
                "As the crop approaches maturity, monitor its water requirement and avoid unnecessary irrigation."
            );

        }


        // Soil

        if (soil === "sandy") {

            tips.push(
                "Sandy soil drains water quickly, so check soil moisture more frequently."
            );

        }

        else if (soil === "clay") {

            tips.push(
                "Clay soil holds water longer, so check the soil before irrigating again."
            );

        }

        else if (soil === "loamy") {

            tips.push(
                "Loamy soil generally provides a good balance between drainage and moisture retention."
            );

        }


        // Weather

        if (weather === "rainy") {

            tips.push(
                "Rainy weather may provide enough moisture, so avoid unnecessary irrigation."
            );

        }

        else if (weather === "cloudy") {

            tips.push(
                "Under cloudy conditions, check soil moisture before adding more water."
            );

        }

        else if (weather === "sunny") {

            tips.push(
                "Sunny weather can increase water loss, so monitor soil moisture regularly."
            );

        }

        else if (weather === "hot") {

            tips.push(
                "Hot weather can increase water loss, so pay closer attention to soil moisture."
            );

        }

    }


    // =================================================
    // TELUGU TIPS
    // =================================================

    else if (language === "te") {


        // Crop

        if (crop === "rice") {

            tips.push(
                "వరి పంట ముఖ్యమైన ఎదుగుదల దశల్లో నేలలో తేమను క్రమం తప్పకుండా పరిశీలించండి."
            );

        }

        else if (crop === "tomato") {

            tips.push(
                "టమాటా మొక్కలకు నేలలో తేమను సాధ్యమైనంత స్థిరంగా ఉంచడానికి ప్రయత్నించండి."
            );

        }

        else if (crop === "cotton") {

            tips.push(
                "పత్తి మొక్కలను క్రమం తప్పకుండా పరిశీలించి, అవసరం లేని నీటిపారుదలను నివారించండి."
            );

        }

        else if (crop === "groundnut") {

            tips.push(
                "వేరుశెనగ పంటకు నీరు పెట్టే ముందు వేర్ల చుట్టూ నేలలో తేమను పరిశీలించండి."
            );

        }

        else if (crop === "maize") {

            tips.push(
                "మొక్కజొన్న పంట చురుకైన ఎదుగుదల సమయంలో నేలలో తేమను క్రమం తప్పకుండా పరిశీలించండి."
            );

        }


        // Growth stage

        if (growthStage === "seedling") {

            tips.push(
                "మొలక దశలో వేర్లు ఇంకా అభివృద్ధి చెందుతాయి. కాబట్టి మితమైన మరియు స్థిరమైన తేమను ఉంచండి."
            );

        }

        else if (growthStage === "vegetative") {

            tips.push(
                "ఏపుగా పెరుగుదల దశలో ఆరోగ్యకరమైన పెరుగుదలకు నేలలో తేమను క్రమం తప్పకుండా పరిశీలించండి."
            );

        }

        else if (growthStage === "flowering") {

            tips.push(
                "పుష్పించే దశలో నీటి కొరత రాకుండా చూసి, నేలలో తేమను క్రమం తప్పకుండా పరిశీలించండి."
            );

        }

        else if (growthStage === "maturity") {

            tips.push(
                "పంట పక్వతకు చేరుకునే సమయంలో నీటి అవసరాన్ని పరిశీలించి, అవసరం లేని నీటిపారుదలను నివారించండి."
            );

        }


        // Soil

        if (soil === "sandy") {

            tips.push(
                "ఇసుక నేల నీటిని త్వరగా బయటకు పంపుతుంది. కాబట్టి నేలలో తేమను తరచుగా పరిశీలించండి."
            );

        }

        else if (soil === "clay") {

            tips.push(
                "బంకమట్టి నేల నీటిని ఎక్కువసేపు నిల్వ ఉంచుతుంది. కాబట్టి మళ్లీ నీరు పెట్టే ముందు నేలను పరిశీలించండి."
            );

        }

        else if (soil === "loamy") {

            tips.push(
                "లోమీ నేల సాధారణంగా నీటి పారుదల మరియు తేమ నిల్వ మధ్య మంచి సమతుల్యతను అందిస్తుంది."
            );

        }


        // Weather

        if (weather === "rainy") {

            tips.push(
                "వర్షపు వాతావరణంలో పంటకు అవసరమైన తేమ లభించే అవకాశం ఉంది. కాబట్టి అవసరం లేని నీటిపారుదలను నివారించండి."
            );

        }

        else if (weather === "cloudy") {

            tips.push(
                "మేఘావృత వాతావరణంలో అదనంగా నీరు పెట్టే ముందు నేలలో తేమను పరిశీలించండి."
            );

        }

        else if (weather === "sunny") {

            tips.push(
                "ఎండగా ఉన్నప్పుడు నీటి నష్టం పెరగవచ్చు. కాబట్టి నేలలో తేమను క్రమం తప్పకుండా పరిశీలించండి."
            );

        }

        else if (weather === "hot") {

            tips.push(
                "వేడి వాతావరణంలో నీటి నష్టం పెరగవచ్చు. కాబట్టి నేలలో తేమపై ఎక్కువ శ్రద్ధ పెట్టండి."
            );

        }

    }


    // =================================================
    // HINDI TIPS
    // =================================================

    else if (language === "hi") {


        // Crop

        if (crop === "rice") {

            tips.push(
                "धान की महत्वपूर्ण वृद्धि अवस्थाओं में मिट्टी की नमी की नियमित जांच करें।"
            );

        }

        else if (crop === "tomato") {

            tips.push(
                "टमाटर के पौधों के लिए मिट्टी में नमी को यथासंभव स्थिर बनाए रखने का प्रयास करें।"
            );

        }

        else if (crop === "cotton") {

            tips.push(
                "कपास के पौधों की नियमित जांच करें और अनावश्यक सिंचाई से बचें।"
            );

        }

        else if (crop === "groundnut") {

            tips.push(
                "मूंगफली की सिंचाई से पहले जड़ों के आसपास मिट्टी की नमी की जांच करें।"
            );

        }

        else if (crop === "maize") {

            tips.push(
                "मक्का की सक्रिय वृद्धि के दौरान मिट्टी की नमी की नियमित जांच करें।"
            );

        }


        // Growth stage

        if (growthStage === "seedling") {

            tips.push(
                "पौध अवस्था में जड़ें अभी विकसित हो रही होती हैं, इसलिए मध्यम और लगातार नमी बनाए रखें।"
            );

        }

        else if (growthStage === "vegetative") {

            tips.push(
                "वानस्पतिक अवस्था में अच्छी वृद्धि के लिए मिट्टी की नमी की नियमित निगरानी करें।"
            );

        }

        else if (growthStage === "flowering") {

            tips.push(
                "फूल आने की अवस्था में पानी की कमी से बचें और मिट्टी की नमी की नियमित जांच करें।"
            );

        }

        else if (growthStage === "maturity") {

            tips.push(
                "फसल के पकने के समय उसकी पानी की आवश्यकता पर ध्यान दें और अनावश्यक सिंचाई से बचें।"
            );

        }


        // Soil

        if (soil === "sandy") {

            tips.push(
                "बलुई मिट्टी पानी को जल्दी बाहर निकाल देती है, इसलिए मिट्टी की नमी अधिक बार जांचें।"
            );

        }

        else if (soil === "clay") {

            tips.push(
                "चिकनी मिट्टी पानी को अधिक समय तक रोकती है, इसलिए दोबारा सिंचाई से पहले मिट्टी की जांच करें।"
            );

        }

        else if (soil === "loamy") {

            tips.push(
                "दोमट मिट्टी आमतौर पर जल निकास और नमी बनाए रखने के बीच अच्छा संतुलन प्रदान करती है।"
            );

        }


        // Weather

        if (weather === "rainy") {

            tips.push(
                "बारिश के मौसम में फसल को पर्याप्त नमी मिल सकती है, इसलिए अनावश्यक सिंचाई से बचें।"
            );

        }

        else if (weather === "cloudy") {

            tips.push(
                "बादल वाले मौसम में अतिरिक्त पानी देने से पहले मिट्टी की नमी की जांच करें।"
            );

        }

        else if (weather === "sunny") {

            tips.push(
                "धूप वाले मौसम में पानी की हानि बढ़ सकती है, इसलिए मिट्टी की नमी की नियमित निगरानी करें।"
            );

        }

        else if (weather === "hot") {

            tips.push(
                "गर्म मौसम में पानी की हानि बढ़ सकती है, इसलिए मिट्टी की नमी पर अधिक ध्यान दें।"
            );

        }

    }


    // =================================================
    // RETURN PLAN
    // =================================================

    return {

        crop: crop,

        growthStage: growthStage,

        soil: soil,

        weather: weather,

        waterRequirement: waterRequirement,

        frequency: frequency,

        duration: duration,

        recommendation: recommendation,

        bestTime: bestTime,

        tips: tips

    };

}


// =====================================================
// CREATE PLAN
// =====================================================

app.post("/api/plan", (req, res) => {

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

        const selectedLanguage =
            ["en", "te", "hi"].includes(language)
                ? language
                : "en";


        const plan =
            generateIrrigationPlan(
                crop,
                growthStage,
                soil,
                weather,
                selectedLanguage
            );


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

});


// =====================================================
// GET ALL PLANS
// =====================================================

app.get("/api/plans", (req, res) => {

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

});


// =====================================================
// GET ONE PLAN
// =====================================================

app.get("/api/plans/:id", (req, res) => {

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

});


// =====================================================
// DELETE PLAN
// =====================================================

app.delete("/api/plans/:id", (req, res) => {

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


        if (result.changes === 0) {

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

});


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

});