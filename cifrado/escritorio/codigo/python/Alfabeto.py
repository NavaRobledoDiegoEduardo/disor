class Alfabeto():

    def __init__(self):
        self.caracteres = list(map(chr, range(0, 256)))
        self.alfabeto = self.caracteres[32:127] + self.caracteres[161:172] + self.caracteres[173:256]
        print(self.alfabeto)

    def obtenerCaracter(self,posicion):
        if posicion >= len(self.alfabeto):
            return self.alfabeto[(posicion-len(self.alfabeto))-1]
        elif posicion < 0:
            return self.alfabeto[len(self.alfabeto) + posicion + 1]
        else:
            return self.alfabeto[posicion]

    def obtenerPosicion(self,caracter):
        if caracter in self.alfabeto:
            return self.alfabeto.index(caracter)
        else:
            return -1

    def obetenerTamanio(self):
        return len(self.alfabeto)
