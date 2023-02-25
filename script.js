// Variáveis para aplicar os resultados do teste. Não as altere.

gender = process.argv[2]; // Sexo 
height = process.argv[3]; // Altura
barReps = process.argv[4]; // Repetições com barra
barSeconds = process.argv[5]; // Tempo das repetições com barra 
abs = process.argv[6]; // Abdominais
runDistance = process.argv[7]; // Distância da corrida
runTime = process.argv[8]; // Tempo da corrida
swimDistance = process.argv[9]; // Distância da natação
swimTime = process.argv[10]; // Tempo da natação
diveTime = process.argv[11]; // Tempo de mergulho

passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**

if (gender === "male") {
    if (height >= 1.70) {
        if (barReps >= 6 || barSeconds <= 15) {
            if (abs >= 41) {
                if ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) {
                    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
                        passed = true;
                    }
                }
            }
        }
    }
}
if (gender === "female") {
    if (height >= 1.60) {
        if (barReps >= 5 || barSeconds <= 12) {
            if (abs >= 41) {
                if ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)) {
                    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) {
                        passed = true;
                    }
                }
            }
        }
    }
}

// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);
