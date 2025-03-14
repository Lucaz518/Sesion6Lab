function solicitarCita() {
    // Preguntas para obtener la info del paciente

    const nombrePaciente = prompt("¿cual es su nombre?");
    const tipoCita = prompt("¿Que tipo de cita desea? (Ej: revisión, control, urgencias)");
    const horaio = prompt("En que horario desea la cita? (Ej: 1:00pm)")
    const fecha = prompt("¿En que fecha desea la cita?")
    const nombreMedico = prompt("¿Con que medico desea la cita?")
    const opcionRecordatorio = prompt("Desea recibir un recordatorio? (SI/NO)")
    
    // Mensaje de confirmacion
    const mensaje = `Hola ${nombrePaciente}, su cita de ${tipoCita} en el horario: ${horaio} en la fecha ${fecha} con el médico ${nombreMedico} con opción de recordatorio ${opcionRecordatorio} ha sido confirmada.`;

    // Mostrar el mesanje en pantalla
    alert(mesaje);
}