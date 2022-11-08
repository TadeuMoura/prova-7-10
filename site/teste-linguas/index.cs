using System;

class Program {
  
  public static void Main (string[] args) {

     Console.WriteLine("Média Notas");
     
     Console.WriteLine("Informe a qtd de notas:");
     int qtd = int.Parse(Console.ReadLine());
     
     int[] notas = new int[qtd];
     
     Console.WriteLine("Informe cada uma das notas:");
     for (int i = 0; i < notas.Length; i++) {
         notas[i] = int.Parse(Console.ReadLine());
     }
     
     Console.WriteLine("Você digitou as notas:");
     for (int i = 0; i < notas.Length; i++) {
         Console.WriteLine(notas[i]);
     }

     double media = calcMedia(notas);
     Console.WriteLine("A média é: " + media);
    
  }


  public static double calcMedia(int[] notas) {
     double soma= 0;
     for (int i = 0; i < notas.Length; i++) {
         soma = soma + notas[i];
     }
     double media = soma / notas.Length;
     return media;
  }


  
}