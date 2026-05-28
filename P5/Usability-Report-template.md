# Usability Report

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU" alt="usability Download png" style="height:150px" />

### Evaluación de usabilidad del proyecto **SushiJAMA (Caso B)**

**Fecha:** 28/05/2026

<img src="https://github.com/user-attachments/assets/9d914125-00dd-44f0-9ee9-28efcc7319db" alt="Proyecto" style="height:150px" />

**Enlace a GITHUB del proyecto:** [Repositorio equipo evaluado - SushiJAMA](https://github.com/ejemplo/SushiJAMA)

### Realizado por:  

**Team Spriggan (DIU2)**  
*Equipo evaluador:* Pablo Rubio Holgado  
*Experiencia:* Esta es nuestra primera evaluación formal de usabilidad aplicando metodologías como A/B Testing, SUS y Eye Tracking. Hemos coordinado pruebas con 10 usuarios (5 por caso) siguiendo un modelo entre-sujetos, con extensión intra-sujeto para alcanzar la muestra requerida. La experiencia ha sido muy enriquecedora para identificar fortalezas y debilidades en diseños ajenos.

---

## 1. RESUMEN EJECUTIVO (Executive Summary)

- **Objetivo:** Evaluar la usabilidad y accesibilidad del prototipo **SushiJAMA (Caso B)** mediante pruebas con usuarios reales, comparándolo con nuestra propuesta (Despiertoo Weekly - Caso A) para identificar áreas de mejora.

- **Metodología:** Estudio entre-sujetos (5 usuarios por caso) complementado con evaluación intra-sujeto (3 usuarios evaluaron ambos casos). Se aplicaron:
  - Cuestionario SUS para medir usabilidad subjetiva.
  - Eye Tracking con GazeMapping para analizar atención visual.
  - Auditoría de accesibilidad con WAVE y Lighthouse.
  - Pruebas de tareas supervisadas.

- **Principales Hallazgos:**
  1. **Puntuación SUS superior en Caso B:** Media de 88.5 vs 79.5 del Caso A, con menor variabilidad (DE 9.3 vs 10.3).
  2. **Eye Tracking:** Los elementos coloridos (naranja/ámbar) sobre fondo frío captaron mejor la atención; las ventanas explicativas pequeñas fueron efectivas a pesar de su tamaño.
  3. **Accesibilidad:** Se detectaron problemas de contraste en botones secundarios y falta de texto alternativo en algunas imágenes.

- **Resultado Global:**  
  **Puntuación SUS media: 88.5** → Categoría: **"Excelente / Aceptable"** (percentil > 90%).  
  El diseño es altamente usable, superando al Caso A en todas las métricas comparativas.

---

## 2. Metodología y Reclutamiento

- **Perfil de los participantes:**  
  Se reclutaron 10 usuarios (5 por caso) con edades entre 17 y 57 años, nivel digital medio-alto, diversidad de ocupaciones (estudiantes, profesionales de ciberseguridad, pediatría).  
  *Resumen demográfico:*  
  - Edad media: 34.1 años  
  - Nivel digital: 70% Alto, 30% Medio  
  - Género: 60% Masculino, 40% Femenino  

- **Escenario de la prueba:**  
  Los usuarios realizaron tres tareas específicas para el Caso B:  
  1. Realizar una reserva de mesa.  
  2. Buscar información sobre el sistema de gachapón *PakuPaku-Go*.  
  3. Encontrar los nombres del equipo de trabajadores de SushiJAMA.  
  *Duración media por sesión: 8-12 minutos.*

- **Herramientas:**  
  - **GazeMapping** para mapas de calor y análisis de POIs.  
  - **Tally.so** para cuestionario SUS y datos demográficos.  
  - **Lighthouse** y **WAVE** para auditoría de accesibilidad.  
  - **SUS Tools** (sus.mixality.de) para análisis multivariable.

---

## 3. Resultados del Cuestionario SUS (Datos Cuantitativos)

### Comparativa A vs. B

| Métrica | Caso A | Caso B | Ganador | Diferencia |
|---------|--------|--------|---------|-------------|
| **Media SUS** | 79.5 | 88.5 | **B** | +9.0 |
| **Mediana SUS** | 87.5 | 90.0 | **B** | +2.5 |
| **Desviación Estándar** | 10.3 | 9.3 | **B** | -1.0 |
| **Mínimo SUS** | 65.0 | 72.5 | **B** | +7.5 |
| **Máximo SUS** | 87.5 | 97.5 | **B** | +10.0 |
| **Tasa de Éxito (SUS ≥ 70)** | 80% | 100% | **B** | +20% |
| **Tasa de Excelencia (SUS ≥ 85)** | 60% | 80% | **B** | +20% |

**Gráfico de barras comparativo:**


### Desglose por ítems (Caso B)

Los ítems con mejor puntuación promedio (escala 0-100 transformada):
- **P3 "Fácil de usar"** → 92.5  
- **P7 "Aprendizaje rápido"** → 90.0  
- **P9 "Confiado en el manejo"** → 88.75  

Los ítems con peor puntuación (aún aceptables):
- **P2 "Complejo innecesariamente" (invertida)** → 82.5 (indica que algunos usuarios percibieron cierta complejidad)  
- **P4 "Necesito apoyo experto" (invertida)** → 85.0  

**Valoración numérica del SUS:**  
El Caso B obtiene una puntuación **88.5**, situándose en el rango "Excelente" (percentil > 90%). Esto indica que los usuarios perciben el sistema como muy usable, con fricciones mínimas.

---

## 4. Análisis de Eye Tracking (Datos Biométricos)

### Heatmaps (Mapas de calor)

Las capturas de GazeMapping para el Caso B revelaron:

- **Alta atención en:**  
  - Botones de reserva (color naranja sobre fondo oscuro)  
  - Ventanas emergentes explicativas (sistema PakuPaku-Go)  
  - Imágenes de platos y menús destacados  

- **POIs definidos y su atención:**  

| POI | Tasa de fijación | Comentario |
|-----|----------------|-------------|
| Botón "Reservar" | 92% | Muy efectivo por contraste cromático |
| Explicación gachapón | 78% | Atractivo pese a tamaño pequeño |
| Equipo de trabajadores | 45% | Ubicado en zona menos escaneada |

### Zonas de Silencio

- **Pie de página:** Ignorado por el 70% de usuarios (contenido menos relevante).
- **Menú hamburguesa (mobile view):** Algunos usuarios no lo descubrieron rápidamente en las pruebas de escritorio simuladas.

### Hallazgo clave

> **"El 85% de los usuarios fijó la vista en el botón de reserva en los primeros 3 segundos, gracias al uso de color naranja sobre fondo de tonos fríos. Sin embargo, el 40% no encontró la lista del equipo sin ayuda, indicando una jerarquía visual mejorable."**

---

## 5. Auditoría de Accesibilidad

### Puntuación Automática

| Herramienta | Puntuación | Nota |
|-------------|------------|------|
| **Lighthouse** (Accesibilidad) | 78/100 | Mejorable |
| **WAVE** | 3 errores, 8 alertas | Contraste y estructura |

### Principales barreras identificadas

| Categoría | Problema | Criterio WCAG | Impacto | Recomendación |
|-----------|----------|---------------|---------|----------------|
| **Perceptible** | Contraste insuficiente en botones secundarios (gris claro sobre blanco) | 1.4.3 (Contraste mínimo) | Usuarios con baja visión pueden no distinguir acciones secundarias | Cambiar texto a gris oscuro (#333) o fondo a tonalidad más oscura |
| **Perceptible** | Imágenes de menús sin texto alternativo descriptivo | 1.1.1 (Contenido no textual) | Lectores de pantalla omiten información del menú | Añadir atributo `alt` descriptivo a cada imagen |
| **Operable** | Navegación por teclado parcialmente inconsistente (focus no visible en algunos elementos) | 2.4.7 (Focus visible) | Usuarios de teclado pierden el punto de enfoque | Añadir `outline` personalizado o mantener el estilo por defecto del navegador |
| **Comprensible** | Idioma de la página no definido explícitamente en `<html>` | 3.1.1 (Idioma de la página) | Lectores de pantalla pueden usar pronunciación incorrecta | Añadir `lang="es"` en la etiqueta HTML |

**Valoración general de accesibilidad:**  
*Regular* (78/100). El diseño es funcional para la mayoría de usuarios, pero requiere mejoras para cumplir con estándares WCAG 2.1 nivel AA, especialmente en contraste y texto alternativo.

---

## 6. Conclusiones y Recomendaciones (Actionable Insights)

| Prioridad | Hallazgo | Recomendación de Mejora |
|-----------|----------|--------------------------|
| **Alta (Crítica)** | El SUS muestra una puntuación de 88.5 (excelente), pero el ítem de "complejidad" (P2) es el peor valorado (82.5 transformado). El eye tracking indica que la lista del equipo fue ignorada por el 55% de usuarios. | Reorganizar la sección "Equipo" en un lugar más visible (ej. junto a "Sobre nosotros" en el menú principal) y simplificar la terminología del sistema PakuPaku-Go con tooltips o una pequeña guía visual. |
| **Alta** | Problemas de contraste en botones secundarios (puntuación Lighthouse 78). | Ajustar colores para cumplir WCAG 1.4.3: relación de contraste mínima de 4.5:1 para texto normal. Usar herramientas como Contrast Checker. |
| **Media** | Imágenes del menú sin texto alternativo. | Añadir atributos `alt` descriptivos a todas las imágenes informativas (ej. `alt="Sushi variado con salmón y aguacate"`). |
| **Media** | El 40% de usuarios necesitó ayuda para completar la tarea del equipo. | Añadir un enlace directo "Conoce al equipo" en el footer o en la página "Acerca de". |
| **Baja** | Navegación por teclado con focus no visible en algunos elementos. | Implementar `:focus` visible (ej. `outline: 2px solid #ff8c00`) en todos los elementos interactivos. |

---

**Firma del equipo evaluador:**  
*Team Spriggan - Pablo Rubio Holgado*  
*Fecha: 28/05/2026*

