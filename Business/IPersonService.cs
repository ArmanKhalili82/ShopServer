using Business.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public interface IPersonService
    {
        List<Person> GetAll();
        Person GetById(int id);
        void Update(Person model);
        void Create(Person model);
        void Delete(int id);
    }
}
