// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(entropy => {
    // Suppression de la recette du gâteau (Cake) comme sur ATM
    entropy.remove({id: 'minecraft:cake'})

    // Sculk Block
    entropy.shaped(
        Item.of('minecraft:sculk', 1), 
        [
            'OOO',
            'OOO',
            'OOO'
        ],
        {
            O: 'minecraft:echo_shard',
        }
    ).id('entropy:sculk')

    // Sculk Sensor
    entropy.shaped(
        Item.of('minecraft:sculk_sensor', 1), 
        [
            '   ',
            'VCV',
            'SSS'
        ],
        {
            V: 'minecraft:twisting_vines',
            C: 'minecraft:comparator',
            S: 'minecraft:sculk',
        }
    ).id('entropy:sculk_sensor')


    // Fonction d'intégration personnalisée pour l'Enchanting Apparatus d'Ars Nouveau
    function enchanting_apparatus(output, pedestalItems, reagent, nbt, sourceCost, id){
        let recipe = {
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": nbt,
            "pedestalItems": [],
            "reagent": {},
            "result": {
                "count": output.count || 1,
                "id": output.item
            },
            "sourceCost": sourceCost
        };

        if (reagent.tag) {
            recipe.reagent.tag = reagent.tag;
        } else {
            recipe.reagent.item = reagent.item;
        }

        pedestalItems.forEach(input => {
            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.pedestalItems.push(ingredients);
        });

        entropy.custom(recipe).id(`entropy:enchanting_apparatus/${id}`);
    }

    // Recette du Sculk Shrieker
    enchanting_apparatus(
        {item: 'minecraft:sculk_shrieker'},
        [
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'},
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'},
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'},
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'}
        ],
        {item: 'deeperdarker:heart_of_the_deep'},
        false,
        1000,
        'sculk_shrieker'
    );
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.