using Microsoft.AspNetCore.Mvc;
using Business.Model;
using Business;

namespace ShopServer.Controllers
{
    public class PersonController : Controller
    {

        private IPersonService _PersonService;
        public PersonController(IPersonService personService)
        {
            _PersonService = personService;
        }


        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var data = _PersonService.GetAll();
            return Ok(data);
        }

        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var data = _PersonService.GetById(id);
            return Ok(data);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody] Person model)
        {
            _PersonService.Update(model);
            return Ok();
        }

        [HttpPost("Create")]
        public IActionResult Create([FromBody] Person model)
        {
            _PersonService.Create(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}")]
        public IActionResult Delete(int id)
        {
            _PersonService.Delete(id);
            return Ok();
        }
    }
}
