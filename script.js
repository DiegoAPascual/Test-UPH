const activePage = localStorage.getItem('activePage');

// Obtener todas las secciones de preguntas
const pages = document.querySelectorAll('section[id^="page-"]');

// Si hay una página activa almacenada, ocultar todas las secciones excepto la activa
if (activePage) {
  pages.forEach(page => {
    if (page.id === activePage) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

// Escuchar eventos de clic en los enlaces de paginación
const paginationLinks = document.querySelectorAll('.pagination .page-link');
paginationLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetPageId = this.getAttribute('href').substring(1);

    // Ocultar todas las secciones excepto la seleccionada
    pages.forEach(page => {
      if (page.id === targetPageId) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    });

    // Marcar el enlace de paginación como activo
    paginationLinks.forEach(link => link.parentElement.classList.remove('active'));
    this.parentElement.classList.add('active');

    // Almacenar la página activa en el almacenamiento local
    localStorage.setItem('activePage', targetPageId);
  });
});

// Función para calcular la carrera
function calcularCarrera() {
  // Obtiene las respuestas del usuario
  var preguntas = document.querySelectorAll('input[type="radio"]:checked');

  // Verifica si todas las preguntas fueron respondidas
  if (preguntas.length === 84) {
    // Inicializa un objeto para almacenar los contadores de cada carrera
    var contadores = {
      'Ingeniería Logística y Transporte': 0,
      'Ingeniería Agroindustrial': 0,
      'Ingeniería Energía': 0,
      'LAET (Licenciatura en Administración y Evaluación de Tecnologías)': 0,
      'Arquitectura Bioclimática': 0,
      'Ingeniería Industrial': 0,
      'Ingeniería en Diseño Textil y Moda': 0
    };

    // Contabiliza las respuestas para cada carrera
    preguntas.forEach(function(pregunta) {
      if (pregunta.name.includes('logistica') && pregunta.value === 'si') {
        contadores['Ingeniería Logística y Transporte']++;
      } else if (pregunta.name.includes('agroindustrial') && pregunta.value === 'si') {
        contadores['Ingeniería Agroindustrial']++;
      } else if (pregunta.name.includes('energia') && pregunta.value === 'si') {
        contadores['Ingeniería Energía']++;
      } else if (pregunta.name.includes('laet') && pregunta.value === 'si') {
        contadores['LAET (Licenciatura en Administración y Evaluación de Tecnologías)']++;
      } else if (pregunta.name.includes('arquitectura') && pregunta.value === 'si') {
        contadores['Arquitectura Bioclimática']++;
      } else if (pregunta.name.includes('industrial') && pregunta.value === 'si') {
        contadores['Ingeniería Industrial']++;
      } else if (pregunta.name.includes('diseno') && pregunta.value === 'si') {
        contadores['Ingeniería en Diseño Textil y Moda']++;
      }
    });

    // Determina la carrera con más respuestas afirmativas
    var carreraRecomendada = '';
    var maxPuntos = -1;
    for (var carrera in contadores) {
      if (contadores[carrera] > maxPuntos) {
        maxPuntos = contadores[carrera];
        carreraRecomendada = carrera;
      }
    }

    // Muestra el resultado en el modal
    var modal = new bootstrap.Modal(document.getElementById('resultadoModal'));
    document.getElementById('nombreCarrera').textContent = carreraRecomendada;
    modal.show();

    // Agrega un evento para limpiar las respuestas cuando se cierre el modal
    modal._element.addEventListener('hidden.bs.modal', function () {
      // Limpiar las respuestas seleccionadas
      preguntas.forEach(function(pregunta) {
        pregunta.checked = false;
      });
    });
  } else {
    // Si no todas las preguntas fueron respondidas, muestra un mensaje de error
    alert('Por favor, responde todas las preguntas antes de calcular la carrera.');
  }
}







