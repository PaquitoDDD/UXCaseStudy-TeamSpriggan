# DIU26
Prácticas Diseño Interfaces de Usuario (Tema: .... ) 

* [Guiones de prácticas](GuionesPracticas/)
* [Guía para crea tu Case Study](Guia_CaseStudy.md)
* Sala de la Fama [DIU Hall of fame](https://github.com/mgea/DIU/tree/master/hall_of_fame) donde se pueden encontrar Case Study destacados de otros años.




Actualizado: 14/01/2026




## Paso 0 My UX-Case Study
![Método UX](img/caseStudy.png) 
-----

Grupo: DIU2_TeamSpriggan
Curso: 2025/26

Nombre del Proyecto: Despiertoo Weekly

Descripción: Se ha realizado una extensión de la página ya existente de Despiertoo, con una sección "Weekly" nueva que busca abordar los intereses de distintos tipos de usuarios en un sistema que busca mostrar las distintas variedades de café por todo el mundo.

Logotipo: 
<img width="1188" height="828" alt="winli1" src="https://github.com/user-attachments/assets/9d914125-00dd-44f0-9ee9-28efcc7319db" />

Team Spriggan:
 * Pablo Rubio Holgado: https://github.com/PaquitoDDD

----- 

<br>

# Proceso de Diseño 





<br>

## Paso 1. UX User & Desk Research & Analisis 

### 1.a User Reseach Plan
![Método UX](img/Competitive.png) 
#### Antecedentes y Objetivos (The "Why")
**Contexto:** Estamos evaluando estos prototipos para hacer un acercamiento inicial a los estudios de usabilidad, en este caso, de una interfaz relacionada con una cafetería.

**Objetivos de investigación:** Observar cada uno de los aspectos incluidos en las pautas para realizar el estudio, como preguntarse por el qué, cómo, quién, dónde... o valorar cada uno de los puntos incluidos en la tarjeta de análisis proporcionada.

**Experiencia del equipo/justificación:** No cuento con experiencia previa realizando estudios de usabilidad, por lo que esta será mi primera vez.

#### Metodología (The "How")
- **Cuantitativa:** El documento de análisis de usabilidad para obtener una nota numérica aproximada a partir de nuestro criterio.
- **Comparativa:** Pros y contras encontrados y contrastados con el fin de establecer el nivel de funcionalidad y comodidad de utilización.

#### Perfil de los Participantes (The "Who")
**Criterios de inclusión:** Edad, nivel de competencia digital, frecuencia de ingesta de café, experiencia comprando suministros de café por internet.
**Segmentación:** Usuarios que buscan comprar café, y usuarios que buscan ir a tomar un café en uno de los locales.

#### Guión y Tareas (The "What")
Posibles tareas para pedir al usuario:
- Añade cualquier producto al carrito.
- Realiza una búsqueda por filtros de un tipo de café que quieras.
- Crea una cuenta incluyendo detalles de entrega.
- Encuentra el apartado de atención al cliente.

#### Cronograma y Entregables
- **Competitive Analysis:** Análisis y comparación entre varias páginas relacionadas con el café.
- **Personas y Journey Maps:** Fichas de dos usuarios y de su experiencia al utilizar la página a analizar.
- **Usability Report:** Tarjeta con análisis realizado de distintos aspectos y nota proporcionada, junto a algunas sugerencias de mejora.

#### Descripción escueta de objetivos
En general, el objetivo es identificar algunas de las acciones más comunes que un cliente buscaría hacer en una página sobre una cafetería, como consultar datos de la tienda o realizar un pedido, y contrastar aspectos como la facilidad de uso para determinar la calidad de la UX.


### 1.b Competitive Analysis
![Método UX](img/Competitive.png) 
Proporcionado en el archivo de FIGMA, encontramos el análisis entre tres páginas de locales de café granadinos: **Despiertoo**, **La Finca Roaster**, y **BonneVie**. Nos encargamos de analizar los cinco tipos de aspectos proporcionados:

- Arquitectura de la información
- Diseño y usabilidad
- UX y funcionalidad
- Accesibilidad
- Soporte y contacto

**Resultado general del análisis:**  
Encontrar páginas relativamente sencillas, que en su mayoría se dedicaban a ofrecer una interfaz de tienda con una selección curada de productos, así como información sobre localizaciones, métodos de contacto, y algunos otros detalles sobre la valoración del café. Si observamos más detenidamente, encontramos diferencias entre cada página, como el uso de texto alternativo, la presencia de locales y contactos (o más bien, la falta de estos en BonneVie), o las diferencias en la implementación de la tienda. 


### 1.c Personas
![Método UX](img/Persona.png) 
He creado dos personas para realizar un análisis mediante journey maps: **Machias Smith** y **Shizuna Gómez**.  
Estos perfiles están basados en la dicotomía planteada en el User Research Plan de persona que busca comprar café contra persona que busca ir a tomarse un café, por lo que el journey map se basa en la experiencia de ambos buscando conseguir su respectivo objetivo.


### 1.d User Journey Map
![Método UX](img/JourneyMap.png) 
Debido a la simplicidad de la página de Despiertoo, ambos journey maps son bastante simples, ya que se completan exclusivamente con las opciones ofrecidas en la barra superior, disponible y visible desde el primer momento que se entra a la página. Se han documentado igualmente, y se puede apreciar una diferencia entre la "dificultad" de las experiencias de cada persona.


### 1.e Usability Review
![Método UX](img/usabilityReview.png) 
Finalmente, se ha hecho una Usability Review de la página de Despiertoo, siguiendo el documento de calificación aportado. Aquí algunas observaciones generales a modo de conclusión sobre el análisis:

- **Funcionalidad:** La funcionalidad y prestaciones necesarias de la página están todas presentes, y funcionan de forma excelente, ya que es posible completar el proceso de compra o de búsqueda de información de manera sencilla.
- **Sencillez:** Salvo algunos aspectos menores como la falta de breadcrumbs, la sencillez de la página significa que es sencillo manejar a través de ella, sobre todo gracias a la implementación de la barra superior que nos lleva a todas las subpáginas más destacables y necesarias.
- **Búsqueda:** La búsqueda en la tienda deja un poco que desear, al faltar opciones esenciales como una barra de búsqueda. No obstante, esto se podría excusar debido a la selección curada y limitada de productos que hace posible obviar términos de ordenación y búsqueda más específicos.
- **Control/feedback y errores:** Los estándares de control/feedback, formularios y errores son adecuados para una página de esta complejidad. Por este mismo hecho se puede explicar la falta de una sección de ayuda para usuarios menos experienciados.
- **Lenguaje:** El lenguaje utilizado es simple y conciso, usado para explicaciones sobre el proceso de elaboración del café, entre otros aspectos.
- **Rendimiento:** La estabilidad y rendimiento de la página es excelente, tanto en ordenador como en dispositivo móvil.

<br>

## Paso 2. UX Design  
### 2.a Reframing / IDEACION: Feedback Capture Grid / Empathy map 
![Método UX](img/feedback-capture-grid.png) 
<img width="1440" height="900" alt="feedback-capture-grid" src="https://github.com/user-attachments/assets/25bbd90f-ff5a-4a30-83c8-b89f4ddc59f8" />

En resumen, se han planteado cuestiones relacionadas con los deseos de los distintos prototipos de personas que visitan la tienda o la página, así como formas de extender la marca y sus productos mediante un nuevo sistema a añadir.


### 2.b ScopeCanvas
![Método UX](img/ScopeCanvas.png)
<img width="1920" height="1080" alt="Scope Canvas" src="https://github.com/user-attachments/assets/52e4cd80-f0df-483b-8545-cb34dbecdd80" />


### 2.b User Flow (task) analysis 
![Método UX](img/Sitemap.png) 
<img width="1238" height="545" alt="UserFlow" src="https://github.com/user-attachments/assets/68efde5f-c4c1-4ad7-b2d6-9fb25d5723ff" />
El User Flow se ha planteado de forma preeliminar siguiendo las posibles rutas de las dos personas planteadas en la Práctica 1.



### 2.c IA: Sitemap + Labelling 
![Método UX](img/labelling.png) 
----

Término | Significado     
| ------------- | -------
  Weekly  | Semanal
  
<img width="744" height="432" alt="Despier2" src="https://github.com/user-attachments/assets/0339f777-6093-49fd-81d7-d5174c30822f" />

### 2.d Wireframes
![Método UX](img/Wireframes.png) 
-----
<img width="1867" height="2209" alt="mockup" src="https://github.com/user-attachments/assets/fa956031-2267-443f-beb7-b334dfc95867" />
<img width="1504" height="2739" alt="MockupFigma" src="https://github.com/user-attachments/assets/e5031273-5c77-408d-a46f-3d04f66ee962" />

El mockup inicial se hizo en paint.net de forma manual, con la segunda versión siendo implementada utilizando frames de disposición automática en Figma.

<br>

## Paso 3. Mi UX-Case Study (diseño)
### 3.a Moodboard
![Método UX](img/moodboard.png)
-----
<img width="5318" height="3473" alt="Moodboard - Spriggan" src="https://github.com/user-attachments/assets/1d3e7ab5-6e12-4871-91ab-a610d9e83b34" />
Se ha utilizado la plantilla de moodboard de Figma disponible en la asignatura. La organización no es apta para algo como una cabecera en redes sociales, pero da una buena muestra de lo que se está buscando de cara al diseño final.

### 3. Design System/Atomic Design
![Método UX](img/guidelines.png) 
----
<img width="3136" height="5602" alt="Design System Foundation (Community)" src="https://github.com/user-attachments/assets/49ae018d-6a82-4fb7-922e-573cef334a09" />
Utilizando el plugin de Foundation Studio para hacer una base de colores, se implementaron la mayoría de recursos disponibles en el Design System Foundation siguiendo patrones especificados en el moodboard, como los colores y las fuentes (Montserrat e Inter Light 18pt).


### 3.d Mockup
![Método UX](img/mockup.png) 
----
<img width="1475" height="4143" alt="Weekly" src="https://github.com/user-attachments/assets/79b69e52-3a02-4121-8a62-186230e56b09" />
<img width="1741" height="4248" alt="Weekly (Artículo)" src="https://github.com/user-attachments/assets/e1466d00-4a85-4896-b7d6-ed24aa04c0e1" />
<img width="1760" height="2735" alt="Weekly (Compra)" src="https://github.com/user-attachments/assets/b685bc2d-0caa-4cf4-9aeb-d1fa3bb517ab" />
<img width="1760" height="1880" alt="Weekly (Intro Evento)" src="https://github.com/user-attachments/assets/35f21354-06fd-4cf3-9c93-cd4aa8a6f2ee" />


<br>

## Paso 4. Exportación y Documentación 


### 4.a Exportación a HTML/React
![Método UX](img/usabilityReview.png) 
----
Para el paso a React, se ha empezado haciendo una instalación de los componentes ofrecidos al principio de la práctica, junto a algunas modificaciones como el uso de dmpm en vez de mpm debido a la antigüedad de la máquina virtual empleada. Seguidamente, se ha empleado Figma Make para mantener el diseño realizado en la Práctica 3, a la vez que se han juntado las páginas con React Router (se pueden acceder con los botones Tienda, Eventos, Weekly y "Descubre Brasil" en la landing page).
Toda la implementación está disponible en la carpeta de la P4.

<br>

## Paso 5. Pruebas de Evaluación 

### 5.a Reclutamiento de usuarios 
![Método UX](img/usability-testing.png)
-----
Se han reclutado a 7 personas distintas para las pruebas, donde cada una ha hecho uno de los dos casos, y las tres últimas han hecho adicionalmente el caso contrario, para llegar a un balance de 5 pruebas sobre el caso A, y 5 sobre el caso B.


| Usuarios | Sexo/Edad     | Ocupación   |  Exp.TIC    | Personalidad | Plataforma | Caso
| ------------- | -------- | ----------- | ----------- | -----------  | ---------- | ----
| Ismael  | M / 21   | Estudiante  | Alta       | Extrovertido | Web       | A 
| Ismael  | M / 26   | Ciberseguridad  | Alta       | Introvertido       | Web        | B
| Alberto  | M / 20   | Estudiante  | Alta       | Relajado     | Web        | A 
| Andrés  | M / 20   | Estudiante     | Alta        | Emocional    | Web      | B 
| Claudio  | M / 55   | Pediatra  | Media       | Racional     | Web        | A 
| Claudio  | M / 55   | Pediatra  | Media       | Racional     | Web        | B
| Claudia  | H / 17   | Estudiante  | Media       | Emocional     | Web        | A 
| Claudia  | H / 17   | Estudiante  | Media       | Emocional     | Web        | B 
| Mariángeles  | H / 57   | Pediatra  | Media       | Emocional     | Web        | A 
| Mariángeles  | H / 57   | Pediatra  | Media       | Emocional     | Web        | B 


### 5.b Diseño de las pruebas 
![Método UX](img/usability-testing.png) 
-----
Cada una de las pruebas se hizo en un entorno por separado (incluyendo los resultados del heatmap), y a cada participante se le dieron instrucciones para realizar la prueba del heatmap, observando y pulsando en aquello que les llamara la atención durante las páginas. Seguidamente, se les dio acceso a la versión funcional de la página con unas pocas tareas básicas para cada caso:
- Caso A
-- Encontrar la sección sobre cafés de Brasil.
-- Buscar información sobre el evento presencial con temática de Brasil.
-- Añadir tres productos distintos al carrito.
- Caso B
-- Realizar una reserva de mesa.
-- Buscar información sobre el sistema de gachapón PakuPaku-Go.
-- Encontrar los nombres del equipo de trabajadores de SushiJAMA.


### 5.c Aplicación del método Eye Tracking 
![Método UX](img/eye-tracking.png)
----
Tras el reclutamiento de participantes, se les asignó un caso, y se grabaron los datos por separado, algunos de los cuales vienen incluidos en la carpeta de la práctica correspondiente. Para sintetizar los resultados, se destacará aquello que fue más observado en cada caso:
- Caso A: Los usuarios hicieron énfasis en el uso de tipografía grande y colorida (color + contorno), posiblemente debido al contraste con el diseño minimalista de la página. Los elementos de selección también tuvieron bastante protagonismo, tomando por ejemplo los botones de selección en la parte principal de la tienda, o el menú de selección de tipo de grano en las páginas de compra de cada café.
- Caso B: Las imágenes y el uso ocasional de colores como el naranja fueron los más capaces de captar la atención en esta página, posiblemente por el contraste con el diseño de fondo basado en colores fríos. Algunas de las ventanas pequeñas con explicación sobre conceptos también captaron bastante la atención, a pesar de su tamaño.


### 5.d Cuestionario SUS y A/B Testing
![Método UX](img/Survey.png) 
----

>>> Como uno de los test para la prueba A/B testing, usaremos el **Cuestionario SUS** que permite valorar la satisfacción de cada usuario con el diseño utilizado (casos A o B). Para calcular la valoración numérica y la etiqueta linguistica resultante usamos la [hoja de cálculo](https://github.com/mgea/DIU19/blob/master/Cuestionario%20SUS%20DIU.xlsx). Previamente conozca en qué consiste la escala SUS y cómo se interpretan sus resultados
http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)
Para más información, consultar aquí sobre la [metodología SUS](https://cui.unige.ch/isi/icle-wiki/_media/ipm:test-suschapt.pdf)
>>> Adjuntar en la carpeta P4/ el excel resultante y describa aquí la valoración personal de los resultados

>>> Los resultados de un A/B testing con 3 pruebas y 2 casos o alternativas daría como resultado una tabla de 3 filas y 2 columnas, además de un resultado agregado global. Especifique con claridad el resultado: qué caso es más usable, A o B?

| ID | Nombre | Sistema | SUS Score |
|---------------|---------------|---------|-----------|
| LZaQqkG       | Ismael (1)       | A       | 70.0      |
| dW85Xzq       | Ismael (2)       | B       | 72.5      |
| rjJx47M       | Alberto       | A       | 65.0      |
| kdJDY01       | Andrés       | B       | 95.0      |
| eqYrXk0       | Claudio       | A       | 87.5      |
| eqYrXk0       | Claudio       | B       | 87.5      |
| eqYrXk0       | Claudia       | A       | 87.5      |
| eqYrXk0       | Claudia       | B       | 90.0      |
| eqYrXk0       | Mariángeles       | A       | 87.5      |
| eqYrXk0       | Mariángeles       | B       | 97.5      |

| Métrica | Caso A | Caso B | Ganador | Diferencia |
|---------|--------|--------|---------|-------------|
| **Media SUS** | 79.5 | 88.5 | **B** | +9.0 |
| **Mediana SUS** | 87.5 | 90.0 | **B** | +2.5 |
| **Desviación Estándar** | 10.3 | 9.3 | **B** | -1.0 |
| **Mínimo SUS** | 65.0 | 72.5 | **B** | +7.5 |
| **Máximo SUS** | 87.5 | 97.5 | **B** | +10.0 |
| **Rango Intercuartil (IQR)** | 17.5 | 7.5 | **B** | -10.0 |
| **Tasa de Éxito (SUS ≥ 70)** | 80% | 100% | **B** | +20% |
| **Tasa de Excelencia (SUS ≥ 85)** | 60% | 80% | **B** | +20% |
Podemos conlcuir que el Caso B es notablemente más utilizable al ganar en la escala SUS. A pesar de ambos sistemas parecen buenos, el Caso A tiene ciertas fricciones sobre la facilidad y el flow de uso debido a una ligera falta de intuitividad, mientras que el Caso B consigue unos resultado unánimes en cuanto a falta de problemas notables.



### 5.f Usability Report de B
![Método UX](img/usability-report.png) 
-----

>>> Añadir report de usabilidad para práctica B (la de los compañeros) aportando resultados y valoración de cada debilidad de usabilidad. 
>>> Enlazar aqui con el archivo subido a P4/ que indica qué equipo evalua a qué otro equipo.

>>> Complementad el Case Study en su Paso 4 con una Valoración personal del equipo sobre esta tarea



<br>


## Conclusiones finales & Valoración de las prácticas


>>> Opinión FINAL del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos. ¿Qué se puede mejorar? Recuerda que este tipo de texto se debe eliminar del template que se os proporciona 




