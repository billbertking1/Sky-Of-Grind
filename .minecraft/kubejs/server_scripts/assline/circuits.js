ServerEvents.recipes(event => {


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
.itemInputs('kubejs:highly_resonative_printed_circuit_board', 'kubejs:resonant_processor', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '8x gtceu:dense_crystal_matrix_plate')
.itemOutputs('1x kubejs:resonant_processor_assembly')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(400)
.EUt(GTValues.VA[GTValues.UEV])     
event.recipes.gtceu.assembly_line('resonant_processor_computer')
.itemInputs('2x kubejs:resonant_processor_assembly', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '8x gtceu:dense_crystal_matrix_plate', '32x gtceu:neutronium_plate')
.itemOutputs('1x kubejs:resonant_processor_computer')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(800)
.EUt(GTValues.VA[GTValues.UEV])   
event.recipes.gtceu.assembly_line('resonant_processor_mainframe')
.itemInputs('2x kubejs:resonant_processor_computer', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:advanced_smd_capacitor', '64x gtceu:fine_kaemite_wire', 'gtceu:highly_advanced_soc', '8x gtceu:dense_crystal_matrix_plate', '32x gtceu:neutronium_plate', 'avaritia:eternal_singularity', '16x avaritia:neutron_gear', 'kubejs:highly_resonative_soc')
.itemOutputs('1x kubejs:resonant_processor_mainframe')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(1600)
.EUt(GTValues.VA[GTValues.UEV])   

})