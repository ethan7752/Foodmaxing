const foodsDatabase = {
    // Fruits
    banana: { caloriesPer100g: 89, proteinPer100g: 1.1, fatPer100g: 0.3, carbsPer100g: 23, sugarPer100g: 12.2, sodiumPer100g: 1, weightPerUnit: 118, bloatScale: 1 }, // Can cause mild bloating in some
    apple: { caloriesPer100g: 52, proteinPer100g: 0.3, fatPer100g: 0.2, carbsPer100g: 14, sugarPer100g: 10.4, sodiumPer100g: 1, weightPerUnit: 182, bloatScale: 1 }, // FODMAPs in some
    grapes: { caloriesPer100g: 69, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 18, sugarPer100g: 15.5, sodiumPer100g: 2, weightPerUnit: 151, bloatScale: 0 },
    orange: { caloriesPer100g: 47, proteinPer100g: 0.9, fatPer100g: 0.1, carbsPer100g: 12, sugarPer100g: 9.4, sodiumPer100g: 0, weightPerUnit: 130, bloatScale: -1 },
    pear: { caloriesPer100g: 57, proteinPer100g: 0.4, fatPer100g: 0.1, carbsPer100g: 15, sugarPer100g: 9.8, sodiumPer100g: 1, weightPerUnit: 178, bloatScale: 2 }, // High in sorbitol
    blueberry: { caloriesPer100g: 57, proteinPer100g: 0.7, fatPer100g: 0.3, carbsPer100g: 14, sugarPer100g: 9.9, sodiumPer100g: 1, weightPerUnit: 148, bloatScale: 0 },
    strawberry: { caloriesPer100g: 32, proteinPer100g: 0.7, fatPer100g: 0.3, carbsPer100g: 7.7, sugarPer100g: 4.9, sodiumPer100g: 1, weightPerUnit: 12, bloatScale: 0 },
    raspberry: { caloriesPer100g: 52, proteinPer100g: 1.2, fatPer100g: 0.7, carbsPer100g: 12, sugarPer100g: 4.4, sodiumPer100g: 1, weightPerUnit: 4, bloatScale: 0 },
    blackberries: { caloriesPer100g: 43, proteinPer100g: 1.4, fatPer100g: 0.5, carbsPer100g: 10, sugarPer100g: 4.9, sodiumPer100g: 1, weightPerUnit: 5, bloatScale: 1 }, // Can be high in polyols
    pineapple: { caloriesPer100g: 50, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 13, sugarPer100g: 9.9, sodiumPer100g: 1, weightPerUnit: 165, bloatScale: -2 }, // Contains bromelain, good for digestion
    mango: { caloriesPer100g: 60, proteinPer100g: 0.8, fatPer100g: 0.4, carbsPer100g: 15, sugarPer100g: 13.7, sodiumPer100g: 1, weightPerUnit: 200, bloatScale: 3 }, // High FODMAP
    watermelon: { caloriesPer100g: 30, proteinPer100g: 0.6, fatPer100g: 0.2, carbsPer100g: 8, sugarPer100g: 6.2, sodiumPer100g: 1, weightPerUnit: 280, bloatScale: -3 }, // High water content
    kiwi: { caloriesPer100g: 61, proteinPer100g: 1.1, fatPer100g: 0.5, carbsPer100g: 15, sugarPer100g: 9, sodiumPer100g: 3, weightPerUnit: 75, bloatScale: -1 },
    peach: { caloriesPer100g: 39, proteinPer100g: 0.9, fatPer100g: 0.3, carbsPer100g: 10, sugarPer100g: 8.4, sodiumPer100g: 0, weightPerUnit: 150, bloatScale: 2 }, // FODMAPs
    plum: { caloriesPer100g: 46, proteinPer100g: 0.7, fatPer100g: 0.3, carbsPer100g: 11, sugarPer100g: 9.9, sodiumPer100g: 0, weightPerUnit: 66, bloatScale: 2 }, // Sorbitol
    apricot: { caloriesPer100g: 48, proteinPer100g: 1.4, fatPer100g: 0.4, carbsPer100g: 11, sugarPer100g: 9.2, sodiumPer100g: 1, weightPerUnit: 35, bloatScale: 1 },
    cherry: { caloriesPer100g: 50, proteinPer100g: 1, fatPer100g: 0.3, carbsPer100g: 12, sugarPer100g: 8, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 2 }, // FODMAPs
    lemon: { caloriesPer100g: 29, proteinPer100g: 1.1, fatPer100g: 0.3, carbsPer100g: 9, sugarPer100g: 2.5, sodiumPer100g: 2, weightPerUnit: 60, bloatScale: -4 },
    lime: { caloriesPer100g: 30, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 11, sugarPer100g: 1.7, sodiumPer100g: 2, weightPerUnit: 60, bloatScale: -3 },
    avocado: { caloriesPer100g: 160, proteinPer100g: 2, fatPer100g: 15, carbsPer100g: 9, sugarPer100g: 0.7, sodiumPer100g: 7, weightPerUnit: 150, bloatScale: 0 }, // Healthy fats
    pomegranate: { caloriesPer100g: 83, proteinPer100g: 1.7, fatPer100g: 1.2, carbsPer100g: 19, sugarPer100g: 14, sodiumPer100g: 3, weightPerUnit: 280, bloatScale: 1 },
    fig: { caloriesPer100g: 74, proteinPer100g: 0.8, fatPer100g: 0.3, carbsPer100g: 19, sugarPer100g: 16, sodiumPer100g: 1, weightPerUnit: 50, bloatScale: 2 }, // High in FODMAPs
    dates: { caloriesPer100g: 282, proteinPer100g: 2.5, fatPer100g: 0.4, carbsPer100g: 75, sugarPer100g: 66, sodiumPer100g: 1, weightPerUnit: 7, bloatScale: 2 }, // High sugar, can be high in FODMAPs
    prunes: { caloriesPer100g: 240, proteinPer100g: 2.2, fatPer100g: 0.4, carbsPer100g: 64, sugarPer100g: 38, sodiumPer100g: 2, weightPerUnit: 8, bloatScale: -2 }, // Laxative effect

    // Vegetables
    broccoli: { caloriesPer100g: 34, proteinPer100g: 2.8, fatPer100g: 0.4, carbsPer100g: 7, sugarPer100g: 1.7, sodiumPer100g: 33, weightPerUnit: 91, bloatScale: 4 }, // Known for causing gas
    carrot: { caloriesPer100g: 41, proteinPer100g: 0.9, fatPer100g: 0.2, carbsPer100g: 10, sugarPer100g: 4.7, sodiumPer100g: 69, weightPerUnit: 61, bloatScale: -1 },
    potato: { caloriesPer100g: 77, proteinPer100g: 2, fatPer100g: 0.1, carbsPer100g: 17, sugarPer100g: 0.8, sodiumPer100g: 6, weightPerUnit: 150, bloatScale: 1 },
    cucumber: { caloriesPer100g: 16, proteinPer100g: 0.7, fatPer100g: 0.1, carbsPer100g: 3.6, sugarPer100g: 1.7, sodiumPer100g: 2, weightPerUnit: 300, bloatScale: -3 },
    tomato: { caloriesPer100g: 18, proteinPer100g: 0.9, fatPer100g: 0.2, carbsPer100g: 3.9, sugarPer100g: 2.6, sodiumPer100g: 5, weightPerUnit: 123, bloatScale: 0 },
    bellpepper: { caloriesPer100g: 31, proteinPer100g: 1, fatPer100g: 0.3, carbsPer100g: 6, sugarPer100g: 4.2, sodiumPer100g: 3, weightPerUnit: 120, bloatScale: 0 },
    mushroom: { caloriesPer100g: 22, proteinPer100g: 3.1, fatPer100g: 0.3, carbsPer100g: 3.3, sugarPer100g: 2.0, sodiumPer100g: 5, weightPerUnit: 15, bloatScale: 2 }, // Can be high in FODMAPs
    spinach: { caloriesPer100g: 23, proteinPer100g: 2.9, fatPer100g: 0.4, carbsPer100g: 3.6, sugarPer100g: 0.4, sodiumPer100g: 79, weightPerUnit: 30, bloatScale: 0 },
    kale: { caloriesPer100g: 49, proteinPer100g: 4.3, fatPer100g: 0.9, carbsPer100g: 8.8, sugarPer100g: 1.6, sodiumPer100g: 53, weightPerUnit: 30, bloatScale: 2 }, // Can cause gas for some
    sweetpotato: { caloriesPer100g: 86, proteinPer100g: 1.6, fatPer100g: 0.1, carbsPer100g: 20, sugarPer100g: 4.2, sodiumPer100g: 55, weightPerUnit: 130, bloatScale: 0 },
    pumpkin: { caloriesPer100g: 26, proteinPer100g: 1, fatPer100g: 0.1, carbsPer100g: 7, sugarPer100g: 2.8, sodiumPer100g: 1, weightPerUnit: 245, bloatScale: 0 },
    zucchini: { caloriesPer100g: 17, proteinPer100g: 1.2, fatPer100g: 0.3, carbsPer100g: 3.1, sugarPer100g: 2.5, sodiumPer100g: 9, weightPerUnit: 196, bloatScale: -1 },
    eggplant: { caloriesPer100g: 25, proteinPer100g: 1, fatPer100g: 0.2, carbsPer100g: 6, sugarPer100g: 3.5, sodiumPer100g: 2, weightPerUnit: 458, bloatScale: 0 },
    onion: { caloriesPer100g: 40, proteinPer100g: 1.1, fatPer100g: 0.1, carbsPer100g: 9, sugarPer100g: 4.2, sodiumPer100g: 4, weightPerUnit: 110, bloatScale: 3 }, // High FODMAP
    garlic: { caloriesPer100g: 149, proteinPer100g: 6.4, fatPer100g: 0.5, carbsPer100g: 33, sugarPer100g: 1, sodiumPer100g: 17, weightPerUnit: 3, bloatScale: 3 }, // High FODMAP
    corn: { caloriesPer100g: 86, proteinPer100g: 3.2, fatPer100g: 1.2, carbsPer100g: 19, sugarPer100g: 6.4, sodiumPer100g: 15, weightPerUnit: 90, bloatScale: 2 }, // Can cause gas
    peas: { caloriesPer100g: 81, proteinPer100g: 5, fatPer100g: 0.4, carbsPer100g: 14, sugarPer100g: 5.7, sodiumPer100g: 5, weightPerUnit: 100, bloatScale: 2 }, // Legumes
    swisschard: { caloriesPer100g: 19, proteinPer100g: 1.8, fatPer100g: 0.2, carbsPer100g: 3.7, sugarPer100g: 1.1, sodiumPer100g: 100, weightPerUnit: 36, bloatScale: 0 },
    collardgreens: { caloriesPer100g: 32, proteinPer100g: 3, fatPer100g: 0.6, carbsPer100g: 7, sugarPer100g: 1.3, sodiumPer100g: 24, weightPerUnit: 36, bloatScale: 1 },
    dandeliontea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -7 }, // Diuretic
    asparagus: { caloriesPer100g: 20, proteinPer100g: 2.2, fatPer100g: 0.2, carbsPer100g: 3.9, sugarPer100g: 1.9, sodiumPer100g: 2, weightPerUnit: 15, bloatScale: 2 }, // FODMAPs
    cabbage: { caloriesPer100g: 25, proteinPer100g: 1.3, fatPer100g: 0.1, carbsPer100g: 5.8, sugarPer100g: 3.2, sodiumPer100g: 18, weightPerUnit: 90, bloatScale: 4 }, // Gassy vegetable
    cauliflower: { caloriesPer100g: 25, proteinPer100g: 1.9, fatPer100g: 0.3, carbsPer100g: 5, sugarPer100g: 1.9, sodiumPer100g: 30, weightPerUnit: 100, bloatScale: 4 }, // Gassy vegetable
    brusselsprouts: { caloriesPer100g: 43, proteinPer100g: 3.4, fatPer100g: 0.3, carbsPer100g: 9, sugarPer100g: 2.2, sodiumPer100g: 25, weightPerUnit: 80, bloatScale: 5 }, // Very gassy
    artichoke: { caloriesPer100g: 47, proteinPer100g: 3.3, fatPer100g: 0.2, carbsPer100g: 11, sugarPer100g: 1, sodiumPer100g: 90, weightPerUnit: 120, bloatScale: 3 }, // FODMAPs
    leek: { caloriesPer100g: 61, proteinPer100g: 1.5, fatPer100g: 0.3, carbsPer100g: 14, sugarPer100g: 3.9, sodiumPer100g: 20, weightPerUnit: 90, bloatScale: 3 }, // FODMAPs
    celery: { caloriesPer100g: 16, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 3, sugarPer100g: 1.3, sodiumPer100g: 80, weightPerUnit: 40, bloatScale: -2 }, // Diuretic effect
    radish: { caloriesPer100g: 16, proteinPer100g: 0.7, fatPer100g: 0.1, carbsPer100g: 3.4, sugarPer100g: 1.9, sodiumPer100g: 3, weightPerUnit: 5, bloatScale: -1 },
    fennel: { caloriesPer100g: 31, proteinPer100g: 1.2, fatPer100g: 0.2, carbsPer100g: 7, sugarPer100g: 3.9, sodiumPer100g: 52, weightPerUnit: 90, bloatScale: -4 }, // Known for easing digestion
    ginger: { caloriesPer100g: 80, proteinPer100g: 1.8, fatPer100g: 0.7, carbsPer100g: 18, sugarPer100g: 1.7, sodiumPer100g: 13, weightPerUnit: 5, bloatScale: -5 }, // Strong anti-inflammatory, digestive aid
    mint: { caloriesPer100g: 70, proteinPer100g: 3.8, fatPer100g: 0.9, carbsPer100g: 15, sugarPer100g: 0, sodiumPer100g: 30, weightPerUnit: 1, bloatScale: -3 }, // Digestive aid
    parsley: { caloriesPer100g: 36, proteinPer100g: 3, fatPer100g: 0.8, carbsPer100g: 6, sugarPer100g: 0.9, sodiumPer100g: 56, weightPerUnit: 1, bloatScale: -1 },
    cilantro: { caloriesPer100g: 23, proteinPer100g: 2.1, fatPer100g: 0.5, carbsPer100g: 3.7, sugarPer100g: 0.9, sodiumPer100g: 46, weightPerUnit: 1, bloatScale: -1 },

    // Proteins
    chickenbreast: { caloriesPer100g: 165, proteinPer100g: 31, fatPer100g: 3.6, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 74, weightPerUnit: 150, bloatScale: 0 },
    salmon: { caloriesPer100g: 206, proteinPer100g: 22, fatPer100g: 12, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 59, weightPerUnit: 154, bloatScale: 0 },
    egg: { caloriesPer100g: 155, proteinPer100g: 13, fatPer100g: 11, carbsPer100g: 1.1, sugarPer100g: 1.1, sodiumPer100g: 124, weightPerUnit: 50, bloatScale: 0 },
    turkey: { caloriesPer100g: 135, proteinPer100g: 29, fatPer100g: 1, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 65, weightPerUnit: 150, bloatScale: 0 },
    tuna: { caloriesPer100g: 132, proteinPer100g: 28, fatPer100g: 1, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 400, weightPerUnit: 140, bloatScale: 2 }, // Canned in water, higher sodium can contribute
    cod: { caloriesPer100g: 82, proteinPer100g: 18, fatPer100g: 0.7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 54, weightPerUnit: 140, bloatScale: 0 },
    shrimp: { caloriesPer100g: 99, proteinPer100g: 24, fatPer100g: 0.3, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 146, weightPerUnit: 12, bloatScale: 1 },
    groundbeef: { caloriesPer100g: 250, proteinPer100g: 26, fatPer100g: 15, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 72, weightPerUnit: 100, bloatScale: 0 },
    tofu: { caloriesPer100g: 76, proteinPer100g: 8, fatPer100g: 4.8, carbsPer100g: 1.9, sugarPer100g: 0.3, sodiumPer100g: 14, weightPerUnit: 100, bloatScale: 1 }, // Can cause gas for some due to oligosaccharides
    sardines: { caloriesPer100g: 208, proteinPer100g: 25, fatPer100g: 11, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 505, weightPerUnit: 92, bloatScale: 3 }, // High sodium
    mackerel: { caloriesPer100g: 205, proteinPer100g: 19, fatPer100g: 13, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 90, weightPerUnit: 150, bloatScale: 0 },
    porkchop: { caloriesPer100g: 231, proteinPer100g: 26, fatPer100g: 14, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 62, weightPerUnit: 150, bloatScale: 0 },
    beefsteak: { caloriesPer100g: 271, proteinPer100g: 28, fatPer100g: 18, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 60, weightPerUnit: 150, bloatScale: 0 },
    lambchop: { caloriesPer100g: 290, proteinPer100g: 25, fatPer100g: 21, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 78, weightPerUnit: 150, bloatScale: 0 },
    lentils: { caloriesPer100g: 116, proteinPer100g: 9, fatPer100g: 0.4, carbsPer100g: 20, sugarPer100g: 0.3, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 5 }, // High in fiber and oligosaccharides
    chickpeas: { caloriesPer100g: 164, proteinPer100g: 9, fatPer100g: 3, carbsPer100g: 27, sugarPer100g: 4.8, sodiumPer100g: 7, weightPerUnit: 100, bloatScale: 5 }, // High in fiber and oligosaccharides
    blackbeans: { caloriesPer100g: 132, proteinPer100g: 9, fatPer100g: 0.5, carbsPer100g: 23, sugarPer100g: 0.3, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 5 }, // High in fiber and oligosaccharides
    edamame: { caloriesPer100g: 122, proteinPer100g: 11, fatPer100g: 5, carbsPer100g: 10, sugarPer100g: 2.2, sodiumPer100g: 6, weightPerUnit: 100, bloatScale: 3 }, // Can be gassy
    tempeh: { caloriesPer100g: 195, proteinPer100g: 19, fatPer100g: 11, carbsPer100g: 9, sugarPer100g: 0, sodiumPer100g: 9, weightPerUnit: 100, bloatScale: 2 }, // Fermented soy, easier to digest for some
    seitan: { caloriesPer100g: 147, proteinPer100g: 25, fatPer100g: 0.6, carbsPer100g: 8, sugarPer100g: 0, sodiumPer100g: 270, weightPerUnit: 100, bloatScale: 1 }, // Gluten, can bloat sensitive individuals
    lamb: { caloriesPer100g: 294, proteinPer100g: 25, fatPer100g: 21, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 100, bloatScale: 0 },
    porkbelly: { caloriesPer100g: 518, proteinPer100g: 17, fatPer100g: 53, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 80, weightPerUnit: 100, bloatScale: 1 }, // High fat can slow digestion
    sausage: { caloriesPer100g: 300, proteinPer100g: 16, fatPer100g: 25, carbsPer100g: 1, sugarPer100g: 1, sodiumPer100g: 700, weightPerUnit: 60, bloatScale: 7 }, // High sodium, processed

    // Grains & Legumes
    rice: { caloriesPer100g: 130, proteinPer100g: 2.7, fatPer100g: 0.3, carbsPer100g: 28, sugarPer100g: 0.1, sodiumPer100g: 1, weightPerUnit: 100, bloatScale: 0 },
    oats: { caloriesPer100g: 389, proteinPer100g: 17, fatPer100g: 7, carbsPer100g: 66, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 40, bloatScale: 1 }, // Fiber can cause mild bloating for some
    bread: { caloriesPer100g: 265, proteinPer100g: 9, fatPer100g: 3.2, carbsPer100g: 49, sugarPer100g: 5.6, sodiumPer100g: 490, weightPerUnit: 30, bloatScale: 3 }, // Refined carbs, gluten, sodium
    quinoa: { caloriesPer100g: 120, proteinPer100g: 4.1, fatPer100g: 1.9, carbsPer100g: 21, sugarPer100g: 0.9, sodiumPer100g: 7, weightPerUnit: 185, bloatScale: 1 },
    wholewheatpasta: { caloriesPer100g: 155, proteinPer100g: 5, fatPer100g: 1, carbsPer100g: 30, sugarPer100g: 0.5, sodiumPer100g: 4, weightPerUnit: 80, bloatScale: 2 }, // Higher fiber than white pasta
    whitepasta: { caloriesPer100g: 158, proteinPer100g: 5.8, fatPer100g: 0.9, carbsPer100g: 30.7, sugarPer100g: 0.5, sodiumPer100g: 1, weightPerUnit: 80, bloatScale: 1 },
    whitebread: { caloriesPer100g: 265, proteinPer100g: 9, fatPer100g: 3.2, carbsPer100g: 49, sugarPer100g: 5.6, sodiumPer100g: 490, weightPerUnit: 30, bloatScale: 3 },
    wholegrainbread: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 3, carbsPer100g: 42, sugarPer100g: 3, sodiumPer100g: 380, weightPerUnit: 30, bloatScale: 2 },
    barley: { caloriesPer100g: 123, proteinPer100g: 4.5, fatPer100g: 0.5, carbsPer100g: 28, sugarPer100g: 0.2, sodiumPer100g: 12, weightPerUnit: 100, bloatScale: 3 }, // High in fiber, can cause gas
    farro: { caloriesPer100g: 120, proteinPer100g: 4.5, fatPer100g: 0.5, carbsPer100g: 25, sugarPer100g: 0.5, sodiumPer100g: 5, weightPerUnit: 100, bloatScale: 1 },
    couscous: { caloriesPer100g: 112, proteinPer100g: 3.8, fatPer100g: 0.2, carbsPer100g: 23, sugarPer100g: 0.1, sodiumPer100g: 8, weightPerUnit: 100, bloatScale: 1 },
    bulgurwheat: { caloriesPer100g: 83, proteinPer100g: 3.1, fatPer100g: 0.2, carbsPer100g: 18.6, sugarPer100g: 0.1, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 1 },
    ryebread: { caloriesPer100g: 259, proteinPer100g: 9, fatPer100g: 3.3, carbsPer100g: 48, sugarPer100g: 3.5, sodiumPer100g: 400, weightPerUnit: 30, bloatScale: 3 }, // Can be denser and higher in fiber
    cornbread: { caloriesPer100g: 320, proteinPer100g: 6, fatPer100g: 15, carbsPer100g: 40, sugarPer100g: 8, sodiumPer100g: 400, weightPerUnit: 50, bloatScale: 2 },
    tortilla: { caloriesPer100g: 310, proteinPer100g: 8, fatPer100g: 8, carbsPer100g: 50, sugarPer100g: 1.5, sodiumPer100g: 500, weightPerUnit: 40, bloatScale: 3 },
    pita: { caloriesPer100g: 275, proteinPer100g: 9, fatPer100g: 1.5, carbsPer100g: 55, sugarPer100g: 2, sodiumPer100g: 400, weightPerUnit: 60, bloatScale: 2 },
    naan: { caloriesPer100g: 300, proteinPer100g: 9, fatPer100g: 5, carbsPer100g: 55, sugarPer100g: 3, sodiumPer100g: 450, weightPerUnit: 80, bloatScale: 3 },

    // Nuts & Seeds
    almonds: { caloriesPer100g: 579, proteinPer100g: 21, fatPer100g: 50, carbsPer100g: 22, sugarPer100g: 4.9, sodiumPer100g: 1, weightPerUnit: 1, bloatScale: 1 }, // Can cause bloating in some due to fiber
    peanutbutter: { caloriesPer100g: 588, proteinPer100g: 25, fatPer100g: 50, carbsPer100g: 20, sugarPer100g: 9.2, sodiumPer100g: 426, weightPerUnit: 32, bloatScale: 2 }, // Added sugar/sodium in some
    flaxseed: { caloriesPer100g: 534, proteinPer100g: 18, fatPer100g: 42, carbsPer100g: 29, sugarPer100g: 1.6, sodiumPer100g: 30, weightPerUnit: 10, bloatScale: -1 }, // Good fiber, can aid digestion
    chiaseed: { caloriesPer100g: 486, proteinPer100g: 17, fatPer100g: 31, carbsPer100g: 42, sugarPer100g: 0, sodiumPer100g: 16, weightPer100g: 10, bloatScale: -1 }, // Good fiber, can aid digestion
    sunflowerseeds: { caloriesPer100g: 584, proteinPer100g: 21, fatPer100g: 51, carbsPer100g: 20, sugarPer100g: 2.6, sodiumPer100g: 9, weightPerUnit: 10, bloatScale: 0 },
    pumpkinseeds: { caloriesPer100g: 559, proteinPer100g: 30, fatPer100g: 49, carbsPer100g: 11, sugarPer100g: 1.3, sodiumPer100g: 18, weightPerUnit: 10, bloatScale: 0 },
    walnuts: { caloriesPer100g: 654, proteinPer100g: 15, fatPer100g: 65, carbsPer100g: 14, sugarPer100g: 2.6, sodiumPer100g: 2, weightPerUnit: 5, bloatScale: 0 },
    cashews: { caloriesPer100g: 553, proteinPer100g: 18, fatPer100g: 44, carbsPer100g: 30, sugarPer100g: 6, sodiumPer100g: 12, weightPerUnit: 1, bloatScale: 1 }, // FODMAPs
    pistachios: { caloriesPer100g: 557, proteinPer100g: 20, fatPer100g: 45, carbsPer100g: 28, sugarPer100g: 7.7, sodiumPer100g: 1, weightPerUnit: 1, bloatScale: 1 }, // FODMAPs
    pecans: { caloriesPer100g: 690, proteinPer100g: 9, fatPer100g: 72, carbsPer100g: 14, sugarPer100g: 4, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 0 },
    brazilnuts: { caloriesPer100g: 659, proteinPer100g: 14, fatPer100g: 67, carbsPer100g: 12, sugarPer100g: 2.3, sodiumPer100g: 3, weightPerUnit: 4, bloatScale: 0 },
    macadamianuts: { caloriesPer100g: 718, proteinPer100g: 8, fatPer100g: 76, carbsPer100g: 14, sugarPer100g: 4.6, sodiumPer100g: 5, weightPerUnit: 2, bloatScale: 0 },
    hazelnuts: { caloriesPer100g: 628, proteinPer100g: 15, fatPer100g: 61, carbsPer100g: 17, sugarPer100g: 4.3, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 0 },

    // Dairy & Fats
    cheese: { caloriesPer100g: 402, proteinPer100g: 25, fatPer100g: 33, carbsPer100g: 1.3, sugarPer100g: 0.5, sodiumPer100g: 621, weightPerUnit: 30, bloatScale: 4 }, // Lactose, high sodium
    yogurt: { caloriesPer100g: 59, proteinPer100g: 10, fatPer100g: 0.4, carbsPer100g: 3.6, sugarPer100g: 3.6, sodiumPer100g: 46, weightPerUnit: 100, bloatScale: 3 }, // Lactose
    milk: { caloriesPer100g: 42, proteinPer100g: 3.4, fatPer100g: 1, carbsPer100g: 5, sugarPer100g: 5, sodiumPer100g: 43, weightPerUnit: 244, bloatScale: 4 }, // Lactose
    butter: { caloriesPer100g: 717, proteinPer100g: 0.9, fatPer100g: 81, carbsPer100g: 0.1, sugarPer100g: 0.1, sodiumPer100g: 643, weightPerUnit: 14, bloatScale: 0 },
    cremefraiche: { caloriesPer100g: 390, proteinPer100g: 2.2, fatPer100g: 42, carbsPer100g: 2.2, sugarPer100g: 2.2, sodiumPer100g: 15, weightPerUnit: 15, bloatScale: 2 },
    sourcream: { caloriesPer100g: 198, proteinPer100g: 2.6, fatPer100g: 19, carbsPer100g: 3.9, sugarPer100g: 2.8, sodiumPer100g: 35, weightPerUnit: 15, bloatScale: 3 },
    creamcheese: { caloriesPer100g: 342, proteinPer100g: 6.1, fatPer100g: 34, carbsPer100g: 4.1, sugarPer100g: 3.2, sodiumPer100g: 317, weightPerUnit: 28, bloatScale: 2 },
    cottagecheese: { caloriesPer100g: 98, proteinPer100g: 11, fatPer100g: 4.3, carbsPer100g: 3.4, sugarPer100g: 2.7, sodiumPer100g: 364, weightPerUnit: 112, bloatScale: 2 }, // Lactose, high sodium
    ricottacheese: { caloriesPer100g: 138, proteinPer100g: 11, fatPer100g: 7.9, carbsPer100g: 3, sugarPer100g: 2.7, sodiumPer100g: 84, weightPerUnit: 124, bloatScale: 2 }, // Lactose

    // Fish & Seafood
    salmonsmoked: { caloriesPer100g: 117, proteinPer100g: 18, fatPer100g: 4, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 670, weightPerUnit: 56, bloatScale: 3 }, // High sodium
    halibut: { caloriesPer100g: 111, proteinPer100g: 21, fatPer100g: 2, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 54, weightPerUnit: 140, bloatScale: 0 },
    trout: { caloriesPer100g: 119, proteinPer100g: 20, fatPer100g: 4, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 48, weightPerUnit: 140, bloatScale: 0 },
    tilapia: { caloriesPer100g: 96, proteinPer100g: 20, fatPer100g: 1.7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 140, bloatScale: 0 },
    oysters: { caloriesPer100g: 68, proteinPer100g: 7, fatPer100g: 2, carbsPer100g: 4, sugarPer100g: 0, sodiumPer100g: 99, weightPerUnit: 50, bloatScale: 2 }, // Can be gassy
    clams: { caloriesPer100g: 74, proteinPer100g: 13, fatPer100g: 1, carbsPer100g: 4, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 50, bloatScale: 2 }, // Can be gassy
    mussels: { caloriesPer100g: 72, proteinPer100g: 12, fatPer100g: 1.5, carbsPer100g: 3.7, sugarPer100g: 0, sodiumPer100g: 286, weightPerUnit: 50, bloatScale: 2 }, // Can be gassy
    squid: { caloriesPer100g: 92, proteinPer100g: 16, fatPer100g: 1.4, carbsPer100g: 3.1, sugarPer100g: 0, sodiumPer100g: 44, weightPerUnit: 100, bloatScale: 0 },
    octopus: { caloriesPer100g: 82, proteinPer100g: 15, fatPer100g: 1, carbsPer100g: 2, sugarPer100g: 0, sodiumPer100g: 230, weightPerUnit: 100, bloatScale: 0 },

    // Processed & Prepared Foods
    pizza: { caloriesPer100g: 266, proteinPer100g: 11, fatPer100g: 10, carbsPer100g: 33, sugarPer100g: 3, sodiumPer100g: 590, weightPerUnit: 100, bloatScale: 8 }, // High fat, sodium, refined carbs, gluten
    burger: { caloriesPer100g: 295, proteinPer100g: 15, fatPer100g: 18, carbsPer100g: 18, sugarPer100g: 3, sodiumPer100g: 400, weightPerUnit: 150, bloatScale: 7 }, // High fat, sodium, bread
    fries: { caloriesPer100g: 312, proteinPer100g: 3.4, fatPer100g: 15, carbsPer100g: 41, sugarPer100g: 0.3, sodiumPer100g: 210, weightPerUnit: 100, bloatScale: 6 }, // Fried, high sodium
    icecream: { caloriesPer100g: 207, proteinPer100g: 3.5, fatPer100g: 11, carbsPer100g: 24, sugarPer100g: 21, sodiumPer100g: 80, weightPerUnit: 60, bloatScale: 4 }, // Lactose, high sugar
    chocolate: { caloriesPer100g: 546, proteinPer100g: 4.9, fatPer100g: 31, carbsPer100g: 61, sugarPer100g: 48, sodiumPer100g: 24, weightPerUnit: 10, bloatScale: 1 }, // High sugar, caffeine can affect some
    chips: { caloriesPer100g: 536, proteinPer100g: 6, fatPer100g: 35, carbsPer100g: 49, sugarPer100g: 0.3, sodiumPer100g: 500, weightPerUnit: 28, bloatScale: 7 }, // High sodium, fried
    candy: { caloriesPer100g: 397, proteinPer100g: 0.1, fatPer100g: 0.4, carbsPer100g: 98, sugarPer100g: 78, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 3 }, // High sugar
    soda: { caloriesPer100g: 38, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 10, sugarPer100g: 10, sodiumPer100g: 4, weightPerUnit: 355, bloatScale: 5 }, // Carbonation, high sugar
    processedmeat: { caloriesPer100g: 250, proteinPer100g: 15, fatPer100g: 20, carbsPer100g: 2, sugarPer100g: 1, sodiumPer100g: 800, weightPerUnit: 50, bloatScale: 8 }, // High sodium, preservatives
    fastfood: { caloriesPer100g: 280, proteinPer100g: 12, fatPer100g: 15, carbsPer100g: 25, sugarPer100g: 5, sodiumPer100g: 600, weightPerUnit: 200, bloatScale: 9 }, // Generally high everything
    donuts: { caloriesPer100g: 452, proteinPer100g: 5, fatPer100g: 26, carbsPer100g: 50, sugarPer100g: 25, sodiumPer100g: 400, weightPerUnit: 50, bloatScale: 6 }, // Fried, high sugar and fat
    cake: { caloriesPer100g: 350, proteinPer100g: 4, fatPer100g: 15, carbsPer100g: 50, sugarPer100g: 30, sodiumPer100g: 250, weightPerUnit: 50, bloatScale: 4 }, // High sugar and fat
    cookies: { caloriesPer100g: 450, proteinPer100g: 5, fatPer100g: 20, carbsPer100g: 60, sugarPer100g: 30, sodiumPer100g: 300, weightPerUnit: 15, bloatScale: 3 }, // High sugar and fat
    croissant: { caloriesPer100g: 406, proteinPer100g: 8, fatPer100g: 22, carbsPer100g: 45, sugarPer100g: 12, sodiumPer100g: 390, weightPerUnit: 57, bloatScale: 2 }, // High butter, refined carbs
    pastries: { caloriesPer100g: 380, proteinPer100g: 6, fatPer100g: 18, carbsPer100g: 50, sugarPer100g: 20, sodiumPer100g: 300, weightPerUnit: 70, bloatScale: 3 }, // High sugar and fat
    sushi: { caloriesPer100g: 150, proteinPer100g: 6, fatPer100g: 2, carbsPer100g: 25, sugarPer100g: 3, sodiumPer100g: 300, weightPerUnit: 100, bloatScale: 1 }, // Rice, sometimes high sodium soy sauce
    ramen: { caloriesPer100g: 436, proteinPer100g: 10, fatPer100g: 18, carbsPer100g: 57, sugarPer100g: 3, sodiumPer100g: 1800, weightPerUnit: 85, bloatScale: 9 }, // Very high sodium, processed noodles
    friedchicken: { caloriesPer100g: 246, proteinPer100g: 18, fatPer100g: 15, carbsPer100g: 10, sugarPer100g: 0, sodiumPer100g: 300, weightPerUnit: 100, bloatScale: 6 }, // Fried, high sodium
    tacos: { caloriesPer100g: 220, proteinPer100g: 10, fatPer100g: 12, carbsPer100g: 18, sugarPer100g: 2, sodiumPer100g: 350, weightPerUnit: 100, bloatScale: 5 }, // Can vary greatly, often high sodium
    burrito: { caloriesPer100g: 180, proteinPer100g: 8, fatPer100g: 7, carbsPer100g: 20, sugarPer100g: 1, sodiumPer100g: 400, weightPerUnit: 200, bloatScale: 6 }, // Can be very large and high in sodium/fiber
    hotdog: { caloriesPer100g: 290, proteinPer100g: 10, fatPer100g: 26, carbsPer100g: 2, sugarPer100g: 1, sodiumPer100g: 800, weightPerUnit: 57, bloatScale: 7 }, // High sodium, processed meat
    nachos: { caloriesPer100g: 280, proteinPer100g: 7, fatPer100g: 18, carbsPer100g: 25, sugarPer100g: 1, sodiumPer100g: 400, weightPerUnit: 150, bloatScale: 7 }, // High fat, sodium, cheese

    // Beverages
    coffee: { caloriesPer100g: 1, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 240, bloatScale: 1 }, // Caffeine can affect some
    greentea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.3, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -2 }, // Diuretic, antioxidants
    blacktea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.3, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -1 },
    herbaltea: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -2 }, // Can be very calming
    water: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -5 }, // Essential for hydration
    juiceorange: { caloriesPer100g: 45, proteinPer100g: 0.7, fatPer100g: 0.1, carbsPer100g: 10, sugarPer100g: 8, sodiumPer100g: 1, weightPerUnit: 248, bloatScale: 1 }, // High sugar
    juicapple: { caloriesPer100g: 46, proteinPer100g: 0.1, fatPer100g: 0.1, carbsPer100g: 11, sugarPer100g: 10, sodiumPer100g: 1, weightPerUnit: 248, bloatScale: 1 }, // High sugar
    smoothie: { caloriesPer100g: 60, proteinPer100g: 2, fatPer100g: 1, carbsPer100g: 12, sugarPer100g: 8, sodiumPer100g: 20, weightPerUnit: 250, bloatScale: 2 }, // Varies greatly by ingredients
    milkshake: { caloriesPer100g: 100, proteinPer100g: 3, fatPer100g: 4, carbsPer100g: 12, sugarPer100g: 10, sodiumPer100g: 60, weightPerUnit: 200, bloatScale: 5 }, // High sugar, lactose
    energydrink: { caloriesPer100g: 45, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 11, sugarPer100g: 11, sodiumPer100g: 20, weightPer100g: 250, bloatScale: 3 }, // High sugar, artificial sweeteners, caffeine
    alcohol: { caloriesPer100g: 70, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 100, bloatScale: 6 }, // Dehydrating, can cause inflammation

    // Miscellaneous
    ghee: { caloriesPer100g: 900, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 }, // Clarified butter, less lactose
    coconut_oil: { caloriesPer100g: 892, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 },
    olive_oil: { caloriesPer100g: 884, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 },
    applecidervinegar: { caloriesPer100g: 20, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.9, sugarPer100g: 0.4, sodiumPer100g: 5, weightPerUnit: 15, bloatScale: -4 }, // Aids digestion
    kombucha: { caloriesPer100g: 15, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 4, sugarPer100g: 3, sodiumPer100g: 5, weightPerUnit: 240, bloatScale: -2 }, // Probiotics, can cause mild gas initially
    vinegar: { caloriesPer100g: 18, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.9, sugarPer100g: 0.4, sodiumPer100g: 5, weightPerUnit: 15, bloatScale: -1 },
    salt: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 38758, weightPerUnit: 1, bloatScale: 5 }, // High sodium
    sugar: { caloriesPer100g: 387, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 100, sodiumPer100g: 1, weightPerUnit: 4, bloatScale: 1 }, // High sugar
    honey: { caloriesPer100g: 304, proteinPer100g: 0.3, fatPer100g: 0, carbsPer100g: 82, sugarPer100g: 82, sodiumPer100g: 4, weightPerUnit: 21, bloatScale: 1 }, // High sugar, some FODMAPs
    maplesyrup: { caloriesPer100g: 260, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 67, sugarPer100g: 60, sodiumPer100g: 12, weightPerUnit: 13, bloatScale: 1 },
    agavenectar: { caloriesPer100g: 310, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 76, sugarPer100g: 69, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 2 }, // High fructose
    stevia: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPer100g: 0, bloatScale: -1 }, // Natural sweetener, generally well-tolerated
    erythritol: { caloriesPer100g: 20, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 0 }, // Sugar alcohol, generally well-tolerated
    xylitol: { caloriesPer100g: 240, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 3 }, // Sugar alcohol, can cause digestive issues
    sucralose: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 0, bloatScale: 1 }, // Artificial sweetener, some report issues
    aspartame: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 0, bloatScale: 1 }, // Artificial sweetener, some report issues
    saccharin: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 0, bloatScale: 1 }, // Artificial sweetener, some report issues
    acesulfamek: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPer100g: 0, bloatScale: 1 }, // Artificial sweetener, some report issues

    // Supplements & Powders
    wheyprotein: { caloriesPer100g: 374, proteinPer100g: 80, fatPer100g: 5, carbsPer100g: 8, sugarPer100g: 5, sodiumPer100g: 150, weightPerUnit: 30, bloatScale: 2 }, // Can cause bloating for lactose intolerant
    caseinprotein: { caloriesPer100g: 370, proteinPer100g: 85, fatPer100g: 1, carbsPer100g: 5, sugarPer100g: 1, sodiumPer100g: 400, weightPerUnit: 30, bloatScale: 2 }, // Can cause bloating for lactose intolerant
    plantprotein: { caloriesPer100g: 380, proteinPer100g: 70, fatPer100g: 8, carbsPer100g: 10, sugarPer100g: 0, sodiumPer100g: 300, weightPerUnit: 30, bloatScale: 1 }, // Generally better tolerated
    creatine: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 0 }, // Can cause water retention
    preworkout: { caloriesPer100g: 20, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 5, sugarPer100g: 0, sodiumPer100g: 100, weightPerUnit: 10, bloatScale: 2 }, // Artificial sweeteners, caffeine, can cause jitters
    fishoil: { caloriesPer100g: 900, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: -1 }, // Anti-inflammatory
    multivitamin: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPer100g: 0, bloatScale: 0 },
    probiotics: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPer100g: 0, bloatScale: -2 }, // Can cause initial gas/bloating, then improve digestion
    magnesium: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPer100g: 0, bloatScale: -1 }, // Can aid digestion
    fiber_supplement: { caloriesPer100g: 200, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 90, sugarPer100g: 0, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 3 }, // Can cause gas if introduced too quickly

    // Herbs & Spices
    turmeric: { caloriesPer100g: 354, proteinPer100g: 8, fatPer100g: 10, carbsPer100g: 65, sugarPer100g: 3, sodiumPer100g: 38, weightPerUnit: 1, bloatScale: -2 }, // Anti-inflammatory
    cinnamon: { caloriesPer100g: 247, proteinPer100g: 4, fatPer100g: 1, carbsPer100g: 80, sugarPer100g: 2, sodiumPer100g: 10, weightPerUnit: 1, bloatScale: 0 },
    cumin: { caloriesPer100g: 375, proteinPer100g: 18, fatPer100g: 22, carbsPer100g: 44, sugarPer100g: 2, sodiumPer100g: 168, weightPer100g: 1, bloatScale: -1 }, // Aids digestion
    paprika: { caloriesPer100g: 289, proteinPer100g: 14, fatPer100g: 13, carbsPer100g: 54, sugarPer100g: 10, sodiumPer100g: 68, weightPer100g: 1, bloatScale: 0 },
    oregano: { caloriesPer100g: 265, proteinPer100g: 9, fatPer100g: 4, carbsPer100g: 69, sugarPer100g: 4, sodiumPer100g: 25, weightPer100g: 1, bloatScale: 0 },
    basil: { caloriesPer100g: 27, proteinPer100g: 3, fatPer100g: 0.6, carbsPer100g: 2.7, sugarPer100g: 0.3, sodiumPer100g: 4, weightPerUnit: 1, bloatScale: 0 },
    rosemary: { caloriesPer100g: 131, proteinPer100g: 3.3, fatPer100g: 6, carbsPer100g: 20, sugarPer100g: 0, sodiumPer100g: 50, weightPer100g: 1, bloatScale: 0 },
    thyme: { caloriesPer100g: 101, proteinPer100g: 5.6, fatPer100g: 1.7, carbsPer100g: 24, sugarPer100g: 2, sodiumPer100g: 9, weightPer100g: 1, bloatScale: 0 },
    dill: { caloriesPer100g: 43, proteinPer100g: 3.5, fatPer100g: 1.1, carbsPer100g: 7, sugarPer100g: 0, sodiumPer100g: 20, weightPer100g: 1, bloatScale: -1 }, // Aids digestion
    cardamom: { caloriesPer100g: 311, proteinPer100g: 11, fatPer100g: 7, carbsPer100g: 68, sugarPer100g: 0, sodiumPer100g: 18, weightPer100g: 1, bloatScale: -1 }, // Aids digestion
    fennel_seeds: { caloriesPer100g: 345, proteinPer100g: 16, fatPer100g: 15, carbsPer100g: 52, sugarPer100g: 0, sodiumPer100g: 88, weightPer100g: 1, bloatScale: -2 }, // Aids digestion
    peppermint: { caloriesPer100g: 70, proteinPer100g: 3.8, fatPer100g: 0.9, carbsPer100g: 15, sugarPer100g: 0, sodiumPer100g: 30, weightPer100g: 1, bloatScale: -3 }, // Digestive aid

    // Others
    vegetable_broth: { caloriesPer100g: 5, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 0.5, sugarPer100g: 0.1, sodiumPer100g: 300, weightPerUnit: 240, bloatScale: 0 },
    chicken_broth: { caloriesPer100g: 10, proteinPer100g: 1, fatPer100g: 0.5, carbsPer100g: 0.5, sugarPer100g: 0.1, sodiumPer100g: 350, weightPerUnit: 240, bloatScale: 0 },
    beef_broth: { caloriesPer100g: 10, proteinPer100g: 1, fatPer100g: 0.5, carbsPer100g: 0.5, sugarPer100g: 0.1, sodiumPer100g: 350, weightPerUnit: 240, bloatScale: 0 },
    bone_broth: { caloriesPer100g: 20, proteinPer100g: 5, fatPer100g: 0.5, carbsPer100g: 0.5, sugarPer100g: 0.1, sodiumPer100g: 200, weightPerUnit: 240, bloatScale: -2 }, // Good for gut health
    almond_milk: { caloriesPer100g: 15, proteinPer100g: 0.6, fatPer100g: 1.1, carbsPer100g: 1, sugarPer100g: 0, sodiumPer100g: 160, weightPerUnit: 240, bloatScale: 0 },
    coconut_milk: { caloriesPer100g: 230, proteinPer100g: 2.3, fatPer100g: 24, carbsPer100g: 5.5, sugarPer100g: 3.8, sodiumPer100g: 16, weightPerUnit: 240, bloatScale: 1 }, // High fat, can be heavy
    soy_milk: { caloriesPer100g: 54, proteinPer100g: 3.3, fatPer100g: 1.8, carbsPer100g: 5.5, sugarPer100g: 2.5, sodiumPer100g: 51, weightPer100g: 240, bloatScale: 2 }, // Can cause gas in some
    oat_milk: { caloriesPer100g: 45, proteinPer100g: 1.2, fatPer100g: 1.5, carbsPer100g: 6.5, sugarPer100g: 3, sodiumPer100g: 45, weightPerUnit: 240, bloatScale: 1 }, // Can cause mild bloating in some
    rice_milk: { caloriesPer100g: 47, proteinPer100g: 0.3, fatPer100g: 1.1, carbsPer100g: 9, sugarPer100g: 5, sodiumPer100g: 40, weightPerUnit: 240, bloatScale: 0 },
    cashew_milk: { caloriesPer100g: 25, proteinPer100g: 0.5, fatPer100g: 2, carbsPer100g: 2, sugarPer100g: 0, sodiumPer100g: 100, weightPerUnit: 240, bloatScale: 0 },
    hazelnut_milk: { caloriesPer100g: 29, proteinPer100g: 0.5, fatPer100g: 2.5, carbsPer100g: 1.5, sugarPer100g: 0, sodiumPer100g: 80, weightPerUnit: 240, bloatScale: 0 },
    flax_milk: { caloriesPer100g: 25, proteinPer100g: 0, fatPer100g: 2.5, carbsPer100g: 2, sugarPer100g: 0, sodiumPer100g: 100, weightPerUnit: 240, bloatScale: 0 },
    protein_bar: { caloriesPer100g: 350, proteinPer100g: 25, fatPer100g: 15, carbsPer100g: 30, sugarPer100g: 15, sodiumPer100g: 200, weightPerUnit: 60, bloatScale: 3 }, // Can be high in sugar alcohols or fiber
    granola_bar: { caloriesPer100g: 400, proteinPer100g: 8, fatPer100g: 15, carbsPer100g: 60, sugarPer100g: 20, sodiumPer100g: 150, weightPerUnit: 40, bloatScale: 2 }, // Often high in sugar
    trail_mix: { caloriesPer100g: 500, proteinPer100g: 15, fatPer100g: 30, carbsPer100g: 50, sugarPer100g: 25, sodiumPer100g: 100, weightPerUnit: 30, bloatScale: 1 }, // Varies by ingredients
    dried_fruit: { caloriesPer100g: 300, proteinPer100g: 3, fatPer100g: 0.5, carbsPer100g: 80, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 2 }, // High sugar, can be high in FODMAPs
    fruit_juice_concentrate: { caloriesPer100g: 260, proteinPer100g: 1, fatPer100g: 0.1, carbsPer100g: 65, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 100, bloatScale: 1 }, // High sugar
    jelly: { caloriesPer100g: 250, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 65, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 15, bloatScale: 1 }, // High sugar
    jam: { caloriesPer100g: 250, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 65, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 15, bloatScale: 1 }, // High sugar
    syrup: { caloriesPer100g: 280, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 70, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 15, bloatScale: 1 }, // High sugar
    nut_butter: { caloriesPer100g: 600, proteinPer100g: 20, fatPer100g: 50, carbsPer100g: 20, sugarPer100g: 5, sodiumPer100g: 10, weightPerUnit: 16, bloatScale: 1 }, // Healthy fats, can be high in fiber
    seeds_mix: { caloriesPer100g: 550, proteinPer100g: 20, fatPer100g: 40, carbsPer100g: 20, sugarPer100g: 2, sodiumPer100g: 5, weightPerUnit: 10, bloatScale: 0 },
    nuts_mix: { caloriesPer100g: 600, proteinPer100g: 20, fatPer100g: 50, carbsPer100g: 20, sugarPer100g: 5, sodiumPer100g: 5, weightPerUnit: 10, bloatScale: 1 }, // Can be high in FODMAPs
    protein_powder: { caloriesPer100g: 400, proteinPer100g: 80, fatPer100g: 5, carbsPer100g: 8, sugarPer100g: 5, sodiumPer100g: 150, weightPerUnit: 30, bloatScale: 2 }, // Varies by type
    protein_shake: { caloriesPer100g: 60, proteinPer100g: 10, fatPer100g: 2, carbsPer100g: 3, sugarPer100g: 2, sodiumPer100g: 80, weightPerUnit: 330, bloatScale: 2 }, // Varies by type
    meal_replacement_shake: { caloriesPer100g: 80, proteinPer100g: 8, fatPer100g: 3, carbsPer100g: 6, sugarPer100g: 3, sodiumPer100g: 100, weightPerUnit: 330, bloatScale: 3 }, // Varies by type
    protein_yogurt: { caloriesPer100g: 70, proteinPer100g: 15, fatPer100g: 0.5, carbsPer100g: 5, sugarPer100g: 4, sodiumPer100g: 60, weightPerUnit: 100, bloatScale: 2 }, // Lactose
    protein_milk: { caloriesPer100g: 60, proteinPer100g: 8, fatPer100g: 1, carbsPer100g: 5, sugarPer100g: 5, sodiumPer100g: 60, weightPerUnit: 240, bloatScale: 2 }, // Lactose, often contains added protein
    collagen_powder: { caloriesPer100g: 370, proteinPer100g: 90, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 100, weightPerUnit: 10, bloatScale: 0 }, // Good for gut health
    gelatin: { caloriesPer100g: 335, proteinPer100g: 86, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 100, weightPerUnit: 10, bloatScale: 0 }, // Good for gut health
    bone_marrow: { caloriesPer100g: 786, proteinPer100g: 4, fatPer100g: 85, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 20, weightPerUnit: 100, bloatScale: 0 },
    organ_meats: { caloriesPer100g: 150, proteinPer100g: 20, fatPer100g: 7, carbsPer100g: 3, sugarPer100g: 0.5, sodiumPer100g: 80, weightPerUnit: 100, bloatScale: 1 }, // Nutrient dense, can be heavy
    fermented_foods: { caloriesPer100g: 50, proteinPer100g: 2, fatPer100g: 1, carbsPer100g: 5, sugarPer100g: 1, sodiumPer100g: 300, weightPerUnit: 100, bloatScale: -2 }, // Probiotics, can cause initial gas
    probiotic_supplement: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 0, bloatScale: -2 }, // Can cause initial gas/bloating, then improve digestion
    digestive_enzymes: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 0, bloatScale: -3 }, // Aids digestion
    ginger_tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -4 }, // Digestive aid
    peppermint_tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -3 }, // Digestive aid
    chamomile_tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -2 }, // Calming, can aid digestion
    licorice_root_tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -1 }, // Can soothe digestive tract
    marshmallow_root_tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -1 }, // Soothes digestive tract
    slippery_elm_bark_tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -1 }, // Soothes digestive tract
    psyllium_husk: { caloriesPer100g: 350, proteinPer100g: 15, fatPer100g: 2, carbsPer100g: 78, sugarPer100g: 0, sodiumPer100g: 100, weightPerUnit: 10, bloatScale: 3 }, // Fiber, can cause gas if not enough water
    glucomannan: { caloriesPer100g: 200, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 90, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 2 }, // Fiber, can cause gas
    inulin: { caloriesPer100g: 150, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 90, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 4 }, // FODMAP, can cause significant gas
    fructooligosaccharides: { caloriesPer100g: 200, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 90, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 4 }, // FODMAP, can cause significant gas
    galactooligosaccharides: { caloriesPer100g: 200, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 90, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 4 }, // FODMAP, can cause significant gas
    xylitol_gum: { caloriesPer100g: 240, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 2, bloatScale: 3 }, // Sugar alcohol, can cause digestive issues
    sorbitol_gum: { caloriesPer100g: 240, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 2, bloatScale: 4 }, // Sugar alcohol, can cause digestive issues
    mannitol_gum: { caloriesPer100g: 240, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 2, bloatScale: 4 }, // Sugar alcohol, can cause digestive issues
    maltitol_gum: { caloriesPer100g: 240, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPer100g: 2, bloatScale: 4 }, // Sugar alcohol, can cause digestive issues
};
