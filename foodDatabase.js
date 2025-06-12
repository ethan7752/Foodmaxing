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
    grapefruit: { caloriesPer100g: 42, proteinPer100g: 0.8, fatPer100g: 0.1, carbsPer100g: 11, sugarPer100g: 7, sodiumPer100g: 0, weightPerUnit: 250, bloatScale: -1 },
    cantaloupe: { caloriesPer100g: 34, proteinPer100g: 0.8, fatPer100g: 0.2, carbsPer100g: 8, sugarPer100g: 7.9, sodiumPer100g: 16, weightPerUnit: 160, bloatScale: -2 },
    honeydew: { caloriesPer100g: 36, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 9, sugarPer100g: 8.1, sodiumPer100g: 18, weightPerUnit: 177, bloatScale: -2 },
    coconut: { caloriesPer100g: 354, proteinPer100g: 3.3, fatPer100g: 33, carbsPer100g: 15, sugarPer100g: 6.2, sodiumPer100g: 20, weightPerUnit: 80, bloatScale: 0 },
    dragonfruit: { caloriesPer100g: 60, proteinPer100g: 1.2, fatPer100g: 0.4, carbsPer100g: 13, sugarPer100g: 7.7, sodiumPer100g: 9, weightPerUnit: 200, bloatScale: 0 },
    passionfruit: { caloriesPer100g: 97, proteinPer100g: 2.2, fatPer100g: 0.7, carbsPer100g: 23, sugarPer100g: 11, sodiumPer100g: 28, weightPerUnit: 18, bloatScale: 1 },
    guava: { caloriesPer100g: 68, proteinPer100g: 2.6, fatPer100g: 1, carbsPer100g: 14, sugarPer100g: 9, sodiumPer100g: 9, weightPerUnit: 55, bloatScale: 0 },
    lychee: { caloriesPer100g: 66, proteinPer100g: 0.8, fatPer100g: 0.4, carbsPer100g: 17, sugarPer100g: 15, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: 0 },
    papaya: { caloriesPer100g: 43, proteinPer100g: 0.5, fatPer100g: 0.3, carbsPer100g: 11, sugarPer100g: 7.8, sodiumPer100g: 3, weightPerUnit: 157, bloatScale: -2 }, // Contains papain, digestive aid

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
    beetroot: { caloriesPer100g: 43, proteinPer100g: 1.6, fatPer100g: 0.2, carbsPer100g: 10, sugarPer100g: 6.8, sodiumPer100g: 78, weightPerUnit: 82, bloatScale: 1 },
    okra: { caloriesPer100g: 33, proteinPer100g: 1.9, fatPer100g: 0.2, carbsPer100g: 7, sugarPer100g: 1.2, sodiumPer100g: 7, weightPerUnit: 100, bloatScale: 0 },
    greenbeans: { caloriesPer100g: 31, proteinPer100g: 1.8, fatPer100g: 0.2, carbsPer100g: 7, sugarPer100g: 3.3, sodiumPer100g: 6, weightPerUnit: 110, bloatScale: 1 },
    snap_peas: { caloriesPer100g: 42, proteinPer100g: 2.8, fatPer100g: 0.2, carbsPer100g: 7, sugarPer100g: 4.6, sodiumPer100g: 35, weightPerUnit: 100, bloatScale: 1 },
    watercress: { caloriesPer100g: 11, proteinPer100g: 2.3, fatPer100g: 0.1, carbsPer100g: 1.3, sugarPer100g: 0.2, sodiumPer100g: 41, weightPerUnit: 34, bloatScale: -2 },
    endive: { caloriesPer100g: 17, proteinPer100g: 1.2, fatPer100g: 0.2, carbsPer100g: 3.4, sugarPer100g: 0.2, sodiumPer100g: 10, weightPerUnit: 50, bloatScale: -1 },
    romaine_lettuce: { caloriesPer100g: 17, proteinPer100g: 1.2, fatPer100g: 0.3, carbsPer100g: 3.3, sugarPer100g: 1.2, sodiumPer100g: 8, weightPerUnit: 47, bloatScale: -1 },
    iceberg_lettuce: { caloriesPer100g: 14, proteinPer100g: 0.9, fatPer100g: 0.1, carbsPer100g: 2.9, sugarPer100g: 1.4, sodiumPer100g: 10, weightPerUnit: 72, bloatScale: -1 },
    arugula: { caloriesPer100g: 25, proteinPer100g: 2.6, fatPer100g: 0.7, carbsPer100g: 3.7, sugarPer100g: 1.6, sodiumPer100g: 27, weightPerUnit: 10, bloatScale: -1 },
    collard_greens: { caloriesPer100g: 32, proteinPer100g: 3, fatPer100g: 0.6, carbsPer100g: 7, sugarPer100g: 1.3, sodiumPer100g: 24, weightPerUnit: 36, bloatScale: 1 },
    turnip_greens: { caloriesPer100g: 32, proteinPer100g: 1.5, fatPer100g: 0.3, carbsPer100g: 7, sugarPer100g: 0.4, sodiumPer100g: 29, weightPerUnit: 55, bloatScale: 1 },
    mustard_greens: { caloriesPer100g: 27, proteinPer100g: 2.7, fatPer100g: 0.4, carbsPer100g: 4.7, sugarPer100g: 1.3, sodiumPer100g: 21, weightPerUnit: 56, bloatScale: 1 },
    bokchoy: { caloriesPer100g: 13, proteinPer100g: 1.5, fatPer100g: 0.2, carbsPer100g: 2.2, sugarPer100g: 1.2, sodiumPer100g: 65, weightPerUnit: 70, bloatScale: -1 },
    kohlrabi: { caloriesPer100g: 27, proteinPer100g: 1.7, fatPer100g: 0.1, carbsPer100g: 6.2, sugarPer100g: 2.6, sodiumPer100g: 20, weightPerUnit: 100, bloatScale: 1 },
    rutabaga: { caloriesPer100g: 38, proteinPer100g: 1.2, fatPer100g: 0.2, carbsPer100g: 8.6, sugarPer100g: 4.9, sodiumPer100g: 10, weightPerUnit: 150, bloatScale: 1 },
    parsnip: { caloriesPer100g: 75, proteinPer100g: 1.2, fatPer100g: 0.3, carbsPer100g: 18, sugarPer100g: 4.8, sodiumPer100g: 10, weightPerUnit: 120, bloatScale: 1 },
    celeriac: { caloriesPer100g: 42, proteinPer100g: 1.5, fatPer100g: 0.3, carbsPer100g: 9.2, sugarPer100g: 1.6, sodiumPer100g: 43, weightPerUnit: 100, bloatScale: 1 },
    acorn_squash: { caloriesPer100g: 40, proteinPer100g: 1.5, fatPer100g: 0.1, carbsPer100g: 10, sugarPer100g: 2.3, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 0 },
    butternut_squash: { caloriesPer100g: 45, proteinPer100g: 1.2, fatPer100g: 0.1, carbsPer100g: 12, sugarPer100g: 2.2, sodiumPer100g: 4, weightPerUnit: 100, bloatScale: 0 },
    spaghetti_squash: { caloriesPer100g: 31, proteinPer100g: 0.6, fatPer100g: 0.7, carbsPer100g: 7, sugarPer100g: 2.7, sodiumPer100g: 15, weightPerUnit: 100, bloatScale: 0 },
    delicata_squash: { caloriesPer100g: 36, proteinPer100g: 1.2, fatPer100g: 0.1, carbsPer100g: 9, sugarPer100g: 2, sodiumPer100g: 3, weightPerUnit: 100, bloatScale: 0 },
    cremini_mushroom: { caloriesPer100g: 26, proteinPer100g: 2.5, fatPer100g: 0.4, carbsPer100g: 4.7, sugarPer100g: 2.3, sodiumPer100g: 9, weightPerUnit: 15, bloatScale: 2 }, // Can be high in FODMAPs
    shiitake_mushroom: { caloriesPer100g: 34, proteinPer100g: 2.2, fatPer100g: 0.5, carbsPer100g: 6.8, sugarPer100g: 2.4, sodiumPer100g: 9, weightPerUnit: 15, bloatScale: 2 }, // Can be high in FODMAPs
    portobello_mushroom: { caloriesPer100g: 22, proteinPer100g: 2.1, fatPer100g: 0.3, carbsPer100g: 4.1, sugarPer100g: 2.1, sodiumPer100g: 4, weightPerUnit: 100, bloatScale: 2 }, // Can be high in FODMAPs
    oyster_mushroom: { caloriesPer100g: 33, proteinPer100g: 3.3, fatPer100g: 0.4, carbsPer100g: 6.1, sugarPer100g: 1.1, sodiumPer100g: 15, weightPerUnit: 15, bloatScale: 1 },
    enoki_mushroom: { caloriesPer100g: 37, proteinPer100g: 2.7, fatPer100g: 0.3, carbsPer100g: 7.8, sugarPer100g: 0.2, sodiumPer100g: 3, weightPerUnit: 10, bloatScale: 1 },

    // Proteins
    chickenbreast: { caloriesPer100g: 165, proteinPer100g: 31, fatPer100g: 3.6, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 74, weightPerUnit: 150, bloatScale: 0 },
    chicken_thigh: { caloriesPer100g: 209, proteinPer100g: 26, fatPer100g: 11, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 89, weightPerUnit: 120, bloatScale: 0 },
    chicken_drumstick: { caloriesPer100g: 172, proteinPer100g: 23, fatPer100g: 8.5, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 79, weightPerUnit: 100, bloatScale: 0 },
    chicken_wing: { caloriesPer100g: 203, proteinPer100g: 30, fatPer100g: 8.1, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 83, weightPerUnit: 30, bloatScale: 0 },
    salmon: { caloriesPer100g: 206, proteinPer100g: 22, fatPer100g: 12, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 59, weightPerUnit: 154, bloatScale: 0 },
    egg: { caloriesPer100g: 155, proteinPer100g: 13, fatPer100g: 11, carbsPer100g: 1.1, sugarPer100g: 1.1, sodiumPer100g: 124, weightPerUnit: 50, bloatScale: 0 },
    turkey: { caloriesPer100g: 135, proteinPer100g: 29, fatPer100g: 1, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 65, weightPerUnit: 150, bloatScale: 0 },
    tuna: { caloriesPer100g: 132, proteinPer100g: 28, fatPer100g: 1, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 400, weightPerUnit: 140, bloatScale: 2 }, // Canned in water, higher sodium can contribute
    tuna_canned_in_oil: { caloriesPer100g: 198, proteinPer100g: 25, fatPer100g: 10, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 350, weightPerUnit: 140, bloatScale: 1 },
    cod: { caloriesPer100g: 82, proteinPer100g: 18, fatPer100g: 0.7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 54, weightPerUnit: 140, bloatScale: 0 },
    shrimp: { caloriesPer100g: 99, proteinPer100g: 24, fatPer100g: 0.3, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 146, weightPerUnit: 12, bloatScale: 1 },
    groundbeef: { caloriesPer100g: 250, proteinPer100g: 26, fatPer100g: 15, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 72, weightPerUnit: 100, bloatScale: 0 },
    groundbeef_lean: { caloriesPer100g: 160, proteinPer100g: 20, fatPer100g: 8, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 100, bloatScale: 0 },
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
    beef_sirloin: { caloriesPer100g: 198, proteinPer100g: 29, fatPer100g: 8, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 75, weightPerUnit: 150, bloatScale: 0 },
    beef_ribeye: { caloriesPer100g: 291, proteinPer100g: 29, fatPer100g: 19, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 150, bloatScale: 0 },
    beef_tenderloin: { caloriesPer100g: 200, proteinPer100g: 30, fatPer100g: 8, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 65, weightPerUnit: 150, bloatScale: 0 },
    pork_loin: { caloriesPer100g: 150, proteinPer100g: 27, fatPer100g: 4, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 60, weightPerUnit: 150, bloatScale: 0 },
    pork_tenderloin: { caloriesPer100g: 143, proteinPer100g: 26, fatPer100g: 3.5, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 55, weightPerUnit: 150, bloatScale: 0 },
    lamb_shank: { caloriesPer100g: 250, proteinPer100g: 28, fatPer100g: 15, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 80, weightPerUnit: 200, bloatScale: 0 },
    duck_breast: { caloriesPer100g: 201, proteinPer100g: 24, fatPer100g: 11, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 65, weightPerUnit: 150, bloatScale: 1 },
    bison_steak: { caloriesPer100g: 143, proteinPer100g: 29, fatPer100g: 2, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 65, weightPerUnit: 150, bloatScale: 0 },
    venison: { caloriesPer100g: 158, proteinPer100g: 30, fatPer100g: 3, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 150, bloatScale: 0 },
    halibut: { caloriesPer100g: 111, proteinPer100g: 23, fatPer100g: 1.6, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 140, bloatScale: 0 },
    trout: { caloriesPer100g: 119, proteinPer100g: 20, fatPer100g: 4, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 140, bloatScale: 0 },
    tilapia: { caloriesPer100g: 96, proteinPer100g: 20, fatPer100g: 1.7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 56, weightPerUnit: 140, bloatScale: 0 },
    oysters: { caloriesPer100g: 68, proteinPer100g: 7, fatPer100g: 2, carbsPer100g: 4, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 50, bloatScale: 1 },
    mussels: { caloriesPer100g: 86, proteinPer100g: 12, fatPer100g: 2.2, carbsPer100g: 3.7, sugarPer100g: 0, sodiumPer100g: 298, weightPerUnit: 50, bloatScale: 1 },
    clams: { caloriesPer100g: 74, proteinPer100g: 13, fatPer100g: 1, carbsPer100g: 3.4, sugarPer100g: 0, sodiumPer100g: 300, weightPerUnit: 50, bloatScale: 1 },
    octopus: { caloriesPer100g: 82, proteinPer100g: 15, fatPer100g: 1, carbsPer100g: 2.2, sugarPer100g: 0, sodiumPer100g: 230, weightPerUnit: 100, bloatScale: 0 },
    squid: { caloriesPer100g: 92, proteinPer100g: 16, fatPer100g: 1.4, carbsPer100g: 3.1, sugarPer100g: 0, sodiumPer100g: 200, weightPerUnit: 100, bloatScale: 0 },
    crab: { caloriesPer100g: 83, proteinPer100g: 18, fatPer100g: 0.6, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 350, weightPerUnit: 100, bloatScale: 0 },
    lobster: { caloriesPer100g: 89, proteinPer100g: 19, fatPer100g: 0.9, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 300, weightPerUnit: 100, bloatScale: 0 },
    duck_meat: { caloriesPer100g: 337, proteinPer100g: 19, fatPer100g: 28, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 65, weightPerUnit: 100, bloatScale: 0 },
    goose_meat: { caloriesPer100g: 371, proteinPer100g: 22, fatPer100g: 30, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 100, bloatScale: 0 },
    venison_loin: { caloriesPer100g: 110, proteinPer100g: 22, fatPer100g: 2, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 150, bloatScale: 0 },
    elk_steak: { caloriesPer100g: 110, proteinPer100g: 22, fatPer100g: 2.5, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 150, bloatScale: 0 },
    bison_ground: { caloriesPer100g: 146, proteinPer100g: 20, fatPer100g: 7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 100, bloatScale: 0 },
    ostrich_steak: { caloriesPer100g: 118, proteinPer100g: 22, fatPer100g: 3, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 150, bloatScale: 0 },
    quail: { caloriesPer100g: 134, proteinPer100g: 21, fatPer100g: 5.5, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 60, weightPerUnit: 100, bloatScale: 0 },
    rabbit: { caloriesPer100g: 173, proteinPer100g: 33, fatPer100g: 3.5, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 70, weightPerUnit: 100, bloatScale: 0 },

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
    brown_rice: { caloriesPer100g: 123, proteinPer100g: 2.7, fatPer100g: 1, carbsPer100g: 26, sugarPer100g: 0.2, sodiumPer100g: 5, weightPerUnit: 100, bloatScale: 0 },
    wild_rice: { caloriesPer100g: 101, proteinPer100g: 4, fatPer100g: 0.3, carbsPer100g: 21, sugarPer100g: 0.7, sodiumPer100g: 3, weightPerUnit: 100, bloatScale: 0 },
    basmati_rice: { caloriesPer100g: 120, proteinPer100g: 3, fatPer100g: 0.3, carbsPer100g: 26, sugarPer100g: 0.1, sodiumPer100g: 1, weightPerUnit: 100, bloatScale: 0 },
    jasmine_rice: { caloriesPer100g: 130, proteinPer100g: 2.7, fatPer100g: 0.3, carbsPer100g: 28, sugarPer100g: 0.1, sodiumPer100g: 1, weightPerUnit: 100, bloatScale: 0 },
    oatmeal_instant: { caloriesPer100g: 370, proteinPer100g: 13, fatPer100g: 6, carbsPer100g: 65, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 40, bloatScale: 1 },
    sourdough_bread: { caloriesPer100g: 260, proteinPer100g: 10, fatPer100g: 1, carbsPer100g: 54, sugarPer100g: 3, sodiumPer100g: 450, weightPerUnit: 30, bloatScale: -1 }, // Fermented, may be easier to digest
    gluten_free_bread: { caloriesPer100g: 280, proteinPer100g: 5, fatPer100g: 5, carbsPer100g: 55, sugarPer100g: 6, sodiumPer100g: 400, weightPerUnit: 30, bloatScale: 1 },
    rice_noodles: { caloriesPer100g: 109, proteinPer100g: 2.3, fatPer100g: 0.2, carbsPer100g: 24, sugarPer100g: 0.1, sodiumPer100g: 4, weightPerUnit: 80, bloatScale: 0 },
    soba_noodles: { caloriesPer100g: 130, proteinPer100g: 5.5, fatPer100g: 0.5, carbsPer100g: 26, sugarPer100g: 0.2, sodiumPer100g: 10, weightPerUnit: 80, bloatScale: 0 },
    ramen_noodles: { caloriesPer100g: 140, proteinPer100g: 4, fatPer100g: 5, carbsPer100g: 20, sugarPer100g: 0.5, sodiumPer100g: 350, weightPerUnit: 85, bloatScale: 3 }, // High sodium, processed
    corn_tortilla: { caloriesPer100g: 218, proteinPer100g: 5.8, fatPer100g: 2.2, carbsPer100g: 46, sugarPer100g: 0.7, sodiumPer100g: 18, weightPerUnit: 30, bloatScale: 1 },
    flour_tortilla: { caloriesPer100g: 310, proteinPer100g: 8, fatPer100g: 8, carbsPer100g: 50, sugarPer100g: 1.5, sodiumPer100g: 500, weightPerUnit: 40, bloatScale: 3 },
    chickpea_pasta: { caloriesPer100g: 350, proteinPer100g: 20, fatPer100g: 6, carbsPer100g: 58, sugarPer100g: 2, sodiumPer100g: 10, weightPerUnit: 80, bloatScale: 2 }, // Higher fiber and protein

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
    peanuts: { caloriesPer100g: 567, proteinPer100g: 26, fatPer100g: 49, carbsPer100g: 16, sugarPer100g: 4.7, sodiumPer100g: 18, weightPerUnit: 1, bloatScale: 1 },
    sesame_seeds: { caloriesPer100g: 573, proteinPer100g: 17, fatPer100g: 50, carbsPer100g: 23, sugarPer100g: 0.3, sodiumPer100g: 11, weightPerUnit: 5, bloatScale: 0 },
    pine_nuts: { caloriesPer100g: 673, proteinPer100g: 14, fatPer100g: 68, carbsPer100g: 13, sugarPer100g: 3.6, sodiumPer100g: 2, weightPerUnit: 5, bloatScale: 0 },
    hemp_seeds: { caloriesPer100g: 567, proteinPer100g: 30, fatPer100g: 48, carbsPer100g: 9, sugarPer100g: 1.5, sodiumPer100g: 5, weightPerUnit: 10, bloatScale: 0 },
    chia_seed_pudding: { caloriesPer100g: 150, proteinPer100g: 4, fatPer100g: 9, carbsPer100g: 15, sugarPer100g: 5, sodiumPer100g: 20, weightPerUnit: 100, bloatScale: 0 },

    // Dairy & Fats
    cheese: { caloriesPer100g: 402, proteinPer100g: 25, fatPer100g: 33, carbsPer100g: 1.3, sugarPer100g: 0.5, sodiumPer100g: 621, weightPerUnit: 30, bloatScale: 4 }, // Lactose, high sodium
    yogurt: { caloriesPer100g: 59, proteinPer100g: 10, fatPer100g: 0.4, carbsPer100g: 3.6, sugarPer100g: 3.6, sodiumPer100g: 46, weightPerUnit: 100, bloatScale: 3 }, // Lactose
    milk: { caloriesPer100g: 42, proteinPer100g: 3.4, fatPer100g: 1, carbsPer100g: 5, sugarPer100g: 5, sodiumPer100g: 43, weightPerUnit: 244, bloatScale: 4 }, // Lactose
    butter: { caloriesPer100g: 717, proteinPer100g: 0.9, fatPer100g: 81, carbsPer100g: 0.1, sugarPer100g: 0.1, sodiumPer100g: 643, weightPerUnit: 14, bloatScale: 0 },
    cremefraiche: { caloriesPer100g: 390, proteinPer100g: 2.2, fatPer100g: 42, carbsPer100g: 2.2, sugarPer100g: 2.2, sodiumPer100g: 15, weightPerUnit: 15, bloatScale: 2 },
    sourcream: { caloriesPer100g: 198, proteinPer100g: 2.6, fatPer100g: 19, carbsPer100g: 3.9, sugarPer100g: 2.8, sodiumPer100g: 35, weightPerUnit: 15, bloatScale: 3 },
    creamcheese: { caloriesPer100g: 342, proteinPer100g: 6, fatPer100g: 34, carbsPer100g: 4, sugarPer100g: 3.2, sodiumPer100g: 317, weightPerUnit: 30, bloatScale: 1 },
    cheddar_cheese: { caloriesPer100g: 404, proteinPer100g: 25, fatPer100g: 33, carbsPer100g: 1.3, sugarPer100g: 0.5, sodiumPer100g: 621, weightPerUnit: 30, bloatScale: 1 },
    mozzarella_cheese: { caloriesPer100g: 300, proteinPer100g: 22, fatPer100g: 22, carbsPer100g: 2.2, sugarPer100g: 1, sodiumPer100g: 500, weightPerUnit: 30, bloatScale: 0 },
    parmesan_cheese: { caloriesPer100g: 431, proteinPer100g: 38, fatPer100g: 29, carbsPer100g: 3.2, sugarPer100g: 0, sodiumPer100g: 1600, weightPerUnit: 10, bloatScale: 0 }, // Low lactose
    ghee: { caloriesPer100g: 899, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: -1 }, // Clarified butter, low lactose
    tallow: { caloriesPer100g: 900, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 }, // Rendered beef fat
    lard: { caloriesPer100g: 900, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 }, // Rendered pork fat
    coconut_oil: { caloriesPer100g: 892, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 },
    olive_oil: { caloriesPer100g: 884, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 },
    avocado_oil: { caloriesPer100g: 884, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 14, bloatScale: 0 },
    mayonnaise: { caloriesPer100g: 680, proteinPer100g: 0.8, fatPer100g: 75, carbsPer100g: 2.4, sugarPer100g: 2.2, sodiumPer100g: 560, weightPerUnit: 15, bloatScale: 1 },
    yogurt_greek: { caloriesPer100g: 96, proteinPer100g: 17, fatPer100g: 0.4, carbsPer100g: 7, sugarPer100g: 7, sodiumPer100g: 68, weightPerUnit: 100, bloatScale: 2 }, // Higher protein, less lactose
    kefir: { caloriesPer100g: 60, proteinPer100g: 3.8, fatPer100g: 3.5, carbsPer100g: 5, sugarPer100g: 5, sodiumPer100g: 50, weightPerUnit: 240, bloatScale: -2 }, // Fermented, good for gut health
    buttermilk: { caloriesPer100g: 40, proteinPer100g: 3.3, fatPer100g: 0.9, carbsPer100g: 4.8, sugarPer100g: 4.8, sodiumPer100g: 105, weightPerUnit: 240, bloatScale: 3 }, // Lactose
    cream: { caloriesPer100g: 340, proteinPer100g: 2, fatPer100g: 35, carbsPer100g: 4, sugarPer100g: 3, sodiumPer100g: 35, weightPerUnit: 15, bloatScale: 2 },

    // Beverages
    water: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -5 }, // Hydrating
    coffee: { caloriesPer100g: 1, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 240, bloatScale: 1 }, // Can be acidic
    tea: { caloriesPer100g: 1, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0.3, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 240, bloatScale: 0 },
    greensmoothie: { caloriesPer100g: 40, proteinPer100g: 2, fatPer100g: 0.5, carbsPer100g: 8, sugarPer100g: 4, sodiumPer100g: 20, weightPerUnit: 240, bloatScale: -2 }, // Depends on ingredients
    orangejuice: { caloriesPer100g: 45, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 10, sugarPer100g: 8.3, sodiumPer100g: 1, weightPerUnit: 248, bloatScale: 1 }, // High in sugar
    applejuice: { caloriesPer100g: 46, proteinPer100g: 0.1, fatPer100g: 0.1, carbsPer100g: 11, sugarPer100g: 9.6, sodiumPer100g: 2, weightPerUnit: 248, bloatScale: 1 }, // High in sugar
    cola_regular: { caloriesPer100g: 41, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 10.4, sugarPer100g: 10.4, sodiumPer100g: 4, weightPerUnit: 330, bloatScale: 4 }, // High sugar, carbonation
    cola_sugarfree: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 11, weightPerUnit: 330, bloatScale: 2 }, // Artificial sweeteners can cause bloating in some
    lemon_lime_soda_regular: { caloriesPer100g: 38, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 9.6, sugarPer100g: 9.6, sodiumPer100g: 10, weightPerUnit: 330, bloatScale: 4 },
    lemon_lime_soda_sugarfree: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 15, weightPerUnit: 330, bloatScale: 2 },
    iced_tea_unsweetened: { caloriesPer100g: 1, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0.3, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 240, bloatScale: 0 },
    iced_tea_sweetened: { caloriesPer100g: 30, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 8, sugarPer100g: 8, sodiumPer100g: 5, weightPerUnit: 240, bloatScale: 1 },
    energy_drink_regular: { caloriesPer100g: 45, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 11, sugarPer100g: 11, sodiumPer100g: 30, weightPerUnit: 250, bloatScale: 3 }, // High sugar, caffeine, artificial ingredients
    energy_drink_sugarfree: { caloriesPer100g: 5, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 1, sugarPer100g: 0, sodiumPer100g: 150, weightPerUnit: 250, bloatScale: 2 }, // Artificial sweeteners
    sports_drink_regular: { caloriesPer100g: 24, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 6, sugarPer100g: 6, sodiumPer100g: 45, weightPerUnit: 500, bloatScale: 1 },
    sports_drink_sugarfree: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 45, weightPerUnit: 500, bloatScale: 0 },
    protein_shake_ready_to_drink: { caloriesPer100g: 60, proteinPer100g: 10, fatPer100g: 1, carbsPer100g: 3, sugarPer100g: 2, sodiumPer100g: 50, weightPerUnit: 330, bloatScale: 1 },
    almond_milk_unsweetened: { caloriesPer100g: 15, proteinPer100g: 0.6, fatPer100g: 1.2, carbsPer100g: 0.3, sugarPer100g: 0, sodiumPer100g: 150, weightPerUnit: 240, bloatScale: 0 },
    soy_milk_unsweetened: { caloriesPer100g: 43, proteinPer100g: 3.3, fatPer100g: 1.8, carbsPer100g: 2.7, sugarPer100g: 0.4, sodiumPer100g: 50, weightPerUnit: 240, bloatScale: 1 },
    oat_milk_unsweetened: { caloriesPer100g: 47, proteinPer100g: 1, fatPer100g: 1.5, carbsPer100g: 8, sugarPer100g: 0, sodiumPer100g: 40, weightPerUnit: 240, bloatScale: 1 }, // Can be bloating for some due to oats
    coconut_milk_beverage: { caloriesPer100g: 20, proteinPer100g: 0.2, fatPer100g: 1.5, carbsPer100g: 1.5, sugarPer100g: 0, sodiumPer100g: 10, weightPerUnit: 240, bloatScale: 0 },
    rice_milk_unsweetened: { caloriesPer100g: 47, proteinPer100g: 0.3, fatPer100g: 1, carbsPer100g: 9, sugarPer100g: 0, sodiumPer100g: 40, weightPerUnit: 240, bloatScale: 0 },
    green_tea: { caloriesPer100g: 1, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0.3, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 240, bloatScale: -1 }, // Antioxidants
    black_tea: { caloriesPer100g: 1, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0.3, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 240, bloatScale: 0 },
    herbal_tea_peppermint: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -3 }, // Digestive aid
    herbal_tea_chamomile: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -2 }, // Calming
    seltzer_water: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 10, weightPerUnit: 240, bloatScale: 1 }, // Carbonation can cause mild bloating

    // Sweets & Sugars
    honey: { caloriesPer100g: 304, proteinPer100g: 0.3, fatPer100g: 0, carbsPer100g: 82, sugarPer100g: 82, sodiumPer100g: 4, weightPerUnit: 21, bloatScale: 1 }, // High sugar
    raw_honey: { caloriesPer100g: 304, proteinPer100g: 0.3, fatPer100g: 0, carbsPer100g: 82, sugarPer100g: 82, sodiumPer100g: 4, weightPerUnit: 21, bloatScale: 0 }, // Contains enzymes, might be less bloating for some
    maple_syrup: { caloriesPer100g: 260, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 67, sugarPer100g: 60, sodiumPer100g: 5, weightPerUnit: 20, bloatScale: 1 },
    agave_nectar: { caloriesPer100g: 310, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 76, sugarPer100g: 68, sodiumPer100g: 2, weightPerUnit: 20, bloatScale: 2 }, // High fructose
    white_sugar: { caloriesPer100g: 387, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 100, sodiumPer100g: 0, weightPerUnit: 12, bloatScale: 2 },
    brown_sugar: { caloriesPer100g: 380, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 98, sugarPer100g: 97, sodiumPer100g: 28, weightPerUnit: 12, bloatScale: 2 },
    powdered_sugar: { caloriesPer100g: 389, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 100, sugarPer100g: 98, sodiumPer100g: 0, weightPerUnit: 12, bloatScale: 2 },
    chocolate_dark: { caloriesPer100g: 546, proteinPer100g: 7.8, fatPer100g: 38, carbsPer100g: 49, sugarPer100g: 24, sodiumPer100g: 24, weightPerUnit: 20, bloatScale: 0 },
    chocolate_milk: { caloriesPer100g: 535, proteinPer100g: 6, fatPer100g: 30, carbsPer100g: 60, sugarPer100g: 50, sodiumPer100g: 80, weightPerUnit: 20, bloatScale: 2 },
    gummy_bears: { caloriesPer100g: 340, proteinPer100g: 6, fatPer100g: 0, carbsPer100g: 79, sugarPer100g: 59, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 3 }, // High sugar, can cause gas
    marshmallows: { caloriesPer100g: 318, proteinPer100g: 2.1, fatPer100g: 0.2, carbsPer100g: 78, sugarPer100g: 58, sodiumPer100g: 40, weightPerUnit: 7, bloatScale: 2 },
    jelly_beans: { caloriesPer100g: 370, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 92, sugarPer100g: 76, sodiumPer100g: 10, weightPerUnit: 5, bloatScale: 3 },

    // Oils & Sauces
    soy_sauce: { caloriesPer100g: 53, proteinPer100g: 8, fatPer100g: 0, carbsPer100g: 5, sugarPer100g: 2, sodiumPer100g: 5600, weightPerUnit: 15, bloatScale: 3 }, // Very high sodium
    ketchup: { caloriesPer100g: 112, proteinPer100g: 1.2, fatPer100g: 0.1, carbsPer100g: 28, sugarPer100g: 22, sodiumPer100g: 1110, weightPerUnit: 15, bloatScale: 1 },
    mustard: { caloriesPer100g: 66, proteinPer100g: 4.7, fatPer100g: 3.5, carbsPer100g: 5.5, sugarPer100g: 1.9, sodiumPer100g: 1120, weightPerUnit: 15, bloatScale: 1 },
    hot_sauce: { caloriesPer100g: 23, proteinPer100g: 1, fatPer100g: 0.3, carbsPer100g: 5, sugarPer100g: 1.5, sodiumPer100g: 800, weightPerUnit: 5, bloatScale: 0 },
    sriracha: { caloriesPer100g: 97, proteinPer100g: 1.7, fatPer100g: 1, carbsPer100g: 20, sugarPer100g: 16, sodiumPer100g: 2200, weightPerUnit: 15, bloatScale: 1 },
    teriyaki_sauce: { caloriesPer100g: 97, proteinPer100g: 3, fatPer100g: 0.1, carbsPer100g: 21, sugarPer100g: 17, sodiumPer100g: 1600, weightPerUnit: 15, bloatScale: 2 },
    barbecue_sauce: { caloriesPer100g: 130, proteinPer100g: 0.8, fatPer100g: 0.4, carbsPer100g: 31, sugarPer100g: 26, sodiumPer100g: 800, weightPerUnit: 15, bloatScale: 2 },
    ranch_dressing: { caloriesPer100g: 400, proteinPer100g: 1.5, fatPer100g: 40, carbsPer100g: 7, sugarPer100g: 3, sodiumPer100g: 800, weightPerUnit: 15, bloatScale: 1 },
    vinaigrette_dressing: { caloriesPer100g: 250, proteinPer100g: 0.5, fatPer100g: 25, carbsPer100g: 7, sugarPer100g: 5, sodiumPer100g: 300, weightPerUnit: 15, bloatScale: 0 },

    // Fast Food - McDonald's (approximate values, can vary)
    big_mac: { caloriesPer100g: 257, proteinPer100g: 12.8, fatPer100g: 15.6, carbsPer100g: 17.5, sugarPer100g: 3.5, sodiumPer100g: 400, weightPerUnit: 215, bloatScale: 5 }, // High fat, high sodium, processed carbs
    big_mac_meal_medium: { caloriesPer100g: 240, proteinPer100g: 9.5, fatPer100g: 12, carbsPer100g: 22, sugarPer100g: 8, sodiumPer100g: 300, weightPerUnit: 800, bloatScale: 6 }, // Includes fries and soda
    big_mac_meal_large: { caloriesPer100g: 250, proteinPer100g: 9.8, fatPer100g: 13, carbsPer100g: 24, sugarPer100g: 9, sodiumPer100g: 320, weightPerUnit: 1000, bloatScale: 7 },
    mcdonalds_fries_small: { caloriesPer100g: 312, proteinPer100g: 3.4, fatPer100g: 15, carbsPer100g: 41, sugarPer100g: 0, sodiumPer100g: 210, weightPerUnit: 71, bloatScale: 3 }, // Fried, high sodium
    mcdonalds_fries_medium: { caloriesPer100g: 312, proteinPer100g: 3.4, fatPer100g: 15, carbsPer100g: 41, sugarPer100g: 0, sodiumPer100g: 210, weightPerUnit: 114, bloatScale: 4 },
    mcdonalds_fries_large: { caloriesPer100g: 312, proteinPer100g: 3.4, fatPer100g: 15, carbsPer100g: 41, sugarPer100g: 0, sodiumPer100g: 210, weightPerUnit: 150, bloatScale: 5 },
    mcdonalds_cheeseburger: { caloriesPer100g: 263, proteinPer100g: 14, fatPer100g: 13, carbsPer100g: 20, sugarPer100g: 4.8, sodiumPer100g: 480, weightPerUnit: 113, bloatScale: 4 },
    mcdonalds_mcchicken: { caloriesPer100g: 220, proteinPer100g: 11, fatPer100g: 10, carbsPer100g: 20, sugarPer100g: 3.8, sodiumPer100g: 400, weightPerUnit: 147, bloatScale: 4 },
    mcdonalds_chicken_nuggets_6pc: { caloriesPer100g: 290, proteinPer100g: 18, fatPer100g: 18, carbsPer100g: 15, sugarPer100g: 0.5, sodiumPer100g: 500, weightPerUnit: 100, bloatScale: 3 },
    mcdonalds_coke_small: { caloriesPer100g: 41, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 10.4, sugarPer100g: 10.4, sodiumPer100g: 4, weightPerUnit: 210, bloatScale: 2 },
    mcdonalds_coke_medium: { caloriesPer100g: 41, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 10.4, sugarPer100g: 10.4, sodiumPer100g: 4, weightPerUnit: 310, bloatScale: 3 },
    mcdonalds_coke_large: { caloriesPer100g: 41, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 10.4, sugarPer100g: 10.4, sodiumPer100g: 4, weightPerUnit: 420, bloatScale: 4 },
    mcdonalds_diet_coke_small: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 11, weightPerUnit: 210, bloatScale: 1 },
    mcdonalds_diet_coke_medium: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 11, weightPerUnit: 310, bloatScale: 1 },
    mcdonalds_diet_coke_large: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 11, weightPerUnit: 420, bloatScale: 1 },
    mcdonalds_mcflurry_oreo: { caloriesPer100g: 200, proteinPer100g: 4, fatPer100g: 8, carbsPer100g: 28, sugarPer100g: 22, sodiumPer100g: 80, weightPerUnit: 180, bloatScale: 3 },
    mcdonalds_hotcake: { caloriesPer100g: 230, proteinPer100g: 5, fatPer100g: 9, carbsPer100g: 32, sugarPer100g: 13, sodiumPer100g: 380, weightPerUnit: 120, bloatScale: 2 },

    // Supplements
    whey_protein_powder_isolate: { caloriesPer100g: 370, proteinPer100g: 90, fatPer100g: 1, carbsPer100g: 2, sugarPer100g: 1, sodiumPer100g: 100, weightPerUnit: 30, bloatScale: 0 }, // Low lactose
    whey_protein_powder_concentrate: { caloriesPer100g: 400, proteinPer100g: 80, fatPer100g: 5, carbsPer100g: 6, sugarPer100g: 5, sodiumPer100g: 120, weightPerUnit: 30, bloatScale: 1 }, // Can cause mild bloating due to lactose
    casein_protein_powder: { caloriesPer100g: 370, proteinPer100g: 85, fatPer100g: 2, carbsPer100g: 5, sugarPer100g: 1, sodiumPer100g: 150, weightPerUnit: 30, bloatScale: 1 }, // Slow digesting
    plant_protein_powder_pea: { caloriesPer100g: 360, proteinPer100g: 80, fatPer100g: 3, carbsPer100g: 8, sugarPer100g: 0, sodiumPer100g: 200, weightPerUnit: 30, bloatScale: 0 },
    creatine_monohydrate: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 0 }, // May cause slight water retention
    pre_workout_powder: { caloriesPer100g: 10, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 2, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 10, bloatScale: 1 }, // Can vary greatly by ingredients (caffeine, artificial sweeteners)
    bcaa_powder: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: 0 },
    glutamine_powder: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 0 },
    multivitamin: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1, bloatScale: 0 },
    fish_oil_capsules: { caloriesPer100g: 900, proteinPer100g: 0, fatPer100g: 100, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 1.4, bloatScale: 0 },
    collagen_powder: { caloriesPer100g: 360, proteinPer100g: 90, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 200, weightPerUnit: 10, bloatScale: 0 },

    // Other categories
    salt: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 38758, weightPerUnit: 1, bloatScale: 5 }, // High sodium leads to water retention
    black_pepper: { caloriesPer100g: 251, proteinPer100g: 10, fatPer100g: 3, carbsPer100g: 64, sugarPer100g: 0.6, sodiumPer100g: 20, weightPerUnit: 1, bloatScale: 0 },
    cinnamon: { caloriesPer100g: 247, proteinPer100g: 4, fatPer100g: 1.2, carbsPer100g: 81, sugarPer100g: 2.2, sodiumPer100g: 10, weightPerUnit: 1, bloatScale: 0 },
    turmeric: { caloriesPer100g: 354, proteinPer100g: 8, fatPer100g: 10, carbsPer100g: 65, sugarPer100g: 3, sodiumPer100g: 38, weightPerUnit: 1, bloatScale: 0 },
    chili_powder: { caloriesPer100g: 282, proteinPer100g: 14, fatPer100g: 14, carbsPer100g: 50, sugarPer100g: 10, sodiumPer100g: 1500, weightPerUnit: 1, bloatScale: 1 },
    cumin: { caloriesPer100g: 375, proteinPer100g: 18, fatPer100g: 22, carbsPer100g: 44, sugarPer100g: 2.2, sodiumPer100g: 168, weightPerUnit: 1, bloatScale: 0 },
    paprika: { caloriesPer100g: 289, proteinPer100g: 14, fatPer100g: 13, carbsPer100g: 54, sugarPer100g: 10, sodiumPer100g: 68, weightPerUnit: 1, bloatScale: 0 },
    oregano: { caloriesPer100g: 306, proteinPer100g: 11, fatPer100g: 10, carbsPer100g: 69, sugarPer100g: 4, sodiumPer100g: 25, weightPerUnit: 1, bloatScale: 0 },
    basil: { caloriesPer100g: 27, proteinPer100g: 3.2, fatPer100g: 0.6, carbsPer100g: 2.7, sugarPer100g: 0.3, sodiumPer100g: 4, weightPerUnit: 1, bloatScale: 0 },
    thyme: { caloriesPer100g: 101, proteinPer100g: 5.6, fatPer100g: 1.7, carbsPer100g: 24, sugarPer100g: 1.7, sodiumPer100g: 9, weightPerUnit: 1, bloatScale: 0 },
    rosemary: { caloriesPer100g: 131, proteinPer100g: 3.3, fatPer100g: 6, carbsPer100g: 20, sugarPer100g: 0, sodiumPer100g: 26, weightPerUnit: 1, bloatScale: 0 },
    bay_leaf: { caloriesPer100g: 313, proteinPer100g: 7.6, fatPer100g: 8.4, carbsPer100g: 75, sugarPer100g: 0, sodiumPer100g: 23, weightPerUnit: 1, bloatScale: 0 },
    dill: { caloriesPer100g: 43, proteinPer100g: 3.5, fatPer100g: 1.1, carbsPer100g: 7, sugarPer100g: 0, sodiumPer100g: 20, weightPerUnit: 1, bloatScale: 0 },
    nutmeg: { caloriesPer100g: 525, proteinPer100g: 6, fatPer100g: 36, carbsPer100g: 49, sugarPer100g: 3, sodiumPer100g: 16, weightPerUnit: 1, bloatScale: 0 },
    cloves: { caloriesPer100g: 323, proteinPer100g: 6, fatPer100g: 13, carbsPer100g: 65, sugarPer100g: 0, sodiumPer100g: 277, weightPer100g: 1, bloatScale: 0 },
    cinnamon_stick: { caloriesPer100g: 247, proteinPer100g: 4, fatPer100g: 1.2, carbsPer100g: 81, sugarPer100g: 2.2, sodiumPer100g: 10, weightPerUnit: 2, bloatScale: 0 },
    ginger_powder: { caloriesPer100g: 336, proteinPer100g: 9, fatPer100g: 4, carbsPer100g: 70, sugarPer100g: 3, sodiumPer100g: 27, weightPerUnit: 1, bloatScale: -2 }, // Digestive aid
    garlic_powder: { caloriesPer100g: 331, proteinPer100g: 17, fatPer100g: 0.7, carbsPer100g: 73, sugarPer100g: 2.4, sodiumPer100g: 35, weightPerUnit: 1, bloatScale: 2 }, // Can still cause gas
    onion_powder: { caloriesPer100g: 341, proteinPer100g: 10, fatPer100g: 1, carbsPer100g: 78, sugarPer100g: 10, sodiumPer100g: 50, weightPerUnit: 1, bloatScale: 2 }, // Can still cause gas
    yeast: { caloriesPer100g: 325, proteinPer100g: 37, fatPer100g: 4.8, carbsPer100g: 34, sugarPer100g: 0, sodiumPer100g: 50, weightPerUnit: 10, bloatScale: 2 }, // Can cause bloating in some
    baking_soda: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 27360, weightPerUnit: 1, bloatScale: 0 },
    baking_powder: { caloriesPer100g: 100, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 28, sugarPer100g: 0, sodiumPer100g: 10900, weightPerUnit: 1, bloatScale: 0 },

    // Prepared Foods / Dishes
    pizza_pepperoni: { caloriesPer100g: 260, proteinPer100g: 11, fatPer100g: 11, carbsPer100g: 28, sugarPer100g: 3, sodiumPer100g: 600, weightPerUnit: 100, bloatScale: 5 }, // High sodium, processed
    pizza_cheese: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 10, carbsPer100g: 28, sugarPer100g: 3, sodiumPer100g: 500, weightPerUnit: 100, bloatScale: 4 },
    hamburger: { caloriesPer100g: 250, proteinPer100g: 15, fatPer100g: 15, carbsPer100g: 15, sugarPer100g: 3, sodiumPer100g: 300, weightPerUnit: 150, bloatScale: 3 },
    hotdog: { caloriesPer100g: 300, proteinPer100g: 11, fatPer100g: 27, carbsPer100g: 3, sugarPer100g: 1, sodiumPer100g: 800, weightPerUnit: 100, bloatScale: 4 }, // High sodium, processed
    french_fries: { caloriesPer100g: 312, proteinPer100g: 3.4, fatPer100g: 15, carbsPer100g: 41, sugarPer100g: 0, sodiumPer100g: 210, weightPerUnit: 100, bloatScale: 3 }, // Fried, high sodium
    chicken_nuggets: { caloriesPer100g: 290, proteinPer100g: 18, fatPer100g: 18, carbsPer100g: 15, sugarPer100g: 0.5, sodiumPer100g: 500, weightPerUnit: 100, bloatScale: 3 },
    fried_chicken: { caloriesPer100g: 246, proteinPer100g: 25, fatPer100g: 15, carbsPer100g: 7, sugarPer100g: 0, sodiumPer100g: 400, weightPerUnit: 100, bloatScale: 2 },
    fish_and_chips: { caloriesPer100g: 280, proteinPer100g: 12, fatPer100g: 18, carbsPer100g: 18, sugarPer100g: 1, sodiumPer100g: 450, weightPerUnit: 200, bloatScale: 4 },
    tacos_beef: { caloriesPer100g: 220, proteinPer100g: 15, fatPer100g: 12, carbsPer100g: 12, sugarPer100g: 1, sodiumPer100g: 350, weightPerUnit: 80, bloatScale: 3 },
    burrito_beef: { caloriesPer100g: 180, proteinPer100g: 10, fatPer100g: 8, carbsPer100g: 15, sugarPer100g: 1, sodiumPer100g: 300, weightPerUnit: 250, bloatScale: 4 },
    sushi_nigiri_salmon: { caloriesPer100g: 180, proteinPer100g: 10, fatPer100g: 5, carbsPer100g: 23, sugarPer100g: 5, sodiumPer100g: 100, weightPerUnit: 30, bloatScale: 0 },
    sushi_california_roll: { caloriesPer100g: 140, proteinPer100g: 4, fatPer100g: 3, carbsPer100g: 24, sugarPer100g: 5, sodiumPer100g: 200, weightPerUnit: 40, bloatScale: 1 },
    pad_thai_chicken: { caloriesPer100g: 180, proteinPer100g: 8, fatPer100g: 7, carbsPer100g: 20, sugarPer100g: 8, sodiumPer100g: 400, weightPerUnit: 300, bloatScale: 2 },
    curry_chicken_thai_green: { caloriesPer100g: 120, proteinPer100g: 10, fatPer100g: 8, carbsPer100g: 5, sugarPer100g: 2, sodiumPer100g: 300, weightPerUnit: 250, bloatScale: 1 },
    tiramisu: { caloriesPer100g: 320, proteinPer100g: 5, fatPer100g: 18, carbsPer100g: 35, sugarPer100g: 25, sodiumPer100g: 80, weightPerUnit: 100, bloatScale: 2 },
    cheesecake: { caloriesPer100g: 321, proteinPer100g: 6, fatPer100g: 22, carbsPer100g: 26, sugarPer100g: 19, sodiumPer100g: 230, weightPerUnit: 100, bloatScale: 2 },
    apple_pie: { caloriesPer100g: 237, proteinPer100g: 2, fatPer100g: 11, carbsPer100g: 32, sugarPer100g: 18, sodiumPer100g: 190, weightPerUnit: 120, bloatScale: 1 },
    chocolate_chip_cookie: { caloriesPer100g: 488, proteinPer100g: 5, fatPer100g: 25, carbsPer100g: 60, sugarPer100g: 30, sodiumPer100g: 300, weightPerUnit: 20, bloatScale: 1 },
    brownie: { caloriesPer100g: 466, proteinPer100g: 5, fatPer100g: 24, carbsPer100g: 58, sugarPer100g: 35, sodiumPer100g: 150, weightPerUnit: 50, bloatScale: 1 },

    // Canned Goods & Preserves
    canned_chickpeas: { caloriesPer100g: 164, proteinPer100g: 9, fatPer100g: 3, carbsPer100g: 27, sugarPer100g: 4.8, sodiumPer100g: 250, weightPerUnit: 100, bloatScale: 4 }, // High sodium
    canned_blackbeans: { caloriesPer100g: 132, proteinPer100g: 9, fatPer100g: 0.5, carbsPer100g: 23, sugarPer100g: 0.3, sodiumPer100g: 250, weightPerUnit: 100, bloatScale: 4 }, // High sodium
    canned_corn: { caloriesPer100g: 78, proteinPer100g: 2.5, fatPer100g: 1, carbsPer100g: 17, sugarPer100g: 3.4, sodiumPer100g: 230, weightPerUnit: 100, bloatScale: 2 },
    canned_tomatoes: { caloriesPer100g: 18, proteinPer100g: 0.9, fatPer100g: 0.2, carbsPer100g: 3.9, sugarPer100g: 2.6, sodiumPer100g: 200, weightPerUnit: 100, bloatScale: 0 },
    canned_green_beans: { caloriesPer100g: 28, proteinPer100g: 1.5, fatPer100g: 0.1, carbsPer100g: 6, sugarPer100g: 2.8, sodiumPer100g: 300, weightPerUnit: 100, bloatScale: 1 },
    fruit_cocktail_canned_in_syrup: { caloriesPer100g: 70, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 18, sugarPer100g: 16, sodiumPer100g: 5, weightPerUnit: 100, bloatScale: 2 },
    jam_strawberry: { caloriesPer100g: 250, proteinPer100g: 0.3, fatPer100g: 0.1, carbsPer100g: 64, sugarPer100g: 55, sodiumPer100g: 10, weightPerUnit: 15, bloatScale: 1 },
    jelly_grape: { caloriesPer100g: 260, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 68, sugarPer100g: 58, sodiumPer100g: 10, weightPerUnit: 15, bloatScale: 1 },
    pickles_dill: { caloriesPer100g: 11, proteinPer100g: 0.4, fatPer100g: 0.1, carbsPer100g: 2.3, sugarPer100g: 1.1, sodiumPer100g: 1200, weightPerUnit: 30, bloatScale: 2 }, // High sodium
};
