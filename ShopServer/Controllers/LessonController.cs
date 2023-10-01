using Microsoft.AspNetCore.Mvc;

namespace ShopServer.Controllers
{
    public class LessonController : Controller
    {
        private static List<Lesson> Lessons = new List<Lesson>()
        {
            new Lesson()
            {
                Price = 100
            }
        };

        [HttpGet(Name = "GetLesson")]
        public List<Lesson> Get()
        {
            return Lessons;
        }

        [HttpGet]
        public IActionResult Update(Lesson model)
        {
            return Ok();
        }

        [HttpGet]
        public IActionResult Getting(int id)
        {
            return Ok();
        }
    }
}
