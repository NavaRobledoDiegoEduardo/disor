from alfabeto.Alfabeto import Alfabeto

class Cifrador:
    def __init__(self,alfabeto):
        self.alfabeto = alfabeto

    def cifrarCaracter(self,recorrido,caracter):
        posioion = self.alfabeto.obtenerPosicion(caracter)
        if posioion > 0:
            return self.alfabeto.obtenerCaracter(posioion+recorrido)
        else:
            return caracter

    def cifrarTexto(self,recorrido,texto):
        print("texto: ",texto)
        textoCifrado = ""
        for caracter in list(texto):
            textoCifrado = textoCifrado + self.cifrarCaracter(recorrido,caracter)
        return textoCifrado
