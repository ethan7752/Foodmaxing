// Directly assign to window.foodsDatabase to make it globally accessible
window.foodsDatabase = {
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
    chiaseed: { caloriesPer100g: 486, proteinPer100g: 17, fatPer100g: 31, carbsPer100g: 42, sugarPer100g: 0, sodiumPer100g: 16, weightPerUnit: 10, bloatScale: -1 }, // Good fiber, can aid digestion
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
    yogurt: { caloriesPer100g: 59, proteinPer100g: 10, fatPer100g: 0.4, carbsPer100g: 3.6, sugarPer100g: 3.6, sodiumPer100g: 46, weightPerUnit: 100, bloatScale: -1 }, // Probiotics can aid digestion
    milk: { caloriesPer100g: 42, proteinPer100g: 3.4, fatPer100g: 1, carbsPer100g: 5, sugarPer100g: 5, sodiumPer100g: 43, weightPerUnit: 244, bloatScale: 2 }, // Lactose
    butter: { caloriesPer100g: 717, proteinPer100g: 0.9, fatPer100g: 81, carbsPer100g: 0.1, sugarPer100g: 0.1, sodiumPer100g: 643, weightPerUnit: 14, bloatScale: 0 },
    cream: { caloriesPer100g: 340, proteinPer100g: 2, fatPer100g: 37, carbsPer100g: 3, sugarPer100g: 2.8, sodiumPer100g: 34, weightPerUnit: 15, bloatScale: 1 }, // Lactose
    feta: { caloriesPer100g: 264, proteinPer100g: 14, fatPer100g: 21, carbsPer100g: 4.1, sugarPer100g: 4.1, sodiumPer100g: 1116, weightPerUnit: 30, bloatScale: 6 }, // Very high sodium
    cottagecheese: { caloriesPer100g: 98, proteinPer100g: 11, fatPer100g: 4.3, carbsPer100g: 3.4, sugarPer100g: 2.7, sodiumPer100g: 364, weightPerUnit: 100, bloatScale: 1 }, // Some lactose
    sourcream: { caloriesPer100g: 198, proteinPer100g: 2.4, fatPer100g: 19, carbsPer100g: 3.7, sugarPer100g: 2.7, sodiumPer100g: 28, weightPerUnit: 15, bloatScale: 0 },
    creamcheese: { caloriesPer100g: 342, proteinPer100g: 6, fatPer100g: 34, carbsPer100g: 4.1, sugarPer100g: 3.2, sodiumPer100g: 317, weightPerUnit: 30, bloatScale: 1 },
    greekyogurt: { caloriesPer100g: 59, proteinPer100g: 10, fatPer100g: 0.4, carbsPer100g: 3.6, sugarPer100g: 3.6, sodiumPer100g: 36, weightPerUnit: 100, bloatScale: -1 }, // Lower lactose, probiotics
    kefir: { caloriesPer100g: 58, proteinPer100g: 3.8, fatPer100g: 3.5, carbsPer100g: 4.8, sugarPer100g: 4.8, sodiumPer100g: 36, weightPerUnit: 240, bloatScale: -2 }, // Fermented, good for gut health
    oatmilk: { caloriesPer100g: 47, proteinPer100g: 1, fatPer100g: 1.5, carbsPer100g: 6.5, sugarPer100g: 4, sodiumPer100g: 40, weightPerUnit: 240, bloatScale: 1 }, // Can contain gums, some carbs
    almondmilk: { caloriesPer100g: 15, proteinPer100g: 0.6, fatPer100g: 1.2, carbsPer100g: 0.1, sugarPer100g: 0, sodiumPer100g: 160, weightPerUnit: 240, bloatScale: 0 },
    soymilk: { caloriesPer100g: 54, proteinPer100g: 3.3, fatPer100g: 1.8, carbsPer100g: 3.9, sugarPer100g: 2.5, sodiumPer100g: 51, weightPerUnit: 240, bloatScale: 0 },
    coconutmilk: { caloriesPer100g: 230, proteinPer100g: 2.3, fatPer100g: 24, carbsPer100g: 5.5, sugarPer100g: 3.3, sodiumPer100g: 16, weightPerUnit: 100, bloatScale: 1 }, // High fat, can slow digestion for some
    ricemilk: { caloriesPer100g: 47, proteinPer100g: 0.3, fatPer100g: 1, carbsPer100g: 9, sugarPer100g: 5, sodiumPer100g: 40, weightPerUnit: 240, bloatScale: 0 },

    // Sweets & Misc
    coconutmeat: { caloriesPer100g: 354, proteinPer100g: 3.3, fatPer100g: 33, carbsPer100g: 15, sugarPer100g: 6.2, sodiumPer100g: 20, weightPerUnit: 80, bloatScale: 1 }, // High fiber and fats
    darkchocolate: { caloriesPer100g: 546, proteinPer100g: 4.9, fatPer100g: 31, carbsPer100g: 61, sugarPer100g: 48, sodiumPer100g: 18, weightPerUnit: 10, bloatScale: 0 },
    rawhoney: { caloriesPer100g: 304, proteinPer100g: 0.3, fatPer100g: 0, carbsPer100g: 82, sugarPer100g: 82.1, sodiumPer100g: 4, weightPerUnit: 21, bloatScale: 2 }, // High sugar
    maplesyrup: { caloriesPer100g: 260, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 67, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 20, bloatScale: 2 }, // High sugar
    agavesyrup: { caloriesPer100g: 310, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 76, sugarPer100g: 68, sodiumPer100g: 1, weightPerUnit: 20, bloatScale: 2 }, // High fructose
    whitechocolate: { caloriesPer100g: 539, proteinPer100g: 5.9, fatPer100g: 32, carbsPer100g: 59, sugarPer100g: 59, sodiumPer100g: 100, weightPerUnit: 10, bloatScale: 2 }, // High sugar, dairy
    jellybeans: { caloriesPer100g: 370, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 90, sugarPer100g: 80, sodiumPer100g: 20, weightPerUnit: 10, bloatScale: 4 }, // High sugar, artificial ingredients
    gummybears: { caloriesPer100g: 350, proteinPer100g: 6, fatPer100g: 0.1, carbsPer100g: 80, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 3 }, // High sugar, artificial ingredients
    cookies: { caloriesPer100g: 489, proteinPer100g: 5, fatPer100g: 23, carbsPer100g: 66, sugarPer100g: 30, sodiumPer100g: 300, weightPerUnit: 20, bloatScale: 3 }, // Refined flour, sugar
    cake: { caloriesPer100g: 400, proteinPer100g: 5, fatPer100g: 20, carbsPer100g: 55, sugarPer100g: 40, sodiumPer100g: 250, weightPerUnit: 100, bloatScale: 4 }, // High sugar, refined flour
    brownie: { caloriesPer100g: 460, proteinPer100g: 5, fatPer100g: 25, carbsPer100g: 55, sugarPer100g: 40, sodiumPer100g: 200, weightPerUnit: 80, bloatScale: 4 }, // High sugar, refined flour
    icecream: { caloriesPer100g: 207, proteinPer100g: 3.5, fatPer100g: 11, carbsPer100g: 23, sugarPer100g: 21, sodiumPer100g: 80, weightPer100g: 65, bloatScale: 2 }, // Lactose, high sugar
    cheesecake: { caloriesPer100g: 320, proteinPer100g: 6, fatPer100g: 20, carbsPer100g: 30, sugarPer100g: 25, sodiumPer100g: 200, weightPerUnit: 100, bloatScale: 3 }, // Dairy, sugar, sometimes gluten
    mousse: { caloriesPer100g: 250, proteinPer100g: 4, fatPer100g: 15, carbsPer100g: 25, sugarPer100g: 20, sodiumPer100g: 50, weightPerUnit: 50, bloatScale: 2 }, // Dairy, sugar
    jelly: { caloriesPer100g: 50, proteinPer100g: 1, fatPer100g: 0, carbsPer100g: 12, sugarPer100g: 12, sodiumPer100g: 20, weightPerUnit: 100, bloatScale: 1 }, // Sugar
    sorbet: { caloriesPer100g: 120, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 30, sugarPer100g: 25, sodiumPer100g: 10, weightPerUnit: 60, bloatScale: 1 }, // High sugar
    frozenyogurt: { caloriesPer100g: 150, proteinPer100g: 3, fatPer100g: 4, carbsPer100g: 25, sugarPer100g: 20, sodiumPer100g: 60, weightPerUnit: 60, bloatScale: 1 }, // Sugar, some dairy
    marshmallows: { caloriesPer100g: 318, proteinPer100g: 2, fatPer100g: 0.2, carbsPer100g: 79, sugarPer100g: 58, sodiumPer100g: 30, weightPerUnit: 7, bloatScale: 3 }, // High sugar, gelatin
    gum: { caloriesPer100g: 300, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 75, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 2, bloatScale: 2 }, // Sugar alcohols can cause bloating

    // Beverages
    coffee: { caloriesPer100g: 2, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: -6 }, // Diuretic, can stimulate digestion
    tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: -2 }, // Herbal teas can be digestive aids
    greentea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: -3 }, // Antioxidants, mild diuretic
    pepperminttea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: -5 }, // Excellent for soothing digestive issues
    chamomiletea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: -4 }, // Soothing, anti-inflammatory
    beer: { caloriesPer100g: 43, proteinPer100g: 0.5, fatPer100g: 0, carbsPer100g: 3.6, sugarPer100g: 0, sodiumPer100g: 4, weightPerUnit: 355, bloatScale: 8 }, // Carbonation, fermentation, gluten, alcohol
    wine: { caloriesPer100g: 85, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 2.6, sugarPer100g: 0.6, sodiumPer100g: 2, weightPerUnit: 150, bloatScale: 5 }, // Alcohol, sulfites
    coke: { caloriesPer100g: 42, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 11, sugarPer100g: 11, sodiumPer100g: 11, weightPerUnit: 330, bloatScale: 7 }, // High sugar, carbonation
    dietcoke: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 11, weightPerUnit: 330, bloatScale: 4 }, // Artificial sweeteners, carbonation
    cokezero: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 10, weightPerUnit: 330, bloatScale: 4 }, // Artificial sweeteners, carbonation
    venergydrink: { caloriesPer100g: 45, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 11, sugarPer100g: 11, sodiumPer100g: 20, weightPerUnit: 250, bloatScale: 6 }, // High sugar, carbonation, stimulants
    venergydrinksugarfree: { caloriesPer100g: 5, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.5, sugarPer100g: 0, sodiumPer100g: 20, weightPerUnit: 250, bloatScale: 5 }, // Artificial sweeteners, carbonation
    orangejuice: { caloriesPer100g: 45, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 10, sugarPer100g: 8, sodiumPer100g: 1, weightPerUnit: 250, bloatScale: 2 }, // High sugar
    applejuice: { caloriesPer100g: 46, proteinPer100g: 0.1, fatPer100g: 0.1, carbsPer100g: 11, sugarPer100g: 10, sodiumPer100g: 1, weightPerUnit: 250, bloatScale: 2 }, // High sugar, FODMAPs in some
    grapejuice: { caloriesPer100g: 60, proteinPer100g: 0.2, fatPer100g: 0.1, carbsPer100g: 15, sugarPer100g: 14, sodiumPer100g: 2, weightPerUnit: 250, bloatScale: 3 }, // Very high sugar
    sugarydrink: { caloriesPer100g: 40, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 10, sugarPer100g: 10, sodiumPer100g: 10, weightPerUnit: 330, bloatScale: 4 }, // Generic, high sugar
    sparklingwater: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 330, bloatScale: 2 }, // Carbonation
    tapwater: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 250, bloatScale: -5 }, // Essential for hydration and debloating

    // Meals & Dishes (General approximations)
    pizza: { caloriesPer100g: 267, proteinPer100g: 11, fatPer100g: 10, carbsPer100g: 30, sugarPer100g: 3, sodiumPer100g: 600, weightPerUnit: 100, bloatScale: 7 }, // High sodium, processed, sometimes high fat, gluten
    burger: { caloriesPer100g: 295, proteinPer100g: 15, fatPer100g: 15, carbsPer100g: 25, sugarPer100g: 4, sodiumPer100g: 650, weightPerUnit: 150, bloatScale: 8 }, // High sodium, processed, sometimes heavy on refined carbs
    fries: { caloriesPer100g: 312, proteinPer100g: 3.4, fatPer100g: 15, carbsPer100g: 41, sugarPer100g: 0.3, sodiumPer100g: 210, weightPer100g: 100, bloatScale: 4 }, // High sodium, fried
    hotdog: { caloriesPer100g: 290, proteinPer100g: 11, fatPer100g: 26, carbsPer100g: 1, sugarPer100g: 1, sodiumPer100g: 800, weightPerUnit: 50, bloatScale: 9 }, // Very high sodium, processed meats
    bacon: { caloriesPer100g: 541, proteinPer100g: 37, fatPer100g: 42, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 1500, weightPerUnit: 15, bloatScale: 9 }, // Extremely high sodium, high fat
    sushi: { caloriesPer100g: 150, proteinPer100g: 5, fatPer100g: 2, carbsPer100g: 28, sugarPer100g: 6, sodiumPer100g: 250, weightPerUnit: 100, bloatScale: 2 }, // Rice can be a bit bloaty, soy sauce adds sodium
    ramen: { caloriesPer100g: 180, proteinPer100g: 4, fatPer100g: 7, carbsPer100g: 25, sugarPer100g: 1, sodiumPer100g: 800, weightPerUnit: 300, bloatScale: 9 }, // Very high sodium, processed noodles
    curry: { caloriesPer100g: 150, proteinPer100g: 7, fatPer100g: 8, carbsPer100g: 12, sugarPer100g: 3, sodiumPer100g: 400, weightPerUnit: 300, bloatScale: 4 }, // Can be high in spices and sometimes dairy
    stirfry: { caloriesPer100g: 100, proteinPer100g: 8, fatPer100g: 4, carbsPer100g: 8, sugarPer100g: 2, sodiumPer100g: 300, weightPerUnit: 250, bloatScale: 2 }, // Varies by ingredients, soy sauce adds sodium
    tacos: { caloriesPer100g: 200, proteinPer100g: 10, fatPer100g: 10, carbsPer100g: 15, sugarPer100g: 2, sodiumPer100g: 400, weightPerUnit: 150, bloatScale: 5 }, // Can be high in sodium, beans, and cheese
    burrito: { caloriesPer100g: 250, proteinPer100g: 12, fatPer100g: 12, carbsPer100g: 20, sugarPer100g: 3, sodiumPer100g: 500, weightPerUnit: 300, bloatScale: 6 }, // Large size, beans, rice, cheese, high sodium
    sandwich: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 8, carbsPer100g: 30, sugarPer100g: 3, sodiumPer100g: 400, weightPerUnit: 150, bloatScale: 3 }, // Bread, sometimes high sodium fillings
    soup: { caloriesPer100g: 60, proteinPer100g: 3, fatPer100g: 3, carbsPer100g: 5, sugarPer100g: 1, sodiumPer100g: 300, weightPerUnit: 250, bloatScale: 2 }, // Varies, but many are high in sodium
    eggsbenedict: { caloriesPer100g: 200, proteinPer100g: 10, fatPer100g: 15, carbsPer100g: 5, sugarPer100g: 1, sodiumPer100g: 400, weightPer100g: 200, bloatScale: 5 }, // Hollandaise sauce (fat, sometimes dairy), high sodium
    pancakes: { caloriesPer100g: 227, proteinPer100g: 5, fatPer100g: 9, carbsPer100g: 30, sugarPer100g: 6, sodiumPer100g: 300, weightPerUnit: 50, bloatScale: 2 }, // Refined flour, sugar
    waffles: { caloriesPer100g: 250, proteinPer100g: 6, fatPer100g: 12, carbsPer100g: 30, sugarPer100g: 7, sodiumPer100g: 350, weightPerUnit: 50, bloatScale: 2 }, // Refined flour, sugar
    muffin: { caloriesPer100g: 350, proteinPer100g: 6, fatPer100g: 15, carbsPer100g: 45, sugarPer100g: 20, sodiumPer100g: 300, weightPerUnit: 100, bloatScale: 3 }, // Refined flour, sugar
    doughnut: { caloriesPer100g: 450, proteinPer100g: 5, fatPer100g: 25, carbsPer100g: 50, sugarPer100g: 25, sodiumPer100g: 200, weightPerUnit: 50, bloatScale: 4 }, // Fried, high sugar, refined flour
    cupcake: { caloriesPer100g: 380, proteinPer100g: 4, fatPer100g: 20, carbsPer100g: 50, sugarPer100g: 35, sodiumPer100g: 150, weightPer100g: 60, bloatScale: 4 }, // High sugar, refined flour
    oatmeal: { caloriesPer100g: 68, proteinPer100g: 2.5, fatPer100g: 1.2, carbsPer100g: 12, sugarPer100g: 0.1, sodiumPer100g: 0, weightPerUnit: 200, bloatScale: 1 }, // Fiber can cause mild bloating for some
    granola: { caloriesPer100g: 470, proteinPer100g: 10, fatPer100g: 20, carbsPer100g: 60, sugarPer100g: 20, sodiumPer100g: 150, weightPerUnit: 40, bloatScale: 2 }, // High sugar, sometimes high fiber
    muesli: { caloriesPer100g: 370, proteinPer100g: 10, fatPer100g: 10, carbsPer100g: 60, sugarPer100g: 15, sodiumPer100g: 50, weightPerUnit: 40, bloatScale: 1 }, // Less sugar than granola, good fiber
    croissant: { caloriesPer100g: 406, proteinPer100g: 8, fatPer100g: 21, carbsPer100g: 45, sugarPer100g: 10, sodiumPer100g: 430, weightPerUnit: 60, bloatScale: 3 }, // High fat, refined flour, sodium
    baguette: { caloriesPer100g: 260, proteinPer100g: 9, fatPer100g: 1, carbsPer100g: 50, sugarPer100g: 2, sodiumPer100g: 450, weightPer100g: 50, bloatScale: 2 }, // Refined flour, sodium
    sourdough: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 1.5, carbsPer100g: 48, sugarPer100g: 1, sodiumPer100g: 350, weightPerUnit: 50, bloatScale: 0 }, // Fermented, generally easier to digest
    wonton: { caloriesPer100g: 270, proteinPer100g: 10, fatPer100g: 5, carbsPer100g: 45, sugarPer100g: 2, sodiumPer100g: 300, weightPerUnit: 10, bloatScale: 2 }, // Dough, sometimes high sodium filling
    dumpling: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 8, carbsPer100g: 35, sugarPer100g: 2, sodiumPer100g: 350, weightPerUnit: 20, bloatScale: 2 }, // Dough, sometimes high sodium filling
    samosa: { caloriesPer100g: 350, proteinPer100g: 8, fatPer100g: 20, carbsPer100g: 35, sugarPer100g: 2, sodiumPer100g: 300, weightPerUnit: 50, bloatScale: 3 }, // Fried, sometimes contains gassy vegetables
    springroll: { caloriesPer100g: 250, proteinPer100g: 7, fatPer100g: 15, carbsPer100g: 20, sugarPer100g: 2, sodiumPer100g: 250, weightPerUnit: 50, bloatScale: 2 }, // Fried, sometimes contains gassy vegetables
    falafel: { caloriesPer100g: 330, proteinPer100g: 13, fatPer100g: 18, carbsPer100g: 30, sugarPer100g: 2, sodiumPer100g: 400, weightPerUnit: 20, bloatScale: 4 }, // Fried, chickpeas can be gassy
    hummus: { caloriesPer100g: 166, proteinPer100g: 7.9, fatPer100g: 9.6, carbsPer100g: 14.3, sugarPer100g: 0.5, sodiumPer100g: 360, weightPerUnit: 30, bloatScale: 2 }, // Chickpeas, sometimes garlic
    tzatziki: { caloriesPer100g: 70, proteinPer100g: 2, fatPer100g: 5, carbsPer100g: 4, sugarPer100g: 3, sodiumPer100g: 150, weightPerUnit: 30, bloatScale: 0 }, // Yogurt base, usually fine
    guacamole: { caloriesPer100g: 160, proteinPer100g: 2, fatPer100g: 15, carbsPer100g: 9, sugarPer100g: 0.7, sodiumPer100g: 7, weightPerUnit: 30, bloatScale: 0 }, // Avocado based, generally good
    salsa: { caloriesPer100g: 36, proteinPer100g: 1, fatPer100g: 0.2, carbsPer100g: 7, sugarPer100g: 4, sodiumPer100g: 250, weightPerUnit: 30, bloatScale: 1 }, // Can contain onion, sodium
    pesto: { caloriesPer100g: 450, proteinPer100g: 10, fatPer100g: 45, carbsPer100g: 5, sugarPer100g: 2, sodiumPer100g: 600, weightPerUnit: 15, bloatScale: 1 }, // High fat, sometimes dairy
    mayonnaise: { caloriesPer100g: 679, proteinPer100g: 1, fatPer100g: 75, carbsPer100g: 2.5, sugarPer100g: 2.5, sodiumPer100g: 540, weightPerUnit: 15, bloatScale: 1 }, // High fat
    ketchup: { caloriesPer100g: 112, proteinPer100g: 1.2, fatPer100g: 0.1, carbsPer100g: 28, sugarPer100g: 22, sodiumPer100g: 1110, weightPerUnit: 17, bloatScale: 3 }, // High sodium, high sugar
    mustard: { caloriesPer100g: 66, proteinPer100g: 4.6, fatPer100g: 3.8, carbsPer100g: 6.8, sugarPer100g: 1.9, sodiumPer100g: 1120, weightPerUnit: 17, bloatScale: 3 }, // High sodium
    saladcream: { caloriesPer100g: 279, proteinPer100g: 1.4, fatPer100g: 26, carbsPer100g: 10, sugarPer100g: 8.6, sodiumPer100g: 780, weightPer100g: 15, bloatScale: 2 }, // High sodium, fats, sugar
    chips: { caloriesPer100g: 536, proteinPer100g: 6, fatPer100g: 35, carbsPer100g: 50, sugarPer100g: 0.4, sodiumPer100g: 560, weightPerUnit: 30, bloatScale: 8 }, // Very high sodium, fried, processed
    pretzels: { caloriesPer100g: 380, proteinPer100g: 10, fatPer100g: 5, carbsPer100g: 75, sugarPer100g: 2, sodiumPer100g: 1200, weightPer100g: 10, bloatScale: 7 }, // Very high sodium, refined carbs
    popcorn: { caloriesPer100g: 380, proteinPer100g: 11, fatPer100g: 5, carbsPer100g: 70, sugarPer100g: 0.5, sodiumPer100g: 7, weightPerUnit: 10, bloatScale: 1 }, // High fiber for some, can be salty
    proteinbar: { caloriesPer100g: 380, proteinPer100g: 30, fatPer100g: 15, carbsPer100g: 30, sugarPer100g: 10, sodiumPer100g: 200, weightPerUnit: 60, bloatScale: 1 }, // Depends on ingredients, some artificial sweeteners
    wheyprotein: { caloriesPer100g: 370, proteinPer100g: 80, fatPer100g: 5, carbsPer100g: 5, sugarPer100g: 3, sodiumPer100g: 150, weightPerUnit: 30, bloatScale: 1 }, // Lactose for some, artificial sweeteners
    creatine: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 3 }, // Can cause water retention
    preworkout: { caloriesPer100g: 10, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 2.5, sugarPer100g: 0, sodiumPer100g: 500, weightPerUnit: 10, bloatScale: 5 }, // High sodium, artificial sweeteners, stimulants
    energygel: { caloriesPer100g: 250, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 60, sugarPer100g: 30, sodiumPer100g: 200, weightPerUnit: 40, bloatScale: 2 }, // High sugar
    sportsdrink: { caloriesPer100g: 24, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 6, sugarPer100g: 4, sodiumPer100g: 45, weightPerUnit: 500, bloatScale: 2 }, // Sugar, electrolytes
    smoothie: { caloriesPer100g: 60, proteinPer100g: 1, fatPer100g: 0.5, carbsPer100g: 15, sugarPer100g: 10, sodiumPer100g: 20, weightPerUnit: 250, bloatScale: 1 }, // Depends on ingredients (dairy, high fiber fruits)
    proteinshake: { caloriesPer100g: 60, proteinPer100g: 10, fatPer100g: 1, carbsPer100g: 3, sugarPer100g: 2, sodiumPer100g: 80, weightPerUnit: 300, bloatScale: 0 }, // Depends on protein type
    energybar: { caloriesPer100g: 350, proteinPer100g: 10, fatPer100g: 15, carbsPer100g: 40, sugarPer100g: 20, sodiumPer100g: 150, weightPerUnit: 60, bloatScale: 1 }, // Similar to protein bars
    cereals: { caloriesPer100g: 370, proteinPer100g: 8, fatPer100g: 2, carbsPer100g: 80, sugarPer100g: 25, sodiumPer100g: 400, weightPerUnit: 30, bloatScale: 3 }, // Refined carbs, sugar, sodium
    cerealbar: { caloriesPer100g: 400, proteinPer100g: 5, fatPer100g: 15, carbsPer100g: 60, sugarPer100g: 25, sodiumPer100g: 200, weightPerUnit: 30, bloatScale: 2 },
    bagel: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 1.5, carbsPer100g: 50, sugarPer100g: 5, sodiumPer100g: 450, weightPerUnit: 100, bloatScale: 3 }, // Refined flour, sodium
    scone: { caloriesPer100g: 350, proteinPer100g: 7, fatPer100g: 18, carbsPer100g: 40, sugarPer100g: 10, sodiumPer100g: 250, weightPerUnit: 60, bloatScale: 2 },
    biscuits: { caloriesPer100g: 450, proteinPer100g: 7, fatPer100g: 20, carbsPer100g: 60, sugarPer100g: 20, sodiumPer100g: 300, weightPer100g: 20, bloatScale: 3 }, // Refined flour, sugar, fat
    crackers: { caloriesPer100g: 400, proteinPer100g: 10, fatPer100g: 10, carbsPer100g: 60, sugarPer100g: 5, sodiumPer100g: 500, weightPerUnit: 10, bloatScale: 3 }, // Refined flour, sodium
    ricecrackers: { caloriesPer100g: 380, proteinPer100g: 7, fatPer100g: 2, carbsPer100g: 80, sugarPer100g: 2, sodiumPer100g: 400, weightPerUnit: 10, bloatScale: 3 }, // Can be high in sodium
    olives: { caloriesPer100g: 115, proteinPer100g: 0.8, fatPer100g: 11, carbsPer100g: 6, sugarPer100g: 0, sodiumPer100g: 1556, weightPerUnit: 5, bloatScale: 7 }, // Extremely high sodium
    pickles: { caloriesPer100g: 11, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 2.5, sugarPer100g: 1.2, sodiumPer100g: 1200, weightPerUnit: 10, bloatScale: 6 }, // Very high sodium
    sauerkraut: { caloriesPer100g: 19, proteinPer100g: 1, fatPer100g: 0.1, carbsPer100g: 4.3, sugarPer100g: 1.8, sodiumPer100g: 660, weightPer100g: 100, bloatScale: -2 }, // Fermented, good for gut health, but high sodium
    kimchi: { caloriesPer100g: 15, proteinPer100g: 1.1, fatPer100g: 0.5, carbsPer100g: 2.8, sugarPer100g: 1.5, sodiumPer100g: 670, weightPer100g: 100, bloatScale: -2 }, // Fermented, good for gut health, but high sodium
    vinegar: { caloriesPer100g: 18, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.9, sugarPer100g: 0, sodiumPer100g: 5, weightPerUnit: 15, bloatScale: -1 }, // Can aid digestion

    // Seafood
    trout: { caloriesPer100g: 119, proteinPer100g: 20, fatPer100g: 4, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 40, weightPerUnit: 150, bloatScale: 0 },
    haddock: { caloriesPer100g: 85, proteinPer100g: 18, fatPer100g: 0.7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 68, weightPerUnit: 150, bloatScale: 0 },
    halibut: { caloriesPer100g: 111, proteinPer100g: 22, fatPer100g: 2, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 66, weightPer100g: 150, bloatScale: 0 },
    oysters: { caloriesPer100g: 68, proteinPer100g: 7, fatPer100g: 2, carbsPer100g: 4, sugarPer100g: 0, sodiumPer100g: 90, weightPerUnit: 15, bloatScale: 1 },
    clams: { caloriesPer100g: 48, proteinPer100g: 8, fatPer100g: 0.5, carbsPer100g: 2, sugarPer100g: 0, sodiumPer100g: 300, weightPerUnit: 10, bloatScale: 1 },
    mussels: { caloriesPer100g: 86, proteinPer100g: 12, fatPer100g: 2, carbsPer100g: 3, sugarPer100g: 0, sodiumPer100g: 280, weightPerUnit: 10, bloatScale: 1 },

    // Nuts & Legume but more specific
    peanuts: { caloriesPer100g: 567, proteinPer100g: 26, fatPer100g: 49, carbsPer100g: 16, sugarPer100g: 4.7, sodiumPer100g: 18, weightPerUnit: 1, bloatScale: 1 }, // Lectins, FODMAPs for some
    soybeans: { caloriesPer100g: 173, proteinPer100g: 17, fatPer100g: 9, carbsPer100g: 10, sugarPer100g: 3, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 3 }, // Oligosaccharides
    blackeyedpeas: { caloriesPer100g: 116, proteinPer100g: 8, fatPer100g: 0.5, carbsPer100g: 21, sugarPer100g: 3, sodiumPer100g: 4, weightPerUnit: 100, bloatScale: 4 }, // High in fiber and oligosaccharides
    kidneybeans: { caloriesPer100g: 127, proteinPer100g: 9, fatPer100g: 0.5, carbsPer100g: 23, sugarPer100g: 0.3, sodiumPer100g: 2, weightPer100g: 100, bloatScale: 5 }, // High in fiber and oligosaccharides
    navybeans: { caloriesPer100g: 139, proteinPer100g: 9, fatPer100g: 0.6, carbsPer100g: 25, sugarPer100g: 0.3, sodiumPer100g: 2, weightPer100g: 100, bloatScale: 5 }, // High in fiber and oligosaccharides
    pintobeans: { caloriesPer100g: 143, proteinPer100g: 9, fatPer100g: 0.6, carbsPer100g: 26, sugarPer100g: 0.3, sodiumPer100g: 2, weightPer100g: 100, bloatScale: 5 }, // High in fiber and oligosaccharides
    limabeans: { caloriesPer100g: 115, proteinPer100g: 7, fatPer100g: 0.4, carbsPer100g: 21, sugarPer100g: 0.3, sodiumPer100g: 2, weightPer100g: 100, bloatScale: 4 }, // Can be gassy

    // Grains
    buckwheat: { caloriesPer100g: 343, proteinPer100g: 13, fatPer100g: 3.4, carbsPer100g: 72, sugarPer100g: 0, sodiumPer100g: 1, weightPerUnit: 100, bloatScale: 0 },
    millet: { caloriesPer100g: 378, proteinPer100g: 11, fatPer100g: 4.2, carbsPer100g: 73, sugarPer100g: 0, sodiumPer100g: 5, weightPerUnit: 100, bloatScale: 0 },
    sorghum: { caloriesPer100g: 329, proteinPer100g: 11, fatPer100g: 3.3, carbsPer100g: 72, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 0 },
    teff: { caloriesPer100g: 367, proteinPer100g: 13, fatPer100g: 2.4, carbsPer100g: 73, sugarPer100g: 0, sodiumPer100g: 12, weightPerUnit: 100, bloatScale: 0 },
    amarant: { caloriesPer100g: 371, proteinPer100g: 14, fatPer100g: 7, carbsPer100g: 65, sugarPer100g: 0, sodiumPer100g: 4, weightPerUnit: 100, bloatScale: 0 },
    cornmeal: { caloriesPer100g: 370, proteinPer100g: 8, fatPer100g: 4, carbsPer100g: 75, sugarPer100g: 0.6, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 1 },
    tapioca: { caloriesPer100g: 159, proteinPer100g: 0.2, fatPer100g: 0, carbsPer100g: 39, sugarPer100g: 3.4, sodiumPer100g: 1, weightPerUnit: 100, bloatScale: 0 },

    // Sauces/Condiments
    "soy sauce": { caloriesPer100g: 53, proteinPer100g: 8, fatPer100g: 0.1, carbsPer100g: 5, sugarPer100g: 2.7, sodiumPer100g: 5600, weightPerUnit: 15, bloatScale: 10 }, // Extremely high sodium
    fishsauce: { caloriesPer100g: 40, proteinPer100g: 9, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 7000, weightPerUnit: 15, bloatScale: 10 }, // Extremely high sodium
    hoisinsauce: { caloriesPer100g: 236, proteinPer100g: 2.5, fatPer100g: 1.5, carbsPer100g: 54, sugarPer100g: 48, sodiumPer100g: 2300, weightPerUnit: 15, bloatScale: 8 }, // High sodium, high sugar
    teriyakisauce: { caloriesPer100g: 110, proteinPer100g: 2, fatPer100g: 0, carbsPer100g: 25, sugarPer100g: 20, sodiumPer100g: 1500, weightPerUnit: 15, bloatScale: 7 }, // High sodium, high sugar
    sriracha: { caloriesPer100g: 97, proteinPer100g: 2.2, fatPer100g: 0.9, carbsPer100g: 20, sugarPer100g: 13, sodiumPer100g: 1300, weightPerUnit: 15, bloatScale: 3 }, // High sodium, can be spicy
    tabasco: { caloriesPer100g: 12, proteinPer100g: 0.7, fatPer100g: 0.3, carbsPer100g: 1.8, sugarPer100g: 0, sodiumPer100g: 780, weightPerUnit: 5, bloatScale: 2 }, // High sodium, spicy
    wasabi: { caloriesPer100g: 279, proteinPer100g: 11, fatPer100g: 11, carbsPer100g: 35, sugarPer100g: 15, sodiumPer100g: 1200, weightPerUnit: 5, bloatScale: 4 }, // High sodium, strong flavor
    vinegar: { caloriesPer100g: 18, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.9, sugarPer100g: 0, sodiumPer100g: 5, weightPerUnit: 15, bloatScale: -1 }, // Can aid digestion
    hotsauce: { caloriesPer100g: 20, proteinPer100g: 1, fatPer100g: 0.5, carbsPer100g: 3, sugarPer100g: 1.5, sodiumPer100g: 800, weightPer100g: 15, bloatScale: 3 }, // High sodium, spiciness can irritate some
    barbecuesauce: { caloriesPer100g: 130, proteinPer100g: 1, fatPer100g: 0.5, carbsPer100g: 30, sugarPer100g: 25, sodiumPer100g: 800, weightPerUnit: 15, bloatScale: 4 }, // High sugar, high sodium
    honey_mustard: { caloriesPer100g: 250, proteinPer100g: 2, fatPer100g: 18, carbsPer100g: 20, sugarPer100g: 18, sodiumPer100g: 600, weightPerUnit: 15, bloatScale: 3 }, // High sugar, high sodium
    ranchdressing: { caloriesPer100g: 470, proteinPer100g: 1, fatPer100g: 50, carbsPer100g: 5, sugarPer100g: 3, sodiumPer100g: 800, weightPerUnit: 15, bloatScale: 3 }, // High fat, high sodium, sometimes dairy
    caesardressing: { caloriesPer100g: 450, proteinPer100g: 2, fatPer100g: 48, carbsPer100g: 2, sugarPer100g: 1, sodiumPer100g: 700, weightPerUnit: 15, bloatScale: 2 }, // High fat, high sodium

    // Vegetables (more leafy greens & herbs)
    arugula: { caloriesPer100g: 25, proteinPer100g: 2.5, fatPer100g: 0.7, carbsPer100g: 3.6, sugarPer100g: 1.6, sodiumPer100g: 27, weightPerUnit: 10, bloatScale: 0 },
    romainelettuce: { caloriesPer100g: 17, proteinPer100g: 1.2, fatPer100g: 0.3, carbsPer100g: 3.3, sugarPer100g: 1.2, sodiumPer100g: 8, weightPerUnit: 30, bloatScale: -1 },
    iceberglettuce: { caloriesPer100g: 14, proteinPer100g: 0.9, fatPer100g: 0.1, carbsPer100g: 2.9, sugarPer100g: 1.4, sodiumPer100g: 10, weightPerUnit: 30, bloatScale: -1 },
    butterlettuce: { caloriesPer100g: 13, proteinPer100g: 1.4, fatPer100g: 0.2, carbsPer100g: 2.2, sugarPer100g: 0.5, sodiumPer100g: 5, weightPerUnit: 30, bloatScale: -1 },
    endive: { caloriesPer100g: 17, proteinPer100g: 1.2, fatPer100g: 0.2, carbsPer100g: 3.3, sugarPer100g: 0.7, sodiumPer100g: 22, weightPerUnit: 30, bloatScale: 0 },
    radicchio: { caloriesPer100g: 23, proteinPer100g: 1.4, fatPer100g: 0.2, carbsPer100g: 4.5, sugarPer100g: 0.6, sodiumPer100g: 22, weightPer100g: 30, bloatScale: 0 },
    watercress: { caloriesPer100g: 11, proteinPer100g: 2.3, fatPer100g: 0.1, carbsPer100g: 1.3, sugarPer100g: 0.2, sodiumPer100g: 41, weightPerUnit: 10, bloatScale: -2 },
    basil: { caloriesPer100g: 23, proteinPer100g: 3.2, fatPer100g: 0.6, carbsPer100g: 2.7, sugarPer100g: 0.3, sodiumPer100g: 4, weightPerUnit: 1, bloatScale: -1 },
    oregano: { caloriesPer100g: 265, proteinPer100g: 9, fatPer100g: 4, carbsPer100g: 68, sugarPer100g: 4.1, sodiumPer100g: 25, weightPerUnit: 1, bloatScale: -1 },
    thyme: { caloriesPer100g: 101, proteinPer100g: 5.6, fatPer100g: 1.7, carbsPer100g: 24, sugarPer100g: 1.7, sodiumPer100g: 9, weightPerUnit: 1, bloatScale: -1 },
    rosemary: { caloriesPer100g: 131, proteinPer100g: 3.3, fatPer100g: 6, carbsPer100g: 20, sugarPer100g: 0, sodiumPer100g: 26, weightPerUnit: 1, bloatScale: -1 },
    dill: { caloriesPer100g: 43, proteinPer100g: 3.5, fatPer100g: 1.1, carbsPer100g: 7, sugarPer100g: 0.9, sodiumPer100g: 20, weightPerUnit: 1, bloatScale: -1 },
    chives: { caloriesPer100g: 30, proteinPer100g: 3.3, fatPer100g: 0.7, carbsPer100g: 4.4, sugarPer100g: 1.9, sodiumPer100g: 3, weightPerUnit: 1, bloatScale: 0 },

    // Fruits (more tropical)
    passionfruit: { caloriesPer100g: 97, proteinPer100g: 2.2, fatPer100g: 0.7, carbsPer100g: 23, sugarPer100g: 11, sodiumPer100g: 28, weightPerUnit: 18, bloatScale: 1 },
    guava: { caloriesPer100g: 68, proteinPer100g: 2.6, fatPer100g: 1, carbsPer100g: 14, sugarPer100g: 9, sodiumPer100g: 2, weightPerUnit: 50, bloatScale: 1 },
    lychee: { caloriesPer100g: 66, proteinPer100g: 0.8, fatPer100g: 0.4, carbsPer100g: 17, sugarPer100g: 15, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: 0 },
    dragonfruit: { caloriesPer100g: 60, proteinPer100g: 1.2, fatPer100g: 0.6, carbsPer100g: 13, sugarPer100g: 8, sodiumPer100g: 9, weightPerUnit: 200, bloatScale: -1 },
    papaya: { caloriesPer100g: 43, proteinPer100g: 0.5, fatPer100g: 0.3, carbsPer100g: 11, sugarPer100g: 7.8, sodiumPer100g: 3, weightPerUnit: 200, bloatScale: -2 }, // Contains papain, aids digestion

    // Meats (deli & processed)
    ham: { caloriesPer100g: 145, proteinPer100g: 19, fatPer100g: 7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 1100, weightPerUnit: 50, bloatScale: 7 }, // Very high sodium
    salami: { caloriesPer100g: 320, proteinPer100g: 22, fatPer100g: 25, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 1400, weightPerUnit: 10, bloatScale: 8 }, // Very high sodium, high fat
    pepperoni: { caloriesPer100g: 494, proteinPer100g: 22, fatPer100g: 44, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 1600, weightPerUnit: 5, bloatScale: 9 }, // Extremely high sodium, very high fat
    bologna: { caloriesPer100g: 290, proteinPer100g: 11, fatPer100g: 26, carbsPer100g: 2, sugarPer100g: 0, sodiumPer100g: 1000, weightPerUnit: 50, bloatScale: 8 }, // High sodium, high fat, processed
    hotdogs: { caloriesPer100g: 290, proteinPer100g: 11, fatPer100g: 26, carbsPer100g: 1, sugarPer100g: 1, sodiumPer100g: 800, weightPerUnit: 50, bloatScale: 8 }, // Very high sodium, processed
    turkeybreastdeli: { caloriesPer100g: 100, proteinPer100g: 18, fatPer100g: 2.5, carbsPer100g: 2, sugarPer100g: 1, sodiumPer100g: 700, weightPerUnit: 50, bloatScale: 5 }, // High sodium

    // Alternative Proteins
    beyondburger: { caloriesPer100g: 250, proteinPer100g: 17, fatPer100g: 18, carbsPer100g: 3, sugarPer100g: 0, sodiumPer100g: 380, weightPerUnit: 113, bloatScale: 2 }, // Can contain ingredients that bloat some (e.g., pea protein)
    impossibleburger: { caloriesPer100g: 240, proteinPer100g: 15, fatPer100g: 14, carbsPer100g: 9, sugarPer100g: 1, sodiumPer100g: 370, weightPer100g: 113, bloatScale: 2 }, // Can contain ingredients that bloat some (e.g., soy protein)

    // Sweeteners (artificial)
    splenda: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 3 }, // Sucralose can affect gut bacteria
    aspartame: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 0.1, bloatScale: 3 }, // Can cause digestive issues in some
    xylitol: { caloriesPer100g: 240, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 6 }, // Sugar alcohol, strong laxative/bloating effect
    erythritol: { caloriesPer100g: 20, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 3 }, // Sugar alcohol, less severe than xylitol
    stevia: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 0.1, bloatScale: 1 }, // Generally well-tolerated, but some report issues

    // Miscellaneous
    ghee: { caloriesPer100g: 900, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 }, // Clarified butter, less lactose
    coconut_oil: { caloriesPer100g: 892, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 },
    olive_oil: { caloriesPer100g: 884, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 },
    applecidervinegar: { caloriesPer100g: 20, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.9, sugarPer100g: 0.4, sodiumPer100g: 5, weightPerUnit: 15, bloatScale: -4 }, // Aids digestion
    kombucha: { caloriesPer100g: 15, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 3, sugarPer100g: 2.5, sodiumPer100g: 5, weightPerUnit: 250, bloatScale: -3 }, // Probiotics, can cause mild gas initially for some
    nutritionalyeast: { caloriesPer100g: 370, proteinPer100g: 50, fatPer100g: 5, carbsPer100g: 30, sugarPer100g: 0, sodiumPer100g: 20, weightPerUnit: 5, bloatScale: 0 },
    spirulina: { caloriesPer100g: 290, proteinPer100g: 57, fatPer100g: 8, carbsPer100g: 24, sugarPer100g: 0, sodiumPer100g: 100, weightPerUnit: 5, bloatScale: 0 },
    chlorella: { caloriesPer100g: 400, proteinPer100g: 58, fatPer100g: 10, carbsPer100g: 10, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 5, bloatScale: 0 },
};
