// =====================================================
// SMART IRRIGATION - LANGUAGE SYSTEM
// English + Telugu + Hindi
// =====================================================


// -----------------------------------------------------
// TRANSLATIONS
// -----------------------------------------------------

const translations = {

    en: {

        // Navigation
        smartIrrigation: "🌱 Smart Irrigation",
        home: "Home",
        planner: "Planner",
        crops: "Crops",
        tips: "Tips",
        history: "History",

        // Home
        welcomeTitle: "Smart Irrigation Planner",
        welcomeText:
            "Plan irrigation intelligently using crop, soil, growth stage and weather conditions.",
        selectLanguage: "Select Your Language",
        startPlanning: "Start Planning 💧",

        // Planner
        createPlan: "💧 Create Irrigation Plan",
        plannerSubtitle:
            "Select crop, growth stage, soil and weather conditions",
        cropType: "🌾 Crop Type",
        selectCrop: "Select Crop",
        growthStage: "🌱 Growth Stage",
        selectStage: "Select Stage",
        soilCondition: "🪴 Soil Condition",
        selectSoil: "Select Soil",
        weatherCondition: "🌦️ Weather Condition",
        selectWeather: "Select Weather",
        generatePlan: "Generate Plan 💧",
        generatingPlan: "Generating Plan... 💧",

        // Crops
        cropsTitle: "🌾 Crop Information",
        rice: "Rice",
        tomato: "Tomato",
        cotton: "Cotton",
        groundnut: "Groundnut",
        maize: "Maize",

        riceInfo:
            "Rice generally requires higher water availability, especially during active growth.",
        tomatoInfo:
            "Tomato needs regular moisture, while excessive water should be avoided.",
        cottonInfo:
            "Cotton requires careful irrigation management throughout its growth cycle.",
        groundnutInfo:
            "Groundnut needs balanced moisture, particularly during flowering and pod development.",
        maizeInfo:
            "Maize benefits from adequate moisture during important growth stages.",

        // Tips
        tipsTitle: "💡 Smart Irrigation Tips",
        tip1:
            "Check soil moisture before irrigation whenever possible.",
        tip2:
            "Early morning or evening is generally suitable for irrigation.",
        tip3:
            "Avoid unnecessary irrigation during rainfall.",
        tip4:
            "Sandy soil usually loses water faster than clay soil.",
        tip5:
            "Monitor crops more carefully during hot weather.",

        // Result
        resultTitle: "💧 Irrigation Recommendation",
        resultSubtitle: "Your personalized irrigation plan",
        crop: "🌾 Crop",
        stage: "🌱 Growth Stage",
        soil: "🪴 Soil Condition",
        weather: "🌦️ Weather Condition",
        water: "💧 Water Requirement",
        frequency: "⏱️ Frequency",
        duration: "⏳ Duration",
        bestTime: "🕐 Best Time",
        recommendation: "💡 Recommendation",
        createAnother: "Create Another Plan 🌱",
        viewSaved: "View Saved Plans 📋",

        // History
        historyTitle: "📋 Saved Irrigation Plans",
        historySubtitle:
            "View all the irrigation plans you have generated.",
        noPlans: "🌱 No plans yet",
        createFirst: "Create your first irrigation plan.",
        createPlan: "Create Plan",
        viewPlan: "👁️ View Plan",
        deletePlan: "🗑️ Delete Plan",

        // View
        irrigationPlan: "💧 Irrigation Plan",
        loadingPlan: "Loading plan...",
        backHistory: "← Back to History",

        // Messages
        selectAll:
            "Please select Crop, Growth Stage, Soil Condition and Weather Condition.",
        connectionError:
            "Unable to connect to the backend. Please make sure the server is running.",
        deleteConfirm:
            "Are you sure you want to delete this irrigation plan?",
        deleted:
            "Plan deleted successfully!",
        unableDelete:
            "Unable to delete the plan.",

        // Values
        seedling: "Seedling",
        vegetative: "Vegetative",
        flowering: "Flowering",
        maturity: "Maturity",

        sandy: "Sandy",
        loamy: "Loamy",
        clay: "Clay",

        sunny: "Sunny",
        cloudy: "Cloudy",
        rainy: "Rainy",
        hot: "Hot",

        high: "High",
        moderate: "Moderate",
        low: "Low",

        earlyMorningEvening:
            "Early morning or evening",

        every12:
            "Every 1-2 days",

        every23:
            "Every 2-3 days",

        every34:
            "Every 3-4 days",

        every3:
            "Every 3 days",

        moreFrequently:
            "More frequently",

        lessFrequently:
            "Less frequently",

        postpone:
            "Postpone irrigation",

        notRequiredRain:
            "Not required during rainfall",

        minutes15_20:
            "15-20 minutes",

        minutes20:
            "20 minutes",

        minutes20_25:
            "20-25 minutes",

        minutes25:
            "25 minutes",

        minutes25_30:
            "25-30 minutes",

        minutes30:
            "30 minutes",

        // Recommendations
        recSeedling:
            "Seedlings need regular but moderate moisture.",

        recVegetative:
            "The vegetative stage needs regular moisture for healthy growth.",

        recFlowering:
            "Flowering requires adequate moisture for crop development.",

        recMaturity:
            "Water requirements generally decrease during maturity.",

        recSandy:
            "Sandy soil drains water quickly.",

        recClay:
            "Clay soil retains water for longer.",

        recLoamy:
            "Loamy soil generally provides good moisture retention and drainage.",

        recRainy:
            "Rainy weather can provide natural water, so unnecessary irrigation should be avoided.",

        recCloudy:
            "Cloudy conditions may reduce water loss compared with hot, sunny conditions.",

        recSunny:
            "Sunny weather can increase water loss, so monitor soil moisture regularly.",

        recHot:
            "Hot conditions can increase water loss, so soil moisture should be monitored closely."
    },


    te: {

        smartIrrigation: "🌱 స్మార్ట్ నీటిపారుదల",
        home: "హోమ్",
        planner: "ప్లానర్",
        crops: "పంటలు",
        tips: "చిట్కాలు",
        history: "చరిత్ర",

        welcomeTitle: "స్మార్ట్ నీటిపారుదల ప్లానర్",
        welcomeText:
            "పంట, నేల, ఎదుగుదల దశ మరియు వాతావరణ పరిస్థితులను ఉపయోగించి తెలివిగా నీటిపారుదల ప్రణాళిక రూపొందించండి.",
        selectLanguage: "మీ భాషను ఎంచుకోండి",
        startPlanning: "ప్రణాళిక ప్రారంభించండి 💧",

        createPlan: "💧 నీటిపారుదల ప్రణాళిక రూపొందించండి",
        plannerSubtitle:
            "పంట, ఎదుగుదల దశ, నేల మరియు వాతావరణ పరిస్థితులను ఎంచుకోండి",
        cropType: "🌾 పంట రకం",
        selectCrop: "పంటను ఎంచుకోండి",
        growthStage: "🌱 ఎదుగుదల దశ",
        selectStage: "దశను ఎంచుకోండి",
        soilCondition: "🪴 నేల పరిస్థితి",
        selectSoil: "నేలను ఎంచుకోండి",
        weatherCondition: "🌦️ వాతావరణ పరిస్థితి",
        selectWeather: "వాతావరణాన్ని ఎంచుకోండి",
        generatePlan: "ప్రణాళిక రూపొందించండి 💧",
        generatingPlan: "ప్రణాళిక రూపొందుతోంది... 💧",

        cropsTitle: "🌾 పంటల సమాచారం",
        rice: "వరి",
        tomato: "టమాటా",
        cotton: "పత్తి",
        groundnut: "వేరుశెనగ",
        maize: "మొక్కజొన్న",

        riceInfo:
            "వరి పంటకు ముఖ్యంగా ఎదుగుదల సమయంలో ఎక్కువ నీటి అవసరం ఉంటుంది.",
        tomatoInfo:
            "టమాటాకు క్రమమైన తేమ అవసరం, అయితే అధిక నీటిని నివారించాలి.",
        cottonInfo:
            "పత్తి పంట ఎదుగుదల సమయంలో జాగ్రత్తగా నీటిపారుదల నిర్వహణ అవసరం.",
        groundnutInfo:
            "వేరుశెనగకు సమతుల్య తేమ అవసరం, ముఖ్యంగా పుష్పించే మరియు కాయ అభివృద్ధి సమయంలో.",
        maizeInfo:
            "మొక్కజొన్న ముఖ్యమైన ఎదుగుదల దశల్లో తగినంత తేమతో బాగా పెరుగుతుంది.",

        tipsTitle: "💡 స్మార్ట్ నీటిపారుదల చిట్కాలు",
        tip1:
            "సాధ్యమైనప్పుడు నీటిపారుదల ముందు నేలలోని తేమను తనిఖీ చేయండి.",
        tip2:
            "సాధారణంగా ఉదయం లేదా సాయంత్రం నీటిపారుదల చేయడం అనుకూలంగా ఉంటుంది.",
        tip3:
            "వర్షం పడుతున్నప్పుడు అవసరం లేని నీటిపారుదలను నివారించండి.",
        tip4:
            "ఇసుక నేల సాధారణంగా బంకమట్టి నేల కంటే నీటిని వేగంగా కోల్పోతుంది.",
        tip5:
            "వేడి వాతావరణంలో పంటలను మరింత జాగ్రత్తగా పర్యవేక్షించండి.",

        resultTitle: "💧 నీటిపారుదల సిఫార్సు",
        resultSubtitle: "మీ వ్యక్తిగత నీటిపారుదల ప్రణాళిక",
        crop: "🌾 పంట",
        stage: "🌱 ఎదుగుదల దశ",
        soil: "🪴 నేల పరిస్థితి",
        weather: "🌦️ వాతావరణ పరిస్థితి",
        water: "💧 నీటి అవసరం",
        frequency: "⏱️ తరచుదనం",
        duration: "⏳ వ్యవధి",
        bestTime: "🕐 ఉత్తమ సమయం",
        recommendation: "💡 సిఫార్సు",
        createAnother: "మరొక ప్రణాళిక రూపొందించండి 🌱",
        viewSaved: "సేవ్ చేసిన ప్రణాళికలు చూడండి 📋",

        historyTitle: "📋 సేవ్ చేసిన నీటిపారుదల ప్రణాళికలు",
        historySubtitle:
            "మీరు రూపొందించిన అన్ని నీటిపారుదల ప్రణాళికలను చూడండి.",
        noPlans: "🌱 ఇంకా ప్రణాళికలు లేవు",
        createFirst:
            "మీ మొదటి నీటిపారుదల ప్రణాళికను రూపొందించండి.",
        createPlan: "ప్రణాళిక రూపొందించండి",
        viewPlan: "👁️ ప్రణాళిక చూడండి",
        deletePlan: "🗑️ తొలగించండి",

        irrigationPlan: "💧 నీటిపారుదల ప్రణాళిక",
        loadingPlan: "ప్రణాళిక లోడ్ అవుతోంది...",
        backHistory: "← చరిత్రకు తిరిగి వెళ్ళండి",

        selectAll:
            "దయచేసి పంట, ఎదుగుదల దశ, నేల మరియు వాతావరణ పరిస్థితులను ఎంచుకోండి.",
        connectionError:
            "బ్యాక్‌ఎండ్‌కు కనెక్ట్ కాలేకపోయింది. సర్వర్ నడుస్తుందో లేదో తనిఖీ చేయండి.",
        deleteConfirm:
            "ఈ నీటిపారుదల ప్రణాళికను తొలగించాలనుకుంటున్నారా?",
        deleted:
            "ప్రణాళిక విజయవంతంగా తొలగించబడింది!",
        unableDelete:
            "ప్రణాళికను తొలగించలేకపోయాము.",

        seedling: "మొలక దశ",
        vegetative: "ఏపుగా పెరుగుదల దశ",
        flowering: "పుష్పించే దశ",
        maturity: "పక్వ దశ",

        sandy: "ఇసుక నేల",
        loamy: "లోమీ నేల",
        clay: "బంకమట్టి నేల",

        sunny: "ఎండ",
        cloudy: "మేఘావృతం",
        rainy: "వర్షం",
        hot: "వేడి",

        high: "ఎక్కువ",
        moderate: "మధ్యస్థ",
        low: "తక్కువ",

        earlyMorningEvening:
            "ఉదయం లేదా సాయంత్రం",

        every12:
            "ప్రతి 1-2 రోజులకు",

        every23:
            "ప్రతి 2-3 రోజులకు",

        every34:
            "ప్రతి 3-4 రోజులకు",

        every3:
            "ప్రతి 3 రోజులకు",

        moreFrequently:
            "మరింత తరచుగా",

        lessFrequently:
            "తక్కువ తరచుగా",

        postpone:
            "నీటిపారుదలను వాయిదా వేయండి",

        notRequiredRain:
            "వర్షం సమయంలో అవసరం లేదు",

        minutes15_20:
            "15-20 నిమిషాలు",

        minutes20:
            "20 నిమిషాలు",

        minutes20_25:
            "20-25 నిమిషాలు",

        minutes25:
            "25 నిమిషాలు",

        minutes25_30:
            "25-30 నిమిషాలు",

        minutes30:
            "30 నిమిషాలు",

        recSeedling:
            "మొలక దశలో క్రమమైన కానీ మితమైన తేమ అవసరం.",

        recVegetative:
            "ఆరోగ్యకరమైన పెరుగుదలకు ఏపుగా పెరుగుదల దశలో క్రమమైన తేమ అవసరం.",

        recFlowering:
            "పంట అభివృద్ధికి పుష్పించే దశలో తగినంత తేమ అవసరం.",

        recMaturity:
            "పక్వ దశలో సాధారణంగా నీటి అవసరం తగ్గుతుంది.",

        recSandy:
            "ఇసుక నేల నీటిని త్వరగా కోల్పోతుంది.",

        recClay:
            "బంకమట్టి నేల నీటిని ఎక్కువసేపు నిలుపుకుంటుంది.",

        recLoamy:
            "లోమీ నేల సాధారణంగా మంచి నీటి నిల్వ మరియు డ్రైనేజీని అందిస్తుంది.",

        recRainy:
            "వర్షపు వాతావరణం సహజంగా నీటిని అందించవచ్చు కాబట్టి అవసరం లేని నీటిపారుదలను నివారించాలి.",

        recCloudy:
            "వేడి ఎండ వాతావరణంతో పోలిస్తే మేఘావృత పరిస్థితుల్లో నీటి నష్టం తక్కువగా ఉండవచ్చు.",

        recSunny:
            "ఎండ వాతావరణంలో నీటి నష్టం పెరగవచ్చు కాబట్టి నేల తేమను క్రమం తప్పకుండా తనిఖీ చేయండి.",

        recHot:
            "వేడి పరిస్థితుల్లో నీటి నష్టం పెరగవచ్చు కాబట్టి నేల తేమను జాగ్రత్తగా పర్యవేక్షించండి."
    },


    hi: {

        smartIrrigation: "🌱 स्मार्ट सिंचाई",
        home: "होम",
        planner: "प्लानर",
        crops: "फसलें",
        tips: "सुझाव",
        history: "इतिहास",

        welcomeTitle: "स्मार्ट सिंचाई प्लानर",
        welcomeText:
            "फसल, मिट्टी, विकास अवस्था और मौसम की स्थिति के आधार पर स्मार्ट सिंचाई योजना बनाएं।",
        selectLanguage: "अपनी भाषा चुनें",
        startPlanning: "योजना शुरू करें 💧",

        createPlan: "💧 सिंचाई योजना बनाएं",
        plannerSubtitle:
            "फसल, विकास अवस्था, मिट्टी और मौसम की स्थिति चुनें",
        cropType: "🌾 फसल का प्रकार",
        selectCrop: "फसल चुनें",
        growthStage: "🌱 विकास अवस्था",
        selectStage: "अवस्था चुनें",
        soilCondition: "🪴 मिट्टी की स्थिति",
        selectSoil: "मिट्टी चुनें",
        weatherCondition: "🌦️ मौसम की स्थिति",
        selectWeather: "मौसम चुनें",
        generatePlan: "योजना बनाएं 💧",
        generatingPlan: "योजना बनाई जा रही है... 💧",

        cropsTitle: "🌾 फसल की जानकारी",
        rice: "चावल",
        tomato: "टमाटर",
        cotton: "कपास",
        groundnut: "मूंगफली",
        maize: "मक्का",

        riceInfo:
            "चावल की फसल को विशेष रूप से सक्रिय विकास के दौरान अधिक पानी की आवश्यकता होती है।",
        tomatoInfo:
            "टमाटर को नियमित नमी की आवश्यकता होती है, लेकिन अधिक पानी से बचना चाहिए।",
        cottonInfo:
            "कपास की फसल के पूरे विकास चक्र में सावधानीपूर्वक सिंचाई प्रबंधन आवश्यक है।",
        groundnutInfo:
            "मूंगफली को संतुलित नमी की आवश्यकता होती है, विशेष रूप से फूल आने और फलियों के विकास के दौरान।",
        maizeInfo:
            "मक्का महत्वपूर्ण विकास अवस्थाओं के दौरान पर्याप्त नमी से अच्छी तरह बढ़ता है।",

        tipsTitle: "💡 स्मार्ट सिंचाई सुझाव",
        tip1:
            "जब संभव हो, सिंचाई से पहले मिट्टी की नमी जांचें।",
        tip2:
            "आमतौर पर सुबह या शाम सिंचाई करना उपयुक्त होता है।",
        tip3:
            "बारिश के दौरान अनावश्यक सिंचाई से बचें।",
        tip4:
            "रेतीली मिट्टी आमतौर पर चिकनी मिट्टी की तुलना में पानी तेजी से खोती है।",
        tip5:
            "गर्म मौसम में फसल की अधिक सावधानी से निगरानी करें।",

        resultTitle: "💧 सिंचाई की सिफारिश",
        resultSubtitle: "आपकी व्यक्तिगत सिंचाई योजना",
        crop: "🌾 फसल",
        stage: "🌱 विकास अवस्था",
        soil: "🪴 मिट्टी की स्थिति",
        weather: "🌦️ मौसम की स्थिति",
        water: "💧 पानी की आवश्यकता",
        frequency: "⏱️ आवृत्ति",
        duration: "⏳ अवधि",
        bestTime: "🕐 उपयुक्त समय",
        recommendation: "💡 सिफारिश",
        createAnother: "एक और योजना बनाएं 🌱",
        viewSaved: "सहेजी गई योजनाएं देखें 📋",

        historyTitle: "📋 सहेजी गई सिंचाई योजनाएं",
        historySubtitle:
            "आपके द्वारा बनाई गई सभी सिंचाई योजनाएं देखें।",
        noPlans: "🌱 अभी कोई योजना नहीं है",
        createFirst:
            "अपनी पहली सिंचाई योजना बनाएं।",
        createPlan: "योजना बनाएं",
        viewPlan: "👁️ योजना देखें",
        deletePlan: "🗑️ हटाएं",

        irrigationPlan: "💧 सिंचाई योजना",
        loadingPlan: "योजना लोड हो रही है...",
        backHistory: "← इतिहास पर वापस जाएं",

        selectAll:
            "कृपया फसल, विकास अवस्था, मिट्टी और मौसम की स्थिति चुनें।",
        connectionError:
            "बैकएंड से कनेक्ट नहीं हो पाया। कृपया सुनिश्चित करें कि सर्वर चल रहा है।",
        deleteConfirm:
            "क्या आप इस सिंचाई योजना को हटाना चाहते हैं?",
        deleted:
            "योजना सफलतापूर्वक हटा दी गई!",
        unableDelete:
            "योजना हटाई नहीं जा सकी।",

        seedling: "पौध अवस्था",
        vegetative: "वानस्पतिक अवस्था",
        flowering: "फूल आने की अवस्था",
        maturity: "परिपक्वता अवस्था",

        sandy: "रेतीली",
        loamy: "दोमट",
        clay: "चिकनी मिट्टी",

        sunny: "धूप",
        cloudy: "बादल",
        rainy: "बारिश",
        hot: "गर्म",

        high: "अधिक",
        moderate: "मध्यम",
        low: "कम",

        earlyMorningEvening:
            "सुबह या शाम",

        every12:
            "हर 1-2 दिन",

        every23:
            "हर 2-3 दिन",

        every34:
            "हर 3-4 दिन",

        every3:
            "हर 3 दिन",

        moreFrequently:
            "अधिक बार",

        lessFrequently:
            "कम बार",

        postpone:
            "सिंचाई स्थगित करें",

        notRequiredRain:
            "बारिश के दौरान आवश्यक नहीं",

        minutes15_20:
            "15-20 मिनट",

        minutes20:
            "20 मिनट",

        minutes20_25:
            "20-25 मिनट",

        minutes25:
            "25 मिनट",

        minutes25_30:
            "25-30 मिनट",

        minutes30:
            "30 मिनट",

        recSeedling:
            "पौध अवस्था में नियमित लेकिन मध्यम नमी आवश्यक होती है।",

        recVegetative:
            "स्वस्थ विकास के लिए वानस्पतिक अवस्था में नियमित नमी आवश्यक होती है।",

        recFlowering:
            "फसल के विकास के लिए फूल आने की अवस्था में पर्याप्त नमी आवश्यक होती है।",

        recMaturity:
            "परिपक्वता अवस्था में सामान्यतः पानी की आवश्यकता कम हो जाती है।",

        recSandy:
            "रेतीली मिट्टी पानी को जल्दी निकाल देती है।",

        recClay:
            "चिकनी मिट्टी पानी को अधिक समय तक बनाए रखती है।",

        recLoamy:
            "दोमट मिट्टी सामान्यतः अच्छी नमी और जल निकासी प्रदान करती है।",

        recRainy:
            "बारिश प्राकृतिक रूप से पानी प्रदान कर सकती है, इसलिए अनावश्यक सिंचाई से बचना चाहिए।",

        recCloudy:
            "गर्म और धूप वाली स्थिति की तुलना में बादल वाले मौसम में पानी की हानि कम हो सकती है।",

        recSunny:
            "धूप वाले मौसम में पानी की हानि बढ़ सकती है, इसलिए मिट्टी की नमी नियमित रूप से जांचें।",

        recHot:
            "गर्म परिस्थितियों में पानी की हानि बढ़ सकती है, इसलिए मिट्टी की नमी पर ध्यान दें।"
    }

};


// -----------------------------------------------------
// LANGUAGE FUNCTIONS
// -----------------------------------------------------

function getLanguage() {

    return localStorage.getItem("language") || "en";

}


function setLanguage(language) {

    if (!translations[language]) {

        language = "en";

    }

    localStorage.setItem(
        "language",
        language
    );

    applyLanguage();

}


// -----------------------------------------------------
// TRANSLATE STATIC HTML
// -----------------------------------------------------

function applyLanguage() {

    const language =
        getLanguage();

    const dictionary =
        translations[language];


    document.documentElement.lang =
        language;


    // Text content
    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );

            if (dictionary[key]) {

                element.textContent =
                    dictionary[key];

            }

        });


    // Placeholder text
    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (dictionary[key]) {

                element.placeholder =
                    dictionary[key];

            }

        });


    // Select options
    document
        .querySelectorAll("[data-i18n-value]")
        .forEach(function (element) {

            const key =
                element.getAttribute(
                    "data-i18n-value"
                );

            if (dictionary[key]) {

                element.textContent =
                    dictionary[key];

            }

        });


    // Language selector
    const selector =
        document.getElementById(
            "languageSelect"
        );

    if (selector) {

        selector.value =
            language;

    }

}


// -----------------------------------------------------
// GET TRANSLATION
// -----------------------------------------------------

function t(key) {

    const language =
        getLanguage();

    return (
        translations[language][key] ||
        translations.en[key] ||
        key
    );

}


// -----------------------------------------------------
// TRANSLATE VALUES
// -----------------------------------------------------

function translateValue(value) {

    if (!value) {

        return "";

    }


    const keyMap = {

        rice: "rice",
        tomato: "tomato",
        cotton: "cotton",
        groundnut: "groundnut",
        maize: "maize",

        seedling: "seedling",
        vegetative: "vegetative",
        flowering: "flowering",
        maturity: "maturity",

        sandy: "sandy",
        loamy: "loamy",
        clay: "clay",

        sunny: "sunny",
        cloudy: "cloudy",
        rainy: "rainy",
        hot: "hot",

        High: "high",
        Moderate: "moderate",
        Low: "low",

        "Early morning or evening":
            "earlyMorningEvening",

        "Every 1-2 days":
            "every12",

        "Every 2-3 days":
            "every23",

        "Every 3-4 days":
            "every34",

        "Every 3 days":
            "every3",

        "More frequently":
            "moreFrequently",

        "Less frequently":
            "lessFrequently",

        "Postpone irrigation":
            "postpone",

        "Not required during rainfall":
            "notRequiredRain",

        "15-20 minutes":
            "minutes15_20",

        "20 minutes":
            "minutes20",

        "20-25 minutes":
            "minutes20_25",

        "25 minutes":
            "minutes25",

        "25-30 minutes":
            "minutes25_30",

        "30 minutes":
            "minutes30"

    };


    const key =
        keyMap[value];


    if (key) {

        return t(key);

    }


    return value;

}


// -----------------------------------------------------
// AUTO APPLY
// -----------------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function () {

        applyLanguage();


        const selector =
            document.getElementById(
                "languageSelect"
            );


        if (selector) {

            selector.addEventListener(
                "change",
                function () {

                    setLanguage(
                        selector.value
                    );

                }
            );

        }

    }
);