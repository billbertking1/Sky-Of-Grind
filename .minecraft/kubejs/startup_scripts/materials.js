GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('infinity', Infinity, Infinity, -1, null, '∞', false);
    event.create('infinity_catalyst', Infinity, Infinity, -1, null, '∞', false);
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('infinity').parent(GTMaterialIconSet.SHINY)
    event.create('infinity_catalyst').parent(GTMaterialIconSet.FINE)
    event.create('atomic_alloy').parent(GTMaterialIconSet.BRIGHT)
    event.create('cosmic_neutronium').parent(GTMaterialIconSet.BRIGHT)
})




GTCEuStartupEvents.registry('gtceu:material', event => {
    
    const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
    const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
    const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty');

GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)
GTMaterials.StainlessSteel.addFlags(GTMaterialFlags.GENERATE_DENSE)

GTMaterials.Californium.setProperty(PropertyKey.DUST, new $DustProperty());

GTMaterials.Nihonium.setProperty(PropertyKey.DUST, new $DustProperty());
GTMaterials.Nihonium.setProperty(PropertyKey.INGOT, new $IngotProperty());



    event.create('star_matter')
        .ingot().fluid()
        .cableProperties(GTValues.V[GTValues.IV], 2, 0, true)
        .color(0x0059ff)
    event.create('mercury_vapor')
        .fluid()
        .color(0xd7d7db)
    event.create('inert_life_essence')
        .fluid()
        .color(0xe0bcc3)
    event.create('raw_life_essence')
        .liquid()
        .color(0xa8979a)
    event.create('processed_life_essence')
        .liquid()
        .color(0xff7878)
    event.create('processed_naquadria_sulfate')
        .liquid()
        .color(0x82ff82)
    event.create('acidic_processed_naquadria_sulfate')
        .liquid()
        .color(0xc5ff82)
    event.create('acidic_naquadria_fuel_solution')
        .liquid()
        .color(0xc5ff82)
    event.create('impure_naquadria_fuel')
        .liquid()
        .color(0x6d9c76)
    event.create('pure_naquadria_fuel')
        .liquid()
        .color(0x426148)
    event.create('naquadria_plasma')
        .plasma()
        .color(0x426148)
    event.create('resonant_naquadah')
        .ingot().fluid().dust()
        .color(0x2b3d2d)
        .blastTemp(9100) 
        .cableProperties(GTValues.V[GTValues.UV], 4, 2, true)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.GENERATE_SPRING_SMALL,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.NO_ORE_SMELTING

        )
        event.create("crystal_matrix")
        .ingot().fluid()
        .color(0x66ffff)
        .iconSet('shiny')
        .fluidPipeProperties(100000, 64000, true, true, true, true)
        .cableProperties(GTValues.V[GTValues.UHV], 6, 0, true)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_DENSE);
        event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,  GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE)
        event.create('infinity_catalyst')
        .dust()
        .element(GTElements.get("infinity_catalyst"))
        .color(0xffffff)
        .iconSet('infinity_catalyst')
        .ore(1, 1,)

    event.create("triplatirium_235")
        .ingot().fluid().dust()
        .blastTemp(10800)
        .color(0x47ffaf)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.NO_SMELTING);

    event.create("atomic_alloy")
        .ingot().dust()
        .blastTemp(10800)
        .color(0x513499)
        .iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING);

    event.create("triplatirium_sulfate")
        .fluid()
        .color(0xbff52a)
    event.create("processed_triplatirium_sulfate")
        .fluid()
        .color(0x97ba38)
    event.create("trisulfate_slurry")
        .fluid()
        .color(0xbaa238)
    event.create("cleaned_trisulfate_slurry")
        .fluid()
        .color(0xcfbd70)
    event.create("trisulfate_solution")
        .fluid()
        .color(0xa9ccc7)
    event.create("pure_trisulfate_solution")
        .fluid()
        .color(0xc8dedb)
    event.create("trisulfate_waste")
        .fluid()
        .color(0x303635)
    event.create("californium_sulfate")
        .fluid()
        .color(0x99997c)
    event.create("processed_californium_sulfate")
        .fluid()
        .color(0x7c8799)
    event.create("cleaned_californium")
        .dust()
        .color(0xa3b2c9)
    event.create("condensed_star_matter")
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff)
    event.create("antimatter")
        .liquid().ingot()
        .color(0x8f34eb)
        .element('antimatter')
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING);
    event.create('reactable_fissioned_matter')
        .plasma()
        .color(0x270a4d)
        event.create('cosmic_neutronium')
        .ingot().dust()
        .color(0x161616)
        .element('cosmic_neutronium')
        .iconSet('radioactive')
        .blastTemp(13000, 'highest', 2097152, 2400)
        .cableProperties(GTValues.V[GTValues.OpV], 999, 0, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_ROUND,
            GTMaterialFlags.GENERATE_SPRING
        )
    event.create('heavy_duty_alloy_t1')
        .ingot().dust()
        .color(0x333e47)
        .blastTemp(10000)
        .cableProperties(GTValues.V[GTValues.EV], 2, 0, true)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.NO_SMELTING)
    event.create('heavy_duty_alloy_t2')
        .ingot().dust()
        .color(0xfbff00)
        .blastTemp(10000)
        .iconSet('metallic')
        .cableProperties(GTValues.V[GTValues.LuV], 4, 0, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.NO_SMELTING)
    event.create('heavy_duty_alloy_t3')
        .ingot().dust()
        .color(0xb2a7d4)
        .blastTemp(10000)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.NO_SMELTING)
    event.create('mixed_alloy')
        .ingot().dust()
        .color(0xe8c492)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
    event.create('kaemite')
        .ingot().dust().liquid()
        .color(0x00cfff)
        .ore(1, 1,)
        .element('kaemite')
        .iconSet('metallic')
        .cableProperties(GTValues.V[GTValues.UEV], 32, 0, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
    event.create('acidic_venus_residue')
        .liquid()
        .color(0x944e09)
    event.create('resonant_essence_residue')
        .liquid()
        .color(0x099409)
    event.create('resonant_essence')
        .ingot().dust().fluid()
        .color(0x8ceb34)
        .blastTemp(12000)
        .element('resonant_essence')
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.UEV], 256, 0, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW)
    event.create('energized_superconductor')
        .ingot().dust()
        .color(0xffa600)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.LV], 1, 0, true)
    event.create('hsc_superconductor')
        .ingot().dust()
        .color(0x3f403d)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.MV], 1, 0, true)
    event.create('platium_superconductor')
        .ingot().dust()
        .color(0xff0000)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.HV], 2, 0, true)
        event.create('crystal_superconductor')
        .ingot().dust()
        .color(0x6200ff)
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.ZPM], 4, 0, true)
    
        // B A C T E R I A L   S T U F F

        event.create("raw_bacterial_dna")
        .fluid()
        .color(0xf595eb)
        event.create("overgrown_bacterial_dna")
        .fluid()
        .color(0x95f5d0)
        event.create("panaeolus_cyanescens")
        .fluid()
        .color(0x3a5963)
        event.create("streptomyces_coelicolor")
        .fluid()
        .color(0x3a6353)
        event.create("pcr_its1_its2")
        .fluid()
        .color(0xdb393e)
        event.create("streptomyces_peucetius")
        .fluid()
        .color(0xdb3962)
        event.create("taq_polymerase")
        .fluid()
        .color(0x082b06)
        event.create("doxorubicin")
        .fluid()
        .color(0x062b18)
        event.create("phage")
        .fluid()
        .color(0x148f50)
        event.create("bacterium")
        .fluid()
        .color(0xe310b9)
        event.create("bacterial_dna")
        .fluid()
        .color(0xff0066)
        event.create("mycena_hypsizyga")
        .fluid()
        .color(0x00ff11)
        event.create("stropharic_hypoxylon")
        .fluid()
        .color(0x7a64f5)
        event.create("hypoxylon")
        .fluid().ingot().dust()
        .color(0x7c65fc)
        .element('hypoxylon')
        .iconSet('bright')
        .cableProperties(GTValues.V[GTValues.UXV], 64, 2, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_ORE_SMELTING)
    
    event.create('draconium')
        .ingot().fluid()
        .color(0x7A42AE)
        .element('draconium')
        .iconSet('metallic')
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_ROUND,
        )
        .blastTemp(13000, 'highest', 2097152, 2400)
        .cableProperties(GTValues.V[GTValues.UEV], 8, 4, false)
    
    event.create('awakened_draconium')
        .ingot().fluid()
        .color(0xFF6A00)
        .element('awakened_draconium')
        .iconSet('shiny')
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.GENERATE_ROUND
        )
        .blastTemp(15000, 'highest', 134217728, 3400)
        .cableProperties(GTValues.V[GTValues.UIV], 32, 4, false)
    
    event.create('californite')
        .ingot().fluid()
        .element('californite')
        .color(0xa0b0bd).secondaryColor(0x232020)
        .iconSet('radioactive')
    event.create('stabilized_iridium')
        .ingot().fluid()
        .element('stabilized_iridium')
        .color(0x9deafa).secondaryColor(0x232020)
        .iconSet('radioactive')
        .blastTemp(13000, 'highest', 2097152, 1400)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
    event.create('neutronic_chromite')
        .ingot()
        .element('neutronic_chromite')
        .color(0xf5c6da).secondaryColor(0x232020)
        .iconSet('radioactive')
        .blastTemp(10500, 'highest', 524288, 900)
        .flags(GTMaterialFlags.GENERATE_PLATE)
    event.create('radium_infused_lead')
        .ingot()
        .element('radium_lead')
        .color(0x52303e)
        .iconSet('shiny')
        .blastTemp(3500, 'highest', 2048, 900)
        .flags(GTMaterialFlags.GENERATE_PLATE)
    event.create('chaos')
        .gem()
        .ore(1, 1,)
        .element('chaos')
        .cableProperties(GTValues.V[GTValues.UIV], 512, 0, true)
        .color(0x010005)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LENS, GTMaterialFlags.GENERATE_DENSE)
    
/// C O S M I C   M A T E R I A L S   F U S I O N
    
event.create('cosmic_tungsten')
.ingot().fluid()
.element('cosmic_tungsten')
.color(0x04011c)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 8388608, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_LONG_ROD,
    GTMaterialFlags.GENERATE_ROUND
)
event.create('cosmic_titanium')
.ingot().fluid()
.element('cosmic_titanium')
.color(0x3d0245)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 8388608, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_LONG_ROD
)
event.create('cosmic_iridium')
.ingot().fluid()
.element('cosmic_iridium')
.color(0x016646)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 33554432, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_LONG_ROD
)
event.create('cosmic_osmium')
.ingot().fluid()
.element('cosmic_osmium')
.color(0x023e45)
.iconSet('radioactive')
.blastTemp(13000, 'highest', 8388608, 900)
.flags(
    GTMaterialFlags.GENERATE_PLATE, 
    GTMaterialFlags.GENERATE_ROD, 
    GTMaterialFlags.GENERATE_GEAR, 
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FRAME, 
    GTMaterialFlags.GENERATE_DENSE, 
    GTMaterialFlags.GENERATE_ROTOR, 
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_LONG_ROD,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_ROUND
)


    })


    