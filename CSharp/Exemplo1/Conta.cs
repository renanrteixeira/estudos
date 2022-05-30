namespace Exemplo1
{
    public class Conta
    {
        public int NumeroConta { get; private set; }
        public string TitularConta { get; set; }
        public double SaldoConta {get ; private set; }

        public Conta(int numeroConta, string titularConta){
          this.NumeroConta = numeroConta;
          this.TitularConta = titularConta;
        }

        public Conta(int numeroConta, string titularConta, double depositoInicial) : this(numeroConta, titularConta){
            DepositarSaldo(depositoInicial);
        }

        public double DepositarSaldo(double valor){
            return SaldoConta += valor;
        }

        public double DebitarSaldo(double valor){
            return SaldoConta -= (valor + 5.00);
        }

        public override string ToString()
        {
            return"Conta "+ NumeroConta + ", Titular: " + TitularConta + ", Saldo: $ " + SaldoConta.ToString("F2");
        }
    }
}