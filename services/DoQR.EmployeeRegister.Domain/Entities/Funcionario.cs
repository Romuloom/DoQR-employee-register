using System;

namespace DoQR.EmployeeRegister.Domain.Entities
{
    public class Funcionario
    {
        public Guid Id { get; set; } // Identificador único
        public string Nome { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public string Telefone { get; set; }
        public DateTime DataNascimento { get; set; }
        public TipoContratacao TipoContratacao { get; set; }
        public StatusFuncionario Status { get; set; }
    }

    public enum TipoContratacao
    {
        CLT,
        PJ
    }

    public enum StatusFuncionario
    {
        Ativo,
        Inativo
    }
}
