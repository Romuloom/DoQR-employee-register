using DoQR.EmployeeRegister.Domain.Entities;
using DoQR.EmployeeRegister.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DoQR.EmployeeRegister.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FuncionariosController : ControllerBase
    {
        private readonly IFuncionarioRepository _repository;

        public FuncionariosController(IFuncionarioRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> CriarFuncionario([FromBody] Funcionario funcionario)
        {
            var novoFuncionario = await _repository.AdicionarAsync(funcionario);
            return CreatedAtAction(nameof(ObterFuncionarioPorId), new { id = novoFuncionario.Id }, novoFuncionario);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> AtualizarFuncionario(Guid id, [FromBody] Funcionario funcionario)
        {
            if (id != funcionario.Id)
            {
                return BadRequest("O ID do funcionário não corresponde ao ID na URL.");
            }

            var funcionarioAtualizado = await _repository.AtualizarAsync(funcionario);
            return Ok(funcionarioAtualizado);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeletarFuncionario(Guid id)
        {
            var deletado = await _repository.DeletarAsync(id);
            if (!deletado)
            {
                return NotFound("Funcionário não encontrado.");
            }
            return NoContent();
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> ObterFuncionarioPorId(Guid id)
        {
            var funcionario = await _repository.ObterPorIdAsync(id);
            if (funcionario == null)
            {
                return NotFound("Funcionário não encontrado.");
            }
            return Ok(funcionario);
        }

        [HttpGet]
        public async Task<IActionResult> ObterFuncionarios([FromQuery] string? nome = null)
        {
            var funcionarios = string.IsNullOrEmpty(nome)
                ? await _repository.ObterTodosAsync()
                : await _repository.ObterPorNomeAsync(nome);

            return Ok(funcionarios);
        }
    }
}
