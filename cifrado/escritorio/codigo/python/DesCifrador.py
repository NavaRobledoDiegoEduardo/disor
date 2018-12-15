from alfabeto.Alfabeto import Alfabeto

class Descifrador:
    def __init__(self,alfabeto):
        self.alfabeto = alfabeto

    def descifrarCaracter(self,recorrido,caracter):
        posicion = self.alfabeto.obtenerPosicion(caracter)
        if posicion > 0:
            return self.alfabeto.obtenerCaracter(posicion-recorrido)
        else:
            return caracter

    def descifrarTexto(self,recorrido,texto):
        textoAcifrar = ""
        for caracter in list(texto):
            textoAcifrar = textoAcifrar + self.descifrarCaracter(recorrido,caracter)
        return textoAcifrar
