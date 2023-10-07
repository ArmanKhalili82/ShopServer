﻿using Microsoft.AspNetCore.Mvc;

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
            var result = (from n in SubjectLessons
                          where n.Id == id select n).First();
            return Ok(result);
            //var a = SubjectLessons.Where(l => l.Id == id).First();
            //return Ok();
        }

        [HttpPost("UpdateLesson")]
        public IActionResult Update(Lesson model)
        {
            SubjectLessons.Add(model);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result1 = (from n in SubjectLessons
                          where n.Id == id
                          select n).First();
            SubjectLessons.Remove(result1);
            return Ok();
            //var a = SubjectLessons.Where(l => l.Id == id).First();
            //SubjectLessons.Remove(a);
            //return Ok();
        }
    }
}
