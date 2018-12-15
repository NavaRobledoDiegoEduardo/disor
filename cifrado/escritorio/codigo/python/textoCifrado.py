class TextoCifrado:
    def __init__(self,texto):
        self.texto = texto;

    def getCaracteres(self):
        return tuple(self.texto)

    def getTamanio(self):
        return len(self.texto)

    def mostrarTexto(self):
        return self.texto