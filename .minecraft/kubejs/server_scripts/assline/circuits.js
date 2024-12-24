ServerEvents.recipes(event => {


    //  U E V   C I R C U I T S 
    
    
    
    event.recipes.gtceu.assembly_line('resonant_processor')
    .itemInputs('kubejs:highly_resonative_printed_circuit_board', '2x gtceu:wetware_processor', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc')
    .itemOutputs('2x kubejs:resonant_processor')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(200)
    .EUt(GTValues.VA[GTValues.UEV])     
    event.recipes.gtceu.assembly_line('resonant_processor_assembly')
    .itemInputs('kubejs:highly_resonative_printed_circuit_board', 'kubejs:resonant_processor', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '7x gtceu:dense_crystal_matrix_plate')
    .itemOutputs('1x kubejs:resonant_processor_assembly')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(400)
    .EUt(GTValues.VA[GTValues.UEV])     
    event.recipes.gtceu.assembly_line('resonant_processor_computer')
    .itemInputs('2x kubejs:resonant_processor_assembly', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '7x gtceu:dense_crystal_matrix_plate', '32x gtceu:neutronium_plate')
    .itemOutputs('1x kubejs:resonant_processor_computer')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(800)
    .EUt(GTValues.VA[GTValues.UEV])   
    event.recipes.gtceu.assembly_line('resonant_processor_mainframe')
    .itemInputs('2x kubejs:resonant_processor_computer', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '7x gtceu:dense_crystal_matrix_plate', '32x gtceu:neutronium_plate', 'avaritia:eternal_singularity', '16x avaritia:neutron_gear', 'kubejs:highly_resonative_soc')
    .itemOutputs('1x kubejs:resonant_processor_mainframe')
    .inputFluids(
    Fluid.of('gtceu:soldering_alloy', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124)
    )
    .duration(1600)
    .EUt(GTValues.VA[GTValues.UEV])   


//  U I V   C I R C U I T S 


event.recipes.gtceu.circuit_assembly_line('dragon_processor')
.itemInputs('kubejs:dragon_infused_neuro_processing_unit', '2x kubejs:resonant_processor', '64x gtceu:fine_draconium_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_cosmic_neutronium_wire', 'kubejs:extremely_advanced_soc', 'kubejs:quantum_data_module', 'avaritia:eternal_singularity')
.itemOutputs('2x kubejs:dragon_processor')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(200)
.EUt(GTValues.VA[GTValues.UIV])     
event.recipes.gtceu.circuit_assembly_line('dragon_processor_assembly')
.itemInputs('2x kubejs:draconic_printed_circuit_board', 'kubejs:dragon_processor', '64x gtceu:fine_draconium_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_cosmic_neutronium_wire', 'kubejs:extremely_advanced_soc', 'kubejs:draconium_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('2x kubejs:dragon_processor_assembly')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(400)
.EUt(GTValues.VA[GTValues.UIV])     
event.recipes.gtceu.circuit_assembly_line('dragon_processor_computer')
.itemInputs('2x kubejs:dragon_processor_assembly', 'kubejs:draconic_printed_circuit_board', '64x gtceu:fine_draconium_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_cosmic_neutronium_wire', 'kubejs:extremely_advanced_soc', '7x gtceu:dense_crystal_matrix_plate', '4x kubejs:cosmic_neutronium_heavy_plating', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:dragon_processor_computer')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(800)
.EUt(GTValues.VA[GTValues.UIV])   
event.recipes.gtceu.circuit_assembly_line('dragon_processor_mainframe')
.itemInputs('2x kubejs:dragon_processor_computer', '4x kubejs:draconium_heavy_plating', '64x gtceu:advanced_smd_capacitor', 'kubejs:dragon_infused_neuro_processing_unit', 'kubejs:extremely_advanced_soc', '4x kubejs:draconic_printed_circuit_board', '4x kubejs:neutronium_heavy_plating', 'avaritia:eternal_singularity', '16x avaritia:neutron_gear', 'kubejs:quantum_data_module')
.itemOutputs('1x kubejs:dragon_processor_mainframe')
.inputFluids(
    Fluid.of('gtceu:neutronium', 1152),
    Fluid.of('gtceu:polybenzimidazole', 1152),
    Fluid.of('gtceu:condensed_star_matter', 8124),
    Fluid.of('gtceu:naquadria', 8124)
)
.duration(1600)
.EUt(GTValues.VA[GTValues.UIV])   
})