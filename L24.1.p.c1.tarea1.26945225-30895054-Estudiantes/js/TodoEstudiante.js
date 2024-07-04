export default class TodoEstudiante {
    constructor(){
        this.mayorNota = 0;
        this.contFemApr = 0;
        this.acumNotas = 0;
        this.contEstudiantes = 0;
    }

    procesarEstudiante(est){
        this.contEstudiantes++;
        this.acumNotas+= est.calcNotaTotal();
        if (est.calcNotaTotal() > this.mayorNota){
            this.mayorNota = est.calcNotaTotal();
        }
        if (est.sexo == 'F' && est.calcNotaTotal() >= 48){
            this.contFemApr++;
        }
    }
    promedioNotas(){
        return this.acumNotas/this.contEstudiantes;
    }
    devolverMayorNota(){
        return this.mayorNota;
    }
    devolverFemApr(){
        return this.contFemApr;
    }
}