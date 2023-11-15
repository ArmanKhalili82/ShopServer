using Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
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

        public static List<Error> Errors = new List<Error>()
        {
            new Error()
            {
                Id = 1,
                ErrorTitle = "Invalid Age",
                ErrorMessage = "You Should Be Higher Than 18"
            },

            new Error()
            {
                Id = 2,
                ErrorTitle = "Invalid Name",
                ErrorMessage = "Name Can Not Be Empty"
            }
        };


        public void Create(Person model)
        {
            if (model.Age < 18)
            {
                throw new Exception("1");
            }

            if (string.IsNullOrEmpty(model.Name))
            {
                throw new Exception("2");
            }

            Random random = new Random();
            int Id = random.Next(PersonsInfo.Count);
            model.Id = Id;
            PersonsInfo.Add(model);
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
            if (model.Age < 18)
            {
                throw new Exception("1");
            }

            if (string.IsNullOrEmpty(model.Name))
            {
                throw new Exception("2");
            }

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
