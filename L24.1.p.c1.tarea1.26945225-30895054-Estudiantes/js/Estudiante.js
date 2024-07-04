export default class Estudiante {
    constructor(ced, s, n1, n2, n3){
        this.cedula= ced;
        this.sexo=s;
        this.nota1=n1;
        this.nota2=n2;
        this.nota3=n3;
    }
    set cedula(ced){
        this._cedula= ced;
    }
    set sexo(s){
        this._sexo= s;
    }
    set nota1(n1){
        this._nota1=n1;
    }
    set nota2(n2){
        this._nota2=n2;
    }
    set nota3(n3){
        this._nota3=n3;
    }
    get cedula(){
        return this._cedula;
    }
    get sexo(){
        return this._sexo;
    }
    get nota1(){
        return this._nota1;
    }
    get nota2(){
        return this._nota2;
    }
    get nota3(){
        return this._nota3;
    }
    calcNotaTotal(){return this._nota1 + this._nota2 + this._nota3}
}