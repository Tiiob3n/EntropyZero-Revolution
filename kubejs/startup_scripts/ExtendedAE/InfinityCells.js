// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

StartupEvents.registry('item', entropy => {

    // ##### Fluids #####

    // Lava
    entropy.create('lava_cell', 'custom_infinity_cell')
        .texture('kubejs:item/lava_cell')
        .fluidType('minecraft:lava')
        .cellModel('kubejs:block/drive/lava_cell');

    // ##### Basic Stuff #####
    
    // Dirt
    entropy.create('dirt_cell', 'custom_infinity_cell')
        .texture('kubejs:item/dirt_cell')
        .itemType('minecraft:dirt')
        .cellModel('kubejs:block/drive/dirt_cell');
        
    // Moss
    entropy.create('moss_cell', 'custom_infinity_cell')
        .texture('kubejs:item/moss_cell')
        .itemType('minecraft:moss_block')
        .cellModel('kubejs:block/drive/moss_cell');
        
    // Andesite
    entropy.create('andesite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/andesite_cell')
        .itemType('minecraft:andesite')
        .cellModel('kubejs:block/drive/andesite_cell');
        
    // Diorite
    entropy.create('diorite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/diorite_cell')
        .itemType('minecraft:diorite')
        .cellModel('kubejs:block/drive/diorite_cell');
        
    // Granite
    entropy.create('granite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/granite_cell')
        .itemType('minecraft:granite')
        .cellModel('kubejs:block/drive/granite_cell');
        
    // Tuff
    entropy.create('tuff_cell', 'custom_infinity_cell')
        .texture('kubejs:item/tuff_cell')
        .itemType('minecraft:tuff')
        .cellModel('kubejs:block/drive/tuff_cell');
        
    // Gravel
    entropy.create('gravel_cell', 'custom_infinity_cell')
        .texture('kubejs:item/gravel_cell')
        .itemType('minecraft:gravel')
        .cellModel('kubejs:block/drive/gravel_cell');
        
    // Sand
    entropy.create('sand_cell', 'custom_infinity_cell')
        .texture('kubejs:item/sand_cell')
        .itemType('minecraft:sand')
        .cellModel('kubejs:block/drive/sand_cell');
        
    // Red Sand
    entropy.create('red_sand_cell', 'custom_infinity_cell')
        .texture('kubejs:item/red_sand_cell')
        .itemType('minecraft:red_sand')
        .cellModel('kubejs:block/drive/red_sand_cell');
        
    // End Stone
    entropy.create('end_stone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/end_stone_cell')
        .itemType('minecraft:end_stone')
        .cellModel('kubejs:block/drive/end_stone_cell');
        
    // Netherrack
    entropy.create('netherrack_cell', 'custom_infinity_cell')
        .texture('kubejs:item/netherrack_cell')
        .itemType('minecraft:netherrack')
        .cellModel('kubejs:block/drive/netherrack_cell');
        
    // Clay
    entropy.create('clay_cell', 'custom_infinity_cell')
        .texture('kubejs:item/clay_cell')
        .itemType('minecraft:clay')
        .cellModel('kubejs:block/drive/clay_cell');
        
    // Blackstone
    entropy.create('blackstone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/blackstone_cell')
        .itemType('minecraft:blackstone')
        .cellModel('kubejs:block/drive/blackstone_cell');
        
    // Basalt
    entropy.create('basalt_cell', 'custom_infinity_cell')
        .texture('kubejs:item/basalt_cell')
        .itemType('minecraft:basalt')
        .cellModel('kubejs:block/drive/basalt_cell');
        
    // Calcite
    entropy.create('calcite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/calcite_cell')
        .itemType('minecraft:calcite')
        .cellModel('kubejs:block/drive/calcite_cell');
        
    // Cobbled Deepslate
    entropy.create('cobbled_deepslate_cell', 'custom_infinity_cell')
        .texture('kubejs:item/cobbled_deepslate_cell')
        .itemType('minecraft:cobbled_deepslate')
        .cellModel('kubejs:block/drive/cobbled_deepslate_cell');
        
    // Soul Sand
    entropy.create('soul_sand_cell', 'custom_infinity_cell')
        .texture('kubejs:item/soul_sand_cell')
        .itemType('minecraft:soul_sand')
        .cellModel('kubejs:block/drive/soul_sand_cell');
        
    // Sky stone
    entropy.create('sky_stone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/sky_stone_cell')
        .itemType('ae2:sky_stone_block')
        .cellModel('kubejs:block/drive/sky_stone_cell');
        
    // Kivi
    entropy.create('kivi_cell', 'custom_infinity_cell')
        .texture('kubejs:item/kivi_cell')
        .itemType('xycraft_world:kivi')
        .cellModel('kubejs:block/drive/kivi_cell');
        
    // Ancient Stone
    entropy.create('ancient_stone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/ancient_stone_cell')
        .itemType('allthemodium:ancient_stone')
        .cellModel('kubejs:block/drive/ancient_stone_cell');

    // ##### Dyes #####

    // White dye
    entropy.create('white_cell', 'custom_infinity_cell')
        .texture('kubejs:item/white_cell')
        .itemType('minecraft:white_dye')
        .cellModel('kubejs:block/drive/white_cell');
        
    // Light Gray dye
    entropy.create('light_gray_cell', 'custom_infinity_cell')
        .texture('kubejs:item/light_gray_cell')
        .itemType('minecraft:light_gray_dye')
        .cellModel('kubejs:block/drive/light_gray_cell');
        
    // Gray dye
    entropy.create('gray_cell', 'custom_infinity_cell')
        .texture('kubejs:item/gray_cell')
        .itemType('minecraft:gray_dye')
        .cellModel('kubejs:block/drive/gray_cell');
        
    // Black dye
    entropy.create('black_cell', 'custom_infinity_cell')
        .texture('kubejs:item/black_cell')
        .itemType('minecraft:black_dye')
        .cellModel('kubejs:block/drive/black_cell');
        
    // Brown dye
    entropy.create('brown_cell', 'custom_infinity_cell')
        .texture('kubejs:item/brown_cell')
        .itemType('minecraft:brown_dye')
        .cellModel('kubejs:block/drive/brown_cell');
        
    // Red dye
    entropy.create('red_cell', 'custom_infinity_cell')
        .texture('kubejs:item/red_cell')
        .itemType('minecraft:red_dye')
        .cellModel('kubejs:block/drive/red_cell');
        
    // Orange dye
    entropy.create('orange_cell', 'custom_infinity_cell')
        .texture('kubejs:item/orange_cell')
        .itemType('minecraft:orange_dye')
        .cellModel('kubejs:block/drive/orange_cell');
        
    // Yellow dye
    entropy.create('yellow_cell', 'custom_infinity_cell')
        .texture('kubejs:item/yellow_cell')
        .itemType('minecraft:yellow_dye')
        .cellModel('kubejs:block/drive/yellow_cell');
        
    // Lime dye
    entropy.create('lime_cell', 'custom_infinity_cell')
        .texture('kubejs:item/lime_cell')
        .itemType('minecraft:lime_dye')
        .cellModel('kubejs:block/drive/lime_cell');
        
    // Green dye
    entropy.create('green_cell', 'custom_infinity_cell')
        .texture('kubejs:item/green_cell')
        .itemType('minecraft:green_dye')
        .cellModel('kubejs:block/drive/green_cell');
        
    // Cyan dye
    entropy.create('cyan_cell', 'custom_infinity_cell')
        .texture('kubejs:item/cyan_cell')
        .itemType('minecraft:cyan_dye')
        .cellModel('kubejs:block/drive/cyan_cell');
        
    // Light Blue dye
    entropy.create('light_blue_cell', 'custom_infinity_cell')
        .texture('kubejs:item/light_blue_cell')
        .itemType('minecraft:light_blue_dye')
        .cellModel('kubejs:block/drive/light_blue_cell');
        
    // Blue dye
    entropy.create('blue_cell', 'custom_infinity_cell')
        .texture('kubejs:item/blue_cell')
        .itemType('minecraft:blue_dye')
        .cellModel('kubejs:block/drive/blue_cell');
        
    // Purple dye
    entropy.create('purple_cell', 'custom_infinity_cell')
        .texture('kubejs:item/purple_cell')
        .itemType('minecraft:purple_dye')
        .cellModel('kubejs:block/drive/purple_cell');
        
    // Magenta dye
    entropy.create('magenta_cell', 'custom_infinity_cell')
        .texture('kubejs:item/magenta_cell')
        .itemType('minecraft:magenta_dye')
        .cellModel('kubejs:block/drive/magenta_cell');
        
    // Pink dye
    entropy.create('pink_cell', 'custom_infinity_cell')
        .texture('kubejs:item/pink_cell')
        .itemType('minecraft:pink_dye')
        .cellModel('kubejs:block/drive/pink_cell');
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.