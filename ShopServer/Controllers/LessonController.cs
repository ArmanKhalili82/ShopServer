using Microsoft.AspNetCore.Mvc;
using System;

namespace ShopServer.Controllers
{

    public class LessonController : Controller
    {
        private static List<Lesson> SubjectLessons = new List<Lesson>()
        {
            new Lesson()
            {
                Id = 1,
                Name = "Jack",
                Price = 100
            },

            new Lesson()
            {
                Id = 2,
                Name = "Jason",
                Price = 200
            }
        };

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            return Ok(SubjectLessons);
        }

        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var data = SubjectLessons.Where(l => l.Id == id).First();
            return Ok(data);
        }

        [HttpPut("Update")]
        public IActionResult Update([FromBody]Lesson model)
        {
            var data = SubjectLessons.Where(l => l.Id == model.Id).First();

            data.Price = model.Price;
            data.Id = model.Id;
            data.Name = model.Name;
            data.Teacher = model.Teacher;
            data.TimeRange = model.TimeRange;

            return Ok(data);
        }

        [HttpPost("Create")]
        public IActionResult Create([FromBody]Lesson model)
        {
            Random random = new Random();
            int id = random.Next(100, 1000);
            model.Id = id;
            SubjectLessons.Add(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}/force")]
        public IActionResult Delete(int id)
        {
            var data = SubjectLessons.Where(l => l.Id == id).First();
            SubjectLessons.Remove(data);
            return Ok();
        }
    }
}
