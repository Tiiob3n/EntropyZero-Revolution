ServerEvents.recipes(event => {
    const wyvernItems = [
        'draconicevolution:wyvern_axe',
        'draconicevolution:wyvern_bow',
        'draconicevolution:wyvern_hoe',
        'draconicevolution:wyvern_pickaxe',
        'draconicevolution:wyvern_shovel',
        'draconicevolution:wyvern_sword',
        'draconicevolution:wyvern_chestpiece'
    ];

    wyvernItems.forEach(item => {
        event.remove({ output: item, type: 'draconicevolution:fusion_crafting' });
    });

    const fusionCrafts = [
        { catalyst: 'allthemodium:unobtainium_axe', result: 'draconicevolution:wyvern_axe' },
        { catalyst: 'allthemodium:unobtainium_pickaxe', result: 'draconicevolution:wyvern_pickaxe' },
        { catalyst: 'allthemodium:unobtainium_shovel', result: 'draconicevolution:wyvern_shovel' },
        { catalyst: 'allthemodium:unobtainium_hoe', result: 'draconicevolution:wyvern_hoe' },
        { catalyst: 'allthemodium:unobtainium_sword', result: 'draconicevolution:wyvern_sword' },
        { catalyst: 'allthemodium:unobtainium_chestplate', result: 'draconicevolution:wyvern_chestpiece' },
        { catalyst: 'mekanism:electric_bow', result: 'draconicevolution:wyvern_bow' } 
    ];

    fusionCrafts.forEach(craft => {
        event.custom({
            type: "draconicevolution:fusion_crafting",
            catalyst: {
                item: craft.catalyst
            },
            ingredients: [
                { consume: true, ingredient: { item: "draconicevolution:draconium_core" } },
                { consume: true, ingredient: { tag: "c:ingots/draconium" } },
                { consume: true, ingredient: { tag: "c:ingots/draconium" } },
                { consume: true, ingredient: { item: "draconicevolution:basic_relay_crystal" } },
                { consume: true, ingredient: { item: "draconicevolution:wyvern_energy_core" } },
                { consume: true, ingredient: { item: "draconicevolution:basic_relay_crystal" } }
            ],
            result: {
                count: 1,
                id: craft.result
            },
            techLevel: "wyvern",
            totalEnergy: 8000000
        });
    });

});