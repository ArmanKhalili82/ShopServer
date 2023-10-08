using Microsoft.AspNetCore.Mvc;

namespace ShopServer.Controllers
{

    public class LessonController : Controller
    {
        private static List<Lesson> SubjectLessons = new List<Lesson>()
        {
            new Lesson()
            {
                Price = 100
            },

            new Lesson()
            {
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
            var a = SubjectLessons.Where(l => l.Id == id).First();
            return Ok(a);
        }

        [HttpPut("Update")]
        public IActionResult Update(Lesson model)
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
        public IActionResult Create(Lesson model)
        {
            SubjectLessons.Add(model);
            return Ok();
        }

        [HttpDelete("Delete/{id}/force")]
        public IActionResult Delete(int id)
        {
            var a = SubjectLessons.Where(l => l.Id == id).First();
            SubjectLessons.Remove(a);
            return Ok();
        }
    }
}
