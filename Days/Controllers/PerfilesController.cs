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
    public class PerfilesController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Perfil> Get()
        {
            using (var context = new AmaneContext())
            {
                return context.Perfils.ToList();
            }


        }

        
    }
}
