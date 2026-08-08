'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

const imgFill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

const products = [
  { id: 'c-1-1', name: 'Throw 001', material: 'Llama Fiber', size: '2.3\' x 7.2\'', description: 'A lightweight throw defined by its structural weave and raw materiality. Handwoven from undyed llama fiber on manual tension looms, it preserves its natural ivory tone and subtle tonal variation. Variations in the weave make each piece distinct.', madeBy: 'Guzmán', madeIn: 'Salta, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-1-1.jpg' },
  { id: 'c-1-2', name: 'Throw 002', material: 'Llama Fiber', size: '2.3\' x 7.2\'', description: 'A lightweight throw defined by its structural weave and raw materiality. Handwoven from undyed llama fiber on manual tension looms, its tonal palette comes entirely from the fiber\'s natural color variation, without synthetic dyes or chemical treatments.', madeBy: 'Guzmán', madeIn: 'Salta, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-1-2.jpg' },
  { id: 'c-1-3', name: 'Throw 003', material: 'Chaguar Fiber', size: '4.2\' x 3.2\'', description: 'A highly structured throw hand-knotted from wild-harvested chaguar fiber. Colored with pigments derived from native plants, it has a firm, tactile surface and an irregular density that reflects the natural variation of the material.', madeBy: 'Luisa', madeIn: 'Salta, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers. If the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat.', image: '/c-1-3.jpg' },
  { id: 'c-2-1', name: 'Rug 001', material: 'Sheep Wool', size: '4\' x 6\'', description: 'Hand-loomed from raw sheep wool using the traditional baetón technique and colored with botanical and mineral pigments. Bold black motifs contrast with a warm off-white ground, creating a graphic composition that balances traditional technique with a contemporary sensibility.', madeBy: 'Regina Guzman', madeIn: 'Santiago Del Estero, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-2-1.jpg' },
  { id: 'c-2-2', name: 'Rug 002', material: 'Sheep Wool', size: '2\' x 3\'', description: 'Hand-loomed from raw sheep wool using the traditional baetón technique and colored with botanical and mineral pigments. Alternating terracotta, blush, and beige blocks create a rhythmic composition, with balanced color fields that emphasize the texture of the weave.', madeBy: 'Liz', madeIn: 'Santiago Del Estero', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-2-2.jpg' },
  { id: 'c-2-3', name: 'Rug 003', material: 'Sheep Wool', size: '2\' x 3\'', description: 'Hand-loomed from raw sheep wool using the traditional baetón technique and colored with botanical and mineral pigments. Repeating black bands over blush and warm off-white tones create a structured composition with a bold graphic rhythm.', madeBy: 'Daniela', madeIn: 'Santiago Del Estero', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-2-3.jpg' },
  { id: 'c-3-1', name: 'Quilt 001', material: 'Hand-Brushed Llama Fiber', size: '9\' x 9.5\'', description: 'An oversized bed cover woven from undyed llama fiber and finished with a manual brushing technique that creates a soft, raised surface. The linear black motif is woven into the structure using the natural tonal variations of the fiber, without synthetic dyes or treatments.', madeBy: 'Martina Abracaite', madeIn: 'Tucuman, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Shedding: Some initial shedding is normal with natural wool and should not be pulled by hand. Loose fibers or threads: Trim carefully with scissors rather than pulling. Natural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-3-1.jpg' },
  { id: 'c-3-2', name: 'Quilt 002', material: 'Hand-Brushed Llama Fiber', size: '9\' x 9.5\'', description: 'An oversized bed cover woven entirely from undyed llama fiber and finished with a manual brushing technique that creates a dense, soft surface. Its substantial construction provides natural warmth while emphasizing the depth and texture of the fiber.', madeBy: 'Andrea Gatti', madeIn: 'Jujuy, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Shedding: Some initial shedding is normal with natural wool and should not be pulled by hand. Loose fibers or threads: Trim carefully with scissors rather than pulling. Natural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-3-2.jpg' },
  { id: 'c-4-1', name: 'Bag 001', material: 'Chaguar Fiber', size: '~19" Height', description: 'A utilitarian bag hand-knotted from high-tensile chaguar fiber. Dyed with plant-derived pigments, its open-mesh construction creates a durable, lightweight structure with a restrained organic silhouette.', madeBy: 'Sofia Rattan', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers. If the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat. Avoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-4-1.jpg' },
  { id: 'c-4-2', name: 'Bag 002', material: 'Chaguar Fiber', size: '~19" Height', description: 'A utilitarian bag hand-knotted from high-tensile chaguar fiber. Dyed with plant-derived pigments, its open-mesh construction creates a durable, lightweight structure with a restrained organic silhouette.', madeBy: 'Sofia Rattan', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers. If the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat. Avoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-4-2.jpg' },
  { id: 'c-4-3', name: 'Bag 003', material: 'Chaguar Fiber and Alpaca Silver', size: '11" x 7.5"', description: 'A structured pouch hand-knotted from chaguar fiber and finished with a custom-molded alpaca silver plate. The tactile weave contrasts with the smooth metal surface, bringing together two material traditions from northern Argentina.', madeBy: 'Luisa', madeIn: 'Salta, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers. If the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat. Avoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-4-3.jpg' },
  { id: 'c-5-1', name: 'Basket 001', material: 'Carandillo Palm Fiber', size: '17" x 13" x 13"', description: 'A structured basket woven from wild-harvested carandillo palm fiber using a flat interlocking technique. The dense weave forms a sculptural silhouette, while a contrasting geometric band emphasizes the natural variation and texture of the material.', madeBy: 'Sofia Rattan', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth to remove dust from the weave. Do not submerge or soak natural-fiber baskets in water. Keep away from direct sunlight, which may fade natural tones and weaken the fibers over time. Avoid humid or damp environments, including bathrooms and basements, to prevent mold and mildew. Store in a well-ventilated space at a stable temperature. To preserve the shape, avoid placing heavy objects on top.', image: '/c-5-1.jpg' },
  { id: 'c-5-2', name: 'Basket 002', material: 'Carandillo Palm Fiber', size: '12" x 10" x 6"', description: 'A structured basket bag woven from wild-harvested carandillo palm fiber. Natural and terracotta-toned fibers form a geometric herringbone pattern, while hand-tied cord handles add a tactile finish to the squared silhouette.', madeBy: 'Sofia Rattan', madeIn: 'Misiones, Argentina', care: 'Use a soft, dry cloth to remove dust from the weave. Do not submerge or soak natural-fiber baskets in water. Keep away from direct sunlight, which may fade natural tones and weaken the fibers over time. Avoid humid or damp environments, including bathrooms and basements, to prevent mold and mildew. Store in a well-ventilated space at a stable temperature. To preserve the shape, avoid placing heavy objects on top.', image: '/c-5-2.jpg' },
  { id: 'c-5-3', name: 'Vase 001', material: 'Clay, Unglazed', size: '7.5" x 3.5" x 5"', description: 'A low-profile vessel hand-shaped from unglazed clay. Its rounded body and pierced side handles give the compact form a sculptural presence, while the mottled surface reveals the natural variation of the material.', madeBy: 'Sofia Rattan', madeIn: 'Salta, Argentina', care: 'Remove surface dust with a soft, dry cloth or a soft-bristled brush. For small marks, wipe gently with a clean, slightly damp cloth and dry immediately. Do not soak, submerge, or place in the dishwasher. Avoid abrasive sponges, detergents, oils, and chemical cleaners, as they may alter the surface or be absorbed by unglazed clay. Keep away from sudden temperature changes, direct heat, and freezing conditions. Handle with both hands and avoid lifting the piece by its rim or handles. Unless specifically identified as watertight, display without water or use with dried botanicals only. Variations in tone, texture, glaze, and surface markings are inherent to the handmade and firing processes.', image: '/c-5-3.jpg' },
  { id: 'c-6-1', name: 'Vase 002', material: 'Terracota Clay', size: '7.5" x 8" x 7.5"', description: 'A rounded vessel hand-shaped from unglazed terracotta clay. Its full body and gently flared rim create a balanced silhouette, while subtle variations across the surface reveal the natural character of the material.', madeBy: 'Anicia Figueroa', madeIn: 'Salta, Argentina', care: 'Remove surface dust with a soft, dry cloth or a soft-bristled brush. For small marks, wipe gently with a clean, slightly damp cloth and dry immediately. Do not soak, submerge, or place in the dishwasher. Avoid abrasive sponges, detergents, oils, and chemical cleaners, as they may alter the surface or be absorbed by unglazed clay. Keep away from sudden temperature changes, direct heat, and freezing conditions. Handle with both hands and avoid lifting the piece by its rim or handles. Unless specifically identified as watertight, display without water or use with dried botanicals only. Variations in tone, texture, glaze, and surface markings are inherent to the handmade and firing processes.', image: '/c-6-1.jpg' },
  { id: 'c-6-2', name: 'Taza 001', material: 'Glazed Ceramic', size: '2.5" x 4" x 2.5"', description: 'A pair of small vessels hand-shaped from ceramic and finished with a dense mineral glaze. High-temperature firing creates deep tonal variation and areas of vitrification, giving each surface a distinct depth and reflective quality.', madeBy: 'Pilar Mari', madeIn: 'Salta, Argentina', care: 'Remove surface dust with a soft, dry cloth or a soft-bristled brush. For small marks, wipe gently with a clean, slightly damp cloth and dry immediately. Do not soak, submerge, or place in the dishwasher. Avoid abrasive sponges, detergents, oils, and chemical cleaners, as they may alter the surface or be absorbed by unglazed clay. Keep away from sudden temperature changes, direct heat, and freezing conditions. Handle with both hands and avoid lifting the piece by its rim or handles. Unless specifically identified as watertight, display without water or use with dried botanicals only. Variations in tone, texture, glaze, and surface markings are inherent to the handmade and firing processes.', image: '/c-6-2.jpg' },
  { id: 'c-6-3', name: 'Stool 001', material: 'Solid Algarrobo Wood and Natural Cowhide', size: '12" x 21" x 12"', description: 'A low-profile stool constructed from solid algarrobo wood with a handwoven natural cowhide seat. The substantial frame and open weave create a balanced contrast between geometric structure and tactile materiality.', madeBy: 'Mariano Godoy', madeIn: 'Salta, Argentina', care: 'Remove surface dust with a soft, dry cloth or a soft-bristled brush. For small spills, blot immediately with a clean, absorbent cloth. Do not rub, soak, or saturate the cowhide. Avoid detergents, solvents, household cleaners, oils, and leather conditioners, as they may alter the color or finish of the natural hide. Keep away from prolonged direct sunlight, excessive heat, and high humidity. These conditions may dry, fade, or distort the leather and wood. Wipe the algarrobo frame with a soft, dry or slightly damp cloth, then dry it immediately. Do not use abrasive cleaners. To preserve the tension and shape of the woven seat, avoid standing on the stool, placing heavy objects on it, or leaving concentrated weight on one area for extended periods. Natural variations, subtle stretching, and the development of a patina are inherent to the materials and may evolve with use.', image: '/c-6-3.jpg' },
  { id: 'c-7-1', name: 'Knife 001', material: 'Solid Algarrobo Wood and Handcrafted Alpaca Silver', size: '5 1/4" x 1"', description: 'A pair of butter knives crafted from solid algarrobo wood and alpaca silver. Hand-shaped wooden handles contrast with smooth, rounded blades, creating a balanced composition of warm timber and polished metal.', madeBy: 'Marissa', madeIn: 'Salta, Argentina', care: 'Hand-wash after use with warm water, mild soap, and a soft cloth or sponge. Do not soak or place in the dishwasher. Prolonged moisture may affect the wooden handles and accelerate discoloration of the metal. Dry immediately and thoroughly with a clean, soft cloth. Avoid abrasive sponges, steel wool, bleach, citrus-based detergents, and harsh chemical cleaners, as they may scratch or alter the alpaca silver finish. If the metal begins to develop a patina, gently buff it with a soft polishing cloth. Keep any metal polish away from the wooden handles and wash the blades thoroughly before use. Store in a dry place away from heat and humidity. Natural variations in the wood and the gradual development of a patina are inherent to the materials.', image: '/c-7-1.jpg' },
  { id: 'c-7-2', name: 'Scarf 001', material: 'Llama Fiber', size: '16–18" × 79"', description: 'A lightweight scarf woven from undyed llama fiber on manual tension looms. Its natural ivory tone and subtle tonal variation extend across the length, creating a soft drape with a clean, lightly textured surface.', madeBy: 'Romina Gutierrez', madeIn: 'San Juan, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand.', image: '/c-7-2.jpg' },
  { id: 'c-7-3', name: 'Scarf 002', material: 'Llama & Sheep Fiber', size: '16–18" × 79"', description: 'A scarf handwoven from a blend of undyed llama and sheep wool on manual tension looms. Its deep brown and black palette comes entirely from the fibers\' natural color variation, without synthetic dyes or chemical treatments.', madeBy: 'Romina Gutierrez', madeIn: 'San Juan, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand. For pieces incorporating recycled plastic or silk, avoid friction, sharp objects, and rough surfaces that may snag or pull the woven structure. Keep away from direct heat, as high temperatures may distort the recycled plastic and weaken the silk fibers. Do not iron, steam, or hang for extended periods.', image: '/c-7-3.jpg' },
  { id: 'c-8-1', name: 'Scarf 003', material: 'Llama & Bamboo Fiber', size: '16–18" × 79"', description: 'A scarf woven from a blend of llama and bamboo fiber. The lightweight construction creates a soft drape, while warm brown and cool grey fibers form a subtle two-tone surface.', madeBy: 'Romina Gutierrez', madeIn: 'San Juan, Argentina', care: 'Clean small areas with cold water and a mild soap. For a full wash, gently hand wash without rubbing, twisting, or wringing. Remove excess water by pressing the piece between clean towels. Reshape and dry flat in a ventilated space away from direct heat or sunlight. Do not bleach, tumble dry, or iron. Some initial shedding is normal with natural wool and should not be pulled by hand. For pieces incorporating recycled plastic or silk, avoid friction, sharp objects, and rough surfaces that may snag or pull the woven structure. Keep away from direct heat, as high temperatures may distort the recycled plastic and weaken the silk fibers. Do not iron, steam, or hang for extended periods.', image: '/c-8-1.jpg' },
  { id: 'c-8-2', name: 'Pillow 001', material: 'Hand-Brushed Llama Fiber', size: '12" diameter', description: 'A round pillow handwoven from undyed llama fiber and finished with a manual brushing technique that creates a soft, raised surface. Contrasting natural-color panels define the form while emphasizing the volume and texture of the fiber. Finished with a plush polyester insert.', madeBy: 'Yamila Valle', madeIn: 'Tucuman, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments. Loose fibers or threads: Trim carefully with scissors rather than pulling. Natural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-8-2.jpg' },
  { id: 'c-9-1', name: 'Pillow 002', material: 'Hand-Brushed Llama Fiber', size: '12" diameter', description: 'A round pillow handwoven from undyed llama fiber with a subtle grid weave. Contrasting black and natural stripes wrap the form, creating a bold linear composition. Finished with a plush polyester insert.', madeBy: 'Andrea Gatti', madeIn: 'Jujuy, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments. Loose fibers or threads: Trim carefully with scissors rather than pulling. Natural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-9-1.jpg' },
  { id: 'c-9-2', name: 'Pillow 003', material: 'Hand-Brushed Llama Fiber', size: '20"x20" / 16¨x16¨', description: 'A square pillow handwoven from undyed llama fiber and finished with a manual brushing technique that creates a soft, raised surface. The checkered composition highlights the fiber\'s natural color variation through a restrained graphic pattern. Finished with a natural sheep wool insert.', madeBy: 'Andrea Gatti', madeIn: 'Jujuy, Argentina', care: 'Gently brush the surface with a soft-bristle brush, working in the direction of the fibers. This helps remove surface dust and preserve the texture and volume of the material. Keep away from prolonged direct sunlight and damp environments. Loose fibers or threads: Trim carefully with scissors rather than pulling. Natural dyes: Avoid household stain removers, bleach, steam cleaning, and harsh detergents, which may alter the color.', image: '/c-9-2.jpg' },
  { id: 'c-9-3', name: 'Bag 004', material: 'Reclaimed Plastic & Chaguar', size: '14" × 24"', description: 'A large open-mesh shoulder bag hand-knotted from wild-harvested chaguar fiber and reclaimed plastic strips. The contrast between natural and industrial materials creates a dense, tactile grid with subtle tonal variation across the surface.', madeBy: 'Romina Gutierrez', madeIn: 'San Juan, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers. If the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat. Avoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-9-3.jpg' },
  { id: 'c-10-1', name: 'Bag 005', material: 'Silk & Reclaimed Plastic', size: '12" × 24"', description: 'A structured shoulder bag woven from silk and reclaimed plastic strips using a flat interlocking technique. The dense, lustrous surface contrasts the smooth natural fiber with the weight and texture of reclaimed plastic, finished with a braided strap.', madeBy: 'Romina Gutierrez', madeIn: 'San Juan, Argentina', care: 'Use a soft, dry cloth or a clean, soft-bristle brush to gently remove surface dust. Work lightly across the weave without pulling or stretching the fibers. Avoid washing, soaking, or applying liquid cleaning products. Chaguar is often colored with natural plant-based pigments, which may shift or bleed when exposed to water. Keep away from prolonged direct sunlight, as it may fade the natural fibers and pigments over time. Avoid damp spaces and sudden changes in temperature or humidity, which can weaken or distort plant fibers. If the piece becomes wet, gently blot excess moisture with a clean, absorbent cloth. Reshape as needed and allow it to air-dry completely in a shaded, well-ventilated space. Do not use direct heat. Avoid overfilling or carrying excessively heavy items, as this may stretch the hand-knotted weave. Store flat or lightly filled with clean, acid-free tissue to help preserve the shape.', image: '/c-10-1.jpg' },
  { id: 'c-10-2', name: 'Tabla 001', material: 'Algarrobo Wood and Alpaca Silver', size: '6" × 10"', description: 'A serving board hand-shaped from solid algarrobo wood and finished with a custom-fitted alpaca silver edge. The dense, dark grain contrasts with the smooth metal border, bringing together woodworking and silversmithing in a refined, functional form.', madeBy: 'Matias Ruiz', madeIn: 'Salta, Argentina', care: 'Hand-wash after use with warm water, mild soap, and a soft sponge. Do not submerge, soak, or place in the dishwasher. Dry immediately with a clean cloth, then allow the board to air-dry completely before storing. To maintain the wood, apply a thin layer of food-safe mineral oil whenever the surface begins to feel dry. Avoid cooking oils, which may become rancid over time. Clean the alpaca silver edge with a soft, dry cloth. Avoid abrasive sponges, metal polishes, and chemical cleaners, as they may scratch or alter the finish. Do not cut directly against the metal edge or use the board with excessive force. Store flat or upright in a dry, well-ventilated space, away from direct sunlight and heat. Natural variations in the wood grain and the gradual development of a patina on the metal are inherent to the materials.', image: '/c-10-2.jpg' }
];

export default function Collections2() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

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
          <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
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
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(128, 128, 128, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }} onClick={() => setSelectedProduct(null)}>
          <div style={{ background: '#ffffff', width: '88%', maxWidth: 1200, height: 'auto', maxHeight: '85vh', overflow: 'hidden', borderRadius: 0, display: 'flex' }} onClick={(e) => e.stopPropagation()}>

            {/* Left Column */}
            <div style={{ flex: 0, width: 280, padding: '50px 40px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: 18, overflowY: 'auto', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-archivo)', fontSize: 13, fontWeight: 400, color: 'var(--ink)', margin: 0, letterSpacing: 0 }}>
                  PRODUCT
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 22 }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>Material</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 400, color: 'var(--ink)', margin: '4px 0 0 0', lineHeight: 1.4 }}>{selectedProduct.material}</p>
                  </div>

                  <div>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>Size</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 400, color: 'var(--ink)', margin: '4px 0 0 0', lineHeight: 1.4 }}>{selectedProduct.size}</p>
                  </div>

                  <div>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>Description</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 400, color: 'var(--ink)', margin: '4px 0 0 0', lineHeight: 1.4 }}>{selectedProduct.description}</p>
                  </div>

                  <div>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>Made by</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 400, color: 'var(--ink)', margin: '4px 0 0 0' }}>{selectedProduct.madeBy}</p>
                  </div>

                  <div>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 400, color: 'var(--ink)', margin: 0 }}>Made in</p>
                    <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 400, color: 'var(--ink)', margin: '4px 0 0 0' }}>{selectedProduct.madeIn}</p>
                  </div>
                </div>
              </div>

              <button style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 400, color: 'var(--ink)', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left', textDecoration: 'none', letterSpacing: 0, marginTop: 20 }} onClick={() => window.location.href = '/contact'}>
                [INQUIRE]
              </button>
            </div>

            {/* Center Column - Image */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#d4d8e1', padding: '60px 40px', minWidth: 0 }}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} />
            </div>

            {/* Right Column */}
            <div style={{ flex: 0, width: 280, padding: '50px 40px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
              <h3 style={{ fontFamily: 'var(--font-archivo)', fontSize: 11, fontWeight: 600, color: 'var(--ink)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Care
              </h3>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 12, fontWeight: 400, color: 'var(--ink)', margin: 0, lineHeight: 1.6 }}>
                {selectedProduct.care}
              </p>
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
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0 }}>
                <a href="mailto:sales@estudiomalva.com" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                  sales@estudiomalva.com
                </a>
              </p>
            </div>

            {/* Middle Column - Made in Argentina */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <p style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, lineHeight: 1.85, color: 'var(--ink)', margin: 0, textAlign: 'center' }}>
                Made in Argentina
              </p>
            </div>

            {/* Right Column - Social */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="https://instagram.com/estudio.malva" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-archivo)', fontSize: 15, color: 'var(--ink)', textDecoration: 'none', lineHeight: 1.85 }}>
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
