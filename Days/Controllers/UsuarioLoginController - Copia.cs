using Days.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Days.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UnLoginController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<UsuarioLogin> Get(string x,string y)
        {
            using (var context = new AmaneContext())
            {
                return context.UsuarioLogins.Where(suar => suar.Email==x && suar.Contraseña==y).ToList();
            }


        }
    }
}
