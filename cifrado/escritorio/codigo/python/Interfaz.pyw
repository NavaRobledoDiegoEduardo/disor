import sys
from PyQt5.QtWidgets import QApplication,QDialog,QMainWindow,QPushButton,QLabel
from PyQt5 import uic
from alfabeto.Alfabeto import Alfabeto
from texto.textoAcifrar import TextoAcifrar
from procesar.Cifrador import Cifrador
from texto.textoCifrado import TextoCifrado
from procesar.DesCifrador import Descifrador



class Ventana(QMainWindow):
    alfabeto = Alfabeto()
    cifrador = Cifrador(alfabeto)
    descifrador = Descifrador(alfabeto)

    def __init__(self):
        QMainWindow.__init__(self)
        uic.loadUi("Interfaz.ui",self)
        self.texto = self.e_Texto
        self.espacios = self.e_Espacios
        self.cifrar = self.radioCifrar
        self.descifrar = self.radioDescifrar
        self.result = self.resultado
        self.texto.cursorPositionChanged.connect(self.procesar)

#self.result.toPlainText()

    def procesar(self):
        if self.cifrar.isChecked():
            textoAcifrar =  self.texto.text()
            self.result.clear()
            num = self.espacios.text()
            if(num.isdigit()):
                espacios = int(num)
                textoCifrado = self.cifrador.cifrarTexto(espacios,textoPlano)
                self.result.appendPlainText(textoCifrado)
            else:
                self.result.appendPlainText("espacios")
        elif self.descifrar.isChecked():
            textoCifrado = self.texto.text()
            self.result.clear()
            num = self.espacios.text()
            if (num.isdigit()):
                espacios = int(num)
                plainText = self.descifrador.descifrarTexto(espacios, textoCifrado)
                self.result.appendPlainText(plainText)
            else:
                self.result.appendPlainText(" espacios")




