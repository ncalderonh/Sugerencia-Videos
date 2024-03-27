// Patrón Módulo mediante IIFE
const ReproductorVideos = (function() {
    // Función privada para cargar el video en el iframe correspondiente
    function cargarVideo(url, id) {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }

    // Clase padre Multimedia
    class Multimedia {
        constructor(url) {
            // Atributo protegido mediante closure
            let _url = url;

            // Getter para obtener la URL
            this.getUrl = function() {
                return _url;
            };

            // Setter para modificar la URL
            this.setUrl = function(newUrl) {
                _url = newUrl;
            };
        }

        // Método setInicio
        setInicio() {
            return "Este método es para realizar un cambio en la URL del video";
        }
    }

    // Clase hija Reproductor
    class Reproductor extends Multimedia {
        constructor(url, id) {
            super(url);
            this.id = id;
        }

        // Método playMultimedia
        playMultimedia() {
            cargarVideo(this.getUrl(), this.id);
        }

        // Método setInicio para agregar un tiempo de inicio a la URL
        setInicio(tiempo) {
            const url = `${this.getUrl()}?start=${tiempo}`;
            this.setUrl(url);
        }
    }

    // Retorna función pública
    return {
        Reproductor
    };
})();

// Instancia la clase hija Reproductor para cada categoría
const musicaReproductor = new ReproductorVideos.Reproductor('https://www.youtube.com/embed/ODuiyl3el-A?si=rjAp_tRqj4IklluJ', 'musica');
const peliculasReproductor = new ReproductorVideos.Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'peliculas');
const seriesReproductor = new ReproductorVideos.Reproductor('https://www.youtube.com/embed/F1SrufgGRVI?si=kTCnttA9778LJlF8', 'series');

// Invoca al método playMultimedia para cada instancia creada
musicaReproductor.playMultimedia();
peliculasReproductor.playMultimedia();
seriesReproductor.playMultimedia();

// Utiliza el método setInicio para modificar el tiempo de inicio en alguna de las instancias creadas
musicaReproductor.setInicio(30); // Ejemplo de modificar tiempo de inicio para la categoría de música
