class Aluno:
    def __init__(self, nome, idade, matricula):
        self.__nome = nome
        self._idade = idade
        self.__matricula = matricula
        self.__notas = None

    @property
    def nome(self):
        return self.__nome
    
    @nome.setter
    def nome(self, nome):
        self.__nome = nome

    @property
    def idade(self):
        return self._idade 
    
    @idade.setter
    def idade(self, idade):
        self._idade = idade


aluno1 = Aluno("joão", 17, 47390)

print(aluno1.nome)
aluno1.nome = "pedro"
print(aluno1.nome)

print(aluno1.idade)
aluno1.idade = 18
print(aluno1.idade)
