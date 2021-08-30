using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsynch();
        Task<IEnumerable<AppUser>> GetUsersAsync();
        Task<AppUser> GetUserByIDAsynch(int Id);
        Task<AppUser> GetUserByUsernameAsync(string Username);
        Task<IEnumerable<MemberDto>> GetMembersAsync();
        
        Task<MemberDto> GetMemberAsync(string Username);
    }
} 