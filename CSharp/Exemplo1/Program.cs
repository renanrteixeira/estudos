using System;

namespace Exemplo1
{
    class Program
    {
        static void Main(string[] args){
            
            Console.Write("Entre o número da conta: ");
            int numeroConta = int.Parse(Console.ReadLine());
            Console.Write("Entre o titular da conta: ");
            string titular = Console.ReadLine();
            Console.Write("Haverá deposito inicial (s/n)? ");
            char depositoInicial = char.Parse(Console.ReadLine());

            Conta conta;

            if (depositoInicial.Equals("S") || depositoInicial.Equals("s") ) {
                Console.Write("Entre um valor para depósito: ");
                double valorInicial = double.Parse(Console.ReadLine());
                conta = new Conta(numeroConta, titular, valorInicial);
            } else {
                conta = new Conta(numeroConta, titular);
            }
            
            Console.WriteLine();
            Console.WriteLine("Dados da conta: ");
            Console.WriteLine(conta.ToString());

            Console.WriteLine();
            Console.Write("Entre um valor para depósito: ");
            double deposito = double.Parse(Console.ReadLine());
            conta.DepositarSaldo(deposito);
            Console.WriteLine("Dados atualizados da conta: ");
            Console.WriteLine(conta.ToString());

            Console.WriteLine();
            Console.Write("Entre um valor para saque: ");
            double saque = double.Parse(Console.ReadLine());
            conta.DebitarSaldo(saque);
            Console.WriteLine("Dados atualizados da conta: ");
            Console.WriteLine(conta.ToString());

        }
    }
}