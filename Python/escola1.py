from abc import ABC, abstractmethod

class Pessoa(ABC):
    #super classe
    def __init__(self, nome, data, cpf, rg):
        self.nome = nome 
        self.data_nascimento = data
        self.cpf = cpf
        self.rg = rg
        
    def imprimir_nome(self):
        return self.nome    
    
    @abstractmethod
    def trabalhar(self):
        pass    


class Administrador(Pessoa):
    def trabalhar(self):
        return "trabalhando nas panilhas"
        

class Aluno(Pessoa):
    #sub classe
    def __init__(self, nome, data, cpf, rg):
        super().__init__(nome, data, cpf, rg)
        self.matricula = None
        self.notas = []
    

    def estudar(self):
        return "Estudando"


class Professor(Pessoa):
    #sub classe
    def __init__(self, nome, data, cpf, rg):
        super().__init__(nome, data, cpf, rg)
        self.disciplinas = []


    def lecionar(self):
        return "ensinando"



aluno1 = Aluno("ana", "26/06/2004", 4564654, 56645656)
professor1 = Professor("marcos", "25/04/1988", 654564561, 5967546656) 

pessoa1 = Pessoa()
