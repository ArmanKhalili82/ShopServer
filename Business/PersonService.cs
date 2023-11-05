using Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class PersonService: IPersonService
    {
        private static List<Person> PersonsInfo = new List<Person>()
        {
            new Person()
            {
                Id = 1,
                Name = "Test",
                Family = "Project",
                Age = 25,
                Height = 180,
                Weight = 75
            },

            new Person()
            {
                Id= 2,
                Name = "Test2",
                Family = "Project2",
                Age = 20,
                Height = 170,
                Weight = 80
            }
        };

        public void Create(Person model)
        {
            if (model.Age > 18)
            {
                Random random = new Random();
                int Id = random.Next(PersonsInfo.Count);
                model.Id = Id;
                PersonsInfo.Add(model);
            }
            else if (model.Age < 18)
            {
                throw new Exception("Invalid Age You Should Be Higher Than 18");
            }

            else if (model.Age < 18 && model.Name == string.IsNullOrEmpty(model.Name))
            {
                throw new Exception("Invalid Age And Name");
            }
        }

        public void Delete(int id)
        {
            var data = PersonsInfo.Where(l => l.Id == id).First();
            PersonsInfo.Remove(data);
        }

        public List<Person> GetAll()
        {
            return PersonsInfo;
        }

        public Person GetById(int id)
        {
            var data = PersonsInfo.Where(l => l.Id == id).First();
            return data;
        }

        public void Update(Person model)
        {
            var data = PersonsInfo.Where(l => l.Id == model.Id).First();
            data.Id = model.Id;
            data.Name = model.Name;
            data.Family = model.Family;
            data.Age = model.Age;
            data.Weight = model.Weight;
            data.Height = model.Height;
        }

    }
}
