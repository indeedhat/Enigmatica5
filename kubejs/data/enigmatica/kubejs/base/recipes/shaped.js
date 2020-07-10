events.listen('recipes', function (event) {
    var recipes = [
        shapedRecipe('pneumaticcraft:speed_upgrade', ['LXL', 'XCX', 'LXL'], {
            L: '#pneumaticcraft:upgrade_components',
            X: 'minecraft:sugar',
            C: 'pneumaticcraft:lubricant_bucket'
        }),
        shapedRecipe('tetra:hammer_base', ['LXL', 'LCL', 'LXL'], {
            L: '#forge:ingots/steel',
            X: '#forge:circuits/basic',
            C: '#morevanillalib:tools'
        }),
        shapedRecipe('tetra:core_extractor', ['LXL', 'LCL', 'LXL'], {
            L: '#forge:ingots/steel',
            X: '#forge:circuits/basic',
            C: 'industrialforegoing:fluid_extractor'
        }),

        shapedRecipe('minecraft:stick 16', ['L', 'L'], {
            L: '#minecraft:logs'
        }),

        shapedRecipe('minecraft:oak_sign', ['LLL', 'LLL', ' C '], {
            L: '#minecraft:planks',
            C: '#forge:rods/wooden'
        })
    ];

    recipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });
});
