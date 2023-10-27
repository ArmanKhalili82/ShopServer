using Business;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ShopServer.Controllers
{

    public class LessonController : Controller
    {

        private ILessonService _LessonService;
        public LessonController(ILessonService lessonService)
        {
            _LessonService = lessonService;
        }


        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            _LessonService.GetAll();
            return Ok(SubjectLessons);
        }

        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var data = _LessonService.GetById(id);
            return Ok(data);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody]Lesson model)
        {
            _LessonService.Update(model);
            return Ok(data);
        }

        [HttpPost("Create")]
        public IActionResult Create([FromBody]Lesson model)
        {
            _LessonService.Create(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}/force")]
        public IActionResult Delete(int id)
        {
            var data = _LessonService.Delete(id);
            SubjectLessons.Remove(data);
            return Ok();
        }
    }
}
