﻿using Days.Models;
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
    public class PerfilController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Perfil> Get(int x)
        {
            using (var context = new AmaneContext())
            {
                return context.Perfils.Where(perf => perf.UsuarioId==x).ToList();
            }


        }




    }
}
