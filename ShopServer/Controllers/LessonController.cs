using Business;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ShopServer.Controllers
{

    public class LessonController : Controller
    {
        

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            private ILessonService _LessonService;
            public LessonController(ILessonService lessonService)
        {
            _LessonService = lessonService;
        }
            return Ok(SubjectLessons);
        }

        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var data = SubjectLessons.Where(l => l.Id == id).FirstOrDefault();
            return Ok(data);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody]Lesson model)
        {
            

            return Ok(data);
        }

        [HttpPost("Create")]
        public IActionResult Create([FromBody]Lesson model)
        {
            
            return Ok();
        }

        [HttpDelete("Delete/{id}/force")]
        public IActionResult Delete(int id)
        {
            var data = SubjectLessons.Where(l => l.Id == id).FirstOrDefault();
            SubjectLessons.Remove(data);
            return Ok();
        }
    }
}
