# Desafío - Sugerencia de Videos

## Caracteristicas:
1. **Patrón Módulo Implementado:**
   - Se utilizará el Patrón Módulo mediante IIFE (Immediately Invoked Function Expression) para modularizar y encapsular el código JavaScript.

2. **Clase Padre Multimedia:**
   - Se definirá una clase padre llamada `Multimedia` que recibirá la propiedad `url` como atributo.
   - Contendrá un método `setInicio` para modificar la URL del vídeo.

3. **Clase Hija Reproductor:**
   - Se creará una clase hija `Reproductor` de la clase `Multimedia` que recibirá la propiedad `id`.
   - Se implementará un método `playMultimedia` para mostrar el vídeo en el documento HTML.
   - Se añadirá un método `setInicio` para modificar el tiempo de inicio en la URL del vídeo.

4. **Funcionalidades Adicionales:**
   - Se instanciará la clase `Reproductor` para cada categoría (Música, Película, Serie), pasando la URL y el ID correspondientes.
   - Se invocará el método `playMultimedia` para mostrar los vídeos en el documento HTML.
   - Se utilizará el método `setInicio` para ajustar el tiempo de inicio en alguna de las instancias creadas.
   - 
## Requerimientos
1. Implementación del Patrón Módulo mediante IIFE.
2. Definición de la clase `Multimedia` con método `setInicio`.
3. Creación de la clase `Reproductor` como hija de `Multimedia` con métodos `playMultimedia` y `setInicio`.
4. Instanciación de la clase `Reproductor` para cada categoría con sus respectivas URL e IDs.
5. Invocación del método `playMultimedia` para mostrar los vídeos.
6. Utilización del método `setInicio` para ajustar el tiempo de inicio.
