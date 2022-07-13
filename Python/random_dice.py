import random


def Dado():
    dado1 = random.randint(1,20)
    return dado1 

def Dado2():
    dado2 = random.randint(1,20)
    return dado2    


while(True):
    print("Deseja tentar derrotar o dragão ?")
    verif = str(input("S/N : "))
    if(verif == "s"):
        dado1 = Dado()
        dado2 = Dado2()
        if(dado1<dado2):
            print("-"*20)
            print(f"Dado que você jogou: {dado1}")
            print(f"Dado do monstro: {dado2}")
            print("-"*20)
            print("Bola de fogo falhou e o dragão destruiu o vilareijo")
        else:
            print("-"*20)
            print(f"Dado que você jogou: {dado1}")
            print(f"Dado do monstro: {dado2}")
            print("-"*20)
            print("BOAAA!! acertou o dragão foi derrotado")    
        print("Deseja jogar novamente?")
        verif2 = str(input("S/N : "))
        if(verif == "n"):
            break
    else:
        break





