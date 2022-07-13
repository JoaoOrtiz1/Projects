class Conta:
    def __init__(self, numero, titular, saldo = 2000):
        self._numero = numero 
        self.titular = titular
        self.__saldo = saldo
        self.__historico = [saldo]

    def extrato(self):
        print("-----EXTRATO-----")
        print("Conta: ", self.titular)
        for saldo in self.__historico:
            print(f"Saldo: R${saldo}")   


    def saldo(self):
        print(f"Saldo: R${self.__saldo}")       


    def depositar(self, valor):
        self.__saldo += valor 
        self.transacao(self.__saldo) 

    def sacar(self, valor):
        self.__saldo -= valor   
        self.transacao(self.__saldo) 


    def transferir(self, valor, destino):
        self.sacar(valor)
        destino.depositar(valor)


    def transacao(self, saldo):
        self.__historico.append(saldo)    


conta1 = Conta(123, "pedro", 2300)
conta2 = Conta(321, "kaio")

conta1.transferir(300,conta2)

conta1.saldo()
conta2.saldo()
conta1.transferir(675,conta2)

conta1.extrato()
conta2.extrato()