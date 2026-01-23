import React from 'react';
import { Microscope, Cpu, Layers, Zap, ArrowRight, Beaker, Rocket } from 'lucide-react';

export const practices = [
    { id: 'investigacion', title: 'Investigación de Mercado', description: 'Análisis profundo para la elaboración de nuevos productos industriales.', icon: <Microscope />, path: '/practice/investigacion', color: 'blue' },
    { id: 'practica1', title: 'Práctica 1: Slicer para Impresión 3D', description: 'Configuración técnica avanzada de modelos para fabricación FDM.', icon: <Cpu />, path: '/practice/practica1', color: 'cyan' },
    { id: 'practica2', title: 'Modelado e Impresión 3D', description: 'Diseño paramétrico y materialización de prototipos funcionales.', icon: <Layers />, path: '/practice/practica2', color: 'indigo' },
    { id: 'practicascaner', title: 'Escaneo y Resina', description: 'Digitalización 3D y manufactura de alta precisión en resina fotopolímera.', icon: <Zap />, path: '/practice/practicascaner', color: 'purple' },
    { id: 'practicacortelaser', title: 'Corte y Grabado Láser', description: 'Técnicas de sustracción de material mediante tecnología láser de CO2.', icon: <ArrowRight />, path: '/practice/practicacortelaser', color: 'blue' },
    { id: 'examen', title: 'Examen Interciclo', description: 'Diseño integral y elaboración de moldes para producción en serie.', icon: <Beaker />, path: '/practice/examen', color: 'cyan' },
    { id: 'final', title: 'Proyecto Final', description: 'Desarrollo integral de producto industrial y manufactura avanzada.', icon: <Rocket />, path: '/practice/proyectofinal', color: 'pink' },
];
