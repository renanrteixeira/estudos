# tipos primitivos = int float bool str
#n1 = int(input('Digite o primeiro número: '))
#n2 = int(input('Digite o segundo número: '))
a = input('Digite algo: ')
#print(f'A soma entre {n1} e {n2} vale: {n1+n2}')
print('Tipo: {}'.format(type(a))) #tipo
print('É só alfa:? {}'.format(a.isalpha())) #se é alfa
print('Só tem espaço? {}'.format(a.isspace())) #se tem espaço
print('É só numérico? {}'.format(a.isnumeric())) #se é numérico
print('É alfanumérico? {}'.format(a.isalnum())) #se é alfa
print('Está capitalizado? {}'.format(a.istitle())) #se está capitalizada