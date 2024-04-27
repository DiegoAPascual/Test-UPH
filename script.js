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

const careers = {
  'logisticaTransporte': { name: 'Ingeniería en Logística y transporte', points: 0 },
  'agroindustrial': { name: 'Ingeniería Agroindustrial', points: 0 },
  'energia': { name: 'Ingeniería en Energía', points: 0 },
  'laet': { name: 'Licenciatuta en Administración de Empresas Turiticas (LAET)', points: 0 },
  'arquitecturaBioclimatica': { name: 'Arquitectura Bioclimática', points: 0 },
  'ingenieriaIndustrial': { name: 'Ingeniería Industrial', points: 0 },
  'ingenieriaTextilModa': { name: 'Ingeniería en Diseño Textil y Moda', points: 0 }
};

const questionsToCareers = {
  'q1': ['logisticaTransporte'],
  'q2': ['agroindustrial'],
  'q3': ['energia'],
  'q4': ['laet'],
  'q5': ['arquitecturaBioclimatica'],
  'q6': ['ingenieriaIndustrial'],
  'q7': ['ingenieriaTextilModa'],
  'q8': ['logisticaTransporte'],
  'q9': ['agroindustrial'],
  'q10': ['energia'],
  'q11': ['laet'],
  'q12': ['arquitecturaBioclimatica'],
  'q13': ['ingenieriaIndustrial'],
  'q14': ['ingenieriaTextilModa'],
  'q15': ['logisticaTransporte'],
  'q16': ['agroindustrial'],
  'q17': ['energia'],
  'q18': ['laet'],
  'q19': ['arquitecturaBioclimatica'],
  'q20': ['ingenieriaIndustrial'],
  'q21': ['ingenieriaTextilModa'],
  'q22': ['logisticaTransporte'],
  'q23': ['agroindustrial'],
  'q24': ['energia'],
  'q25': ['laet'],
  'q26': ['arquitecturaBioclimatica'],
  'q27': ['ingenieriaIndustrial'],
  'q28': ['ingenieriaTextilModa'],
  'q29': ['logisticaTransporte'],
  'q30': ['agroindustrial'],
  'q31': ['energia'],
  'q32': ['laet'],
  'q33': ['arquitecturaBioclimatica'],
  'q34': ['ingenieriaIndustrial'],
  'q35': ['ingenieriaTextilModa'],
  'q36': ['logisticaTransporte'],
  'q37': ['agroindustrial'],
  'q38': ['energia'],
  'q39': ['laet'],
  'q40': ['arquitecturaBioclimatica'],
  'q41': ['ingenieriaIndustrial'],
  'q42': ['ingenieriaTextilModa'],
  'q43': ['logisticaTransporte'],
  'q44': ['agroindustrial'],
  'q45': ['energia'],
  'q46': ['laet'],
  'q47': ['arquitecturaBioclimatica'],
  'q48': ['ingenieriaIndustrial'],
  'q49': ['ingenieriaTextilModa'],
  'q50': ['logisticaTransporte'],
  'q51': ['agroindustrial'],
  'q52': ['energia'],
  'q53': ['laet'],
  'q54': ['arquitecturaBioclimatica'],
  'q55': ['ingenieriaIndustrial'],
  'q56': ['ingenieriaTextilModa'], 
  'q57': ['logisticaTransporte'],
  'q58': ['agroindustrial'],
  'q59': ['energia'],
  'q60': ['laet'],
  'q61': ['arquitecturaBioclimatica'],
  'q62': ['ingenieriaIndustrial'],
  'q63': ['ingenieriaTextilModa'], 
  'q64': ['logisticaTransporte'],
  'q65': ['agroindustrial'],
  'q66': ['energia'],
  'q67': ['laet'],
  'q68': ['arquitecturaBioclimatica'],
  'q69': ['ingenieriaIndustrial'],
  'q70': ['ingenieriaTextilModa'],
  'q71': ['logisticaTransporte'],
  'q72': ['agroindustrial'],
  'q73': ['energia'],
  'q74': ['laet'],
  'q75': ['arquitecturaBioclimatica'],
  'q76': ['ingenieriaIndustrial'],
  'q77': ['ingenieriaTextilModa'],
  'q78': ['logisticaTransporte'],
  'q79': ['agroindustrial'],
  'q80': ['energia'],
  'q81': ['laet'],
  'q82': ['arquitecturaBioclimatica'],
  'q83': ['ingenieriaIndustrial'],
  'q84': ['ingenieriaTextilModa']
};

function cerrarAlerta() {
  const alertDiv = document.getElementById('validation-alert');
  alertDiv.style.display = 'none';
}

function calcularCarrera() {
  const formElements = document.querySelectorAll('input[type=radio]:checked');
  const totalQuestions = Object.keys(questionsToCareers).length;
  const alertDiv = document.getElementById('validation-alert');

  // Verifica si todas las preguntas han sido respondidas
  if (formElements.length !== totalQuestions) {
    alertDiv.style.display = 'block';
    return;
  } else {
    alertDiv.style.display = 'none';
  }

  

  // Verifica si todas las preguntas han sido respondidas
  if (formElements.length !== totalQuestions) {
    document.getElementById('recommended-career').innerHTML = '';
    document.getElementById('recommended-career').appendChild(alertDiv);
    return;
  }

  // Imprime las respuestas seleccionadas
  // formElements.forEach(formElement => {
  //   console.log(`Pregunta: ${formElement.name}, Respuesta: ${formElement.value}`);
  // });

  formElements.forEach(formElement => {
    const question = formElement.name;
    const answer = formElement.value;
    const careersToAddPoints = questionsToCareers[question];

    if (answer === 'si') {
      careersToAddPoints.forEach(career => {
        careers[career].points += 1;
      });
    }
  });

  //console.log(careers);  // Imprime las puntuaciones de todas las carreras

  const maxPoints = Math.max(...Object.values(careers).map(career => career.points));

  // Encuentra todas las carreras con la puntuación máxima
  const tiedCareers = Object.values(careers).filter(career => career.points === maxPoints);

  // Si hay un empate, muestra todas las carreras empatadas
  if (tiedCareers.length > 1) {
    const recommendedCareers = tiedCareers.map(career => career.name).join(', ');
    const message = `Puede considerar las siguientes carreras: ${recommendedCareers}. Por favor, considere explorar estas opciones.`;
    document.getElementById('nombreCarrera').innerText = message; // Actualiza el contenido del modal
    $('#resultadoModal').modal('show'); // Muestra el modal
    //console.log(message);
    document.getElementById('recommended-career').innerText = message;
  } else {
    // Si no hay empate, muestra la carrera con la puntuación máxima
    const winningCareer = tiedCareers[0];
    const message = `Basado en sus respuestas, le recomendamos la siguiente carrera: ${winningCareer.name}.`;
    //console.log(message);
    document.getElementById('nombreCarrera').innerText = message; // Actualiza el contenido del modal
    $('#resultadoModal').modal('show');
  }
}



















