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

        [HttpGet("GetLesson")]
        public List<Lesson> Get()
        {
            return SubjectLessons;
        }

        [HttpGet("{id}")]
        public IActionResult Getting(int id)
        {
            SubjectLessons.Find(id);
        }

        [HttpPost("UpdateLesson")]
        public IActionResult Update(Lesson model)
        {
            SubjectLessons.Add(model);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            SubjectLessons.Remove(id);
        }
    }
}
