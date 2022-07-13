class Pessoa:
    def __init__(self, nome, cpf, rg):
        self.__nome = nome
        self.__cpf = cpf
        self.__rg = rg

    @property
    def nome(self):
        return self.__nome  

    @nome.setter 
    def nome(self, nome):
        self.__nome = nome     

    @property
    def cpf(self):
        return f"Cpf : {self.__cpf}"

    @cpf.setter
    def cpf(self, cpf):
        self.__cpf = cpf

    @property
    def rg(self):
        return f"Rg : {self.__rg}"

    @rg.setter
    def rg(self, rg):
        self.__rg = rg   


class Paciente(Pessoa):
    def __init__(self, nome, cpf, rg, efermidade):
        super().__init__(nome, cpf, rg)
        self.efermidade = efermidade 
           


class Doutor(Pessoa):
    def __init__(self, nome, cpf, rg, cargo):
        super().__init__(nome, cpf, rg)
        self.cargo = cargo


paciente = Paciente("joao", 64564654, 4564655666, "Alzheimer")
doutor = Doutor("pedro", 45458754, 456546546, "Cirurgião cerebral")


