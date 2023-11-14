using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Model
{
    public class Error
    {
        public int Id { get; set; }
        public string ErrorTitle { get; set; }
        public string ErrorMessage { get; set; }
    }
}
