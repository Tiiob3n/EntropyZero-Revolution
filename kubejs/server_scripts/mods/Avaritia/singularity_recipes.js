// kubejs/server_scripts/Avaritia/singularity_recipes.js

ServerEvents.recipes((event) => {

  const COUNT = 10000

  const sing = (id, ingredient, count) => {
    count = count || COUNT
    event.recipes.avaritia.compressor(
      [ingredient],
      "avaritia:json_singularity[avaritia:singularity_id='" + id + "']",
      count
    )
  }

  // 1. Silent Gear
  sing("blaze_gold",              "silentgear:blaze_gold_ingot")
  sing("crimson_steel",           "silentgear:crimson_steel_ingot")
  sing("azure_electrum",          "silentgear:azure_electrum_ingot")
  sing("tyrian_steel",            "silentgear:tyrian_steel_ingot")
  sing("azure_silver",            "silentgear:azure_silver_ingot")

  // 2. Evolved Mekanism
  sing("refined_redstone",        "evolvedmekanism:ingot_refined_redstone")
  sing("alloy_exoversal",         "evolvedmekanism:alloy_exoversal")
  sing("alloy_singular",          "evolvedmekanism:alloy_singular")
  sing("alloy_subatomic",         "evolvedmekanism:alloy_subatomic")
  sing("alloy_hypercharged",      "evolvedmekanism:alloy_hypercharged")

  // 3. All The Modium
  sing("unobtainium",                     "allthemodium:unobtainium_ingot")
  sing("vibranium",                       "allthemodium:vibranium_ingot")
  sing("allthemodium",                    "allthemodium:allthemodium_ingot")
  sing("unobtainium_allthemodium_alloy",  "allthemodium:unobtainium_allthemodium_alloy_ingot")
  sing("vibranium_allthemodium_alloy",    "allthemodium:vibranium_allthemodium_alloy_ingot")

  // 4. Draconic Evolution
  sing("awakened_draconium",      "draconicevolution:awakened_draconium_ingot")
  sing("chaotic_core",            "draconicevolution:chaotic_core")
  sing("hermal",                  "draconicadditions:hermal")
  sing("draconium",               "draconicevolution:draconium_ingot")
  sing("medium_chaos_frag",       "draconicevolution:medium_chaos_frag")

  // 5. Mekanism
  sing("hdpe_sheet",              "mekanism:hdpe_sheet")
  sing("pellet_antimatter",       "mekanism:pellet_antimatter")
  sing("alloy_atomic",            "mekanism:alloy_atomic")
  sing("alloy_reinforced",        "mekanism:alloy_reinforced")
  sing("alloy_infused",           "mekanism:alloy_infused")

  // 6. AE2
  sing("quantum_alloy",           "advanced_ae:quantum_alloy")
  sing("entro_ingot",             "extendedae:entro_ingot")
  sing("charged_redstone",        "appflux:charged_redstone")
  sing("charged_certus_quartz",   "ae2:charged_certus_quartz_crystal")
  sing("ae2_singularity",         "ae2:singularity")

  // 7. Ender IO
  sing("vibrant_alloy",           "enderio:vibrant_alloy_ingot")
  sing("withering_powder",        "enderio:withering_powder")
  sing("dark_steel_grinding_ball","enderio:dark_steel_grinding_ball")
  sing("end_steel_grinding_ball", "enderio:end_steel_grinding_ball")
  sing("vibrant_crystal",         "enderio:vibrant_crystal")

  // 8. Industrial Upgrade
  sing("draconid",                "industrialupgrade:itemingots/draconid")
  sing("photoniy",                "industrialupgrade:photoniy_ingot")
  sing("yttrium_aluminium_garnet","industrialupgrade:alloyingot/yttrium_aluminium_garnet")
  sing("niobium_titanium",        "industrialupgrade:alloyingot/niobium_titanium")
  sing("gallium_arsenic",         "industrialupgrade:alloyingot/gallium_arsenic")

  // 9. Avaritia
  sing("neutronium",              "avaritia:neutronium_ingot")

  // 10. Big Reactors
  sing("inanite",                 "bigreactors:inanite_ingot")
  sing("graphite",                "bigreactors:graphite_ingot")
  sing("anglesite_crystal",       "bigreactors:anglesite_crystal")
  sing("benitoite_crystal",       "bigreactors:benitoite_crystal")
  sing("insanite",                "bigreactors:insanite_ingot")

  // 11. Chemical Science
  sing("platinum_thorium_catalyst",       "chemicalscience:platinum_thorium_catalyst")
  sing("palladium_carbon_catalyst",       "chemicalscience:palladium_carbon_catalyst")
  sing("palladium_phosphate_catalyst",    "chemicalscience:palladium_phosphate_catalyst")
  sing("silica_alumina_catalyst",         "chemicalscience:silica_alumina_catalyst")
  sing("sulfonated_polystyrene_catalyst", "chemicalscience:sulfonated_polystyrene_catalyst")

  // 12. Create
  sing("andesite_alloy",          "create:andesite_alloy")
  sing("brass_ingot",             "create:brass_ingot")
  sing("copper_casing",           "create:copper_casing")
  sing("andesite_casing",         "create:andesite_casing")
  sing("brass_casing",            "create:brass_casing")

})
