using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Business.Model;

namespace Business
{
    public interface ILessonService
    {
        void Create(Lesson Model);
        void Update(Lesson Model);
        Lesson GetById(int id);
        List<Lesson> GetAll();
        void Delete(int id);
    }
}
