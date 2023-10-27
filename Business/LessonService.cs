using Business.Model;
using System.Reflection;

namespace Business
{
    public class LessonService : ILessonService
    {

        private static List<Lesson> SubjectLessons = new List<Lesson>()
        {
            new Lesson()
            {
                Id = 1,
                Name = "Jack",
                Price = 100,
                Role = "Admin",
                Gender = true,
                Level = "Normal"
            },

            new Lesson()
            {
                Id = 2,
                Name = "Jason",
                Price = 200,
                Role = "User",
                Gender = true,
                Level = "Advanced"
            }
        };
        public void Create(Lesson model)
        {
            Random random = new Random();
            int id = random.Next(100, 1000);
            model.Id = id;
            SubjectLessons.Add(model);
        }

        public void Update(Lesson model)
        {
            var data = SubjectLessons.Where(l => l.Id == model.Id).FirstOrDefault();

            data.Price = model.Price;
            data.Id = model.Id;
            data.Name = model.Name;
            data.Teacher = model.Teacher;
            data.TimeRange = model.TimeRange;
            data.Gender = model.Gender;
            data.Role = model.Role;
            data.Level = model.Level;
        }

        public Lesson GetById(int id)
        {
            var data = SubjectLessons.Where(l => l.Id == id).FirstOrDefault();
            return data;
        } 

        public List<Lesson> GetAll()
        {
            return Lesson;
        }

        public void Delete(int id)
        {
            var data = SubjectLessons.Where(l => l.Id == id).FirstOrDefault();
            SubjectLessons.Remove(data);
        }

    }
}