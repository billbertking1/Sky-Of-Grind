
ServerEvents.tags('item', event => {
  //TAGS STUFF
  event.add('gtceu:circuits/zpm', 'kubejs:resonant_processor')
  event.add('gtceu:circuits/uv', 'kubejs:resonant_processor_assembly')
  event.add('gtceu:circuits/uv', 'kubejs:dragon_processor')
  event.add('gtceu:circuits/uhv', 'kubejs:resonant_processor_computer')
  event.add('gtceu:circuits/uhv', 'kubejs:dragon_processor_assembly')
  event.add('gtceu:circuits/uhv', 'kubejs:cosmic_processor')
  event.add('gtceu:circuits/uev', 'kubejs:resonant_processor_mainframe')
  event.add('gtceu:circuits/uev', 'kubejs:dragon_processor_computer')
  event.add('gtceu:circuits/uev', 'kubejs:cosmic_processor_assembly')
  event.add('gtceu:circuits/uev', 'kubejs:space_time_processor')
  event.add('gtceu:circuits/uiv', 'kubejs:dragon_processor_mainframe')
  event.add('gtceu:circuits/uiv', 'kubejs:cosmic_processor_computer')
  event.add('gtceu:circuits/uiv', 'kubejs:space_time_processor_assembly')
  event.add('gtceu:circuits/uiv', 'kubejs:dimensional_processor')
  event.add('gtceu:circuits/uxv', 'kubejs:cosmic_processor_mainframe')
  event.add('gtceu:circuits/uxv', 'kubejs:space_time_processor_computer')
  event.add('gtceu:circuits/uxv', 'kubejs:dimensional_processor_assembly')
  event.add('gtceu:circuits/opv', 'kubejs:space_time_processor_mainframe')
  event.add('gtceu:circuits/opv', 'kubejs:dimensional_processor_computer')
  event.add('gtceu:circuits/max', 'kubejs:dimensional_processor_mainframe')





})







ServerEvents.recipes(event => { 
    //JEI STUFF
    event.remove({ output: 'exdeorum:oak_compressed_sieve'})
    event.remove({ output: 'exdeorum:spruce_compressed_sieve'})
    event.remove({ output: 'exdeorum:birch_compressed_sieve'})
    event.remove({ output: 'exdeorum:jungle_compressed_sieve'})
    event.remove({ output: 'exdeorum:acacia_compressed_sieve'})
    event.remove({ output: 'exdeorum:dark_oak_compressed_sieve'})
    event.remove({ output: 'exdeorum:mangrove_compressed_sieve'})
    event.remove({ output: 'exdeorum:cherry_compressed_sieve'})
    event.remove({ output: 'exdeorum:bamboo_compressed_sieve'}) 
    event.remove({ output: 'exdeorum:crimson_compressed_sieve'})
    event.remove({ output: 'exdeorum:warped_compressed_sieve'})
    event.remove({ output: 'exdeorum:golden_mesh'})
    event.remove({ output: 'exdeorum:diamond_mesh'})
    event.remove({ output: 'exdeorum:netherite_mesh'})
    event.remove({ output: 'exdeorum:mechanical_sieve'})
    event.remove({ type: 'extractinator:extractinating' })
    event.remove({ output: 'extractinator:extractinator'})
    event.remove({ output: 'gtceu:wrought_iron_nugget', type: 'minecraft:smelting'})
    event.remove({ output: 'gtceu:calcite_dust', input: "#forge:tools/mortars"})
    event.remove({ output: 'ironfurnaces:augment_generator'})
    event.remove({ output: 'ironfurnaces:million_furnace'})
    event.remove({ output: 'gtceu:firebricks'})
    event.remove({ output: 'gtceu:quartz_sand_dust', input: "#forge:tools/mortars"})
    event.remove({ output: 'gtceu:lp_steam_alloy_smelter'})
    event.remove({ output: 'watersources:water_source_tier_1'})
    event.remove({ output: 'ad_astra:hammer'})
    event.remove({ input: 'ad_astra:hammer'})
    event.remove({ output: 'ad_astra:steel_ingot'})
    event.remove({ output: 'ad_astra:steel_plate'})
    event.remove({ output: 'ironfurnaces:iron_furnace'})
    event.remove({ output: 'ironfurnaces:upgrade_copper'})
    event.remove({ output: 'ironfurnaces:upgrade_iron'})
    event.remove({ output: 'ironfurnaces:upgrade_gold'})
    event.remove({ output: 'ironfurnaces:upgrade_diamond'})
    event.remove({ output: 'ironfurnaces:upgrade_emerald'})
    event.remove({ output: 'ironfurnaces:upgrade_obsidian'})
    event.remove({ output: 'ironfurnaces:upgrade_crystal'})
    event.remove({ output: 'ironfurnaces:upgrade_netherite'})
    event.remove({ output: 'ironfurnaces:upgrade_obsidian2'})
    event.remove({ output: 'ironfurnaces:upgrade_silver'})
    event.remove({ output: 'ironfurnaces:upgrade_iron2'})
    event.remove({ output: 'ironfurnaces:upgrade_gold2'})
    event.remove({ output: 'ironfurnaces:upgrade_silver2'})
    event.remove({ output: 'ironfurnaces:silver_furnace'})
    event.remove({ output: 'ironfurnaces:gold_furnace'})
    event.remove({ output: 'ironfurnaces:diamond_furnace'})
    event.remove({ output: 'ironfurnaces:emerald_furnace'})
    event.remove({ output: 'enderio:soularium_ingot'})
    event.remove({ output: 'hostilenetworks:prediction_matrix'})
    event.remove({ output: 'hostilenetworks:loot_fabricator'})
    event.remove({ output: 'hostilenetworks:sim_chamber'})
    event.remove({ output: 'hostilenetworks:blank_data_model'})
    event.remove({ output: 'minecraft:soul_sand'})
    event.remove({ output: 'enderio:conduit_binder'})
    event.remove({ output: 'enderio:fluid_conduit'})
    event.remove({ output: 'enderio:conductive_alloy_ingot'})
    event.remove({ output: 'enderio:pulsating_alloy_ingot'})
    event.remove({ output: 'enderio:redstone_alloy_ingot'})
    event.remove({ output: 'gtceu:lv_mixer'})
    event.remove({ output: 'storagenetwork:kabel'})
    event.remove({ output: 'storagenetwork:master'})
    event.remove({ output: 'storagenetwork:request'})
    event.remove({ output: 'sophisticatedbackpacks:upgrade_base'})
    event.remove({ output: 'functionalstorage:copper_upgrade'})
    event.remove({ output: 'ironfurnaces:augment_speed'})
    event.remove({ output: 'enderio:pressurized_fluid_conduit'})
    event.remove({ output: 'ad_astra:iron_rod'})
    event.remove({ output: 'minecraft:redstone', input: 'gtceu:redstone_plate'})
    event.remove({ output: 'gtceu:mv_mixer'})
    event.remove({ output: 'gtceu:rubber_planks'})
    event.remove({ output: 'enderio:alloy_smelter'})
    event.remove({ output: 'enderio:primitive_alloy_smelter'})
    event.remove({ output: 'functionalstorage:collector_upgrade'})
    event.remove({ output: 'functionalstorage:pusher_upgrade'})
    event.remove({ output: 'functionalstorage:puller_upgrade'})
    event.remove({ output: 'endertanks:ender_tank'})
    event.remove({ output: 'enderchests:ender_chest'})
    event.remove({ output: 'ae2:controller'})
    event.remove({ output: 'bonsaitrees3:bonsaipot'})
    event.remove({ output: 'ae2:inscriber'})
    event.remove({ output: 'ae2:quartz_glass'})
    event.remove({ output: 'ae2:cell_component_1k'})
    event.remove({ output: 'ae2:cell_component_4k'})
    event.remove({ output: 'ae2:cell_component_16k'})
    event.remove({ output: 'ae2:cell_component_64k'})
    event.remove({ output: 'ae2:cell_component_256k'})
    event.remove({ output: 'megacells:cell_component_1m'})
    event.remove({output: 'megacells:cell_component_4m'})
    event.remove({output: 'megacells:cell_component_16m'})
    event.remove({output: 'megacells:cell_component_64m'})
    event.remove({output: 'megacells:cell_component_256m'})
    event.remove({ output: 'ae2:drive'})
    event.remove({ output: 'ae2:blank_pattern'})
    event.remove({ output: 'ad_astra:nasa_workbench'})
    event.remove({ output: 'ae2:crafting_unit'})
    event.remove({ output: 'ae2:pattern_provider'})
    event.remove({ output: 'ae2:molecular_assembler'})
    event.remove({ id: 'solarflux:photovoltaic_cell_1' })
    event.remove({ output: 'solarflux:mirror'})
    event.remove({ output: 'gtceu:fluid_filter'})
    event.remove({ output: 'fluxnetworks:flux_dust'})
    event.remove({ output: 'bloodmagic:blankrune'})
    event.remove({ output: 'bloodmagic:altar'})
    event.remove({ output: 'bloodmagic:soulforge'})
    event.remove({ output: 'bloodmagic:demoncrystallizer'})
    event.remove({ output: 'bloodmagic:activationcrystalweak'})
    event.remove({ output: 'extendedcrafting:advanced_table'})
    event.remove({ output: 'extendedcrafting:elite_component'})
    event.remove({ output: 'extendedcrafting:elite_catalyst'})
    event.remove({ output: 'extendedcrafting:elite_table'})
    event.remove({ output: 'extendedcrafting:compressor'})
    event.remove({ output: 'extendedcrafting:crafting_core'})
    event.remove({ output: 'angelring:angel_ring'})
    event.remove({ output: 'ad_astra:tier_2_rocket'})
    event.remove({ id: 'gtceu:fusion_reactor/arsenic_and_ruthenium_to_darmstadtium_plasma'})
    event.remove({ output: 'megacells:sky_steel_ingot'})
    event.remove({ output: 'ae2:charger'})
    event.remove({ output: 'draconicevolution:draconium_ingot', input: 'draconicevolution:draconium_dust'})
    event.remove({ output: 'gtceu:mega_blast_furnace'})
    event.remove({ output: 'gtceu:blacklight'})
    event.remove({ output: 'gtceu:wetware_processor_mainframe'})
    event.remove({ output: 'draconicevolution:draconium_core'})
    event.remove({ output: 'draconicevolution:particle_generator'})
    event.remove({ output: 'draconicevolution:basic_crafting_injector'})
    event.remove({ output: 'draconicevolution:crafting_core'})
    event.remove({ output: 'draconicevolution:disenchanter'})
    event.remove({ output: 'draconicevolution:energy_transfuser'})
    event.remove({ output: 'draconicevolution:fluid_gate'})
    event.remove({ output: 'draconicevolution:flux_gate'})
    event.remove({ output: 'draconicevolution:generator'})
    event.remove({ output: 'draconicevolution:energy_core_stabilizer'})
    event.remove({ output: 'gtceu:tiny_diamond_dust'})
    event.remove({ output: 'gtceu:uhv_energy_input_hatch'})
    event.remove({ output: 'gtceu:uhv_energy_output_hatch'})
    event.remove({ mod: 'watersources'})
    event.remove({ output: 'minecraft:paper'})
    event.remove({ output: 'extendedcrafting:singularity'})
    event.remove({ output: 'extendedcrafting:ultimate_singularity'})
    event.remove({ output: ['ad_astra:steel_cable', 'ad_astra:desh_cable', 'ad_astra:wrench', 'ad_astra:desh_fluid_pipe', 'ad_astra:ostrum_fluid_pipe', 'ad_astra:oxygen_sensor', 'ad_astra:tier_3_rocket', 'ad_astra:tier_4_rocket']})
    event.remove({ mod: 'minecraft', output: ['minecraft:enchanting_table', 'minecraft:lightning_rod', 'minecraft:crafting_table', 'minecraft:furnace']})
    event.remove({ output: ['enderio:copper_alloy_ingot', 'enderio:energetic_alloy_ingot', 'enderio:vibrant_alloy_ingot', 'enderio:end_steel_ingot', 'enderio:dark_steel_ingot']})
    event.remove({ output: ['enderio:painting_machine', 'enderio:wired_charger', 'enderio:stirling_generator', 'enderio:sag_mill', 'enderio:slice_and_splice', 'enderio:impulse_hopper', 'enderio:soul_engine', 'enderio:soul_binder', 'enderio:crafter', 'enderio:powered_spawner']})
    event.remove({ output: ['ad_astra:oxygen_gear', 'ad_astra:engine_frame', 'ad_astra:fan', 'ad_astra:rocket_nose_cone', 'ad_astra:rocket_fin']})
    event.remove({ output: 'ad_astra:gas_tank'})
    event.remove({ output: 'ae2:condenser'})
    event.remove({ output: 'gtceu:nan_certificate'})
    event.remove({ type: 'ad_astra:nasa_workbench'})
    event.remove({ output: ['avaritia:diamond_lattice', 'avaritia:cosmic_meatballs', 'avaritia:crystal_matrix_ingot', 'avaritia:neutron_collector', 'avaritia:dense_neutron_collector', 'avaritia:denser_neutron_collector', 'avaritia:densest_neutron_collector', 'avaritia:neutron_compressor']})
    event.remove({ output: ['draconicevolution:creative_op_capacitor', 'draconicevolution:creative_capacitor', 'ae2:creative_energy_cell', 'enderio:creative_power']})
    event.remove({ output: 'avaritia:neutron_gear', mod: 'avaritia'})
    event.remove({ output: ['draconicevolution:celestial_manipulator', 'draconicevolution:energy_pylon', 'draconicevolution:energy_core', 'draconicevolution:crystal_binder', 'draconicevolution:wyvern_energy_core', 'draconicevolution:reactor_prt_in_rotor', 'draconicevolution:reactor_prt_out_rotor', 'draconicevolution:reactor_prt_rotor_full', 'draconicevolution:wyvern_core']})
    event.remove({ output: ['draconicevolution:chaos_shard', 'draconicevolution:large_chaos_frag', 'draconicevolution:medium_chaos_frag', 'draconicevolution:small_chaos_frag'], mod: 'draconicevolution'})
    event.remove({ output: ['ae2:export_bus', 'ae2:import_bus', 'ae2:interface', 'ae2:energy_acceptor']})
    event.remove({ output: 'gtceu:pyrochlore_dust', input: 'gtceu:refined_apatite_ore'})

  })
