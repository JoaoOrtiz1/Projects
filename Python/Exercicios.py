# Alguns exercicios de comandos de repetição, decisão, vetores e matrizes
# Todos os exercicios são de autoria do professor Patrick Pedreira.

# Uma empresa deseja que seja desenvolvido um sistema que faça a contabilização de votos 
# de uma eleição com 5 candidatos. O sistema deve permitir que o usuário entre com os 
# nomes dos candidatos, o número de votos que cada um recebeu. Também deverá ser 
# possível registrar o número de votos em branco e em nulo. A empresa deseja que seja 
# emitido um relatório referente às informações da eleição contendo o nome de cada 
# candidato bem como seu número de votos e o percentual que isso representa do total de 
# votos válidos (excluídos os brancos e os nulos). Também deve ser indicado qual foi o 
# percentual de votos brancos e nulos, separadamente, com relação ao total de votos dados. 
# Adicionalmente o sistema deverá informar qual foi o candidato mais votado (vencedor da 
# eleição) bem como o que teve menor número de votos e a média de votos para os 
# candidatos 

nome_candidatos = [""]*5
votos_candidatos = [0]*5
calculo = [0]*5
cc = 1
for i in range(0, 5):
    nome_candidatos[i] = str(input(f"Digite o nome do candidato {cc} : "))
    cc += 1
    votos_candidatos[i] = int(
        input(f"Digite os votos do candidato {nome_candidatos[i]} : "))
votos_b = int(input("Digite o numero de votos em branco : "))

for x in range(0, 5):
    calculo[x] = round((votos_candidatos[x]/sum(votos_candidatos))*100, 1)

for z in range(0, 5):
    print(f"O candidato {nome_candidatos[z]} obteve {calculo[z]}% dos votos ")

print(f"O numero do votos em branco foi {votos_b} votos")
print(f"Portanto o vencedor da eleição foi {nome_candidatos[calculo.index(max(calculo))]} obtendo {max(calculo)} % dos votos")

#Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média 
# final. Logo após escrever a mensagem "Calcular a média de outro aluno?" e solicitar 
# um resposta. Se a resposta for "1", o programa deve ser executado novamente, 
# caso contrário deve ser encerrado imprimindo a quantidade de alunos aprovados, reprovados e de exame.
n_aprovados = 0
n_exame = 0
n_reprovados = 0


def alunos():
    n_alunos = str(input("Digite o nome do aluno : "))
    n1 = int(input("Digite a nota da 1 prova : "))
    n2 = int(input("Digite a nota da 2 prova : "))
    n3 = (n2+n1)/2
    return n3


while(True):
    n3 = alunos()
    print(f"A média do aluno é {n3}")
    if(n3 < 5):
        n_reprovados += 1
    elif(5 <= n3 < 7):
        n_exame += 1
    elif(7 <= n3 <= 10):
        n_aprovados[0] += 1
    print(f"Alunos Aprovados = {n_aprovados}")
    print(f"Alunos de Exame = {n_exame}")
    print(f"Alunos Reprovados = {n_reprovados}")
    print("Calcular a média de outro aluno ?")
    verif = str(input("Digite 1 para SIM e 2 para NÃO : "))
    if(verif == "1"):
        pass
    else:
        break

#Faça um programa que receba a quantidade de peças vendidas por vendedor e armazene essas 
# quantidades em um vetor. Receba também o preço da peça vendida de cada vendedor e armazene 
# esses preços em outro vetor. Existem apenas dez vendedores e cada vendedor pode vender apenas 
# um tipo de peça, isto é, para cada vendedor existe apenas um preço. Calcule e mostre a quantidade 
# total de peças vendidas por todos os vendedores e para cada vendedor calcule e mostre o valor total 
# da venda, isto é, a quantidade de peças multiplicada pelo o preço da peça.
n_vendedores = [""]*10
n_peças_vendedor = [0]*10
n_preço = [0]*10
cv = 1
vvv = [0]*10

for i in range(0, 10):
    n_vendedores[i] = str(input(f"Digite o nome do vendedor {cv} : "))
    n_peças_vendedor[i] = int(
        input(f"Digite quantas peças o vendedor {n_vendedores[i]} vendeu : "))
    n_preço[i] = int(
        input(f"Digite o preço da peça vendida pelo vendedor {n_vendedores[i]} : "))
    cv += 1
    vvv[i] = n_peças_vendedor[i]*n_preço[i]

qtp = sum(n_peças_vendedor)
print(f"O total de peças vendidas foi {qtp}")
for x in range(0, 10):
    print(f"O vendedor {n_vendedores[x]} vendeu um total de {vvv[x]}R$")


# Ler uma matriz SOMA 4x4, calcular e escrever as seguintes somas:
# a) da linha 3
# b) da coluna 2
# c) de todos os elementos da matriz
linhas = 5
colunas = 5
cont_v = 1
soma_a = 0
soma_b = 0
soma_c = 0 

a = [[0 for _ in range(colunas)] for _ in range(linhas)]
for i in range(0,linhas):
    for j in range(0,colunas):
        a[i][j] = int(input(f"Digite o valor {cont_v}: "))
        cont_v += 1
        soma_c += a[i][j] 
    soma_b += a[i][2]

for j in range(0,linhas):       
    soma_a += a[3][j]

print(f"Soma da linha 3 = {soma_a} ")
print(f"Soma da coluna 2 = {soma_b} ")
print(f"Soma total {soma_c} ")