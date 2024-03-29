using API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret(){
            return "Secred Text";
        }

        [HttpGet("not-found")]
        public ActionResult<string> getNotFound(){
            var thing = _context.Users.Find(-1);
            
            if(thing == null)    return NotFound();

            return "thing exists";
            
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError(){
            var thing = _context.Users.Find(-1);
            var thingToReturn = thing.ToString();
            return thingToReturn;
        }   

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest(){
            
            return BadRequest("Bad bad bo!!!");
        }


    }
}