from secrets import choice


jogadorVitorias = 0
maquinaVitorias = 0


def jogadorOpc():
    jogador_esc = input("Escolha Pedra, Papel ou Tesoura: ")
    jogador_esc.lower()
    if (jogador_esc == "pedra"):
        return jogador_esc
    elif (jogador_esc == "papel"):
        return jogador_esc
    elif (jogador_esc == "tesoura"):
        return jogador_esc
    else:
        print("Opção invalida, try again")
        jogadorOpc()


def maquinaOpc():
    maquina_esc = choice(["pedra", "papel", "tesoura"])
    return maquina_esc


while True:
    print("-"*30)
    jogador_esc = jogadorOpc()
    maquina_esc = maquinaOpc()
    print("-"*30)

    if (jogador_esc == "pedra") and (maquina_esc == "tesoura")\
            or (jogador_esc == "papel") and (maquina_esc == "pedra")\
            or (jogador_esc == "tesoura") and (maquina_esc == "papel"):
        print(f"Jogador escolheu {jogador_esc} e a Máquina escolheu {maquina_esc}"
              " Resultado: Você Ganhou!")
        jogadorVitorias += 1
    elif (jogador_esc == maquina_esc):
        print(f"Jogador escolheu {jogador_esc} e a Máquina escolheu {maquina_esc}"
              " Resultado: Empate!")
    else:
        print(f"Jogador escolheu {jogador_esc} e a Máquina escolheu {maquina_esc}"
              " Resultado: Você Perdeu!")
        maquinaVitorias += 1

    print("-"*30)
    print(f"Vitórias do jogador:{jogadorVitorias}")
    print(f"Vitórias da maquina:{maquinaVitorias}")
    print("-"*30)

    jogador_esc = str(input("Você quer jogar de novo ? : "))
    if jogador_esc in ["sim", "SIM", "S", "s", "Y", "YES", "y"]:
        pass
    elif jogador_esc in ["não", "nao", "NÃO", "N", "n"]:
        break
    else:
        break
