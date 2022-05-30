using System;

namespace InputDados{
    
    class Program{

        static void Main(string[] args) {
          
            string nome;
            int qtdQuartos;
            double precoProduto;
            string ultimoNome;
            int idade;
            double altura;
            
            //lendo os dados
            Console.WriteLine("Entre com seu nome completo:");
            nome = Console.ReadLine();
            Console.WriteLine("Quantos quartos tem na sua casa?");
            qtdQuartos =  int.Parse(Console.ReadLine());
            Console.WriteLine("Entre com preço de um produto:");
            precoProduto =  double.Parse(Console.ReadLine());   
            Console.WriteLine("Entre seu último nome, idade e altura (na mesma linha):");
            string[] v = Console.ReadLine().Split(' ');
            ultimoNome = v[0];
            idade = int.Parse(v[1]);
            altura = double.Parse(v[2]);
            Console.WriteLine("");
            Console.WriteLine("-----------");
            Console.WriteLine("");
            //imprimindo os dados
            Console.WriteLine(nome);
            Console.WriteLine(qtdQuartos); 
            Console.WriteLine(precoProduto.ToString("F2"));
            Console.WriteLine(ultimoNome);        
            Console.WriteLine(idade);
            Console.WriteLine(altura);
        }
    }
}