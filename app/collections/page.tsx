'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

interface Product {
  id: string;
  name: string;
  material: string;
  size: string;
  description: string;
  madeBy: string;
  madeIn: string;
  care: string;
  image: string;
}

const products: Product[] = [
  { id: 'c-1-1', name: 'BASKET 001', material: 'Carandillo Palm Fiber', size: '17" x 13" x 13"', description: 'A structured basket woven from wild-harvested carandillo palm fiber using a flat interlocking technique. The dense weave forms a sculptural silhouette, while a contrasting geometric band emphasizes the natural variation and texture of the material.', madeBy: 'Sofía', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth to remove dust from the weave. Do not submerge or soak natural-fiber baskets in water.\nKeep away from direct sunlight, which may fade natural tones and weaken the fibers over time. Avoid humid or damp environments, including bathrooms and basements, to prevent mold and mildew.\nStore in a well-ventilated space at a stable temperature. To preserve the shape, avoid placing heavy objects on top.', image: '/c-1-1.jpg' },
  { id: 'c-1-2', name: 'BASKET 002', material: 'Carandillo Palm Fiber', size: '12" x 10" x 6"', description: 'A structured basket bag woven from wild-harvested carandillo palm fiber. Natural and terracotta-toned fibers form a geometric herringbone pattern, while hand-tied cord handles add a tactile finish to the squared silhouette.', madeBy: 'Sofía', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth to remove dust from the weave. Do not submerge or soak natural-fiber baskets in water.\nKeep away from direct sunlight, which may fade natural tones and weaken the fibers over time. Avoid humid or damp environments, including bathrooms and basements, to prevent mold and mildew.\nStore in a well-ventilated space at a stable temperature. To preserve the shape, avoid placing heavy objects on top.', image: '/c-1-2.jpg' },
  { id: 'c-1-3', name: 'KNIFE 001', material: 'Solid Algarrobo Wood and Handcrafted Alpaca Silver', size: '5 1/4" x 1"', description: 'A pair of butter knives crafted from solid algarrobo wood and alpaca silver. Hand-shaped wooden handles contrast with smooth, rounded blades, creating a balanced composition of warm timber and polished metal.', madeBy: 'Marissa', madeIn: 'Salta, Argentina', care: 'Hand-wash after use with warm water, mild soap, and a soft cloth or sponge. Do not soak or place in the dishwasher. Prolonged moisture may affect the wooden handles and accelerate discoloration of the metal. Dry immediately and thoroughly with a clean, soft cloth.\nAvoid abrasive sponges, steel wool, bleach, citrus-based detergents, and harsh chemical cleaners, as they may scratch or alter the alpaca silver finish.\nIf the metal begins to develop a patina, gently buff it with a soft polishing cloth. Keep any metal polish away from the wooden handles and wash the blades thoroughly before use.\nStore in a dry place away from heat and humidity. Natural variations in the wood and the gradual development of a patina are inherent to the materials.', image: '/c-1-3.jpg' },
  { id: 'c-2-1', name: 'THROW 001', material: 'Llama Fiber', size: '2.3\' x 7.2\'', description: 'A lightweight throw defined by its structural weave and raw materiality. Handwoven from undyed llama fiber on manual tension looms, it preserves its natural ivory tone and subtle tonal variation. Variations in the weave make each piece distinct.', madeBy: 'Guzmán', madeIn: 'Salta, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-2-1.jpg' },
  { id: 'c-2-2', name: 'THROW 002', material: 'Chaguar Fiber', size: '4.2\' x 3.2\'', description: 'A highly structured throw hand-knotted from wild-harvested chaguar fiber. Colored with pigments derived from native plants, it has a firm, tactile surface and an irregular density that reflects the natural variation of the material.', madeBy: 'Luisa', madeIn: 'Salta, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers.\nIf the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat.', image: '/c-2-2.jpg' },
  { id: 'c-2-3', name: 'THROW 003', material: 'Llama Fiber', size: '2.3\' x 7.2\'', description: 'A lightweight throw defined by its structural weave and raw materiality. Handwoven from undyed llama fiber on manual tension looms, its tonal palette comes entirely from the fiber\'s natural color variation, without synthetic dyes or chemical treatments.', madeBy: 'Guzmán', madeIn: 'Salta, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-2-3.jpg' },
  { id: 'c-3-1', name: 'QUILT 001', material: 'Hand-Brushed Llama Fiber', size: '9\' x 9.5\'', description: 'An oversized bed cover woven entirely from undyed llama fiber and finished with a manual brushing technique that creates a dense, soft surface. Its substantial construction provides natural warmth while emphasizing the depth and texture of the fiber.', madeBy: 'Andrea', madeIn: 'Jujuy, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Shedding: Some initial shedding is normal with natural wool and should not be pulled by hand.\nLoose fibers or threads: Trim carefully with scissors rather than pulling.\nNatural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-3-1.jpg' },
  { id: 'c-3-2', name: 'QUILT 002', material: 'Hand-Brushed Llama Fiber', size: '9\' x 9.5\'', description: 'An oversized bed cover woven from undyed llama fiber and finished with a manual brushing technique that creates a soft, raised surface. The linear black motif is woven into the structure using the natural tonal variations of the fiber, without synthetic dyes or treatments.', madeBy: 'Martina', madeIn: 'Tucuman, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Shedding: Some initial shedding is normal with natural wool and should not be pulled by hand.\nLoose fibers or threads: Trim carefully with scissors rather than pulling.\nNatural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-3-2.jpg' },
  { id: 'c-4-1', name: 'TAZA 001', material: 'Glazed Ceramic', size: '2.5" x 4" x 2.5"', description: 'A pair of small vessels hand-shaped from ceramic and finished with a dense mineral glaze. High-temperature firing creates deep tonal variation and areas of vitrification, giving each surface a distinct depth and reflective quality.', madeBy: 'Pilar', madeIn: 'Salta, Argentina', care: 'Remove surface dust with a soft, dry cloth or a soft-bristled brush. For small marks, wipe gently with a clean, slightly damp cloth and dry immediately. Do not soak, submerge, or place in the dishwasher. Avoid abrasive sponges, detergents, oils, and chemical cleaners, as they may alter the surface or be absorbed by unglazed clay.\nKeep away from sudden temperature changes, direct heat, and freezing conditions.\nHandle with both hands and avoid lifting the piece by its rim or handles.\nUnless specifically identified as watertight, display without water or use with dried botanicals only.\nVariations in tone, texture, glaze, and surface markings are inherent to the handmade and firing processes.', image: '/c-4-1.jpg' },
  { id: 'c-4-2', name: 'VASE 001', material: 'Clay, Unglazed', size: '7.5" x 3.5" x 5"', description: 'A low-profile vessel hand-shaped from unglazed clay. Its rounded body and pierced side handles give the compact form a sculptural presence, while the mottled surface reveals the natural variation of the material.', madeBy: 'Sofía', madeIn: 'Salta, Argentina', care: 'Remove surface dust with a soft, dry cloth or a soft-bristled brush. For small marks, wipe gently with a clean, slightly damp cloth and dry immediately. Do not soak, submerge, or place in the dishwasher. Avoid abrasive sponges, detergents, oils, and chemical cleaners, as they may alter the surface or be absorbed by unglazed clay.\nKeep away from sudden temperature changes, direct heat, and freezing conditions.\nHandle with both hands and avoid lifting the piece by its rim or handles.\nUnless specifically identified as watertight, display without water or use with dried botanicals only.\nVariations in tone, texture, glaze, and surface markings are inherent to the handmade and firing processes.', image: '/c-4-2.jpg' },
  { id: 'c-4-3', name: 'VASE 002', material: 'Terracota Clay', size: '7.5" x 8" x 7.5"', description: 'A rounded vessel hand-shaped from unglazed terracotta clay. Its full body and gently flared rim create a balanced silhouette, while subtle variations across the surface reveal the natural character of the material.', madeBy: 'Anicia', madeIn: 'Salta, Argentina', care: 'Remove surface dust with a soft, dry cloth or a soft-bristled brush. For small marks, wipe gently with a clean, slightly damp cloth and dry immediately. Do not soak, submerge, or place in the dishwasher. Avoid abrasive sponges, detergents, oils, and chemical cleaners, as they may alter the surface or be absorbed by unglazed clay.\nKeep away from sudden temperature changes, direct heat, and freezing conditions.\nHandle with both hands and avoid lifting the piece by its rim or handles.\nUnless specifically identified as watertight, display without water or use with dried botanicals only.\nVariations in tone, texture, glaze, and surface markings are inherent to the handmade and firing processes.', image: '/c-4-3.jpg' },
  { id: 'c-5-1', name: 'TABLA 001', material: 'Algarrobo Wood and Alpaca Silver', size: '6" × 10"', description: 'A serving board hand-shaped from solid algarrobo wood and finished with a custom-fitted alpaca silver edge. The dense, dark grain contrasts with the smooth metal border, bringing together woodworking and silversmithing in a refined, functional form.', madeBy: 'Matias', madeIn: 'Salta, Argentina', care: 'Hand-wash after use with warm water, mild soap, and a soft sponge. Do not submerge, soak, or place in the dishwasher. Dry immediately with a clean cloth, then allow the board to air-dry completely before storing.\nTo maintain the wood, apply a thin layer of food-safe mineral oil whenever the surface begins to feel dry. Avoid cooking oils, which may become rancid over time.\nClean the alpaca silver edge with a soft, dry cloth. Avoid abrasive sponges, metal polishes, and chemical cleaners, as they may scratch or alter the finish.\nDo not cut directly against the metal edge or use the board with excessive force.\nStore flat or upright in a dry, well-ventilated space, away from direct sunlight and heat.\nNatural variations in the wood grain and the gradual development of a patina on the metal are inherent to the materials.', image: '/c-5-1.jpg' },
  { id: 'c-5-2', name: 'BAG 001', material: 'Chaguar Fiber', size: '~19" Height', description: 'A utilitarian bag hand-knotted from high-tensile chaguar fiber. Dyed with plant-derived pigments, its open-mesh construction creates a durable, lightweight structure with a restrained organic silhouette.', madeBy: 'Sofía', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers.\nIf the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat.\nAvoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-5-2.jpg' },
  { id: 'c-5-3', name: 'BAG 002', material: 'Chaguar Fiber', size: '~19" Height', description: 'A utilitarian bag hand-knotted from high-tensile chaguar fiber. Dyed with plant-derived pigments, its open-mesh construction creates a durable, lightweight structure with a restrained organic silhouette.', madeBy: 'Sofía', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers.\nIf the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat.\nAvoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-5-3.jpg' },
  { id: 'c-6-1', name: 'SCARF 001', material: 'Llama & Bamboo Fiber', size: '16–18" × 79"', description: 'A scarf woven from a blend of llama and bamboo fiber. The lightweight construction creates a soft drape, while warm brown and cool grey fibers form a subtle two-tone surface.', madeBy: 'Romina', madeIn: 'San Juan, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand. For pieces incorporating recycled plastic or silk, avoid friction, sharp objects, and rough surfaces that may snag or pull the woven structure. Keep away from direct heat, as high temperatures may distort the recycled plastic and weaken the silk fibers. Do not iron, steam, or hang for extended periods.', image: '/c-6-1.jpg' },
  { id: 'c-6-2', name: 'SCARF 002', material: 'Llama Fiber', size: '16–18" × 79"', description: 'A lightweight scarf woven from undyed llama fiber on manual tension looms. Its natural ivory tone and subtle tonal variation extend across the length, creating a soft drape with a clean, lightly textured surface.', madeBy: 'Romina', madeIn: 'San Juan, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-6-2.jpg' },
  { id: 'c-6-3', name: 'SCARF 003', material: 'Llama & Sheep Fiber', size: '16–18" × 79"', description: 'A scarf handwoven from a blend of undyed llama and sheep wool on manual tension looms. Its deep brown and black palette comes entirely from the fibers\' natural color variation, without synthetic dyes or chemical treatments.', madeBy: 'Romina', madeIn: 'San Juan, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand. For pieces incorporating recycled plastic or silk, avoid friction, sharp objects, and rough surfaces that may snag or pull the woven structure. Keep away from direct heat, as high temperatures may distort the recycled plastic and weaken the silk fibers. Do not iron, steam, or hang for extended periods.', image: '/c-6-3.jpg' },
  { id: 'c-7-1', name: 'RUG 001', material: 'Sheep Wool', size: '2\' x 3\'', description: 'Hand-loomed from raw sheep wool using the traditional baetón technique and colored with botanical and mineral pigments. Alternating terracotta, blush, and beige blocks create a rhythmic composition, with balanced color fields that emphasize the texture of the weave.', madeBy: 'Liz', madeIn: 'Santiago Del Estero, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-7-1.jpg' },
  { id: 'c-7-2', name: 'RUG 002', material: 'Sheep Wool', size: '2\' x 3\'', description: 'Hand-loomed from raw sheep wool using the traditional baetón technique and colored with botanical and mineral pigments. Repeating black bands over blush and warm off-white tones create a structured composition with a bold graphic rhythm.', madeBy: 'Daniela', madeIn: 'Santiago Del Estero, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-7-2.jpg' },
  { id: 'c-7-3', name: 'RUG 003', material: 'Sheep Wool', size: '4\' x 6\'', description: 'Hand-loomed from raw sheep wool using the traditional baetón technique and colored with botanical and mineral pigments. Bold black motifs contrast with a warm off-white ground, creating a graphic composition that balances traditional technique with a contemporary sensibility.', madeBy: 'Regina', madeIn: 'Santiago Del Estero, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-7-3.jpg' },
  { id: 'c-8-1', name: 'BAG 003', material: 'Reclaimed Plastic & Chaguar', size: '14" × 24"', description: 'A large open-mesh shoulder bag hand-knotted from wild-harvested chaguar fiber and reclaimed plastic strips. The contrast between natural and industrial materials creates a dense, tactile grid with subtle tonal variation across the surface.', madeBy: 'Romina', madeIn: 'San Juan, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers.\nIf the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat.\nAvoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-8-1.jpg' },
  { id: 'c-8-2', name: 'BAG 004', material: 'Silk & Reclaimed Plastic', size: '12" × 24"', description: 'A structured shoulder bag woven from silk and reclaimed plastic strips using a flat interlocking technique. The dense, lustrous surface contrasts the smooth natural fiber with the weight and texture of reclaimed plastic, finished with a braided strap.', madeBy: 'Romina', madeIn: 'San Juan, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers.\nIf the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat.\nAvoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-8-2.jpg' },
  { id: 'c-9-1', name: 'PILLOW 001', material: 'Hand-Brushed Llama Fiber', size: '12" diameter', description: 'A round pillow handwoven from undyed llama fiber with a subtle grid weave. Contrasting black and natural stripes wrap the form, creating a bold linear composition. Finished with a plush polyester insert.', madeBy: 'Andrea', madeIn: 'Jujuy, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments.\nLoose fibers or threads: Trim carefully with scissors rather than pulling.\nNatural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-9-1.jpg' },
  { id: 'c-9-2', name: 'PILLOW 002', material: 'Hand-Brushed Llama Fiber', size: '12" diameter', description: 'A round pillow handwoven from undyed llama fiber and finished with a manual brushing technique that creates a soft, raised surface. Contrasting natural-color panels define the form while emphasizing the volume and texture of the fiber. Finished with a plush polyester insert.', madeBy: 'Yamila', madeIn: 'Tucuman, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments.\nLoose fibers or threads: Trim carefully with scissors rather than pulling.\nNatural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-9-2.jpg' },
  { id: 'c-9-3', name: 'PILLOW 003', material: 'Hand-Brushed Llama Fiber', size: '20"X20" / 16¨X16¨', description: 'A square pillow handwoven from undyed llama fiber and finished with a manual brushing technique that creates a soft, raised surface. The checkered composition highlights the fiber\'s natural color variation through a restrained graphic pattern. Finished with a natural sheep wool insert.', madeBy: 'Andrea', madeIn: 'Jujuy, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments.\nLoose fibers or threads: Trim carefully with scissors rather than pulling.\nNatural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-9-3.jpg' },
  { id: 'c-10-1', name: 'TABLA 001', material: 'Algarrobo Wood and Alpaca Silver', size: '6" × 10"', description: 'A serving board hand-shaped from solid algarrobo wood and finished with a custom-fitted alpaca silver edge. The dense, dark grain contrasts with the smooth metal border, bringing together woodworking and silversmithing in a refined, functional form.', madeBy: 'Matias', madeIn: 'Salta, Argentina', care: 'Hand-wash after use with warm water, mild soap, and a soft sponge. Do not submerge, soak, or place in the dishwasher. Dry immediately with a clean cloth, then allow the board to air-dry completely before storing.\nTo maintain the wood, apply a thin layer of food-safe mineral oil whenever the surface begins to feel dry. Avoid cooking oils, which may become rancid over time.\nClean the alpaca silver edge with a soft, dry cloth. Avoid abrasive sponges, metal polishes, and chemical cleaners, as they may scratch or alter the finish.\nDo not cut directly against the metal edge or use the board with excessive force.\nStore flat or upright in a dry, well-ventilated space, away from direct sunlight and heat.\nNatural variations in the wood grain and the gradual development of a patina on the metal are inherent to the materials.', image: '/c-10-1.jpg' },
  { id: 'c-10-2', name: 'BAG 002', material: 'Chaguar Fiber', size: '~19" Height', description: 'A utilitarian bag hand-knotted from high-tensile chaguar fiber. Dyed with plant-derived pigments, its open-mesh construction creates a durable, lightweight structure with a restrained organic silhouette.', madeBy: 'Sofía', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers.\nIf the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat.\nAvoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-10-2.jpg' },
];

export default function Collections2() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    if (selectedProduct) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProduct]);
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* ── Header ──────────────────────────────────────── */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '8px 60px 16px 60px', background: '#ffffff', zIndex: 1000 }}>
        <div style={{ width: 508, fontFamily: 'var(--font-fraunces)', fontSize: 40, fontWeight: 300, color: 'var(--ink)', letterSpacing: '0.02em', whiteSpace: 'nowrap', lineHeight: 1, display: 'flex', alignItems: 'flex-end' }}>
          estudio malva<span style={{ color: 'var(--clay)', fontSize: '1.3em' }}>.</span>
        </div>
        <nav style={{ display: 'flex', gap: 50, alignItems: 'flex-end' }}>
          <Link href="#collections" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'collections' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('collections')} onMouseLeave={() => setHoveredNav(null)}>
            Collections
          </Link>
          <Link href="#journal" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'journal' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('journal')} onMouseLeave={() => setHoveredNav(null)}>
            The Journal
          </Link>
          <Link href="#care" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'care' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('care')} onMouseLeave={() => setHoveredNav(null)}>
            Care & Maintenance
          </Link>
          <Link href="/contact" style={{ fontFamily: 'var(--font-archivo)', fontSize: 18, fontWeight: 400, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1, borderBottom: hoveredNav === 'contact' ? '3px solid #a95c43' : 'none', paddingBottom: 2 }} onMouseEnter={() => setHoveredNav('contact')} onMouseLeave={() => setHoveredNav(null)}>
            Contact
          </Link>
        </nav>
      </header>

      {/* ── Intro Section ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '60px 60px', marginTop: 50 }}>
        <div style={{ marginLeft: '33.33%', maxWidth: '66.67%' }}>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontSize: 40, fontWeight: 300, color: 'var(--ink)', lineHeight: 1.2, margin: '0 0 20px 0', letterSpacing: '0.02em' }}>
            INITIAL EDITION
          </h1>
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
            A collection of one-of-a-kind samples developed to explore the materials, techniques, and creative possibilities of the artisans we work with. Together, these pieces mark the beginning of the collections to come.
          </p>
        </div>
      </section>

      {/* ── Collections Grid ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '60px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Row 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[0])}>
              <img src="/c-1-1.jpg" alt="Collection 1-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[1])}>
              <img src="/c-1-2.jpg" alt="Collection 1-2" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 485, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[2])}>
              <img src="/c-1-3.jpg" alt="Collection 1-3" style={imgFill} />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[3])}>
              <img src="/c-2-1.jpg" alt="Collection 2-1" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[4])}>
              <img src="/c-2-2.jpg" alt="Collection 2-2" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[5])}>
              <img src="/c-2-3.jpg" alt="Collection 2-3" style={imgFill} />
            </div>
          </div>

          {/* Row 3 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 595, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[6])}>
              <img src="/c-3-1.jpg" alt="Collection 3-1" style={imgFill} />
            </div>
            <div style={{ width: 595, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[7])}>
              <img src="/c-3-2.jpg" alt="Collection 3-2" style={imgFill} />
            </div>
          </div>

          {/* Row 4 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[8])}>
              <img src="/c-4-1.jpg" alt="Collection 4-1" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[9])}>
              <img src="/c-4-2.jpg" alt="Collection 4-2" style={imgFill} />
            </div>
            <div style={{ width: 330, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[10])}>
              <img src="/c-4-3.jpg" alt="Collection 4-3" style={imgFill} />
            </div>
          </div>

          {/* Row 5 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 501, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[11])}>
              <img src="/c-5-1.jpg" alt="Collection 5-1" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 328, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[12])}>
              <img src="/c-5-2.jpg" alt="Collection 5-2" style={imgFill} />
            </div>
            <div style={{ width: 37 }} />
            <div style={{ width: 328, height: 612, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[13])}>
              <img src="/c-5-3.jpg" alt="Collection 5-3" style={imgFill} />
            </div>
          </div>

          {/* Row 6 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[14])}>
              <img src="/c-6-1.jpg" alt="Collection 6-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[15])}>
              <img src="/c-6-2.jpg" alt="Collection 6-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 498, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[16])}>
              <img src="/c-6-3.jpg" alt="Collection 6-3" style={imgFill} />
            </div>
          </div>

          {/* Row 7 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[17])}>
              <img src="/c-7-1.jpg" alt="Collection 7-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[18])}>
              <img src="/c-7-2.jpg" alt="Collection 7-2" style={imgFill} />
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ width: 520, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[19])}>
              <img src="/c-7-3.jpg" alt="Collection 7-3" style={imgFill} />
            </div>
          </div>

          {/* Row 8 */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 298, height: 447, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[20])}>
              <img src="/c-8-1.jpg" alt="Collection 8-1" style={imgFill} />
            </div>
            <div style={{ width: 20 }} />
            <div style={{ width: 298, height: 447, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[21])}>
              <img src="/c-8-2.jpg" alt="Collection 8-2" style={imgFill} />
            </div>
          </div>

          {/* Row 9 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[22])}>
              <img src="/c-9-1.jpg" alt="Collection 9-1" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[23])}>
              <img src="/c-9-2.jpg" alt="Collection 9-2" style={imgFill} />
            </div>
            <div style={{ width: 328, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[24])}>
              <img src="/c-9-3.jpg" alt="Collection 9-3" style={imgFill} />
            </div>
          </div>

          {/* Row 10 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 40 }}>
            <div style={{ width: 311, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[25])}>
              <img src="/c-10-1.jpg" alt="Collection 10-1" style={imgFill} />
            </div>
            <div style={{ width: 329 }} />
            <div style={{ width: 591, height: 428, overflow: 'hidden', flexShrink: 0, background: '#ddd', cursor: 'pointer' }} onClick={() => setSelectedProduct(products[26])}>
              <img src="/c-10-2.jpg" alt="Collection 10-2" style={imgFill} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Modal ──────────────────────────────────────── */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }} onClick={() => setSelectedProduct(null)}>
          <div style={{ background: '#ffffff', width: '90%', height: '90%', maxWidth: 1400, overflow: 'auto', position: 'relative', display: 'flex', flexDirection: 'column' }} onClick={(e) => e.stopPropagation()}>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                position: 'absolute',
                top: 30,
                right: 30,
                background: 'none',
                border: 'none',
                fontSize: 32,
                cursor: 'pointer',
                color: '#000',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2001,
              }}
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div style={{ display: 'flex', gap: 40, padding: '60px', height: '100%' }}>

              {/* Left Column - Product Info */}
              <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'space-between', minWidth: 0 }}>
                <div>
                  <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 38, fontWeight: 400, color: 'var(--ink)', margin: 0, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {selectedProduct.name}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: 0, letterSpacing: '0.02em' }}>Material</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.material}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: 0, letterSpacing: '0.02em' }}>Size</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.size}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>{selectedProduct.description}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: 0, textTransform: 'capitalize', letterSpacing: '0.02em' }}>Made by {selectedProduct.madeBy}</p>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: '4px 0 0 0', lineHeight: 1.6 }}>{selectedProduct.madeIn}</p>
                    </div>

                    <div>
                      <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: '24px 0 0 0', cursor: 'pointer', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.02em' }} onClick={() => window.location.href = '/contact'}>
                        [Inquire]
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column - Image */}
              <div style={{ flex: 1.44, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', minWidth: 0 }}>
                <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>

              {/* Right Column - Care Instructions */}
              <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', minWidth: 0, marginTop: 60 }}>
                  <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: 0, letterSpacing: '0.02em' }}>
                    Care & Maintenance
                  </p>
                  <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: '8px 0 0 0', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                    {selectedProduct.care}
                  </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={{ background: '#ffffff', padding: '150px 60px 30px 60px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Three-Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40, marginBottom: 20 }}>

            {/* Left Column - Contact */}
            <div>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                <a href="mailto:sales@estudiomalva.com" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                  sales@estudiomalva.com
                </a>
              </p>
            </div>

            {/* Middle Column - Made in Argentina */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
                Made in Argentina
              </p>
            </div>

            {/* Right Column - Social */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="https://instagram.com/estudio.malva" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
                @estudio.malva
              </a>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 12, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, color: 'var(--ink)', margin: 0, opacity: 0.7 }}>
              © 2026 estudio malva. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
