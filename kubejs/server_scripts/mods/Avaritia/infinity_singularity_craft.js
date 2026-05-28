// kubejs/server_scripts/mods/Avaritia/infinity_singularity_craft.js
// Recette Extreme Crafting Table pour l'Infinity Singularity

ServerEvents.recipes((event) => {

  event.remove({ output: "avaritia:infinity_singularity" })

  const s = (id) => Item.of("avaritia:json_singularity", { "avaritia:singularity_id": id })

  event.recipes.avaritia.extreme_shapeless(
    [
      // 1. Silent Gear
      s("blaze_gold"), s("crimson_steel"), s("azure_electrum"), s("tyrian_steel"), s("azure_silver"),
      // 2. Evolved Mekanism
      s("refined_redstone"), s("alloy_exoversal"), s("alloy_singular"), s("alloy_subatomic"), s("alloy_hypercharged"),
      // 3. All The Modium
      s("unobtainium"), s("vibranium"), s("allthemodium"), s("unobtainium_allthemodium_alloy"), s("vibranium_allthemodium_alloy"),
      // 4. Draconic Evolution
      s("awakened_draconium"), s("chaotic_core"), s("hermal"), s("draconium"), s("medium_chaos_frag"),
      // 5. Mekanism
      s("hdpe_sheet"), s("pellet_antimatter"), s("alloy_atomic"), s("alloy_reinforced"), s("alloy_infused"),
      // 6. AE2
      s("quantum_alloy"), s("entro_ingot"), s("charged_redstone"), s("charged_certus_quartz"), s("ae2_singularity"),
      // 7. Ender IO
      s("vibrant_alloy"), s("withering_powder"), s("dark_steel_grinding_ball"), s("end_steel_grinding_ball"), s("vibrant_crystal"),
      // 8. Industrial Upgrade
      s("draconid"), s("photoniy"), s("yttrium_aluminium_garnet"), s("niobium_titanium"), s("gallium_arsenic"),
      // 9. Avaritia
      s("neutronium"),
      // 10. Big Reactors
      s("inanite"), s("graphite"), s("anglesite_crystal"), s("benitoite_crystal"), s("insanite"),
      // 11. Chemical Science
      s("platinum_thorium_catalyst"), s("palladium_carbon_catalyst"), s("palladium_phosphate_catalyst"), s("silica_alumina_catalyst"), s("sulfonated_polystyrene_catalyst"),
      // 12. Create
      s("andesite_alloy"), s("brass_ingot"), s("copper_casing"), s("andesite_casing"), s("brass_casing")
    ],
    Item.of("avaritia:infinity_singularity")
  )

})