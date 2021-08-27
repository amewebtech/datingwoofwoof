using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "Username or UserName is required")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Please enter a password for the love of GOD")]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}