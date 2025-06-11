// foodDatabase.js

const foodsDatabase = {
    // Fruits
    banana: { caloriesPer100g: 89, proteinPer100g: 1.1, fatPer100g: 0.3, carbsPer100g: 23, sugarPer100g: 12.2, sodiumPer100g: 1, weightPerUnit: 118, bloatScale: 0 },
    apple: { caloriesPer100g: 52, proteinPer100g: 0.3, fatPer100g: 0.2, carbsPer100g: 14, sugarPer100g: 10.4, sodiumPer100g: 1, weightPerUnit: 182, bloatScale: 0 },
    grapes: { caloriesPer100g: 69, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 18, sugarPer100g: 15.5, sodiumPer100g: 2, weightPerUnit: 151, bloatScale: 0 },
    orange: { caloriesPer100g: 47, proteinPer100g: 0.9, fatPer100g: 0.1, carbsPer100g: 12, sugarPer100g: 9.4, sodiumPer100g: 0, weightPerUnit: 130, bloatScale: 0 },
    pear: { caloriesPer100g: 57, proteinPer100g: 0.4, fatPer100g: 0.1, carbsPer100g: 15, sugarPer100g: 9.8, sodiumPer100g: 1, weightPerUnit: 178, bloatScale: 0 },
    blueberry: { caloriesPer100g: 57, proteinPer100g: 0.7, fatPer100g: 0.3, carbsPer100g: 14, sugarPer100g: 9.9, sodiumPer100g: 1, weightPerUnit: 148, bloatScale: 0 },
    strawberry: { caloriesPer100g: 32, proteinPer100g: 0.7, fatPer100g: 0.3, carbsPer100g: 7.7, sugarPer100g: 4.9, sodiumPer100g: 1, weightPerUnit: 12, bloatScale: 0 },
    raspberry: { caloriesPer100g: 52, proteinPer100g: 1.2, fatPer100g: 0.7, carbsPer100g: 12, sugarPer100g: 4.4, sodiumPer100g: 1, weightPerUnit: 4, bloatScale: 0 },
    blackberries: { caloriesPer100g: 43, proteinPer100g: 1.4, fatPer100g: 0.5, carbsPer100g: 10, sugarPer100g: 4.9, sodiumPer100g: 1, weightPerUnit: 5, bloatScale: 0 },
    pineapple: { caloriesPer100g: 50, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 13, sugarPer100g: 9.9, sodiumPer100g: 1, weightPerUnit: 165, bloatScale: 0 },
    mango: { caloriesPer100g: 60, proteinPer100g: 0.8, fatPer100g: 0.4, carbsPer100g: 15, sugarPer100g: 13.7, sodiumPer100g: 1, weightPerUnit: 200, bloatScale: 0 },
    watermelon: { caloriesPer100g: 30, proteinPer100g: 0.6, fatPer100g: 0.2, carbsPer100g: 8, sugarPer100g: 6.2, sodiumPer100g: 1, weightPerUnit: 280, bloatScale: -1 },

    // Vegetables
    broccoli: { caloriesPer100g: 34, proteinPer100g: 2.8, fatPer100g: 0.4, carbsPer100g: 7, sugarPer100g: 1.7, sodiumPer100g: 33, weightPerUnit: 91, bloatScale: 2 },
    carrot: { caloriesPer100g: 41, proteinPer100g: 0.9, fatPer100g: 0.2, carbsPer100g: 10, sugarPer100g: 4.7, sodiumPer100g: 69, weightPerUnit: 61, bloatScale: -1 },
    potato: { caloriesPer100g: 77, proteinPer100g: 2, fatPer100g: 0.1, carbsPer100g: 17, sugarPer100g: 0.8, sodiumPer100g: 6, weightPerUnit: 150, bloatScale: 1 },
    cucumber: { caloriesPer100g: 16, proteinPer100g: 0.7, fatPer100g: 0.1, carbsPer100g: 3.6, sugarPer100g: 1.7, sodiumPer100g: 2, weightPerUnit: 300, bloatScale: -3 },
    tomato: { caloriesPer100g: 18, proteinPer100g: 0.9, fatPer100g: 0.2, carbsPer100g: 3.9, sugarPer100g: 2.6, sodiumPer100g: 5, weightPerUnit: 123, bloatScale: 0 },
    bellpepper: { caloriesPer100g: 31, proteinPer100g: 1, fatPer100g: 0.3, carbsPer100g: 6, sugarPer100g: 4.2, sodiumPer100g: 3, weightPerUnit: 120, bloatScale: 0 },
    mushroom: { caloriesPer100g: 22, proteinPer100g: 3.1, fatPer100g: 0.3, carbsPer100g: 3.3, sugarPer100g: 2.0, sodiumPer100g: 5, weightPerUnit: 15, bloatScale: 0 },
    spinach: { caloriesPer100g: 23, proteinPer100g: 2.9, fatPer100g: 0.4, carbsPer100g: 3.6, sugarPer100g: 0.4, sodiumPer100g: 79, weightPerUnit: 30, bloatScale: 0 },
    kale: { caloriesPer100g: 49, proteinPer100g: 4.3, fatPer100g: 0.9, carbsPer100g: 8.8, sugarPer100g: 1.6, sodiumPer100g: 53, weightPerUnit: 30, bloatScale: 0 },
    sweetpotato: { caloriesPer100g: 86, proteinPer100g: 1.6, fatPer100g: 0.1, carbsPer100g: 20, sugarPer100g: 4.2, sodiumPer100g: 55, weightPerUnit: 130, bloatScale: 0 },
    pumpkin: { caloriesPer100g: 26, proteinPer100g: 1, fatPer100g: 0.1, carbsPer100g: 7, sugarPer100g: 2.8, sodiumPer100g: 1, weightPerUnit: 245, bloatScale: 0 },
    zucchini: { caloriesPer100g: 17, proteinPer100g: 1.2, fatPer100g: 0.3, carbsPer100g: 3.1, sugarPer100g: 2.5, sodiumPer100g: 9, weightPerUnit: 196, bloatScale: 0 },
    eggplant: { caloriesPer100g: 25, proteinPer100g: 1, fatPer100g: 0.2, carbsPer100g: 6, sugarPer100g: 3.5, sodiumPer100g: 2, weightPerUnit: 458, bloatScale: 0 },
    onion: { caloriesPer100g: 40, proteinPer100g: 1.1, fatPer100g: 0.1, carbsPer100g: 9, sugarPer100g: 4.2, sodiumPer100g: 4, weightPerUnit: 110, bloatScale: 1 },
    garlic: { caloriesPer100g: 149, proteinPer100g: 6.4, fatPer100g: 0.5, carbsPer100g: 33, sugarPer100g: 1, sodiumPer100g: 17, weightPerUnit: 3, bloatScale: 1 },
    corn: { caloriesPer100g: 86, proteinPer100g: 3.2, fatPer100g: 1.2, carbsPer100g: 19, sugarPer100g: 6.4, sodiumPer100g: 15, weightPerUnit: 90, bloatScale: 1 },
    peas: { caloriesPer100g: 81, proteinPer100g: 5, fatPer100g: 0.4, carbsPer100g: 14, sugarPer100g: 5.7, sodiumPer100g: 5, weightPerUnit: 100, bloatScale: 1 },
    swisschard: { caloriesPer100g: 19, proteinPer100g: 1.8, fatPer100g: 0.2, carbsPer100g: 3.7, sugarPer100g: 1.1, sodiumPer100g: 100, weightPerUnit: 36, bloatScale: 0 },
    collardgreens: { caloriesPer100g: 32, proteinPer100g: 3, fatPer100g: 0.6, carbsPer100g: 7, sugarPer100g: 1.3, sodiumPer100g: 24, weightPer100g: 36, bloatScale: 0 },
    dandeliontea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.2, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 240, bloatScale: -10 },

    // Proteins
    chickenbreast: { caloriesPer100g: 165, proteinPer100g: 31, fatPer100g: 3.6, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 74, weightPerUnit: 150, bloatScale: 0 },
    salmon: { caloriesPer100g: 206, proteinPer100g: 22, fatPer100g: 12, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 59, weightPerUnit: 154, bloatScale: 1 },
    egg: { caloriesPer100g: 155, proteinPer100g: 13, fatPer100g: 11, carbsPer100g: 1.1, sugarPer100g: 1.1, sodiumPer100g: 124, weightPer100g: 50, bloatScale: 0 },
    turkey: { caloriesPer100g: 135, proteinPer100g: 29, fatPer100g: 1, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 65, weightPerUnit: 150, bloatScale: 0 },
    tuna: { caloriesPer100g: 132, proteinPer100g: 28, fatPer100g: 1, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 400, weightPerUnit: 140, bloatScale: 4 }, // Canned in water, drained
    cod: { caloriesPer100g: 82, proteinPer100g: 18, fatPer100g: 0.7, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 54, weightPerUnit: 140, bloatScale: 0 },
    shrimp: { caloriesPer100g: 99, proteinPer100g: 24, fatPer100g: 0.3, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 146, weightPerUnit: 12, bloatScale: 1 },
    groundbeef: { caloriesPer100g: 250, proteinPer100g: 26, fatPer100g: 15, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 72, weightPerUnit: 100, bloatScale: 0 },
    tofu: { caloriesPer100g: 76, proteinPer100g: 8, fatPer100g: 4.8, carbsPer100g: 1.9, sugarPer100g: 0.3, sodiumPer100g: 14, weightPerUnit: 100, bloatScale: 0 },
    sardines: { caloriesPer100g: 208, proteinPer100g: 25, fatPer100g: 11, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 505, weightPer100g: 92, bloatScale: 5 },
    mackerel: { caloriesPer100g: 205, proteinPer100g: 19, fatPer100g: 13, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 90, weightPer100g: 150, bloatScale: 1 },

    // Grains & Legumes
    rice: { caloriesPer100g: 130, proteinPer100g: 2.7, fatPer100g: 0.3, carbsPer100g: 28, sugarPer100g: 0.1, sodiumPer100g: 1, weightPerUnit: 100, bloatScale: 0 },
    oats: { caloriesPer100g: 389, proteinPer100g: 17, fatPer100g: 7, carbsPer100g: 66, sugarPer100g: 0, sodiumPer100g: 2, weightPerUnit: 40, bloatScale: 1 },
    bread: { caloriesPer100g: 265, proteinPer100g: 9, fatPer100g: 3.2, carbsPer100g: 49, sugarPer100g: 5.6, sodiumPer100g: 490, weightPerUnit: 30, bloatScale: 3 },
    lentils: { caloriesPer100g: 116, proteinPer100g: 9, fatPer100g: 0.4, carbsPer100g: 20, sugarPer100g: 0.3, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 3 },
    chickpeas: { caloriesPer100g: 164, proteinPer100g: 9, fatPer100g: 3, carbsPer100g: 27, sugarPer100g: 4.8, sodiumPer100g: 7, weightPerUnit: 100, bloatScale: 3 },
    blackbeans: { caloriesPer100g: 132, proteinPer100g: 9, fatPer100g: 0.5, carbsPer100g: 23, sugarPer100g: 0.3, sodiumPer100g: 2, weightPerUnit: 100, bloatScale: 3 },
    quinoa: { caloriesPer100g: 120, proteinPer100g: 4.1, fatPer100g: 1.9, carbsPer100g: 21, sugarPer100g: 0.9, sodiumPer100g: 7, weightPerUnit: 185, bloatScale: 1 },
    edamame: { caloriesPer100g: 122, proteinPer100g: 11, fatPer100g: 5, carbsPer100g: 10, sugarPer100g: 2.2, sodiumPer100g: 6, weightPerUnit: 100, bloatScale: 2 },

    // Nuts & Seeds
    avocado: { caloriesPer100g: 160, proteinPer100g: 2, fatPer100g: 15, carbsPer100g: 9, sugarPer100g: 0.7, sodiumPer100g: 7, weightPerUnit: 150, bloatScale: -1 },
    almonds: { caloriesPer100g: 579, proteinPer100g: 21, fatPer100g: 50, carbsPer100g: 22, sugarPer100g: 4.9, sodiumPer100g: 1, weightPerUnit: 1, bloatScale: 0 },
    peanutbutter: { caloriesPer100g: 588, proteinPer100g: 25, fatPer100g: 50, carbsPer100g: 20, sugarPer100g: 9.2, sodiumPer100g: 426, weightPerUnit: 32, bloatScale: 2 },
    flaxseed: { caloriesPer100g: 534, proteinPer100g: 18, fatPer100g: 42, carbsPer100g: 29, sugarPer100g: 1.6, sodiumPer100g: 30, weightPerUnit: 10, bloatScale: 1 },
    chiaseed: { caloriesPer100g: 486, proteinPer100g: 17, fatPer100g: 31, carbsPer100g: 42, sugarPer100g: 0, sodiumPer100g: 16, weightPerUnit: 10, bloatScale: 1 },
    sunflowerseeds: { caloriesPer100g: 584, proteinPer100g: 21, fatPer100g: 51, carbsPer100g: 20, sugarPer100g: 2.6, sodiumPer100g: 9, weightPerUnit: 10, bloatScale: 1 },
    pumpkinseeds: { caloriesPer100g: 559, proteinPer100g: 30, fatPer100g: 49, carbsPer100g: 11, sugarPer100g: 1.3, sodiumPer100g: 18, weightPerUnit: 10, bloatScale: 1 },

    // Dairy & Fats
    cheese: { caloriesPer100g: 402, proteinPer100g: 25, fatPer100g: 33, carbsPer100g: 1.3, sugarPer100g: 0.5, sodiumPer100g: 621, weightPer100g: 30, bloatScale: 4 },
    yogurt: { caloriesPer100g: 59, proteinPer100g: 10, fatPer100g: 0.4, carbsPer100g: 3.6, sugarPer100g: 3.6, sodiumPer100g: 46, weightPer100g: 100, bloatScale: 0 },
    milk: { caloriesPer100g: 42, proteinPer100g: 3.4, fatPer100g: 1, carbsPer100g: 5, sugarPer100g: 5, sodiumPer100g: 43, weightPerUnit: 244, bloatScale: 1 },
    butter: { caloriesPer100g: 717, proteinPer100g: 0.9, fatPer100g: 81, carbsPer100g: 0.1, sugarPer100g: 0.1, sodiumPer100g: 643, weightPerUnit: 14, bloatScale: 0 },
    cream: { caloriesPer100g: 340, proteinPer100g: 2, fatPer100g: 37, carbsPer100g: 3, sugarPer100g: 2.8, sodiumPer100g: 34, weightPer100g: 15, bloatScale: 0 },

    // Sweets & Misc
    coconutmeat: { caloriesPer100g: 354, proteinPer100g: 3.3, fatPer100g: 33, carbsPer100g: 15, sugarPer100g: 6.2, sodiumPer100g: 20, weightPerUnit: 80, bloatScale: 0 },
    darkchocolate: { caloriesPer100g: 546, proteinPer100g: 4.9, fatPer100g: 31, carbsPer100g: 61, sugarPer100g: 48, sodiumPer100g: 18, weightPerUnit: 10, bloatScale: 0 },
    rawhoney: { caloriesPer100g: 304, proteinPer100g: 0.3, fatPer100g: 0, carbsPer100g: 82, sugarPer100g: 82.1, sodiumPer100g: 4, weightPerUnit: 21, bloatScale: 2 }, // Teaspoon is ~21g

    // Beverages
    coffee: { caloriesPer100g: 2, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: -1 },
    tea: { caloriesPer100g: 1, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 10, bloatScale: -1 },
    beer: { caloriesPer100g: 43, proteinPer100g: 0.5, fatPer100g: 0, carbsPer100g: 3.6, sugarPer100g: 0, sodiumPer100g: 4, weightPerUnit: 355, bloatScale: 6 },
    wine: { caloriesPer100g: 85, proteinPer100g: 0.1, fatPer100g: 0, carbsPer100g: 2.6, sugarPer100g: 0.6, sodiumPer100g: 2, weightPerUnit: 150, bloatScale: 4 },
    coke: { caloriesPer100g: 42, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 11, sugarPer100g: 11, sodiumPer100g: 11, weightPerUnit: 330, bloatScale: 5 }, // 330ml can
    dietcoke: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 11, weightPerUnit: 330, bloatScale: 3 }, // 330ml can
    cokezero: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 10, weightPerUnit: 330, bloatScale: 3 }, // 330ml can
    venergydrink: { caloriesPer100g: 45, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 11, sugarPer100g: 11, sodiumPer100g: 20, weightPerUnit: 250, bloatScale: 5 }, // Common can size ~250ml
    venergydrinksugarfree: { caloriesPer100g: 5, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0.5, sugarPer100g: 0, sodiumPer100g: 20, weightPerUnit: 250, bloatScale: 4 }, // Common can size ~250ml
    orangejuice: { caloriesPer100g: 45, proteinPer100g: 0.7, fatPer100g: 0.2, carbsPer100g: 10, sugarPer100g: 8, sodiumPer100g: 1, weightPerUnit: 250, bloatScale: 2 },

    // More common foods
    porkchop: { caloriesPer100g: 231, proteinPer100g: 26, fatPer100g: 14, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 62, weightPerUnit: 150, bloatScale: 0 },
    beefsteak: { caloriesPer100g: 271, proteinPer100g: 28, fatPer100g: 18, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 60, weightPerUnit: 150, bloatScale: 0 },
    lambchop: { caloriesPer100g: 290, proteinPer100g: 25, fatPer100g: 21, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 78, weightPerUnit: 150, bloatScale: 0 },
    wholewheatpasta: { caloriesPer100g: 155, proteinPer100g: 5, fatPer100g: 1, carbsPer100g: 30, sugarPer100g: 0.5, sodiumPer100g: 4, weightPerUnit: 80, bloatScale: 1 },
    whitepasta: { caloriesPer100g: 158, proteinPer100g: 5.8, fatPer100g: 0.9, carbsPer100g: 30.7, sugarPer100g: 0.5, sodiumPer100g: 1, weightPerUnit: 80, bloatScale: 1 },
    whitebread: { caloriesPer100g: 265, proteinPer100g: 9, fatPer100g: 3.2, carbsPer100g: 49, sugarPer100g: 5.6, sodiumPer100g: 490, weightPerUnit: 30, bloatScale: 3 }, // Assuming plain white bread
    wholegrainbread: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 3, carbsPer100g: 42, sugarPer100g: 3, sodiumPer100g: 380, weightPer100g: 30, bloatScale: 2 },
    hummus: { caloriesPer100g: 166, proteinPer100g: 7.9, fatPer100g: 9.6, carbsPer100g: 14.3, sugarPer100g: 0.5, sodiumPer100g: 360, weightPerUnit: 30, bloatScale: 2 },
    olives: { caloriesPer100g: 115, proteinPer100g: 0.8, fatPer100g: 11, carbsPer100g: 6, sugarPer100g: 0, sodiumPer100g: 1556, weightPerUnit: 5, bloatScale: 7 }, // High sodium!
    feta: { caloriesPer100g: 264, proteinPer100g: 14, fatPer100g: 21, carbsPer100g: 4.1, sugarPer100g: 4.1, sodiumPer100g: 1116, weightPer100g: 30, bloatScale: 6 }, // High sodium!
    cottagecheese: { caloriesPer100g: 98, proteinPer100g: 11, fatPer100g: 4.3, carbsPer100g: 3.4, sugarPer100g: 2.7, sodiumPer100g: 364, weightPerUnit: 100, bloatScale: 2 },
    sourcream: { caloriesPer100g: 198, proteinPer100g: 2.4, fatPer100g: 19, carbsPer100g: 3.7, sugarPer100g: 2.7, sodiumPer100g: 28, weightPerUnit: 15, bloatScale: 0 },
    creamcheese: { caloriesPer100g: 342, proteinPer100g: 6, fatPer100g: 34, carbsPer100g: 4.1, sugarPer100g: 3.2, sodiumPer100g: 317, weightPerUnit: 30, bloatScale: 1 },
    mayonnaise: { caloriesPer100g: 679, proteinPer100g: 1, fatPer100g: 75, carbsPer100g: 2.5, sugarPer100g: 2.5, sodiumPer100g: 540, weightPer100g: 15, bloatScale: 1 },
    ketchup: { caloriesPer100g: 112, proteinPer100g: 1.2, fatPer100g: 0.1, carbsPer100g: 28, sugarPer100g: 22, sodiumPer100g: 1110, weightPer100g: 17, bloatScale: 3 }, // High sodium, high sugar
    mustard: { caloriesPer100g: 66, proteinPer100g: 4.6, fatPer100g: 3.8, carbsPer100g: 6.8, sugarPer100g: 1.9, sodiumPer100g: 1120, weightPer100g: 17, bloatScale: 3 }, // High sodium
    saladcream: { caloriesPer100g: 279, proteinPer100g: 1.4, fatPer100g: 26, carbsPer100g: 10, sugarPer100g: 8.6, sodiumPer100g: 780, weightPer100g: 15, bloatScale: 2 },
    icecream: { caloriesPer100g: 207, proteinPer100g: 3.5, fatPer100g: 11, carbsPer100g: 23, sugarPer100g: 21, sodiumPer100g: 80, weightPerUnit: 65, bloatScale: 2 },
    pizza: { caloriesPer100g: 267, proteinPer100g: 11, fatPer100g: 10, carbsPer100g: 30, sugarPer100g: 3, sodiumPer100g: 600, weightPerUnit: 100, bloatScale: 6 }, // High sodium, processed
    burger: { caloriesPer100g: 295, proteinPer100g: 15, fatPer100g: 15, carbsPer100g: 25, sugarPer100g: 4, sodiumPer100g: 650, weightPer100g: 150, bloatScale: 7 }, // High sodium, processed
    fries: { caloriesPer100g: 312, proteinPer100g: 3.4, fatPer100g: 15, carbsPer100g: 41, sugarPer100g: 0.3, sodiumPer100g: 210, weightPer100g: 100, bloatScale: 4 }, // High sodium
    hotdog: { caloriesPer100g: 290, proteinPer100g: 11, fatPer100g: 26, carbsPer100g: 1, sugarPer100g: 1, sodiumPer100g: 800, weightPer100g: 50, bloatScale: 8 }, // Very high sodium, processed
    sausage: { caloriesPer100g: 300, proteinPer100g: 16, fatPer100g: 25, carbsPer100g: 1, sugarPer100g: 1, sodiumPer100g: 700, weightPer100g: 60, bloatScale: 7 }, // High sodium, processed
    bacon: { caloriesPer100g: 541, proteinPer100g: 37, fatPer100g: 42, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 1500, weightPer100g: 15, bloatScale: 9 }, // Extremely high sodium
    cereals: { caloriesPer100g: 370, proteinPer100g: 8, fatPer100g: 2, carbsPer100g: 80, sugarPer100g: 25, sodiumPer100g: 400, weightPerUnit: 30, bloatScale: 3 }, // Varies greatly by type
    proteinbar: { caloriesPer100g: 380, proteinPer100g: 30, fatPer100g: 15, carbsPer100g: 30, sugarPer100g: 10, sodiumPer100g: 200, weightPerUnit: 60, bloatScale: 1 },
    wheyprotein: { caloriesPer100g: 370, proteinPer100g: 80, fatPer100g: 5, carbsPer100g: 5, sugarPer100g: 3, sodiumPer100g: 150, weightPerUnit: 30, bloatScale: 0 },
    creatine: { caloriesPer100g: 0, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 0, sugarPer100g: 0, sodiumPer100g: 0, weightPerUnit: 5, bloatScale: 2 }, // Can cause water retention
    preworkout: { caloriesPer100g: 10, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 2.5, sugarPer100g: 0, sodiumPer100g: 500, weightPer100g: 10, bloatScale: 4 }, // High sodium, artificial sweeteners
    energygel: { caloriesPer100g: 250, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 60, sugarPer100g: 30, sodiumPer100g: 200, weightPerUnit: 40, bloatScale: 2 },
    sportsdrink: { caloriesPer100g: 24, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 6, sugarPer100g: 4, sodiumPer100g: 45, weightPerUnit: 500, bloatScale: 2 },
    oatmilk: { caloriesPer100g: 47, proteinPer100g: 1, fatPer100g: 1.5, carbsPer100g: 6.5, sugarPer100g: 4, sodiumPer100g: 40, weightPerUnit: 240, bloatScale: 1 },
    almondmilk: { caloriesPer100g: 15, proteinPer100g: 0.6, fatPer100g: 1.2, carbsPer100g: 0.1, sugarPer100g: 0, sodiumPer100g: 160, weightPerUnit: 240, bloatScale: 0 },
    soymilk: { caloriesPer100g: 54, proteinPer100g: 3.3, fatPer100g: 1.8, carbsPer100g: 3.9, sugarPer100g: 2.5, sodiumPer100g: 51, weightPerUnit: 240, bloatScale: 0 },
    ricecrackers: { caloriesPer100g: 380, proteinPer100g: 7, fatPer100g: 2, carbsPer100g: 80, sugarPer100g: 2, sodiumPer100g: 400, weightPerUnit: 10, bloatScale: 3 },
    cookies: { caloriesPer100g: 489, proteinPer100g: 5, fatPer100g: 23, carbsPer100g: 66, sugarPer100g: 30, sodiumPer100g: 300, weightPerUnit: 20, bloatScale: 3 },
    chips: { caloriesPer100g: 536, proteinPer100g: 6, fatPer100g: 35, carbsPer100g: 50, sugarPer100g: 0.4, sodiumPer100g: 560, weightPer100g: 30, bloatScale: 8 }, // Very high sodium
    nuts: { caloriesPer100g: 600, proteinPer100g: 20, fatPer100g: 50, carbsPer100g: 20, sugarPer100g: 4, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 0 }, // General nuts
    seeds: { caloriesPer100g: 550, proteinPer100g: 25, fatPer100g: 45, carbsPer100g: 20, sugarPer100g: 2, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 1 }, // General seeds
    sushi: { caloriesPer100g: 150, proteinPer100g: 5, fatPer100g: 2, carbsPer100g: 28, sugarPer100g: 6, sodiumPer100g: 250, weightPerUnit: 100, bloatScale: 2 },
    ramen: { caloriesPer100g: 180, proteinPer100g: 4, fatPer100g: 7, carbsPer100g: 25, sugarPer100g: 1, sodiumPer100g: 800, weightPerUnit: 300, bloatScale: 9 }, // Very high sodium
    curry: { caloriesPer100g: 150, proteinPer100g: 7, fatPer100g: 8, carbsPer100g: 12, sugarPer100g: 3, sodiumPer100g: 400, weightPerUnit: 300, bloatScale: 4 },
    stirfry: { caloriesPer100g: 100, proteinPer100g: 8, fatPer100g: 4, carbsPer100g: 8, sugarPer100g: 2, sodiumPer100g: 300, weightPerUnit: 250, bloatScale: 2 },
    tacos: { caloriesPer100g: 200, proteinPer100g: 10, fatPer100g: 10, carbsPer100g: 15, sugarPer100g: 2, sodiumPer100g: 400, weightPer100g: 150, bloatScale: 5 },
    burrito: { caloriesPer100g: 250, proteinPer100g: 12, fatPer100g: 12, carbsPer100g: 20, sugarPer100g: 3, sodiumPer100g: 500, weightPer100g: 300, bloatScale: 6 },
    sandwich: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 8, carbsPer100g: 30, sugarPer100g: 3, sodiumPer100g: 400, weightPerUnit: 150, bloatScale: 3 },
    soup: { caloriesPer100g: 60, proteinPer100g: 3, fatPer100g: 3, carbsPer100g: 5, sugarPer100g: 1, sodiumPer100g: 300, weightPerUnit: 250, bloatScale: 2 },
    eggsbenedict: { caloriesPer100g: 200, proteinPer100g: 10, fatPer100g: 15, carbsPer100g: 5, sugarPer100g: 1, sodiumPer100g: 400, weightPerUnit: 200, bloatScale: 5 }, // Hollaise sauce high sodium
    pancakes: { caloriesPer100g: 227, proteinPer100g: 5, fatPer100g: 9, carbsPer100g: 30, sugarPer100g: 6, sodiumPer100g: 300, weightPerUnit: 50, bloatScale: 2 },
    waffles: { caloriesPer100g: 250, proteinPer100g: 6, fatPer100g: 12, carbsPer100g: 30, sugarPer100g: 7, sodiumPer100g: 350, weightPer100g: 50, bloatScale: 2 },
    muffin: { caloriesPer100g: 350, proteinPer100g: 6, fatPer100g: 15, carbsPer100g: 45, sugarPer100g: 20, sodiumPer100g: 300, weightPerUnit: 100, bloatScale: 3 },
    doughnut: { caloriesPer100g: 450, proteinPer100g: 5, fatPer100g: 25, carbsPer100g: 50, sugarPer100g: 25, sodiumPer100g: 200, weightPerUnit: 50, bloatScale: 4 },
    cupcake: { caloriesPer100g: 380, proteinPer100g: 4, fatPer100g: 20, carbsPer100g: 50, sugarPer100g: 35, sodiumPer100g: 150, weightPerUnit: 60, bloatScale: 4 },
    cake: { caloriesPer100g: 400, proteinPer100g: 5, fatPer100g: 20, carbsPer100g: 55, sugarPer100g: 40, sodiumPer100g: 250, weightPerUnit: 100, bloatScale: 4 },
    brownie: { caloriesPer100g: 460, proteinPer100g: 5, fatPer100g: 25, carbsPer100g: 55, sugarPer100g: 40, sodiumPer100g: 200, weightPer100g: 80, bloatScale: 4 },
    milkchocolate: { caloriesPer100g: 535, proteinPer100g: 8, fatPer100g: 30, carbsPer100g: 59, sugarPer100g: 50, sodiumPer100g: 100, weightPerUnit: 10, bloatScale: 2 },
    gummybears: { caloriesPer100g: 350, proteinPer100g: 6, fatPer100g: 0.1, carbsPer100g: 80, sugarPer100g: 60, sodiumPer100g: 10, weightPerUnit: 10, bloatScale: 3 },
    jellybeans: { caloriesPer100g: 370, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 90, sugarPer100g: 80, sodiumPer100g: 20, weightPer100g: 10, bloatScale: 4 },
    sugarydrink: { caloriesPer100g: 40, proteinPer100g: 0, fatPer100g: 0, carbsPer100g: 10, sugarPer100g: 10, sodiumPer100g: 10, weightPerUnit: 330, bloatScale: 4 },
    energybar: { caloriesPer100g: 350, proteinPer100g: 10, fatPer100g: 15, carbsPer100g: 40, sugarPer100g: 20, sodiumPer100g: 150, weightPer100g: 60, bloatScale: 1 },
    granola: { caloriesPer100g: 470, proteinPer100g: 10, fatPer100g: 20, carbsPer100g: 60, sugarPer100g: 20, sodiumPer100g: 150, weightPerUnit: 40, bloatScale: 2 },
    muesli: { caloriesPer100g: 370, proteinPer100g: 10, fatPer100g: 10, carbsPer100g: 60, sugarPer100g: 15, sodiumPer100g: 50, weightPerUnit: 40, bloatScale: 1 },
    croissant: { caloriesPer100g: 406, proteinPer100g: 8, fatPer100g: 21, carbsPer100g: 45, sugarPer100g: 10, sodiumPer100g: 430, weightPerUnit: 60, bloatScale: 3 },
    baguette: { caloriesPer100g: 260, proteinPer100g: 9, fatPer100g: 1, carbsPer100g: 50, sugarPer100g: 2, sodiumPer100g: 450, weightPer100g: 50, bloatScale: 2 },
    sourdough: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 1.5, carbsPer100g: 48, sugarPer100g: 1, sodiumPer100g: 350, weightPer100g: 50, bloatScale: 1 },
    tortilla: { caloriesPer100g: 310, proteinPer100g: 8, fatPer100g: 8, carbsPer100g: 50, sugarPer100g: 1.5, sodiumPer100g: 500, weightPer100g: 40, bloatScale: 3 },
    pita: { caloriesPer100g: 275, proteinPer100g: 9, fatPer100g: 1.5, carbsPer100g: 55, sugarPer100g: 2, sodiumPer100g: 400, weightPer100g: 60, bloatScale: 2 },
    naan: { caloriesPer100g: 300, proteinPer100g: 9, fatPer100g: 5, carbsPer100g: 55, sugarPer100g: 3, sodiumPer100g: 450, weightPer100g: 80, bloatScale: 3 },
    wonton: { caloriesPer100g: 270, proteinPer100g: 10, fatPer100g: 5, carbsPer100g: 45, sugarPer100g: 2, sodiumPer100g: 300, weightPer100g: 10, bloatScale: 2 },
    dumpling: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 8, carbsPer100g: 35, sugarPer100g: 2, sodiumPer100g: 350, weightPer100g: 20, bloatScale: 2 },
    samosa: { caloriesPer100g: 350, proteinPer100g: 8, fatPer100g: 20, carbsPer100g: 35, sugarPer100g: 2, sodiumPer100g: 300, weightPer100g: 50, bloatScale: 3 },
    springroll: { caloriesPer100g: 250, proteinPer100g: 7, fatPer100g: 15, carbsPer100g: 20, sugarPer100g: 2, sodiumPer100g: 250, weightPer100g: 50, bloatScale: 2 },
    falafel: { caloriesPer100g: 330, proteinPer100g: 13, fatPer100g: 18, carbsPer100g: 30, sugarPer100g: 2, sodiumPer100g: 400, weightPer100g: 20, bloatScale: 3 },
    hummus: { caloriesPer100g: 166, proteinPer100g: 7.9, fatPer100g: 9.6, carbsPer100g: 14.3, sugarPer100g: 0.5, sodiumPer100g: 360, weightPer100g: 30, bloatScale: 2 },
    tzatziki: { caloriesPer100g: 70, proteinPer100g: 2, fatPer100g: 5, carbsPer100g: 4, sugarPer100g: 3, sodiumPer100g: 150, weightPer100g: 30, bloatScale: 0 },
    guacamole: { caloriesPer100g: 160, proteinPer100g: 2, fatPer100g: 15, carbsPer100g: 9, sugarPer100g: 0.7, sodiumPer100g: 7, weightPer100g: 30, bloatScale: 0 },
    salsa: { caloriesPer100g: 36, proteinPer100g: 1, fatPer100g: 0.2, carbsPer100g: 7, sugarPer100g: 4, sodiumPer100g: 250, weightPer100g: 30, bloatScale: 1 },
    pesto: { caloriesPer100g: 450, proteinPer100g: 10, fatPer100g: 45, carbsPer100g: 5, sugarPer100g: 2, sodiumPer100g: 600, weightPer100g: 15, bloatScale: 1 },
    marmalade: { caloriesPer100g: 240, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 60, sugarPer100g: 50, sodiumPer100g: 10, weightPer100g: 15, bloatScale: 2 },
    jam: { caloriesPer100g: 250, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 65, sugarPer100g: 55, sodiumPer100g: 10, weightPer100g: 15, bloatScale: 2 },
    biscuits: { caloriesPer100g: 450, proteinPer100g: 7, fatPer100g: 20, carbsPer100g: 60, sugarPer100g: 20, sodiumPer100g: 300, weightPer100g: 20, bloatScale: 3 },
    crackers: { caloriesPer100g: 400, proteinPer100g: 10, fatPer100g: 10, carbsPer100g: 60, sugarPer100g: 5, sodiumPer100g: 500, weightPer100g: 10, bloatScale: 3 },
    pretzels: { caloriesPer100g: 380, proteinPer100g: 10, fatPer100g: 5, carbsPer100g: 75, sugarPer100g: 2, sodiumPer100g: 1200, weightPer100g: 10, bloatScale: 7 }, // Very high sodium
    popcorn: { caloriesPer100g: 380, proteinPer100g: 11, fatPer100g: 5, carbsPer100g: 70, sugarPer100g: 0.5, sodiumPer100g: 7, weightPer100g: 10, bloatScale: 1 },
    cheesecake: { caloriesPer100g: 320, proteinPer100g: 6, fatPer100g: 20, carbsPer100g: 30, sugarPer100g: 25, sodiumPer100g: 200, weightPer100g: 100, bloatScale: 3 },
    mousse: { caloriesPer100g: 250, proteinPer100g: 4, fatPer100g: 15, carbsPer100g: 25, sugarPer100g: 20, sodiumPer100g: 50, weightPer100g: 50, bloatScale: 2 },
    jelly: { caloriesPer100g: 50, proteinPer100g: 1, fatPer100g: 0, carbsPer100g: 12, sugarPer100g: 12, sodiumPer100g: 20, weightPer100g: 100, bloatScale: 1 },
    sorbet: { caloriesPer100g: 120, proteinPer100g: 0.5, fatPer100g: 0.1, carbsPer100g: 30, sugarPer100g: 25, sodiumPer100g: 10, weightPer100g: 60, bloatScale: 1 },
    frozenyogurt: { caloriesPer100g: 150, proteinPer100g: 3, fatPer100g: 4, carbsPer100g: 25, sugarPer100g: 20, sodiumPer100g: 60, weightPer100g: 60, bloatScale: 1 },
    smoothie: { caloriesPer100g: 60, proteinPer100g: 1, fatPer100g: 0.5, carbsPer100g: 15, sugarPer100g: 10, sodiumPer100g: 20, weightPerUnit: 250, bloatScale: 1 },
    proteinshake: { caloriesPer100g: 60, proteinPer100g: 10, fatPer100g: 1, carbsPer100g: 3, sugarPer100g: 2, sodiumPer100g: 80, weightPerUnit: 300, bloatScale: 0 },
    oatmeal: { caloriesPer100g: 68, proteinPer100g: 2.5, fatPer100g: 1.2, carbsPer100g: 12, sugarPer100g: 0.1, sodiumPer100g: 0, weightPerUnit: 200, bloatScale: 1 }, // Cooked oatmeal
    cerealbar: { caloriesPer100g: 400, proteinPer100g: 5, fatPer100g: 15, carbsPer100g: 60, sugarPer100g: 25, sodiumPer100g: 200, weightPerUnit: 30, bloatScale: 2 },
    bagel: { caloriesPer100g: 250, proteinPer100g: 10, fatPer100g: 1.5, carbsPer100g: 50, sugarPer100g: 5, sodiumPer100g: 450, weightPer100g: 100, bloatScale: 3 },
    muffin: { caloriesPer100g: 350, proteinPer100g: 6, fatPer100g: 15, carbsPer100g: 45, sugarPer100g: 20, sodiumPer100g: 300, weightPer100g: 100, bloatScale: 3 },
    scone: { caloriesPer100g: 350, proteinPer100g: 7, fatPer100g: 18, carbsPer100g: 40, sugarPer100g: 10, sodiumPer100g: 250, weightPer100g: 60, bloatScale: 2 },
    waffle: { caloriesPer100g: 250, proteinPer100g: 6, fatPer100g: 12, carbsPer100g: 30, sugarPer100g: 7, sodiumPer100g: 350, weightPer100g: 50, bloatScale: 2 },
    pancake: { caloriesPer100g: 227, proteinPer100g: 5, fatPer100g: 9, carbsPer100g: 30, sugarPer100g: 6, sodiumPer100g: 300, weightPer100g: 50, bloatScale: 2 },
};
