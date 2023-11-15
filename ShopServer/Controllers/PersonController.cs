using Microsoft.AspNetCore.Mvc;
using Business.Model;
using Business;
using System.Linq;

namespace ShopServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {

        private IPersonService _PersonService;
        public PersonController(IPersonService personService)
        {
            _PersonService = personService;
        }


        [HttpGet("GetAllPerson")]
        public IActionResult GetAll()
        {
            var data = _PersonService.GetAll();
            return Ok(data);
        }

        [HttpGet("GetByPersonId/{id}")]
        public IActionResult GetById(int id)
        {
            var data = _PersonService.GetById(id);
            return Ok(data);
        }

        [HttpPut("UpdatePerson")]
        public IActionResult Update([FromBody] Person model)
        {
            _PersonService.Update(model);
            return Ok();
        }

        [HttpPost("CreatePerson")]
        public IActionResult Create([FromBody] Person model)
        {
            try
            {
                _PersonService.Create(model);
                return Ok();
            }
            catch (Exception ex)
            {
                var errorid = Convert.ToInt32(ex.Message);
                var errorinfo = PersonService.Errors.Where(s => s.Id == errorid).First();
                return BadRequest(ex.Message.Where(errorinfo));
            }
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            _PersonService.Delete(id);
            return Ok();
        }
    }
}
