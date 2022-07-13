class Funcionario:

    def trabalhar(self):
        print("trabalhando")


class FrontEnd(Funcionario):

    def trabalhar(self):
        print("FrontEnd")


class BackEnd(Funcionario):
    
    def trabalhar(self):
        print("BackEnd")


class FullStack(FrontEnd, BackEnd):
    
    def trabalhar(self):
        print("FullStack")


ana = FullStack()
ana.trabalhar()