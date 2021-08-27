namespace API.errors
{
    public class ApiException
    {
        public ApiException(int ststusCode, string message = null, string details= null)
        {
            StstusCode = ststusCode;
            Message = message;
            Details = details;
        }

        public int StstusCode { get; set; }
        public string Message { get; set; }   
        public string Details { get; set; }
    }
}